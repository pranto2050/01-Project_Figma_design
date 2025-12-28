import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";

const avatarImages = [
  {
    src: "/ellipse-27.png",
    alt: "Customer testimonial avatar 1",
    className: "absolute top-[43px] left-[-26px] w-[148px] h-[148px]",
  },
  {
    src: "/ellipse-29.png",
    alt: "Customer testimonial avatar 2",
    className: "absolute top-[211px] -left-6 w-[164px] h-[164px]",
  },
  {
    src: "/ellipse-30.png",
    alt: "Customer testimonial avatar 3",
    className: "absolute top-[273px] left-[149px] w-[148px] h-[148px]",
  },
  {
    src: "/ellipse-31.png",
    alt: "Customer testimonial avatar 4",
    className: "absolute top-[100px] left-[108px] w-[190px] h-[190px]",
  },
  {
    src: "/ellipse-28.png",
    alt: "Customer testimonial avatar 5",
    className: "absolute -top-4 left-40 w-[124px] h-[124px]",
  },
];

export const CustomerTestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex items-center gap-[130px] w-full justify-center py-8">
      <div className="relative w-[272px] h-[385px] flex-shrink-0">
        {avatarImages.map((avatar, index) => (
          <Avatar key={index} className={avatar.className}>
            <AvatarImage src={avatar.src} alt={avatar.alt} />
          </Avatar>
        ))}
      </div>

      <img
        className="w-[17px] h-[257px] flex-shrink-0"
        alt="Decorative divider"
        src="/frame-25.svg"
      />

      <div className="flex items-start gap-[30px] flex-shrink-0">
        <img
          className="flex-shrink-0 mt-[-0.50px] ml-[-0.50px]"
          alt="Quotation marks"
          src="/frame-20.svg"
        />

        <blockquote className="w-[510px] mt-[-1.00px] [font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-6">
          <p className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-6">
            My screen-time report was bullying me. I bought this hoping it would
            stop my 11 PM doomscrolling — and somehow it worked. I colour for 20
            minutes and my brain finally relaxes. Cheaper than therapy.
          </p>
          <br />
          <footer className="[font-family:'Helvetica_Now_Display-Bold',Helvetica] font-bold text-black text-xl tracking-[0] leading-6">
            Lieke Visser
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
