
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ 
          rotate: theme === "dark" ? 0 : 180,
          opacity: theme === "dark" ? 1 : 0,
          scale: theme === "dark" ? 1 : 0.5,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon size={18} />
      </motion.div>
      <motion.div
        animate={{ 
          rotate: theme === "light" ? 0 : -180,
          opacity: theme === "light" ? 1 : 0,
          scale: theme === "light" ? 1 : 0.5,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun size={18} />
      </motion.div>
    </Button>
  )
}
