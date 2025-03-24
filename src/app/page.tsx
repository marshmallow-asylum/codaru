"use client"

import React from "react";
import Head from "next/head";
import Script from "next/script";
import faq from "@/lib/faq.json";
import { Accordion } from "@mantine/core";
import { Mail, ArrowRight, CircleDollarSign } from "lucide-react";
import { SignedOut, UserButton } from "@clerk/nextjs";

const teamMembers = [
  {
    name: "saejin",
    title: "director",
    description: "clown of the century.",
    image: "/assets/images/avatars/saejin.webp",
  },
  {
    name: "dominic",
    title: "director of public relations",
    description: "trapeze artist.",
    image: "/assets/images/avatars/dom.webp",
  },
  {
    name: "malav",
    title: "crisis manager",
    description: "juggler.",
    image: "/assets/images/avatars/malav.webp",
  },
  {
    name: "shriya",
    title: "director of operations",
    description: "emcee.",
    image: "/assets/images/avatars/shriya.webp",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Codaru</title>
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/gh/saejin-moon/ski.js@1.9.6/src/main.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/krakow.js"
        type="module"
        strategy="afterInteractive"
      />

      {/* Hero Section */}
      <div className="w-full h-screen flex justify-around items-center font-[League Spartan Variable] relative">
        <img
          className="ml-[-5vw] h-[75%] object-contain"
          src="/assets/images/krakow.webp"
          alt="retrofuturistic computer adorned with flowers"
        />
        <div className="flex flex-col justify-center items-center w-1/2 h-full">
          <div className="flex justify-center items-center">
            <img
              className="w-[12vmin] h-[12vmin] object-contain"
              src="/assets/images/logo.svg"
              alt="The logo for Codaru."
            />
            <span className="text-[12vmin] font-[League Spartan Variable] font-bold">
              codaru
            </span>
          </div>
          <span className="text-[5vmin] font-[League Spartan Variable]">
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
              <Mail color="#5e8f4c" className="h-9 w-9 mr-6" />
            </a>
            <a href="https://hcb.hackclub.com/donations/start/codaru">
              <CircleDollarSign color="#5e8f4c" className="h-9 w-9" />
            </a>
          </div>
          <SignedOut>
            <a
              href="/sign-in"
              className="signup-button group mt-[1vh] bg-[#5e8f4c] h-[8vmin] rounded-[5px] flex justify-center items-center cursor-pointer relative overflow-hidden transition-colors w-[60%] text-[#f8f4dc] font-[Outfit Variable] text-[5vmin] font-semibold active:bg-[#7e9f6c] active:transition-colors active:duration-300"
            >
              <span className="text absolute transition-transform duration-300 group-hover:translate-y-3/2">
                sign in
              </span>
              <ArrowRight className="w-10 h-10 absolute transition-transform duration-300 transform -translate-y-4/2 group-hover:translate-y-0" />
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
      <div className="flex justify-between items-center w-full h-screen">
        <canvas className="w-[65%] h-full ml-[-2.5%]">
          A timeline of the events of Codaru. The timeline winds around in a reverse S
          pattern. The events are represented by circles and connected to text boxes by
          dashed lines. The events are as follows: Avatar Challenge (March 17), AI
          Challenge (March 24), Under One Thousand Character Challenge (March 31),
          Escape Room Challenge (April 3), Crossfit Challenge (April 7), Finale (April
          14), and Awards Ceremony (April 28).
        </canvas>
        <img
          className="h-[120%] mr-[-5vw] object-contain"
          src="/assets/images/clock.webp"
          alt="retrofuturistic clock adorned with flowers"
        />
      </div>

      {/* About Section */}
      <div className="flex justify-between items-center w-full h-screen">
        <img
          className="w-1/2 ml-[-5vw] object-contain"
          src="/assets/images/compass.webp"
          alt="retrofuturistic compass adorned with flowers"
        />
        <div className="flex flex-col justify-center items-center w-1/2 h-full pl-[4vw] pr-[8vw] text-right">
          <span className="text-[12vmin] font-bold font-[League Spartan Variable]">
            about
          </span>
          <p className="font-[Outfit Variable] text-[3vmin] font-light">
            Codaru is an annual spring coding competition open to programmers of all ages
            and skill levels—from complete beginners to seasoned professionals. Held
            entirely online, the competition is designed to fit your schedule, with each
            challenge lasting a full week, allowing you to participate whenever it’s
            convenient. You’ll join one of six teams, working together with your teammates
            to take on challenges and compete against the others. Codaru’s mission is to
            provide an inclusive and engaging space where everyone can develop their skills
            and grow as programmers.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex justify-between items-center w-full h-screen">
        <div className="flex justify-center items-center w-1/2 h-full flex-col px-[7.5vw] mr-[2.5vw] flex-1">
          <span className="text-[12vmin] font-bold font-[League Spartan Variable]">faq</span>
          <Accordion variant="separated" className="w-full">
            {faq.map((item, index) => (
                  <Accordion.Item key={index} value={item.question} bg="#5e8f4c" className="font-[Outfit Variable] text-8">
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

      {/* Team Section */}
      <div className="flex justify-between items-center w-full h-screen">
        <img
          className="ml-[-15vw] w-2/3 object-contain"
          src="/assets/images/hive.webp"
          alt="retrofuturistic beehive adorned with flowers"
        />
        <div className="flex flex-col justify-center items-center flex-1 h-full">
          <span className="text-[12vmin] font-bold font-[League Spartan Variable]">team</span>
          <div className="font-[Outfit Variable] text-[2.5vmin] flex flex-col justify-center items-start w-4/5 pt-4">
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
