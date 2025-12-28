import React from "react";

export const BenefitsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[30px] w-full px-4">
      <div className="flex flex-col items-center gap-[5px] w-full max-w-[1092px]">
        <h2 className="text-center [font-family:'Helvetica_Now_Display-Bold',Helvetica] font-normal text-5xl tracking-[0] leading-[normal]">
          <span className="font-bold text-black">We Fixed the </span>
          <span className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] text-[#d46a00]">
            Biggest Annoyance
          </span>
          <span className="font-bold text-black"> in Colouring</span>
        </h2>

        <p className="text-center [font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-10">
          Because your offline break should feel calming, not stressful.
        </p>
      </div>

      <div className="w-full max-w-[1092px] [font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-black text-[22px] text-center tracking-[0] leading-[22px]">
        <span className="leading-6">
          Colouring is supposed to help you unwind, but thin paper,
          bleed-through, and messy pages usually ruin the moment. <br />
        </span>

        <span className="[font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium leading-6">
          <br />
          We redesigned the entire experience
        </span>

        <span className="leading-6">
          {" "}
          — with thicker pages, smarter layouts, and tools that let you fully
          relax and enjoy your break without worrying about the ink.
        </span>
      </div>
    </section>
  );
};
