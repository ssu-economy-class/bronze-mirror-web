import { getJsonParser } from "@/api/json-parser";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { clientAuth } from "@/api/client";
import { formatDateCardTime } from "@/utils/date";

const contentSchema = z.object({
  id: z.number(),
  url: z.string(),
  profileImage: z.string(),
  nickname: z.string(),
  date: z.string().transform((dateString) => formatDateCardTime(dateString)),
});

export type ContentType = z.infer<typeof contentSchema>;

// ✅ 응답 스키마
const getImageRespSchema = z.object({
  content: z.array(contentSchema),
  page: z.number(),
  size: z.number(),
  totalElements: z.number(),
  totalPages: z.number(),
  last: z.boolean(),
});

type GetImageResp = z.infer<typeof getImageRespSchema>;

// ✅ hook 정의
export const useGetImage = (page: number) => {
  return useQuery({
    queryKey: ["get-image", page],
    queryFn: () =>
      getJsonParser<GetImageResp>({
        client: clientAuth,
        url: `/image/all-paged?page=${page}&size=9`,
        method: "GET",
        schema: getImageRespSchema,
      }),
  });
};
