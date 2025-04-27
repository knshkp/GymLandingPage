"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import coach from "../../public/train.jpeg";

export const DirectionAwareHover2 = ({
  ImageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}) => {
  const ref = useRef(null);
  const [direction, setDirection] = useState("left");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isActive, setIsActive] = useState(false); // 👈 For mobile tap

  // Detect touch devices once on mount
  useEffect(() => {
    setIsTouchDevice(typeof window !== "undefined" && 'ontouchstart' in window);
  }, []);

  const handleMouseEnter = (event) => {
    if (!ref.current || isTouchDevice) return;
    const direction = getDirection(event, ref.current);
    setDirectionName(direction);
  };

  const setDirectionName = (d) => {
    switch (d) {
      case 0: setDirection("top"); break;
      case 1: setDirection("right"); break;
      case 2: setDirection("bottom"); break;
      case 3: setDirection("left"); break;
      default: setDirection("left"); break;
    }
  };

  const handleClickMobile = (event) => {
    if (!isTouchDevice) return;
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirectionName(direction);
    setIsActive(true);
  };

  const getDirection = (ev, obj) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onClick={handleClickMobile} // 👈 tap to activate on phone
      ref={ref}
      tabIndex={0}
      aria-label="Interactive card with image and hover effects"
      className={cn(
        "md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          animate={isTouchDevice && isActive ? direction : undefined} // tap on mobile
          whileHover={!isTouchDevice ? direction : undefined} // hover on pc
          whileFocus={!isTouchDevice ? direction : undefined} // focus keyboard
          exit="exit"
        >
          {/* Overlay */}
          <motion.div
            className={cn(
              "absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500",
              isTouchDevice ? (isActive ? "block" : "hidden") : "group-hover/card:block hidden"
            )}
          />

          {/* Image */}
          <motion.div
            variants={variants}
            className="h-full w-full relative bg-gray-50 dark:bg-black"
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Image
              alt="Coach Image"
              className={cn(
                "h-full w-full object-cover scale-[1.25]",
                imageClassName
              )}
              width="1000"
              height="1000"
              src={coach}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
              "text-white absolute bottom-4 left-4 z-40",
              childrenClassName
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

// Motion Variants
const variants = {
  initial: { x: 0 },
  exit: { x: 0, y: 0 },
  top: { y: 20 },
  bottom: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
};

const textVariants = {
  initial: { y: 0, x: 0, opacity: 0 },
  exit: { y: 0, x: 0, opacity: 0 },
  top: { y: -20, opacity: 1 },
  bottom: { y: 2, opacity: 1 },
  left: { x: -2, opacity: 1 },
  right: { x: 20, opacity: 1 },
};

