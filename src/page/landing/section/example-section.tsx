import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ExampleSection() {
  const drawRef = useRef(null);
  const isDrawInView = useInView(drawRef, { once: true, amount: 1.0 });
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (!isDrawInView) return;

    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 3000); // 3초 간격

    return () => clearInterval(interval);
  }, [isDrawInView]);

  return (
    <motion.section
      className="h-screen max-md:h-[32vh] max-2xl:h-[80vh] max-xl:h-[60vh] relative flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{ hidden: {}, visible: {} }}
    >
      <div className="bg-[#5FA48F] w-screen h-2/3 relative">
        {/* 텍스트 블럭 */}
        <div className="max-md:top-10 max-md:left-4 max-md:gap-2 absolute top-4 left-24 flex flex-col gap-8 z-10">
          <motion.p className="max-xl:text-[2rem] max-md:mt-3 max-md:text-[1rem] mt-16 text-6xl font-playfair text-[#0E4838]">
            How to Experience.
          </motion.p>
          <motion.div className="max-md:gap-1 max-xl:text-[1rem] max-md:text-[0.5rem] flex flex-col items-end gap-4.5 text-2xl">
            <p>drawing directly</p>
            <p>submitting sketch</p>
            <p>transforming into character</p>
          </motion.div>
        </div>
      </div>

      {/* 이미지 영역 */}
      <div className="absolute right-8 max-md:right-4 top-52 max-md:top-28 flex flex-row gap-8 max-md:gap-2">
        {/* Drawing Image */}
        <motion.img
          ref={drawRef}
          src="/landing/drawing-example.webp"
          alt="drawing"
          className="z-10 w-120 max-2xl:w-80 max-xl:w-60 max-md:w-28"
        />

        {/* Result Image - 반복 슬라이드 인 */}
        {isDrawInView && (
          <motion.img
            key={animationKey} // key 변경 시마다 다시 애니메이션 실행
            src="/landing/result-example.webp"
            alt="result"
            className="w-120 z-20 max-2xl:w-80 max-xl:w-60 max-md:w-28"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        )}
      </div>
    </motion.section>
  );
}
