import { getJsonParser } from "@/api/json-parser";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { clientAuth } from "@/api/client";

// 요청 스키마
const postPredictReqSchema = z.object({
  imageUrl: z.string(),
  prompt: z.string(),
});
type PostPredictRequest = z.infer<typeof postPredictReqSchema>;

// 응답 스키마
const postPredictRespSchema = z.object({
  savedImageUrl: z.string(),
});
type PostPredictResp = z.infer<typeof postPredictRespSchema>;

export const usePostPredict = () => {
  return useMutation({
    mutationFn: (request: PostPredictRequest) => {
      const parsed = postPredictReqSchema.parse(request);
      return getJsonParser<PostPredictResp, PostPredictRequest>({
        client: clientAuth,
        url: "/predict",
        method: "POST",
        schema: postPredictRespSchema,
        requestBody: parsed,
      });
    },
  });
};
