import { kakaoLogin } from "@/api/kakao/kakaoLogin";
import { useKakaoLogin } from "@/api/post/usePostAuthAfLogin";
import Kakao from "@/components/icon/kakao";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { initKakao } from "@/utils/kakao";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 카카오로그인 버튼입니다.
export const KakaoLoginButton = () => {
  // 카카오 sdk 초기화
  useEffect(() => {
    initKakao();
  }, []);

  // 카카오로그인훅 불러오기
  const { mutate, isPending } = useKakaoLogin();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { kakaoId } = await kakaoLogin();
      mutate(
        {
          kakaoId,
        },
        {
          onSuccess: ({ accessToken }) => {
            localStorage.setItem("accessToken", accessToken);
            navigate("/");
          },
          onError: () => {
            alert("서버 에러");
          },
        }
      );
    } catch (err) {
      alert("카카오 로그인 실패");
    }
  };

  return (
    <Button
      variant={"default"}
      className={cn(
        "bg-amber-300 text-[#181600] h-12 w-48 rounded-sm flex flex-row items-center justify-center hover:bg-amber-200"
      )}
      onClick={handleLogin}
    >
      {isPending ? <Loader2 className="animate-spin" /> : <Kakao />}
      Login with Kakao
    </Button>
  );
};
