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
      className="h-screen max-md:h-[32vh] max-2xl:h-[80vh] max-xl:h-[60vh] flex-row gap-2 flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{ hidden: {}, visible: {} }}
    >
      <div className="bg-[#5FA48F] w-screen h-4/5 flex flex-row gap-4 items-center justify-start">
        <div className="flex flex-col gap-8 max-md:gap-3">
          <motion.p className="text-end max-xl:text-[2rem] max-md:text-[1rem] text-6xl font-playfair text-[#0E4838]">
            How to Experience.
          </motion.p>
          <motion.div className="max-md:gap-1 max-xl:text-[1rem] max-md:text-[0.5rem] flex flex-col items-end gap-4.5 text-2xl">
            <p>drawing directly</p>
            <p>submitting sketch</p>
            <p>transforming into character</p>
          </motion.div>
        </div>
        <div className="max-md:top-28 flex flex-row gap-8 max-md:gap-1">
          <motion.img
            ref={drawRef}
            src="/landing/drawing-example.webp"
            alt="drawing"
            className="z-10 w-120 max-2xl:w-80 max-xl:w-60 max-md:w-24"
          />

          {isDrawInView && (
            <motion.img
              key={animationKey}
              src="/landing/result-example.webp"
              alt="result"
              className="w-120 z-20 max-2xl:w-80 max-xl:w-60 max-md:w-24"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          )}
        </div>
      </div>
    </motion.section>
  );
}
