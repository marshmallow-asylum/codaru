"use client";

import React from "react";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import NavigationBar from "@/components/NavigationBar";
import TimelineSection from "@/components/TimelineSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import { IconQuestionMark, IconBook2 } from "@tabler/icons-react";

export default function Home() {
    const navigationItems = [
        {
            icon: <IconQuestionMark size={40} />,
            text: "frequently asked questions",
            href: "/faq",
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
                <title>Codaru</title>
            </Head>
            <HeroSection />
            <NavigationBar items={navigationItems} />
            <TimelineSection />
            <AboutSection />
            <TeamSection />{" "}
        </>
    );
}
