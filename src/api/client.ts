import axios, {
  InternalAxiosRequestConfig,
  AxiosInstance,
  AxiosError,
} from "axios";

// ✅ 내부적으로 사용할 커스텀 config 타입 정의
export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  requireAuth?: boolean;
}

// ✅ 일반 요청용 클라이언트
export const client: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ 인증 전용 요청용 클라이언트
export const clientAuth: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ 토큰 유효성 검사 함수
export const validateAccessToken = async (token: string): Promise<boolean> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/auth/validate`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.status === 200;
  } catch {
    return false;
  }
};

// ✅ 인증 클라이언트 전용 request interceptor
clientAuth.interceptors.request.use(
  async (config: CustomAxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      const isValid = await validateAccessToken(token);
      if (isValid) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        localStorage.clear();
        window.location.href = "/login";
        throw new axios.Cancel("Invalid accessToken");
      }
    } else {
      window.location.href = "/login";
      throw new axios.Cancel("No accessToken");
    }

    return config;
  },
  (error) => Promise.reject(error)
);

type ErrorResponse = {
  code: string;
};
// ✅ 공통 response interceptor (client + clientAuth 모두에게 적용 가능)
const responseErrorInterceptor = (error: AxiosError<ErrorResponse>) => {
  if (
    error.response?.data?.code === "TOKEN_003" ||
    error.message === "Invalid accessToken" ||
    error.message === "No accessToken"
  ) {
    localStorage.clear();
    window.location.href = "/login";
  }

  return Promise.reject(error);
};

client.interceptors.response.use((res) => res, responseErrorInterceptor);
clientAuth.interceptors.response.use((res) => res, responseErrorInterceptor);
