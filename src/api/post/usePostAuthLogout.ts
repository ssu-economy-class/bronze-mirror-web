import { getJsonParser } from "@/api/json-parser";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { clientAuth } from "@/api/client";

// 응답 스키마
const postAuthLogoutSchema = z.null();
type PostAuthLogoutResp = z.infer<typeof postAuthLogoutSchema>;

export const usePostAuthLogout = () => {
  return useMutation({
    mutationFn: () => {
      return getJsonParser<PostAuthLogoutResp>({
        client: clientAuth,
        url: "/auth/logout",
        method: "POST",
        schema: postAuthLogoutSchema,
      });
    },
  });
};
