import React from "react";
import { IconQuestionMark, IconBook2 } from "@tabler/icons-react";

export default function NavigationBar() {
  return (
    <div className="mt-5 md:mt-0 sticky top-5 p-2 flex justify-start items-center md:text-4xl text-xl backdrop-blur-[2px] rounded-lg z-1 bg-[#f8f4dca0]">
      <NavLink href="/faq" icon={<IconQuestionMark size={40}/>} text="faq" />
      <NavLink href="/rules" icon={<IconBook2 size={40}/>} text="rules" />
    </div>
  );
}

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

function NavLink({ href, icon, text }: NavLinkProps) {
  return (
    <a
      href={href}
      className="group text-[#5e8f4c] mx-4 flex justify-center items-center cursor-pointer relative overflow-hidden transition-colors font-[Maple_Mono] font-semibold hover:text-[#7e9f6c] active:transition-colors active:duration-300"
    >
      <div className="absolute transition-transform duration-300 transform -translate-x-4/2 group-hover:translate-x-0">
        {icon}
      </div>
      <span className="transition-transform duration-300 group-hover:translate-x-3/2 -mt-1">
        {text}
      </span>
    </a>
  );
}