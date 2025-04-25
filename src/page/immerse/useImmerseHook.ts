import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { usePostFileUpload } from "@/api/post/usePostFileUpload";
import { usePostPredict } from "@/api/post/usePostPredict";

export const useImmerseHook = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const { mutate: predict, isPending } = usePostPredict();
  const { mutateAsync: uploadFile } = usePostFileUpload();
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImageFile(file);
    setImagePreviewUrl(URL.createObjectURL(file));
  }, []);

  const dropzoneProps = useDropzone({
    accept: { "image/*": [] },
    maxFiles: 1,
    onDrop,
  });

  const handleSubmit = async () => {
    if (!imageFile || !prompt) {
      alert("이미지와 프롬프트를 모두 입력해주세요!");
      return;
    }

    try {
      const savedImageUrls = await uploadFile(imageFile);
      const imageUrl = savedImageUrls[0];

      predict(
        { imageUrl, prompt },
        {
          onSuccess: (data) => {
            navigate(
              `/mirror?savedImageUrl=${encodeURIComponent(data.savedImageUrl)}`
            );
          },
          onError: (err) => {
            alert("이미지 생성 실패");
            console.error(err);
          },
        }
      );
    } catch (err) {
      alert("이미지 업로드 실패");
      console.error(err);
    }
  };

  return {
    imagePreviewUrl,
    prompt,
    setPrompt,
    isPending,
    handleSubmit,
    dropzoneProps,
  };
};
