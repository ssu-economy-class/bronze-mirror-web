import { getJsonParser } from "@/api/json-parser";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { clientAuth } from "./../client";

// 유저 정보를 받아오는 API 요청 스키마, 훅입니다.

// 응답 스키마
const getUserMeSchema = z.object({
  id: z.number(),
  kakaoId: z.string(),
  profileImage: z.string(),
  name: z.string(),
  nickname: z.string(),
  birthdate: z.string(),
  isFirst: z.boolean(),
});
export type GetUserMeResp = z.infer<typeof getUserMeSchema>;

export const useGetUserMe = () => {
  const accessToken = localStorage.getItem("accessToken");
  return useQuery({
    queryKey: ["get-user-me"],
    queryFn: () => {
      return getJsonParser<GetUserMeResp>({
        client: clientAuth,
        url: "/user/me",
        method: "GET",
        schema: getUserMeSchema,
      });
    },
    enabled: !!accessToken,
  });
};
