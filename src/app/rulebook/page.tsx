"use client";

import rules from "@/lib/rules.json";
import  Head  from "next/head";
import { IconQuestionMark, IconHome } from "@tabler/icons-react";
import NavigationBar from "@/components/NavigationBar";


export default function RulebookPage() {
    const items = rules.map((item: { name: string; description: string }, index: number) => (
        <div key={index} className="flex flex-col justify-center items-start w-full">
            <div className="flex justify-start items-center w-full relative">
                <span className="absolute top-0 left-0 mt-5 text-4xl md:text-8xl text-[#5e8f4c30] rounded-full border-[#5e8f4c30] border-4 border-solid w-12 h-12 md:w-25 md:h-25 flex justify-center items-center pt-1 md:pt-4">{index + 1}</span>
                <span className="text-2xl md:text-6xl ml-8 mt-10 md:ml-18 md:mt-16 flex-1 text-[#5e8f4c] font-[League_Spartan_Variable]">
                    {item.name}
                </span>
            </div>
            <span className="text-lg md:text-xl mt-3">
                {item.description}
            </span>
        </div>
    ));
    
    const navigationItems = [
        {
          icon: <IconHome size={40} />,
          text: "home",
          href: "/"
        },
        {
          icon: <IconQuestionMark size={40} />,
          text: "frequently asked questions",
          href: "/faq"
        }
      ];

    return (
        <>
            <Head>
                <title>Rulebook | codaru</title>
            </Head>
            <div className="mt-15 md:mt-0 flex relative justify-center items-center md:justify-end md:items-start min-w-full min-h-screen overflow-hidden">
                <div className="flex flex-col gap-4 p-3 md:p-10 w-full md:w-3/5 md:items-start items-center justify-center h-full z-1">
                    {items}
                </div>
                <div className="hidden md:flex fixed top-0 right-0 mt-15 w-full h-screen items-start justify-start -z-0">
                    <img
                      className="w-1/2 -ml-15"
                      src="/assets/images/rulebook.webp"
                      alt="retrofuturistic rulebook adorned with flowers"
                    />
                </div>
            </div>
            
            <NavigationBar items={navigationItems}/>
        </>
    );
}
