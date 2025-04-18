import { useNavigate } from "react-router-dom";
import { usePostAuthLogout } from "@/api/post/usePostAuthLogout";

export function useLogout() {
  const navigate = useNavigate();
  const { mutate } = usePostAuthLogout();

  const logout = () => {
    mutate(undefined, {
      onSuccess: () => {
        localStorage.clear();
        navigate("/login");
      },
      onError: () => {
        alert("서버 에러");
      },
    });
  };

  return logout;
}
