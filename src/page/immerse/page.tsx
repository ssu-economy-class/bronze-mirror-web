import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useImmerseHook } from "@/page/immerse/useImmerseHook";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ImmersePage() {
  const {
    imagePreviewUrl,
    prompt,
    setPrompt,
    isPending,
    handleSubmit,
    dropzoneProps: { getRootProps, getInputProps, isDragActive },
  } = useImmerseHook();

  const isMobile = useIsMobile();

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            AI 이미지 생성
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>이미지 업로드</Label>
            <div
              {...getRootProps()}
              className="border-dashed border-2 border-gray-300 p-6 rounded-lg text-center cursor-pointer hover:border-blue-400 transition"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-gray-500">이미지를 여기에 드롭하세요.</p>
              ) : imagePreviewUrl ? (
                <img
                  src={imagePreviewUrl}
                  alt="Preview"
                  className="max-h-60 max-w-full mx-auto rounded object-contain"
                />
              ) : (
                <p className="text-gray-500">
                  {isMobile
                    ? "갤러리에서 사진을 업로드해주세요."
                    : "여기를 클릭하거나 이미지를 드래그해서 업로드하세요"}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="prompt">프롬프트</Label>
            <Input
              id="prompt"
              type="text"
              placeholder="예: 'a woman holding a sword'"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          <Button
            className="w-full mt-4"
            onClick={handleSubmit}
            disabled={isPending}
          >
            {isPending ? (
              <span className="flex items-center gap-2 justify-center">
                <Loader2 className="animate-spin w-4 h-4" />
                이미지 생성 중...
              </span>
            ) : (
              "이미지 생성"
            )}
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
