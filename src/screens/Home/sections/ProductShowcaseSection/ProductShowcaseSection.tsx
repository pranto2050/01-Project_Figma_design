import { CheckCircle2Icon, SendIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  "Thick 200gsm pages",
  "Single-sided artwork",
  "Protective sheet included",
  "Modern, gender-neutral illustrations",
  "Made for quiet breaks",
];

const paginationDots = [
  { active: true },
  { active: false },
  { active: false },
  { active: false },
];

export const ProductShowcaseSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <Card className="bg-black rounded-[20px] shadow-[0px_4px_4px_#00000040] border-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <img
            className="w-full h-full object-cover"
            alt="Card background"
            src="/card-background.svg"
          />
        </div>

        <CardContent className="relative p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            <div className="flex flex-col gap-[30px] max-w-[414px]">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h2 className="[font-family:'Salsa',Helvetica] font-normal text-white text-[40px] leading-10">
                    Vini: The Quiet Escape
                  </h2>

                  <p className="[font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-white text-xl leading-5">
                    Minar Ease
                  </p>
                </div>

                <p className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-base leading-4">
                  Adult coloring book for relaxation and mindfulness with easy
                  access.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <CheckCircle2Icon className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    <span className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-xs leading-[14px]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="[font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-white text-[32px] leading-8">
                  $3,549
                </div>

                <div className="flex items-center gap-1">
                  <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[#ff7f00] bg-transparent hover:bg-[#ff7f00]/10 transition-colors">
                    <img
                      className="w-6 h-6"
                      alt="Decrease quantity"
                      src="/icon-wrapper-1.svg"
                    />
                  </button>

                  <div className="w-[60px] h-[30px] flex items-center justify-center bg-[#ffead7] rounded-full">
                    <span className="font-medium-16px-regular font-[number:var(--medium-16px-regular-font-weight)] text-black text-[length:var(--medium-16px-regular-font-size)] [font-style:var(--medium-16px-regular-font-style)]">
                      2
                    </span>
                  </div>

                  <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[#ff7f00] bg-transparent hover:bg-[#ff7f00]/10 transition-colors">
                    <img
                      className="w-6 h-6"
                      alt="Increase quantity"
                      src="/icon-wrapper.svg"
                    />
                  </button>
                </div>
              </div>

              <Button className="w-full h-[30px] bg-[#ff7f00] hover:bg-[#ff7f00]/90 text-white rounded-[20px] border border-[#ffe6e0] gap-2 [font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-xs">
                Buy Now
                <SendIcon className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <img
                className="w-full max-w-[462px] h-auto rounded-xl object-cover"
                alt="Vini: The Quiet Escape coloring book"
                src="/image.png"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-[5px] pb-6">
            {paginationDots.map((dot, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded ${
                  dot.active ? "bg-white" : "bg-[#a1a1a180]"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
