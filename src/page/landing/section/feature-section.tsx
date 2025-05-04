import { motion } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";

export default function FeatureSection() {
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
      <div className="relative flex flex-col items-center justify-start max-md:gap-8 gap-16 z-10">
        {/* Title */}
        <motion.p
          className="max-md:mt-3 max-md:text-sm mt-16 text-4xl font-playfair text-[#0E4838]"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          Features.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          className="flex max-md:flex-col flex-row gap-18 max-md:gap-4"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <FeatureCard
            title="생성형 AI"
            description={`자신이 그린 그림을 생성형 AI를\n통해 개성있게 만들 수 있습니다.`}
          />
          <FeatureCard
            title="친구와 공유"
            description={`생성된 캐릭터들을\n친구와 공유할 수 있습니다.`}
          />
          <FeatureCard
            title="3D 미디어아트"
            description={`생성된 캐릭터를 3D 맵에 띄워\n동적으로 움직이는 미디어아트를\n즐길 수 있습니다.`}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
