import { getJsonParser } from "@/api/json-parser";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { clientAuth } from "@/api/client";

// ✅ 응답 스키마
const postFileUploadRespSchema = z.array(z.string());
type PostFileUploadResp = z.infer<typeof postFileUploadRespSchema>;

export const usePostFileUpload = () => {
  return useMutation({
    mutationFn: (file: File) => {
      const formData = new FormData();
      formData.append("file", file);

      return getJsonParser<PostFileUploadResp, FormData>({
        client: clientAuth,
        url: "/file/upload",
        method: "POST",
        schema: postFileUploadRespSchema,
        requestBody: formData,
        config: {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      });
    },
  });
};
