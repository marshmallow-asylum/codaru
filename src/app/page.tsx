"use client"

import React from "react";
import Head from "next/head";
import Script from "next/script";
import faq from "@/lib/faq.json";
import { Accordion, Timeline, Text } from "@mantine/core";
import { IconMail, IconCoin, IconArrowRight, IconAi, IconForms, IconCode, IconLockOpen, IconBarbell, IconTrophy, IconMedal, IconMedal2 } from "@tabler/icons-react";
import { SignedOut, UserButton } from "@clerk/nextjs";

const teamMembers = [
  {
    name: "Sae-Jin Moon",
    title: "Director",
    description: "Mastermind of the competition.",
    image: "/assets/images/avatars/saejin.webp",
  },
  {
    name: "Dominic Rocco",
    title: "Director of Public Relations",
    description: "Handles all things PR and outreach.",
    image: "/assets/images/avatars/dom.webp",
  },
  {
    name: "Malav Patel",
    title: "Crisis Manager",
    description: "Manages any crises that arise during the competition.",
    image: "/assets/images/avatars/malav.webp",
  },
  {
    name: "Shriya Vasudevan",
    title: "Director of Operations",
    description: "Ensures the competition runs smoothly.",
    image: "/assets/images/avatars/shriya.webp",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Codaru</title>
      </Head>

      {/* Hero Section */}
      <div className="w-full md:h-screen flex flex-col md:flex-row justify-center items-center md:justify-around md:items-center font-[League_Spartan_Variable] relative">
        <img
          className="md:ml-[-5vw] h-3/4 object-contain"
          src="/assets/images/krakow.webp"
          alt="retrofuturistic computer adorned with flowers"
        />
        <div className="flex flex-col justify-center items-center h-full mt-5 md:mt-0">
          <div className="flex justify-center items-center">
            <img
              className="w-12 h-12 md:w-30 md:h-30 object-contain"
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
          <SignedOut>
            <a
              href="/sign-in"
              className="signup-button group mt-[1vh] bg-[#5e8f4c] h-[8vmin] rounded-[5px] flex justify-center items-center cursor-pointer relative overflow-hidden transition-colors w-[60%] text-[#f8f4dc] font-[Outfit_Variable] text-[5vmin] font-semibold active:bg-[#7e9f6c] active:transition-colors active:duration-300"
            >
              <span className="text absolute transition-transform duration-300 group-hover:translate-y-3/2 -mt-1">
                sign in
              </span>
              <IconArrowRight className="w-10 h-10 absolute transition-transform duration-300 transform -translate-y-4/2 group-hover:translate-y-0" />
            </a>
          </SignedOut>
        </div>
        <UserButton
          appearance={{
            elements: {
              rootBox: "absolute top-0 right-0 m-4",
              avatarImage: "w-15 h-15",
              avatarBox: "w-15 h-15",
            },
          }}
        />
      </div>

      {/* Timeline Section */}
      <div className="flex flex-col md:flex-row justify-center items-between md:justify-between md:items-center w-full my-5">
        <div className="flex justify-center items-center flex-1 p-4 md:p-8">
            <Timeline active={0} color="#5e8f4c" bulletSize={24} lineWidth={2} className="w-full md:w-3/4 h-full">
              <Timeline.Item bullet={<IconForms size={20} color="#f8f4dc"/>} className="text-[#5e8f4c] font-[Maple_Mono] text-lg md:text-xl" title="Registration">
              <div className="flex flex-col">
                <span className="text-[#7e9f6c] font-[Outfit_Variable] text-sm md:text-base">Contestants sign up for the competition, are drafted to a team, and prepare for the first challenge.</span>
                <span className="text-[#5e8f4c] font-[Outfit_Variable] font-bold text-sm md:text-base">March 24</span>
              </div>
              </Timeline.Item>
              <Timeline.Item bullet={<IconAi size={20} color="#5e8f4c"/>} className="text-[#5e8f4c] font-[Maple_Mono] text-lg md:text-xl" title="AI Challenge">
              <div className="flex flex-col">
                <span className="text-[#7e9f6c] font-[Outfit_Variable] text-sm md:text-base">Contestants will have to incorporate an AI-generated code snippet into their projects.</span>
                <span className="text-[#5e8f4c] font-[Outfit_Variable] font-bold text-sm md:text-base">March 31</span>
              </div>
              </Timeline.Item>
              <Timeline.Item bullet={<IconCode size={20} color="#5e8f4c"/>} className="text-[#5e8f4c] font-[Maple_Mono] text-lg md:text-xl" title="Under 1K Characters Challenge">
              <div className="flex flex-col">
                <span className="text-[#7e9f6c] font-[Outfit_Variable] text-sm md:text-base">Contestants will have to create their project in under 1000 characters.</span>
                <span className="text-[#5e8f4c] font-[Outfit_Variable] font-bold text-sm md:text-base">April 7</span>
              </div>
              </Timeline.Item>
              <Timeline.Item bullet={<IconLockOpen size={20} color="#5e8f4c"/>} className="text-[#5e8f4c] font-[Maple_Mono] text-lg md:text-xl" title="Escape Room Challenge">
              <div className="flex flex-col">
                <span className="text-[#7e9f6c] font-[Outfit_Variable] text-sm md:text-base">Contestants must solve a mystery by completing a series of coding puzzles.</span>
                <span className="text-[#5e8f4c] font-[Outfit_Variable] font-bold text-sm md:text-base">March 31</span>
              </div>
              </Timeline.Item>
              <Timeline.Item bullet={<IconBarbell size={20} color="#5e8f4c"/>} className="text-[#5e8f4c] font-[Maple_Mono] text-lg md:text-xl" title="Crossfit Challenge">
              <div className="flex flex-col">
                <span className="text-[#7e9f6c] font-[Outfit_Variable] text-sm md:text-base">Contestants will have to complete sections of a project's codebase and then hand it off to the next contestant.</span>
                <span className="text-[#5e8f4c] font-[Outfit_Variable] font-bold text-sm md:text-base">March 31</span>
              </div>
              </Timeline.Item>            
              <Timeline.Item bullet={<IconTrophy size={20} color="#5e8f4c"/>} className="text-[#5e8f4c] font-[Maple_Mono] text-lg md:text-xl" title="Finale">
                <div className="flex flex-col">
                <span className="text-[#7e9f6c] font-[Outfit_Variable] text-sm md:text-base">Contestants must collaborate with their entire team to create one grand project.</span>
                <span className="text-[#5e8f4c] font-[Outfit_Variable] font-bold text-sm md:text-base">March 31</span>
                </div>
              </Timeline.Item>
              <Timeline.Item bullet={<IconMedal2 size={20} color="#5e8f4c"/>} className="text-[#5e8f4c] font-[Maple_Mono] text-lg md:text-xl" title="Awards Ceremony">
                <div className="flex flex-col">
                <span className="text-[#7e9f6c] font-[Outfit_Variable] text-sm md:text-base">Awards will be given to the teams and contestants who outperformed their peers in various categories.</span>
                <span className="text-[#5e8f4c] font-[Outfit_Variable] font-bold text-sm md:text-base">March 31</span>
                </div>
              </Timeline.Item>
            </Timeline>
        </div>
        <img
          className="h-6/5 md:-mr-5 object-contain"
          src="/assets/images/clock.webp"
          alt="retrofuturistic clock adorned with flowers"
        />
      </div>

      {/* About Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full my-5">
        <img
          className="mt-5 h-3/4 md:w-1/2 md:ml-[-5vw] object-contain"
          src="/assets/images/compass.webp"
          alt="retrofuturistic compass adorned with flowers"
        />
        <div className="flex flex-col justify-center items-center md:w-1/2 md:h-full px-6 md:pl-4 md:pr-8 text-right">
          <span className="text-5xl md:text-8xl font-bold font-[League_Spartan_Variable]">
            about
          </span>
          <p className="font-[Outfit_Variable] text-base md:text-lg font-light md:mt-5">
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

      {/* FAQ Section */}
      {/*
      <div className="flex justify-between items-center w-full h-screen">
        <div className="flex justify-center items-center w-1/2 h-full flex-col px-[7.5vw] mr-[2.5vw] flex-1">
          <span className="text-[12vmin] font-bold font-[League_Spartan_Variable]">faq</span>
          <Accordion variant="separated" className="w-full">
            {faq.map((item, index) => (
                  <Accordion.Item key={index} value={item.question} bg="#5e8f4c" className="font-[Outfit_Variable] text-8">
                    <Accordion.Control c="#f8f4dc" className="font-bold">{item.question}</Accordion.Control>
                    <Accordion.Panel c="#f8f4dc" className="font-light">{item.answer}</Accordion.Panel>
                  </Accordion.Item>
            ))}
          </Accordion>
        </div>
        <img
          className="mr-[-2vw] object-contain"
          src="/assets/images/question.webp"
          alt="retrofuturistic question mark adorned with flowers"
        />
      </div>
      */}

      {/* Team Section */}
      <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-between md:justify-between md:items-center w-full my-5">
        <img
          className="md:-mr-100 md:w-2/3 h-3/4 object-contain"
          src="/assets/images/hive.webp"
          alt="retrofuturistic beehive adorned with flowers"
        />
        <div className="flex flex-col justify-center items-center flex-1 h-full">
          <span className="text-8xl font-bold font-[League_Spartan_Variable]">team</span>
          <div className="font-[Outfit_Variable] text-base md:text-lg flex flex-col justify-center items-start w-4/5 pt-4">
            {teamMembers.map((member, i) => (
              <div key={i} className="flex justify-center items-center w-full m-2">
                <div className="flex justify-center items-center rounded-full border-3">
                  <img
                    className="w-20 h-20 rounded-full object-cover"
                    src={member.image}
                    alt={`Team member ${member.name}`}
                  />
                </div>
                <div className="flex flex-col justify-center items-start ml-4 w-2/3">
                  <span>
                    <span className="font-bold">{member.name}</span> |{" "}
                    <span className="italic">{member.title}</span>
                  </span>
                  <span className="font-light">{member.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
