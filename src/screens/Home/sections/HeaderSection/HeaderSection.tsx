import { ChevronDownIcon, LibraryIcon, UserIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home" },
  { label: "Our Mission" },
  { label: "Products" },
  { label: "Blog" },
  { label: "Vanish" },
  { label: "Contact Us" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="relative w-full px-[65px] py-2">
      <div className="relative w-full bg-[#00000000] rounded-[100px] overflow-hidden backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
        <div className="relative w-full h-[88px] bg-[#ffffff03] rounded-[100px] shadow-[inset_1px_2px_2px_#ffffff4c,inset_-1px_-2px_2px_#ffffff1a,inset_0px_0px_10px_#ffffff4c]">
          <div className="flex items-center justify-between h-full px-[65px] py-4">
            <img
              className="w-[78px] h-10 object-cover"
              alt="Whatsapp image"
              src="/whatsapp-image-2025-11-15-at-21-02-1.png"
            />

            <nav className="flex items-center gap-0.5">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="px-4 py-2 rounded-lg hover:bg-transparent"
                >
                  <span className="[font-family:'Salsa',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[20.0px]">
                    {item.label}
                  </span>
                </Button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-transparent"
              >
                <span className="[font-family:'Salsa',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[20.0px]">
                  Eng
                </span>
                <ChevronDownIcon className="w-4 h-4" />
              </Button>

              <div className="flex items-center gap-5">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-[22px] h-[22px] p-0 hover:bg-transparent"
                >
                  <UserIcon className="w-[22px] h-[22px]" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="w-5 h-5 p-0 hover:bg-transparent"
                >
                  <LibraryIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
