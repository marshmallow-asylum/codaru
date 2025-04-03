"use client";

import { Accordion } from "@mantine/core";
import faqData from "@/lib/faq.json";
import  Head  from "next/head";

export default function FAQPage() {
    const items = faqData.map((item: { question: string; answer: string }) => (
        <Accordion.Item key={item.question} value={item.question} className="bg-[#5e8f4c] w-full">
            <Accordion.Control className="text-[#f8f4dc] bg-[#5e8f4c] w-full">{item.question}</Accordion.Control>
            <Accordion.Panel className="text-[#f8f4dc] bg-[#5e8f4c] w-full">{item.answer}</Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <>
            <Head>
                <title>FAQ | codaru</title>
            </Head>
            <div className="flex justify-center items-center mt-5">
                <a className="flex items-center justify-center mb-5" href="/">
                    <img
                        className="w-15 h-15 mr-5"
                        src="/assets/images/logo.svg"
                        alt="codaru logo"
                    />
                    <span className="font-[League Spartan Variable] text-5xl font-bold">codaru</span>
                </a>
            </div>
            <div className="flex flex-col justify-center items-center min-w-full min-h-screen">
                <div className="flex flex-col justify-center items-center m-2">
                    <span className="font-[League_Spartan_Variable] text-4xl font-bold">faq</span>
                    <span className="font-[Outfit_Variable] text-lg font-light">Frequently Asked Questions</span>
                </div>
                <div className="flex items-center justify-center py-10 w-4/5 md:w-3/5">
                    <Accordion variant="separated" className="w-full">
                        {items}
                    </Accordion>
                </div>
            </div>
        </>
    );
}
