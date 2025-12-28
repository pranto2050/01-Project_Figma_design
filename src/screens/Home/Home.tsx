import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { BenefitsSection } from "./sections/BenefitsSection";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroImageSection } from "./sections/HeroImageSection";
import { KeyStatisticsSection } from "./sections/KeyStatisticsSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection";
import { TestimonialsHeadlineSection } from "./sections/TestimonialsHeadlineSection";

const benefitCallouts = [
  {
    top: "top-[3018px]",
    left: "left-[904px]",
    frameImage: "/frame-15-1.svg",
    title: "Protective sheet included",
    description: "use your markers freely.",
    frameLeft: "left-[-35px]",
    contentLeft: "left-[17px]",
    contentWidth: "w-[152px]",
  },
  {
    top: "top-[3247px]",
    left: "left-[1023px]",
    frameImage: "/frame-15-4.svg",
    title: "Single-sided artwork",
    description: "every page stays protected.",
    frameLeft: "left-[-35px]",
    contentLeft: "left-[17px]",
    contentWidth: "w-[152px]",
  },
  {
    top: "top-[2967px]",
    left: "left-[371px]",
    frameImage: "/frame-15-2.svg",
    title: "Thick 200gsm pages",
    description: "colours stay crisp with zero bleed-through.",
    frameLeft: "left-[calc(50.00%_-_162px)]",
    frameWidth: "w-[270px]",
    contentLeft: "left-[-9px]",
    contentWidth: "w-[178px]",
  },
  {
    top: "top-[3444px]",
    left: "left-[307px]",
    frameImage: "/frame-15-3.svg",
    title: "Modern, gender-neutral illustrations",
    description: "enjoyable for anyone.",
    frameLeft: "left-[calc(50.00%_-_202px)]",
    frameWidth: "w-[310px]",
    contentLeft: "left-[-45px]",
    contentWidth: "w-[214px]",
  },
  {
    top: "top-[3533px]",
    left: "left-[831px]",
    frameImage: "/frame-15.svg",
    title: "Made for quiet breaks",
    description: "a small offline moment that actually feels good.",
    frameLeft: "left-[-78px]",
    frameWidth: "w-[290px]",
    contentLeft: "left-[-26px]",
    contentWidth: "w-[195px]",
  },
];

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] relative">
      <div className="relative top-[-350px] left-[-218px] w-[1929px] h-[1510px]">
        <div className="absolute top-[350px] left-[218px] w-[1440px] h-[1024px] bg-[#ffead7]" />

        <img
          className="top-[350px] left-[218px] w-[1440px] h-[1024px] bg-blend-color-burn absolute object-cover"
          alt="Image"
          src="/image-1.png"
        />

        <img
          className="top-[928px] left-[1087px] w-[571px] h-[582px] bg-blend-overlay absolute object-cover"
          alt="Image"
          src="/image-2.png"
        />

        <img
          className="absolute top-[496px] left-[218px] w-[726px] h-[354px] bg-blend-overlay object-cover"
          alt="Image"
          src="/image-1-1.png"
        />

        <div className="absolute top-14 left-[965px] w-[937px] h-[496px] bg-[#ff9e3de6] rounded-[468.5px/248px] rotate-[7.03deg] blur-[200px]" />
      </div>

      <HeaderSection />

      <HeroImageSection />

      <div className="relative w-[1440px] bg-[#ffead7] rounded-[70px_70px_0px_0px]">
        <img
          className="absolute top-0 left-0 w-[1440px] h-full rounded-[70px_70px_0px_0px] bg-blend-overlay"
          alt="Rectangle"
          src="/rectangle-11.png"
        />

        <img
          className="absolute top-0 left-0 w-[1440px] h-full rounded-[70px_70px_0px_0px] bg-blend-overlay"
          alt="Rectangle"
          src="/rectangle-11.png"
        />

        <div className="absolute top-[426px] left-[-175px] w-[301px] h-[492px] bg-[#ff9e3d] rounded-[150.6px/245.9px] rotate-[-112.60deg] blur-[200px]" />
      </div>

      <div className="absolute top-[447px] left-[-225px] w-[449px] h-[779px] bg-[#ff9e3dcc] rounded-[224.5px/389.5px] rotate-[-13.94deg] blur-[200px]" />

      <div className="absolute top-[658px] left-[1249px] w-[449px] h-[779px] bg-[#ff9e3dcc] rounded-[224.5px/389.5px] rotate-[-160.75deg] blur-[200px]" />

      <div className="absolute top-[978px] left-[823px] w-[449px] h-[779px] bg-white rounded-[224.5px/389.5px] rotate-[-115.49deg] blur-[200px]" />

      <div className="absolute top-[978px] left-[823px] w-[449px] h-[779px] bg-[#ffffff4c] rounded-[224.5px/389.5px] rotate-[-115.49deg] blur-[200px]" />

      <div className="absolute top-[1098px] left-[720px] w-[670px] h-[675px]">
        <img
          className="absolute top-0 left-14 w-[529px] h-[566px] bg-blend-difference"
          alt="Element"
          src="/2-1.png"
        />

        <img
          className="absolute top-[315px] left-0 w-[670px] h-[360px] object-cover"
          alt="Element"
          src="/1-1.png"
        />
      </div>

      <div className="absolute top-[1346px] left-[1310px] w-[370px] h-[634px] bg-[#ff9e3d] rounded-[185.06px/317.09px] rotate-[-115.49deg] blur-[200px]" />

      <Badge className="absolute top-[1030px] left-[645px] bg-[#ffead7] rounded-[100px] border border-solid border-[#ff9e3d] text-black hover:bg-[#ffead7]">
        <span className="[font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-base tracking-[0] leading-5">
          A Raising Issue
        </span>
      </Badge>

      <KeyStatisticsSection />

      <div className="absolute top-[1671px] left-[189px] w-[258px] rotate-[-14.20deg] [font-family:'Brittany_Signature-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-5">
        Take a few minutes for yourself!
      </div>

      <ProductShowcaseSection />

      <Badge className="absolute top-[2572px] left-[calc(50.00%_-_75px)] bg-[#ffead7] rounded-[100px] border border-solid border-[#ff9e3d] text-black hover:bg-[#ffead7]">
        <span className="[font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-base tracking-[0] leading-5">
          Why choose us?
        </span>
      </Badge>

      <BenefitsSection />

      <img
        className="absolute top-[2598px] left-[calc(50.00%_-_720px)] w-[1440px] h-[1396px]"
        alt="Book image section"
        src="/book-image-section.png"
      />

      {benefitCallouts.map((callout, index) => (
        <div
          key={index}
          className={`${callout.top} ${callout.left} absolute w-[209px] h-[102px]`}
        >
          <img
            className={`absolute top-0 ${callout.frameLeft} ${callout.frameWidth || "w-[247px]"} h-[131px]`}
            alt="Frame"
            src={callout.frameImage}
          />

          <div
            className={`flex flex-col ${callout.contentWidth} items-start absolute top-[37px] ${callout.contentLeft}`}
          >
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-black text-sm tracking-[0] leading-6">
              {callout.title}
            </div>

            <div className="relative self-stretch -mt-2.5 [font-family:'Helvetica_Now_Display-Light',Helvetica] font-light text-black text-[10px] tracking-[0] leading-6">
              {callout.description}
            </div>
          </div>
        </div>
      ))}

      <Button className="absolute top-[3787px] left-[calc(50.00%_-_90px)] bg-[#ff7f00] rounded-[100px] border border-solid border-[#ffe6e0] hover:bg-[#ff7f00]/90">
        <span className="[font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-5">
          Shop Vini
        </span>
      </Button>

      <Badge className="absolute top-[3982px] left-[calc(50.00%_-_622px)] bg-[#ffead7] rounded-[100px] border border-solid border-[#ff9e3d] text-black hover:bg-[#ffead7]">
        <span className="[font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-base tracking-[0] leading-5">
          What people says
        </span>
        <img
          className="relative w-4 h-4 ml-2"
          alt="Icon octicons"
          src="/icon---octicons---outlined---comment-discussion.svg"
        />
      </Badge>

      <TestimonialsHeadlineSection />

      <CustomerTestimonialsSection />

      <div className="absolute top-[3553px] left-[1399px] w-[423px] h-[669px] bg-[#ff9e3db2] rounded-[211.56px/334.71px] rotate-[-151.86deg] blur-[200px]" />

      <FooterSection />
    </div>
  );
};
