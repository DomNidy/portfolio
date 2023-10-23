"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import ThemeSwitcher from "./ThemeSwitcher";
import { useRouter } from "next/navigation";
import { AiOutlineGithub } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="flex px-12 p-2 w-full   z-10 justify-between items-center  bg-clip-border backdrop-blur bg-opacity-30 bg-zinc-100 dark:bg-black dark:bg-opacity-20 fixed ">
      <div className="flex md:w-80 gap-4 items-center">
        <h3 className="text-foreground dark:text-muted-foreground  dark:hover:text-foreground  font-semibold tracking-tight p-1 rounded-xl hover:bg-secondary cursor-pointer transition-all duration-100">
          Home
        </h3>
        <h3 className="text-foreground dark:text-muted-foreground  dark:hover:text-foreground  font-semibold tracking-tight p-1 rounded-xl hover:bg-secondary cursor-pointer transition-all duration-100">
          About Me
        </h3>
        <h3
          onClick={() => window.open("https://github.com/DomNidy")}
          className="text-3xl text-foreground dark:text-muted-foreground  dark:hover:text-foreground  font-semibold tracking-tight p-1 rounded-xl hover:bg-secondary cursor-pointer transition-all duration-100"
        >
          <AiOutlineGithub></AiOutlineGithub>
        </h3>
      </div>
      <ThemeSwitcher />
    </div>
  );
}
