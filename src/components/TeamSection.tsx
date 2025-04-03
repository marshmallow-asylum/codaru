import React from "react";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
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

export default function TeamSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-between md:justify-between md:items-center w-full my-5 overflow-x-hidden">
      <img
        className="md:-mr-100 md:w-2/3 h-3/4 object-contain"
        src="/assets/images/hive.webp"
        alt="retrofuturistic beehive adorned with flowers"
      />
      <div className="flex flex-col justify-center items-center flex-1 h-full">
        <div className="font-[Outfit_Variable] text-base md:text-lg flex flex-col justify-center items-start w-4/5 pt-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="flex justify-center items-center w-full m-2">
      <div className="flex justify-center items-center rounded-full border-3 border-[#5e8f4c]">
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
  );
}