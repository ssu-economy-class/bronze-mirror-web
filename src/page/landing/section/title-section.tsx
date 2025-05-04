import { motion } from "framer-motion";

export default function TitleSection() {
  const title = "청동거울";

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: {}, visible: {} }}
      className="relative h-screen max-md:h-1/3 w-screen aspect-video bg-gradient-to-b from-[#03433A] to-[#021B17] overflow-hidden"
    >
      {/* 블러 효과 원 */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 0.4, scale: 1 },
        }}
        transition={{ duration: 1.5 }}
        className="max-md:size-28 max-md:left-12 absolute top-1/2 left-48 size-80 rounded-full bg-[#5FA48F] blur-[40px] -translate-y-1/2 z-0"
      />
      {/* 보조 원들 (PC 전용) */}
      <div className="max-md:hidden">
        {[
          {
            className: "bottom-[-5rem] left-[-5rem] size-40 blur-[3px]",
            delay: 0.3,
          },
          { className: "top-10 left-[42%] size-36 blur-[1px]", delay: 0.4 },
          {
            className: "top-12 right-[-5rem] size-60 blur-[3.5px]",
            delay: 0.5,
          },
          { className: "bottom-10 right-[26%] size-32 blur-[2px]", delay: 0.6 },
        ].map((item, idx) => (
          <motion.img
            key={idx}
            src="/landing/bronze-mirror.webp"
            alt={`보조 원 ${idx + 1}`}
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: -15 },
              visible: { opacity: 1, scale: 1, rotate: 0 },
            }}
            transition={{ duration: 1.2, delay: item.delay }}
            className={`absolute z-0 ${item.className}`}
          />
        ))}
      </div>
      {/* 중앙 메인 이미지 */}
      <motion.img
        src="/landing/bronze-mirror.webp"
        alt="청동거울 로고"
        variants={{
          hidden: { opacity: 0, rotate: -30 },
          visible: { opacity: 1, rotate: 0 },
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-md:size-28 max-md:left-12 absolute top-1/2 left-48 transform -translate-y-1/2 w-80 h-auto z-10"
      />
      {/* 텍스트 */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 right-1/6 transform -translate-y-1/2 flex flex-col items-start z-10"
      >
        <div className="max-md:text-sm text-3xl text-[#BEE0D3] mb-4 max-md:mb-1 flex flex-col items-start">
          <p>나를 바라보는</p>
          <div className="flex items-center space-x-2">
            <p className="mr-8 max-md:mr-3">새로운 시선</p>
            <div className="max-md:w-20 w-48 h-0.5 bg-[#BEE0D3]" />
          </div>
        </div>

        <div className="flex space-x-2">
          {title.split("").map((char, idx) => (
            <motion.span
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="text-8xl max-md:text-4xl font-bold text-[#86B9A5] font-hambak tracking-tighter"
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
