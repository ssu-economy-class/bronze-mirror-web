import { motion } from "framer-motion";
import SlashIcon from "@/components/slash-icon";

export default function ConceptSection() {
  return (
    <motion.section
      className="h-full relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <div className="relative flex flex-col items-center justify-start max-md:gap-3 gap-16 z-10">
        {/* Title */}
        <motion.p
          className="max-md:mt-3 max-md:text-sm mt-16 text-4xl font-playfair text-[#0E4838]"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          Service Concept
        </motion.p>

        {/* First text group */}
        <motion.div
          className="max-md:text-[0.6rem] text-center flex flex-col items-center font-semibold text-2xl leading-[140%] tracking-[-0.5%]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p>'거울'은 단순한 반영의 도구가 아닙니다.</p>
          <p>그것은 우리를 비추는 동시에 새로운 시각을 제시합니다. </p>
          <p>
            본 작품은 다양한 과정을 통해 체험자가 자신의 모습을 새롭게 경험할 수
            있도록 합니다.
          </p>
        </motion.div>

        {/* Slash icon - 위에서 아래로 자연스럽게 드러나도록 */}
        <motion.div
          className="overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        >
          <SlashIcon className="size-24 max-md:size-6" />
        </motion.div>

        {/* Second text group */}
        <motion.div
          className="max-md:text-[0.6rem] text-center flex flex-col items-center font-semibold text-2xl leading-[140%] tracking-[-0.5%]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <p>
            청동거울은 자기 인식과 표현에 대한 새로운 질문이자, 나를 다시
            그려보는 또 하나의 방식입니다.
          </p>
          <p>이 경험을 통해 나를 바라보는 새로운 시선을 얻어보세요.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
