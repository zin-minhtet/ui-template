import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "@/context/ThemeProvider";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Headbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-[50px] px-2 flex items-center top-0 sticky bg-header ">
      <SidebarTrigger className="size-7 [&>*]:!size-5 hover:bg-white/70 dark:hover:bg-white/10" />
      <div className="w-full mx-2 flex items-center justify-between">
        <h1 className="font-bold text-xl text-slate-700 dark:text-slate-300">
          App
        </h1>

        <Button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          variant="ghost"
          className="rounded-full bg-sidebar-foreground/10"
          size="icon"
        >
          {theme === "light" ? (
            <MoonIcon className="size-4" />
          ) : (
            <SunIcon className="size-5" />
          )}
        </Button>
      </div>
    </div>
  );
}
