import React from "react";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { IconMail, IconCoin, IconArrowRight } from "@tabler/icons-react";

export default function HeroSection() {
  return (
    <div className="w-full md:h-[92vh] flex flex-col-reverse md:flex-row justify-center items-center md:justify-around md:items-center font-[League_Spartan_Variable] relative overflow-x-hidden mt-10 mb-10">
      <img
        className="w-5/4 md:w-auto md:h-3/4 mr-35 md:mr-0 md:-ml-30 md:object-contain"
        src="/assets/images/krakow.webp"
        alt="retrofuturistic computer adorned with flowers"
      />
      <div className="flex flex-col justify-center items-center h-full md:my-0 my-20">
        <div className="flex justify-center items-center">
          <img
            className="w-18 h-18 md:w-30 md:h-30 object-contain overflow-x-hidden"
            src="/assets/images/logo.svg"
            alt="The logo for Codaru."
          />
          <span className="text-[#528dc9] text-6xl md:text-9xl font-[League_Spartan_Variable] font-bold">
            codaru
          </span>
        </div>
        <span className="text-xl md:text-4xl font-[Maple_Mono] m-1">
          code. collaborate. compete.
        </span>
        <SocialLinks />
        <SignInButton />
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex p-4 justify-between items-center">
      <a href="https://discord.gg/Qc9MeSPD6H">
        <img
          className="h-8 mr-6 object-contain"
          src="/assets/images/discord.png"
          alt="Discord logo"
        />
      </a>
      <a href="mailto:support@codaru.org">
        <IconMail color="#5e8f4c" className="h-9 w-9 mr-6" />
      </a>
      <a href="https://hcb.hackclub.com/donations/start/codaru">
        <IconCoin color="#5e8f4c" className="h-9 w-9 mr-6" />
      </a>
      <UserButton
        appearance={{
          elements: {
            avatarImage: "md:w-15 md:h-15 w-9 h-9",
            avatarBox: "md:w-15 md:h-15 w-9 h-9",
          },
        }}
      />
    </div>
  );
}

function SignInButton() {
  return (
    <SignedOut>
      <a
        href="/sign-in"
        className="group mt-2 bg-[#5e8f4c] h-15 md:h-20 rounded-[5px] flex justify-center items-center cursor-pointer relative overflow-hidden transition-colors w-60 md:w-90 text-[#f8f4dc] font-[Outfit_Variable] text-3xl md:text-[2.9em] font-semibold active:bg-[#7e9f6c] active:transition-colors active:duration-300"
      >
        <span className="text absolute transition-transform duration-300 group-hover:translate-y-3/2 -mt-1">
            grow here
        </span>
        <IconArrowRight className="w-15 h-15 absolute transition-transform duration-300 transform -translate-y-4/2 group-hover:translate-y-0" />
      </a>
    </SignedOut>
  );
}