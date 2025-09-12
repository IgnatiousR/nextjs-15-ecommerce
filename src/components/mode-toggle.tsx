"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button onClick={toggleTheme} className="relative flex items-center justify-center cursor-pointer">
      <Sun className={`h-4 w-4 transition-all ${theme === "dark" ? "scale-0 -rotate-90" : "scale-100 rotate-0"}`} />
      <Moon
        className={`absolute h-4 w-4 transition-all ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"}`}
      />
    </button>
    // <Button
    //   onClick={toggleTheme}
    //   variant="outline"
    //   size="icon"
    //   className="relative flex items-center justify-center"
    //   aria-label="Toggle theme"
    // >
    //   <Sun
    //     className={`h-[1.2rem] w-[1.2rem] transition-all ${
    //       theme === 'dark' ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'
    //     }`}
    //   />
    //   <Moon
    //     className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
    //       theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
    //     }`}
    //   />
    // </Button>
  );
}
