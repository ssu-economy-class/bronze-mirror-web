import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function FooterSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${window.location.origin}/landing/bronze-mirror.apk`;
    link.download = "bronze-mirror.apk";
    link.click();
  };
  return (
    <footer className="relative w-full max-md:py-4 py-12 text-black text-sm leading-relaxed space-y-6">
      <div className="px-6 ">
        <p className="text-4xl max-md:text-2xl font-bold inline-block mr-2">
          청동거울
        </p>
        <span className="text-4xl max-md:text-2xl font-normal">
          Bronze mirror
        </span>
        <div className="mt-1 max-md:text-[1rem] text-[1.4rem]">
          Android Application
        </div>
      </div>
      <p className="text-xl max-md:text-sm px-6 ">
        사용자의 얼굴 사진을 기반으로 그림을 그리고, 이를 AI의 도움으로 더 나은
        캐릭터로 재창조하고 공유하는 앱을 제작했습니다. 생성된 캐릭터는
        빔프로젝터를 통해 실시간으로 전시 공간 한켠에 띄워 인터랙티브한 감상
        경험을 제공합니다.
      </p>
      <div className="w-full h-[0.05rem] bg-black" />
      <div className="px-6 space-y-1 text-xl flex flex-col max-md:text-sm">
        <div>
          <span className="font-bold">박가을</span>{" "}
          <span className="ml-2">Park Gaeul </span>{" "}
          <span className="ml-2">디자인, 팀장</span>
        </div>
        <div>
          <span className="font-bold">문세종</span>{" "}
          <span className="ml-2">Moon Sejong</span>{" "}
          <span className="ml-2">프론트엔드 개발, 기획</span>
        </div>
        <div>
          <span className="font-bold">한석휘</span>{" "}
          <span className="ml-2">Han Seokhwi</span>{" "}
          <span className="ml-2">백엔드 개발, AI</span>
        </div>
      </div>

      {/* 지도교수 */}
      <div className="px-6 font-bold text-xl max-md:text-sm">
        지도교수 고일주
      </div>

      <div className="px-6 flex flex-col items-start">
        <p>일시 : 25.05.23-25, 10:00~17:00</p>
        <div>
          <span>장소 : </span>
          <a
            className="text-md max-md:text-sm underline"
            href="https://naver.me/FeXRTU5Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            인사동길 35-6, 마루아트센터 특별관(B1)
          </a>
        </div>
        <a
          className="text-md max-md:text-sm underline"
          href="https://afterglow2025.github.io/afterglow2025/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Afterglow 바로가기
        </a>
      </div>
      <div className="absolute bottom-8 right-3 flex max-md:gap-2 gap-4">
        <Button
          onClick={() => {
            window.open("https://github.com/ssu-economy-class");
          }}
          className="flex cursor-pointer items-center size-12 rounded-sm max-md:size-8 bg-black p-3 hover:bg-gray-800 transition"
        >
          <Github className="size-6 max-md:size-4.5" />
        </Button>

        <img
          onClick={handleDownload}
          src="/landing/app-icon.webp"
          className="cursor-pointer max-md:size-8 size-12 rounded-sm text-white"
        />
      </div>
    </footer>
  );
}
