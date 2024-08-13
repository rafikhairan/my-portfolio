import { cn } from "@/lib/utils.ts";
import { Link } from "react-scroll";
import React from "react";

type NavItem = {
  name: string;
  to: string;
  icon?: React.ReactNode;
};

const Navbar = () => {
  const navItems: NavItem[] = [
    {
      name: "About me",
      to: "about-me",
      icon: "😎",
    },
    {
      name: "Projects",
      to: "project",
      icon: "🧑‍💻",
    },
    {
      name: "Work Experiences",
      to: "work-experiences",
      icon: "💼",
    },
    {
      name: "Contact me",
      to: "contact-me",
      icon: "✉️",
    },
  ];

  return (
    <div className="fixed inset-x-0 top-5 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-10 rounded-full border border-white/[0.2] bg-transparent px-8 py-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm sm:space-x-4">
      {navItems.map((navItem, idx) => (
        <Link
          key={idx}
          to={navItem.to}
          smooth={true}
          offset={-75}
          className={cn(
            "relative flex cursor-pointer items-center hover:text-neutral-300",
          )}
        >
          <span className="block text-lg sm:hidden">{navItem.icon}</span>
          <span className="hidden text-base sm:block">{navItem.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
