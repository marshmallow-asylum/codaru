import React from "react";

interface NavItem {
  icon: React.ReactNode;
  text: string;
  href: string;
}

export default function NavigationBar({ items }: { items: NavItem[] }) {
  return (
    <div className="fixed w-full h-full top-0 left-0 flex justify-center items-start md:justify-start md:items-center pointer-events-none z-100">
        <div className="flex flex-row md:flex-col mt-5 md:mt-0 md:ml-5 py-0 md:py-2 items-start backdrop-blur-[2px] rounded-lg z-1 bg-[#5e8f4cc0] border-[#5e8f4c] border-3 hover:bg-[#5e8f4ce0] transition-colors duration-300 pointer-events-auto">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group text-[#f8f4dcc0] flex items-center cursor-pointer transition-colors font-[Maple_Mono] font-semibold hover:text-[#f8f4dc] active:transition-colors active:duration-300 px-2 py-2 relative text-xl"
            >
              {item.icon}
              <span className="
                hidden md:block
                absolute left-full top-1/2 -translate-y-1/2
                px-3 py-2
                bg-[#5e8f4ce0] backdrop-blur-[2px] text-[#f8f4dc] rounded-r-sm whitespace-nowrap

                // --- Initial State ---
                max-w-0 overflow-hidden opacity-0 pointer-events-none

                // --- Transition Properties ---
                transition-all duration-500 ease-in-out

                // --- Hover State ---
                group-hover:max-w-sm group-hover:opacity-100 group-hover:pointer-events-auto
              ">
                  {item.text}
              </span>
            </a>
          ))}
        </div>
    </div>
  );
}