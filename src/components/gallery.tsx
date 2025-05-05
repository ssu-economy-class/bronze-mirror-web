import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const originalImages = [
  "/landing/screen_image/screen1.webp",
  "/landing/screen_image/screen2.webp",
  "/landing/screen_image/screen3.webp",
  "/landing/screen_image/screen4.webp",
  "/landing/screen_image/screen5.webp",
  "/landing/screen_image/screen6.webp",
];

export default function HorizontalGallery() {
  const isMobile = useIsMobile();

  const REPEAT = 3;
  const length = originalImages.length;
  const ITEM_WIDTH = isMobile ? 200 : 270; // 👈 모바일일 때 더 작게
  const GAP = 32;
  const PADDING = 16;

  const images = Array(REPEAT).fill(originalImages).flat();

  const [currentIndex, setCurrentIndex] = useState(length);
  const containerRef = useRef<HTMLDivElement>(null);
  const [effectiveWidth, setEffectiveWidth] = useState(0);

  useLayoutEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      setEffectiveWidth(w - PADDING * 2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const xOffset = effectiveWidth / 2 - ITEM_WIDTH / 2;
  const calculateX = (idx = currentIndex) => xOffset - idx * (ITEM_WIDTH + GAP);

  const controls = useAnimation();

  const autoTimer = useRef<NodeJS.Timeout | null>(null);
  const pauseTimer = useRef<NodeJS.Timeout | null>(null);

  const clearTimers = () => {
    if (autoTimer.current) clearTimeout(autoTimer.current);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
  };

  const scheduleAuto = (delay = 3000) => {
    clearTimers();
    autoTimer.current = setTimeout(() => {
      setCurrentIndex((i) => i + 1);
      scheduleAuto(3000);
    }, delay);
  };

  useEffect(() => {
    scheduleAuto(3000);
    return clearTimers;
  }, [effectiveWidth]);

  useEffect(() => {
    controls.start(
      { x: calculateX() },
      { type: "tween", ease: "easeInOut", duration: 0.6 }
    );
  }, [currentIndex, effectiveWidth]);

  const onUserNavigate = (newIndex: number) => {
    clearTimers();
    setCurrentIndex(newIndex);
    pauseTimer.current = setTimeout(() => scheduleAuto(3000), 5000);
  };
  const handlePrev = () => onUserNavigate(currentIndex - 1);
  const handleNext = () => onUserNavigate(currentIndex + 1);

  const onAnimComplete = () => {
    if (currentIndex >= length * 2) {
      const resetIndex = length;
      controls.set({ x: calculateX(resetIndex) });
      setCurrentIndex(resetIndex);
    } else if (currentIndex < length) {
      const resetIndex = length * 2 - 1;
      controls.set({ x: calculateX(resetIndex) });
      setCurrentIndex(resetIndex);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden px-4">
      <div
        className="absolute inset-y-0 left-0 w-1/2 z-10 cursor-pointer"
        onClick={handlePrev}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/2 z-10 cursor-pointer"
        onClick={handleNext}
      />

      <motion.div
        className="flex p-0"
        style={{ gap: GAP }}
        animate={controls}
        onAnimationComplete={onAnimComplete}
      >
        {images.map((src, idx) => {
          const isFocused = idx === currentIndex;
          const origIdx = idx % length;

          return (
            <motion.img
              key={`${idx}-${src}`}
              src={src}
              alt={`앱 화면 ${origIdx + 1}`}
              style={{ width: ITEM_WIDTH }}
              className="py-8 h-auto rounded-lg object-contain"
              animate={{
                x: 0,
                opacity: isFocused ? 1 : 0.5,
                scale: isFocused ? 1.1 : 1,
              }}
              transition={{ type: "tween", duration: 0.3 }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
