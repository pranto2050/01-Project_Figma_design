import React from "react";
import { Button } from "../../../../components/ui/button";

const images = [
  {
    src: "/rectangle-8.png",
    alt: "Rectangle",
    className: "top-6 left-[-71px] w-[398px] h-[399px]",
  },
  {
    src: "/rectangle-7.png",
    alt: "Rectangle",
    className: "top-[-22px] left-[102px] w-[388px] h-[389px]",
  },
  {
    src: "/rectangle-6.png",
    alt: "Rectangle",
    className: "-top-px left-[266px] w-[379px] h-[379px]",
  },
  {
    src: "/rectangle-5.png",
    alt: "Rectangle",
    className: "top-[3px] left-[415px] w-[366px] h-[366px]",
  },
  {
    src: "/rectangle-4.png",
    alt: "Rectangle",
    className: "-top-1 left-[546px] w-[380px] h-[381px]",
  },
  {
    src: "/rectangle-3.png",
    alt: "Rectangle",
    className: "top-1.5 left-[706px] w-[386px] h-[387px]",
  },
  {
    src: "/rectangle-2.png",
    alt: "Rectangle",
    className: "-top-px left-[867px] w-[399px] h-[400px]",
  },
];

export const HeroImageSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1196px] items-center gap-[30px] mx-auto px-4">
      <header className="flex flex-col items-center justify-center w-full mt-[-1.00px]">
        <h1 className="[font-family:'Helvetica_Now_Display-Bold',Helvetica] font-bold text-black text-[70px] text-center tracking-[0] leading-[70px]">
          Life Feels Better Offline
        </h1>
        <p className="[font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-black text-[32px] text-center tracking-[0] leading-[50px] mt-2">
          Tools designed to help you slow down, breathe, and reconnect with your
          real life
        </p>
      </header>

      <div className="relative w-full max-w-[1195.66px] h-[331.59px]">
        {images.map((image, index) => (
          <img
            key={index}
            className={`absolute ${image.className} rounded-[25px] object-cover`}
            alt={image.alt}
            src={image.src}
          />
        ))}
      </div>

      <p className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[30px]">
        Minar Ease brings back the simple things that make you feel human again
        —<br />
        quiet moments, creativity, and space for your mind to rest
      </p>

      <div className="inline-flex items-center justify-center gap-2">
        <Button className="w-[210px] h-[35px] bg-[#ff7f00] hover:bg-[#ff7f00]/90 text-white rounded-[100px] border border-solid border-[#ffe6e0] [font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-base tracking-[0] leading-5">
          Shop Offline Essentials
        </Button>

        <Button
          variant="outline"
          className="w-[175px] h-[35px] bg-[#ffead7] hover:bg-[#ffead7]/90 text-black rounded-[100px] border border-solid border-[#ff9e3d] [font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-base tracking-[0] leading-5"
        >
          Join our community
        </Button>
      </div>
    </section>
  );
};
