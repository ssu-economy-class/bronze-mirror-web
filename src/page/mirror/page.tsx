import { useSearchParams } from "react-router-dom";

export default function MirrorPage() {
  const [searchParams] = useSearchParams();
  const savedImageUrl = searchParams.get("savedImageUrl");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
      <h1 className="text-2xl font-bold mb-4">생성된 이미지</h1>
      {savedImageUrl ? (
        <img
          src={savedImageUrl}
          alt="Generated"
          className="rounded shadow-md max-w-full"
        />
      ) : (
        <p>이미지가 없습니다.</p>
      )}
    </main>
  );
}
