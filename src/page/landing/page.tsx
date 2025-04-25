import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-gray-900">
      <header className="px-6 md:px-12 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">청동거울</h1>
      </header>

      <section className="text-center px-6 md:px-24 pt-16 pb-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          생성형 AI로 개성있는 캐릭터를 생성해봐요
          <br /> 액티브한 미디어 아트 체험
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          거울은 단순한 반영의 도구가 아닙니다. 그것은 우리를 비추는 동시에
          새로운 시각을 제시합니다. 본 작품은 다양한 과정을 통해 체험자가 자신의
          모습을 새롭게 경험할 수 있도록 합니다.
        </motion.p>
      </section>

      <Separator className="my-12 mx-auto w-11/12" />

      <section className="px-6 md:px-24 py-10 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">작품 미리보기</h2>
        <p className="text-gray-600 mb-8">
          스마트폰에서 직접 녹화한 실제 체험 영상입니다.
        </p>
        <div className="w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg">
          <video
            src="/assets/video/landing_video.mp4"
            controls
            playsInline
            className="w-full h-auto"
          />
        </div>
      </section>

      <section className="px-6 md:px-24 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "생성형 AI",
            desc: "자신이 그린 그림을 생성형 AI를 통해 개성있게 만들 수 있습니다.",
          },
          {
            title: "친구와 공유",
            desc: "생성된 캐릭터들을 친구들과 공유할 수 있습니다.",
          },
          {
            title: "3D 인터렉티브 아트",
            desc: "생성된 캐릭터들을 3D 맵에 띄워 인터렉티브한 아트를 즐길 수 있습니다.",
          },
        ].map(({ title, desc }, i) => (
          <motion.div
            key={i}
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>
      <section className="px-6 md:px-24 py-16 bg-white text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">이코노미 클래스</h2>
        <div className="space-y-2">
          <div>
            <span className="font-semibold">박가을</span>{" "}
            <span className="text-gray-500">[Design]</span>
          </div>
          <div>
            <span className="font-semibold">문세종</span>{" "}
            <span className="text-gray-500">[Front-End]</span>
          </div>
          <div>
            <span className="font-semibold">한석휘</span>{" "}
            <span className="text-gray-500">[Back-End]</span>
          </div>
          <div className="pt-4">
            <span className="font-semibold">작품 페이지</span>:{" "}
            <a
              href="https://github.com/ssu-economy-class"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/ssu-economy-class
            </a>
          </div>
        </div>
      </section>
      <footer className="text-center text-sm text-gray-500 py-10">
        © 2025 Bronze-Mirror. All rights reserved.
      </footer>
    </div>
  );
}
