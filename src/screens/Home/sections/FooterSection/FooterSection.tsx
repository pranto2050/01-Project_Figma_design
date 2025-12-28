import {
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook" },
  { icon: TwitterIcon, label: "Twitter" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: LinkedinIcon, label: "LinkedIn" },
  { icon: YoutubeIcon, label: "YouTube" },
];

const exploreLinks = [
  { text: "Home" },
  { text: "Our Mission" },
  { text: "Products" },
  { text: "Blog" },
];

const productLinks = [
  { text: "Vini" },
  { text: "Vini" },
  { text: "Vini" },
  { text: "Vini" },
];

const contactInfo = [
  { icon: PhoneIcon, text: "+880 1898-753003" },
  { icon: MailIcon, text: "contact@minarease.com" },
  {
    icon: MapPinIcon,
    text: "Minar Ease, Stationsstraat 12,\n1234 AB Amsterdam NETHERLANDS",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-black bg-[url(/footer-bg-image.png)] bg-cover bg-[50%_50%] py-[70px] px-[60px]">
      <div className="flex flex-col max-w-[1320px] mx-auto items-start gap-5">
        <div className="relative w-full border-b border-[#d9d9d9] pb-5">
          <div className="flex items-start gap-20">
            <div className="flex flex-col w-[429px] items-start gap-[15px]">
              <img
                className="w-[177px] h-[90px] object-cover"
                alt="Whatsapp image"
                src="/whatsapp-image-2025-11-15-at-21-02-1-1.png"
              />

              <p className="w-[426px] [font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-6">
                Minar Ease brings back the simple things that make you feel
                human again — quiet moments, creativity, and space for your mind
                to rest.
              </p>

              <div className="inline-flex items-center gap-2.5">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 rounded-2xl bg-blend-overlay bg-[linear-gradient(0deg,rgba(255,230,224,0.5)_0%,rgba(255,230,224,0.5)_100%),linear-gradient(0deg,rgba(255,230,224,1)_0%,rgba(255,230,224,1)_100%)] hover:bg-[linear-gradient(0deg,rgba(255,230,224,0.7)_0%,rgba(255,230,224,0.7)_100%),linear-gradient(0deg,rgba(255,230,224,1)_0%,rgba(255,230,224,1)_100%)]"
                  >
                    <social.icon className="w-4 h-4 text-[#ff7f00]" />
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-start justify-end gap-[45px] flex-1">
              <nav className="flex flex-col w-[172px] items-start gap-5">
                <h3 className="[font-family:'Helvetica_Now_Display-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-6">
                  Explore
                </h3>

                <ul className="w-full flex flex-col items-start gap-[15px]">
                  {exploreLinks.map((link, index) => (
                    <li key={index} className="flex items-center gap-5">
                      <ChevronRightIcon className="w-[7px] h-[19px] text-white" />
                      <a
                        href="#"
                        className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[21px] hover:underline"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="flex flex-col w-32 items-start gap-5">
                <h3 className="[font-family:'Helvetica_Now_Display-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-6">
                  Products
                </h3>

                <ul className="w-[114px] flex flex-col items-start gap-[15px]">
                  {productLinks.map((link, index) => (
                    <li key={index} className="flex items-center gap-5">
                      <ChevronRightIcon className="w-[7px] h-[19px] text-white" />
                      <a
                        href="#"
                        className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[21px] hover:underline"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col w-[314px] items-start gap-5">
                <h3 className="[font-family:'Helvetica_Now_Display-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-6">
                  Get In Touch
                </h3>

                <div className="w-[314px] flex flex-col items-start gap-[15px]">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="inline-flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center">
                        {index === 0 && (
                          <img
                            className="w-10 h-10"
                            alt="Phone"
                            src="/background.svg"
                          />
                        )}
                        {index === 1 && (
                          <img
                            className="w-10 h-10"
                            alt="Email"
                            src="/background-1.svg"
                          />
                        )}
                        {index === 2 && (
                          <img
                            className="w-10 h-10"
                            alt="Location"
                            src="/background-2.svg"
                          />
                        )}
                      </div>

                      <p className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[22px] whitespace-pre-line">
                        {contact.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between w-full">
          <a
            href="#"
            className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-6 hover:underline"
          >
            Terms &amp; Conditions
          </a>

          <p className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-6">
            <span className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-6">
              © 2025,{" "}
            </span>
            <span className="[font-family:'Helvetica_Now_Display-Bold',Helvetica] font-bold">
              Minar Ease
            </span>
            <span className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-6">
              , All Rights Reserved.
            </span>
          </p>

          <a
            href="#"
            className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-6 hover:underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <img
        className="absolute top-[120px] left-[-101px] w-[4464px] h-[766px] pointer-events-none"
        alt="Vector"
        src="/vector.svg"
      />

      <div className="absolute left-1/2 -translate-x-1/2 bottom-5 h-6 bg-blend-overlay [font-family:'Helvetica_Now_Display-ExtraBold',Helvetica] font-extrabold text-[#ffffff59] text-[300px] leading-6 whitespace-nowrap flex items-center justify-center tracking-[0] pointer-events-none">
        Minar Ease
      </div>
    </footer>
  );
};
