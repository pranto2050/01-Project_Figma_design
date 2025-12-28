import React from "react";
import { Button } from "../../../../components/ui/button";

export const KeyStatisticsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[65px] relative">
      <div className="flex flex-col w-full max-w-[533px] items-start gap-[7px] relative">
        <h2 className="relative self-stretch [font-family:'Helvetica_Now_Display-Bold',Helvetica] font-normal text-transparent text-5xl tracking-[0] leading-[normal]">
          <span className="font-bold text-black">Almost </span>
          <span className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] text-[#d46a00]">
            7 Hours
          </span>
        </h2>

        <p className="relative self-stretch [font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-black text-4xl tracking-[0] leading-10">
          That&apos;s how long most of us spend <br />
          in front of screens each day
        </p>
      </div>

      <p className="relative self-stretch [font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-7">
        The real problem isn&apos;t just lost time — it&apos;s the stress, the
        tension, and the constant noise that never lets the mind rest.
        <br />
        <br />
        Minar Ease helps you create small offline moments that make a real
        difference. No notifications. No pressure. Just calm, creativity, and a
        break your brain deserves.
      </p>

      <Button className="w-[210px] h-[45px] bg-[#ff7f00] hover:bg-[#ff7f00]/90 rounded-[100px] border border-solid border-[#ffe6e0] [font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-5">
        Explore the Collection
      </Button>
    </section>
  );
};
