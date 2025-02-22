"use client";

import Image from "next/image";
import React from "react";
import Strength from "../../../public/istockphoto-675179390-612x612.jpg"
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";

export default function ThreeDCardDemo({ title="Gauri Shankar", description="Trainer Staff", imageSrc={Strength} }) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-[#222222] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-[#222222] w-auto sm:w-[275px] h-auto rounded-xl p-6 border"
      >
        <CardItem translateZ="50" className="text-xl font-bold justify-self-center text-white dark:text-white">
          {title}
        </CardItem>
        <CardItem translateZ="60" className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300 justify-self-center">
          {description}
        </CardItem>
        <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
          <Image
            src={Strength}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20} translateX={-40} as="button" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
          <CardItem translateZ={20} translateX={40} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

