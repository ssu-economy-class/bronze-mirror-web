import { motion } from "framer-motion";
import ProfileCard from "@/components/ProfileCard";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ProfileSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section className="mt-4 w-screen flex flex-col items-center gap-4">
        <motion.p
          className="max-md:text-[1.2rem] text-4xl mt-8 text-md font-playfair text-[#0E4838]"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          Team. Economy Class
        </motion.p>
        <div className="w-full scrollbar-hide overflow-x-auto px-6 mb-8">
          <div className="flex gap-6 w-max">
            <ProfileCard
              name="박가을"
              profileImg="/landing/profile/park.png"
              part="Design"
              email="gaeul703@gmail.com"
            />
            <ProfileCard
              name="문세종"
              profileImg="/landing/profile/moon.png"
              part="Front-end"
              email="jongse@soongsil.ac.kr"
            />
            <ProfileCard
              name="한석휘"
              profileImg="/landing/profile/han.png"
              part="Back-end"
              email="ka1679@soongsil.ac.kr"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-screen h-[60vh] flex flex-col items-center">
      <motion.p
        className="mb-3 mt-16 text-4xl font-playfair font-semibold text-[#0E4838]"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1 }}
      >
        Team. Economy Class
      </motion.p>
      <div className="bg-[#0E4838] h-[55vh] w-screen flex items-center justify-center gap-8">
        <ProfileCard
          name="박가을"
          profileImg="/landing/profile/park.png"
          part="Design"
          email="gaeul703@gmail.com"
        />
        <ProfileCard
          name="문세종"
          profileImg="/landing/profile/moon.png"
          part="Front-end"
          email="jongse@soongsil.ac.kr"
        />
        <ProfileCard
          name="한석휘"
          profileImg="/landing/profile/han.png"
          part="Back-end"
          email="ka1679@soongsil.ac.kr"
        />
      </div>
    </section>
  );
}
