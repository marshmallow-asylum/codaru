import React from "react";

export default function AboutSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full my-5 overflow-x-hidden">
      <img
        className="mt-5 h-3/4 md:w-1/2 md:ml-[-5vw] object-contain"
        src="/assets/images/compass.webp"
        alt="retrofuturistic compass adorned with flowers"
      />
      <div className="flex flex-col justify-center items-center md:mr-10 md:w-1/2 md:h-full px-6 md:pl-4 md:pr-8 text-left">
        <p className="font-[Outfit_Variable] text-base md:text-xl font-light md:mt-5">
          Codaru is an annual spring coding competition open to programmers of all ages
          and skill levels—from complete beginners to seasoned professionals. Held
          entirely online, the competition is designed to fit your schedule, with each
          challenge lasting a full week, allowing you to participate whenever it's
          convenient. You'll join one of six teams, working together with your teammates
          to take on challenges and compete against the others. Codaru's mission is to
          provide an inclusive and engaging space where everyone can develop their skills
          and grow as programmers.
        </p>
      </div>
    </div>
  );
}