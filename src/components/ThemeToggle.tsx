import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground hover:text-primary 
                 transition-all duration-300 border border-border/50 hover:border-primary/50"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun size={18} className="transition-transform hover:rotate-45" />
      ) : (
        <Moon size={18} className="transition-transform hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
