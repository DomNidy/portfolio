"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode } from "react-icons/md";
export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <MdOutlineDarkMode className="text-3xl hover:cursor-pointer"></MdOutlineDarkMode>
    </div>
  );
}
