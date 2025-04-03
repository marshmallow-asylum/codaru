"use client"

import React from "react";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import NavigationBar from "@/components/NavigationBar";
import TimelineSection from "@/components/TimelineSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codaru</title>
      </Head>
      <HeroSection />
      <NavigationBar />
      <TimelineSection />
      <AboutSection />
      <TeamSection />
    </>
  );
}