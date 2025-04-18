import { AxiosInstance, AxiosRequestConfig } from "axios";
import { ZodSchema } from "zod";

/// REST API 응답값을 직렬화하기 위한 함수입니다.

type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

interface GetJsonParserProps<T, U = unknown> {
  client: AxiosInstance;
  url: string;
  method?: HttpMethod;
  schema: ZodSchema<T>;
  requestBody?: U;
  config?: AxiosRequestConfig;
}

export const getJsonParser = async <T, U = unknown>({
  client,
  url,
  method = "GET",
  schema,
  requestBody,
  config,
}: GetJsonParserProps<T, U>): Promise<T> => {
  let response;

  switch (method) {
    case "GET":
      response = await client.get(url, config);
      break;
    case "POST":
      response = await client.post(url, requestBody, config);
      break;
    case "PATCH":
      response = await client.patch(url, requestBody, config);
      break;
    case "DELETE":
      response = await client.delete(url, config);
      break;
    default:
      throw new Error(`Unsupported method: ${method}`);
  }

  return schema.parse(response.data.data);
};
