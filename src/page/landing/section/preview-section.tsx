import HorizontalGallery from "@/components/gallery";
import { motion } from "framer-motion";
export default function PreviewSection() {
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
      <div className="relative flex flex-col items-start max-md:ml-4 ml-32 justify-start gap-2 z-10">
        {/* Title */}
        <motion.p
          className="max-md:mt-3 max-md:text-[1.2rem] mt-16 text-4xl font-playfair text-[#0E4838]"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          Preview.
        </motion.p>
        <motion.p className="max-md:text-[0.7rem] text-[1rem] text-[#686868] mb-4">
          체험을 통해 이미지를 그리고 AI로 변환된 다양한 스타일의 캐릭터를
          만나보세요
        </motion.p>
      </div>
      <div className="w-screen">
        <HorizontalGallery />
      </div>
    </motion.section>
  );
}
