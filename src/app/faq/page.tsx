"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from "@/lib/faq.json";
import Head from "next/head";
import { IconBook2, IconHome } from "@tabler/icons-react";
import NavigationBar from "@/components/NavigationBar";

export default function FAQPage() {
    const items = faqData.map((item: { question: string; answer: string }) => (
        <AccordionItem
            key={item.question}
            value={item.question}
            className="w-full py-2"
        >
            <AccordionTrigger className="text-[#5e8f4c] text-xl md:text-5xl w-full">
                {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#1b1d21] w-full text-lg md:text-2xl">
                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
            </AccordionContent>
        </AccordionItem>
    ));

    const navigationItems = [
        {
            icon: <IconHome size={40} />,
            text: "home",
            href: "/",
        },
        {
            icon: <IconBook2 size={40} />,
            text: "rulebook",
            href: "/rulebook",
        },
    ];

    return (
        <>
            <Head>
                <title>FAQ | codaru</title>
            </Head>
            <div className="flex relative justify-center md:justify-end items-start min-w-full min-h-screen overflow-hidden">
                <div className="mt-15 md:mt-0 grid grid-cols-2 gap-4 md:gap-8 p-3 md:p-10 w-full md:w-3/5 items-start z-1">
                    <div>
                        <Accordion type="multiple" className="w-full">
                            {items.slice(0, Math.ceil(items.length / 2))}
                        </Accordion>
                    </div>
                    <div>
                        <Accordion type="multiple" className="w-full">
                            {items.slice(Math.ceil(items.length / 2))}
                        </Accordion>
                    </div>
                </div>
                <div className="hidden md:flex fixed top-0 left-0 mt-15 w-full h-[100vh] items-start justify-start -z-0">
                    <img
                        className="w-1/2 -ml-15"
                        src="/assets/images/question.webp"
                        alt="retrofuturistic question mark adorned with flowers"
                    />
                </div>
            </div>

            <NavigationBar items={navigationItems} />
        </>
    );
}
