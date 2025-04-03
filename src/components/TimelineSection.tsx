import React from "react";
import { Timeline } from "@mantine/core";
import { 
  IconForms, 
  IconAi, 
  IconCode, 
  IconLockOpen, 
  IconBarbell, 
  IconTrophy, 
  IconMedal2 
} from "@tabler/icons-react";

interface TimelineEventProps {
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
}

const timelineEvents: TimelineEventProps[] = [
  {
    title: "Registration",
    description: "Contestants sign up for the competition, are drafted to a team, and prepare for the first challenge.",
    date: "March 24",
    icon: <IconForms size={20} />
  },
  {
    title: "AI Challenge",
    description: "Contestants will have to incorporate an AI-generated code snippet into their projects.",
    date: "April 14",
    icon: <IconAi size={20} color="#5e8f4c" />
  },
  {
    title: "Crossfit Challenge",
    description: "Contestants will have to complete sections of a project's codebase and then hand it off to the next contestant.",
    date: "April 21",
    icon: <IconBarbell size={20} color="#5e8f4c" />
  },
  {
    title: "Under 1K Characters Challenge",
    description: "Contestants will have to create their project in under 1000 characters.",
    date: "April 28",
    icon: <IconCode size={20} color="#5e8f4c" />
  },
  {
    title: "Escape Room Challenge",
    description: "Contestants must solve a mystery by completing a series of coding puzzles.",
    date: "May 1",
    icon: <IconLockOpen size={20} color="#5e8f4c" />
  },
  {
    title: "Finale",
    description: "Contestants must collaborate with their entire team to create one grand project.",
    date: "May 5",
    icon: <IconTrophy size={20} color="#5e8f4c" />
  },
  {
    title: "Awards Ceremony",
    description: "Awards will be given to the teams and contestants who outperformed their peers in various categories.",
    date: "May 26",
    icon: <IconMedal2 size={20} color="#5e8f4c" />
  }
];

export default function TimelineSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-between md:justify-between md:items-center w-full my-5 overflow-x-hidden">
      <div className="flex justify-center items-center flex-1 p-4 md:p-8">
        <Timeline active={0} color="#5e8f4c" bulletSize={24} lineWidth={2} className="w-full md:w-3/4 h-full" autoContrast={true}>
          {timelineEvents.map((event, index) => (
            <Timeline.Item 
              key={index}
              bullet={event.icon} 
              className="text-[#5e8f4c] font-[Maple_Mono] text-lg md:text-xl"
              title={event.title}
            >
              <div className="flex flex-col">
                <span className="text-[#7e9f6c] font-[Outfit_Variable] text-sm md:text-base">
                  {event.description}
                </span>
                <span className="text-[#5e8f4c] font-[Outfit_Variable] font-bold text-sm md:text-base">
                  {event.date}
                </span>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
      <img
        className="h-6/5 md:-mr-5 object-contain"
        src="/assets/images/clock.webp"
        alt="retrofuturistic clock adorned with flowers"
      />
    </div>
  );
}