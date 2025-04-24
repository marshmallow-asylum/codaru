import React from "react";

export default function AboutSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full my-5 overflow-x-hidden">
      <img
        className="mt-5 w-full -ml-35 md:h-3/4 md:w-1/2 md:-ml-25 object-contain"
        src="/assets/images/compass.webp"
        alt="retrofuturistic compass adorned with flowers"
      />
      <div className="flex flex-col justify-center items-center md:mr-10 md:w-1/2 md:h-full px-6 md:pl-4 md:pr-8 text-left">
        <span className="text-5xl md:text-8xl font-bold font-[League_Spartan_Variable]">about</span>
        <p className="font-[Outfit_Variable] text-base md:text-xl font-light md:mt-5">
          Codaru is the place for you. It's a competitive spring hackathon run like a sports league.
          Anyone, any age and any skill level, can join and after giving a few details, you will be assigned to a team.
          From there you will work virtually to complete challenges with your teammates and secure victory (and maybe even fame).          
          The competition is flexible to fit your schedule (especially exams). 
          Each challenge lasts a week or more allowing you to contribute any time during the challenge to your team's success.
          Best of luck out there champ!
        </p>
      </div>
    </div>
  );
}