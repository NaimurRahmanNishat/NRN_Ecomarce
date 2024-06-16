import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-12vh)] flex justify-center flex-col">
      {/* define grid */}
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        {/* content */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
            mega sale <span className="text-rose-600">Special</span> Offer up to{" "}
            <span
              className="
                text-orange-500"
            >
              60%
            </span>{" "}
            off
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            autem ducimus dolorum omnis aliquam, quis in quibusdam laborum vitae
            fugiat tenetur? Officia quibusdam quidem asperiores, nam in aliquid
            harum corrupti.
          </p>
          <div className="flex items-center mt-6 space-x-4">
            <Button size={"lg"} className="bg-blue-700">Shop Now</Button>
            <Button size={"lg"}>Explor More</Button>
          </div>
        </div>
        {/* Image content */}
        <div className="hidden lg:block">
            <Image src="/images/hero.svg" alt="hero" width={600} height={600} className="lg:h-[50%] lg:w-[50%] xl:h-[80%] xl:w-[80%]"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
