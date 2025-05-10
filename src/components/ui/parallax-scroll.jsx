"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScrollSecond = ({
  images,
  className
}) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Evenly distribute images into 3 parts
  const firstPart = [];
  const secondPart = [];
  const thirdPart = [];

  images.forEach((img, idx) => {
    if (idx % 3 === 0) firstPart.push(img);
    else if (idx % 3 === 1) secondPart.push(img);
    else thirdPart.push(img);
  });

  return (
    <div className={cn("h-[40rem] items-start overflow-y-auto w-full", className)} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1-" + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                height={400}
                width={400}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2-" + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                height={400}
                width={400}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3-" + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                height={400}
                width={400}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

