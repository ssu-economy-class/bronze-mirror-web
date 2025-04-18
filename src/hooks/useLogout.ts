import { usePostAuthLogout } from "@/api/post/usePostAuthLogout";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const { mutate } = usePostAuthLogout();
  const queryClient = useQueryClient();

  const logout = () => {
    mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["get-user-me"] });
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
