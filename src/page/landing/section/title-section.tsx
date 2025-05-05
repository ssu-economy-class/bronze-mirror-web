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
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 0.4, scale: 1 },
        }}
        transition={{ duration: 1.5 }}
        className="max-md:size-20 max-md:left-10 absolute top-1/2 left-48 size-80 rounded-full bg-[#5FA48F] blur-[40px] -translate-y-1/2 z-0"
      />
      <div className="">
        {[
          {
            className:
              "max-md:-bottom-8 max-md:-left-8 max-md:size-20 bottom-[-5rem] left-[-5rem] size-40 blur-[3px]",
            delay: 0.3,
          },
          {
            className:
              "max-md:top-2 max-md:left-32 max-md:size-14 top-10 left-[42%] size-36 blur-[1px]",
            delay: 0.4,
          },
          {
            className:
              "max-md:top-3 max-md:-right-4 max-md:size-20 top-12 right-[-5rem] size-60 blur-[3.5px]",
            delay: 0.5,
          },
          {
            className:
              "max-md:bottom-2 max-md:right-[30%] max-md:size-15 bottom-10 right-[26%] size-32 blur-[2px]",
            delay: 0.6,
          },
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
      <div className="flex flex-row gap-64 max-md:gap-8 items-center max-md:left-10 absolute top-1/2 left-48 transform -translate-y-1/2 z-10">
        <motion.img
          src="/landing/bronze-mirror.webp"
          alt="청동거울 로고"
          variants={{
            hidden: { opacity: 0, rotate: -30 },
            visible: { opacity: 1, rotate: 0 },
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-md:size-20 w-80 h-auto"
        />
        {/* 텍스트 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-start z-10"
        >
          <div className="max-md:text-[0.6rem] text-3xl text-[#BEE0D3] mb-4 max-md:mb-1 flex flex-col items-start">
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
                className="text-8xl max-md:text-3xl font-bold text-[#86B9A5] font-hambak tracking-tighter"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
