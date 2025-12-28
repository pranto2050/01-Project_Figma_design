import React from "react";

export const TestimonialsHeadlineSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[5px] px-4">
      <h2 className="w-fit [font-family:'Helvetica_Now_Display-Bold',Helvetica] font-bold text-black text-5xl tracking-[0] leading-[normal] text-center">
        Loved by those who needed a break
      </h2>

      <p className="w-fit [font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-black text-4xl tracking-[0] leading-10 text-center">
        Join hundreds of others who traded scrolling for creating.
      </p>
    </section>
  );
};
