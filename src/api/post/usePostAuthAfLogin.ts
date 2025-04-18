import { getJsonParser } from "@/api/json-parser";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { client } from "@/api/client";

// 요청 스키마
const kakaoLoginRequestSchema = z.object({
  kakaoId: z.number(),
});
type KakaoLoginRequest = z.infer<typeof kakaoLoginRequestSchema>;

// 응답 스키마
const kakaoLoginResponseSchema = z.object({
  accessToken: z.string(),
});
type KakaoLoginResponse = z.infer<typeof kakaoLoginResponseSchema>;

export const useKakaoLogin = () => {
  return useMutation({
    mutationFn: (request: KakaoLoginRequest) => {
      const parsed = kakaoLoginRequestSchema.parse(request);
      return getJsonParser<KakaoLoginResponse, KakaoLoginRequest>({
        client,
        url: "/auth/af/login",
        method: "POST",
        schema: kakaoLoginResponseSchema,
        requestBody: parsed,
      });
    },
  });
};
