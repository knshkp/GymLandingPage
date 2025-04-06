"use client";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";
import gym1 from "../../../public/aca1.jpeg"
import gym2 from "../../../public/aca2.jpeg"
import gym3 from "../../../public/aca3.jpeg"
import gym4 from "../../../public/aca4.jpeg"
import gym5 from "../../../public/aca5.jpeg"
export function ParallaxScrollDemo() {
  return(
    <>
    <h1 className="text-[30px] align-middle justify-self-center text-center font-bold mt-48 w-[640px]">EMPOWERING YOU TO EVOLVE INTO THE BEST VERSION OF YOURSELF.</h1>
     <ParallaxScrollSecond images={images} className="mt-[50px]" />;
     </>
  )
}

const images = [
    gym1,
    gym2,
    gym3,
    gym4,
    gym5,
    gym1,
    gym2,
    gym3,
    gym4,
    gym5, 
    gym1,
    gym2,
    gym3,
    gym4,
    gym5,
    gym1,
    gym2,
    gym3,
    gym4,
    gym5,
    gym1,
    gym2,
    gym3,
    gym4,
];
