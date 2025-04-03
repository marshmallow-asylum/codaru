import React from "react";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { IconMail, IconCoin, IconArrowRight } from "@tabler/icons-react";

export default function HeroSection() {
  return (
    <div className="w-full md:h-[92vh] flex flex-col md:flex-row justify-center items-center md:justify-around md:items-center font-[League_Spartan_Variable] relative overflow-x-hidden">
      <img
        className="md:ml-[-5vw] h-3/4 object-contain"
        src="/assets/images/krakow.webp"
        alt="retrofuturistic computer adorned with flowers"
      />
      <div className="flex flex-col justify-center items-center h-full md:my-0 my-15">
        <div className="flex justify-center items-center">
          <img
            className="w-12 h-12 md:w-30 md:h-30 object-contain overflow-x-hidden"
            src="/assets/images/logo.svg"
            alt="The logo for Codaru."
          />
          <span className="text-5xl md:text-9xl font-[League_Spartan_Variable] font-bold">
            codaru
          </span>
        </div>
        <span className="text-xl md:text-4xl font-[Maple_Mono] m-1">
          code. collaborate. compete.
        </span>
        <SocialLinks />
        <SignInButton />
      </div>
      <UserButton
        appearance={{
          elements: {
            rootBox: "absolute top-0 right-0 m-4",
            avatarImage: "md:w-15 md:h-15 w-10 h-10",
            avatarBox: "md:w-15 md:h-15 w-10 h-10",
          },
        }}
      />
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
        <IconCoin color="#5e8f4c" className="h-9 w-9" />
      </a>
    </div>
  );
}

function SignInButton() {
  return (
    <SignedOut>
      <a
        href="/sign-in"
        className="group mt-[1vh] bg-[#5e8f4c] h-[8vmin] rounded-[5px] flex justify-center items-center cursor-pointer relative overflow-hidden transition-colors w-[60%] text-[#f8f4dc] font-[Outfit_Variable] text-[5vmin] font-semibold active:bg-[#7e9f6c] active:transition-colors active:duration-300"
      >
        <span className="text absolute transition-transform duration-300 group-hover:translate-y-3/2 -mt-1">
          sign in
        </span>
        <IconArrowRight className="w-12 h-12 absolute transition-transform duration-300 transform -translate-y-4/2 group-hover:translate-y-0" />
      </a>
    </SignedOut>
  );
}