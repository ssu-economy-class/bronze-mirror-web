import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-gray-900">
      <header className="px-6 md:px-12 py-6 flex flex-col justify-between items-start">
        <p>나를 바라보는 새로운 시선</p>
        <h1 className="text-2xl font-bold">청동거울</h1>
      </header>

      <motion.section
        className="text-center px-6 md:px-24 pt-16 pb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2 className="text-4xl md:text-6xl font-bold mb-6">
          Service Concept.
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-gray-600 mb-2">
          ‘거울’은 단순한 반영의 도구가 아닙니다. 그것은 우리를 비추는 동시에
          새로운 시각을 제시합니다. 본 작품은 다양한 과정을 통해 체험자가 자신의
          모습을 새롭게 경험할 수 있도록 합니다.
        </motion.p>
        <div className="h-16" />
        <motion.p className="text-lg md:text-xl text-gray-600 mb-2">
          청동거울은 자기 인식과 표현에 대한 새로운 질문이자, 나를 다시 그려보는
          또 하나의 방식입니다. 이 경험을 통해 나를 바라보는 새로운 시선을
          얻어보세요.
        </motion.p>
      </motion.section>

      <Separator className="my-12 mx-auto w-11/12" />
      <motion.section
        className="bg-white text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src="/assets/image/background1.webp" />
        {/* 가로 스크롤 앱 화면 미리보기 */}
        <div className="flex space-x-4 w-auto scroll-auto px-24 py-10 overflow-x-auto">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <img
              key={n}
              src={`/assets/screen/screen${n}.webp`}
              alt={`앱 화면 ${n}`}
              className="w-52 h-auto rounded-xl shadow-md transition-transform hover:scale-105"
            />
          ))}
        </div>
      </motion.section>
      <motion.section
        className="px-6 md:px-24 py-10 bg-white text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Preview.</h2>
        <p className="text-gray-600 mb-8">
          체험을 통해 그린 이미지를 AI로 변환된 다양한 스타일의 캐릭터
        </p>
        <div className="w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg">
          <video
            src="/assets/video/landing_video.mp4"
            controls
            playsInline
            className="w-full h-auto"
          />
        </div>
      </motion.section>

      <motion.section
        className="px-6 md:px-24 py-10 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
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
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        className="px-6 md:px-24 py-16 bg-white text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
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
      </motion.section>

      <footer className="text-center text-sm text-gray-500 py-10">
        © 2025 Bronze-Mirror. All rights reserved.
      </footer>
    </div>
  );
}
