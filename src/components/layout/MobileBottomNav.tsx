import { motion, AnimatePresence } from "motion/react";
import { Home, User, Briefcase, Mail, History, Code } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const items = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Work", href: "#projects", icon: Briefcase },
  { name: "Exp", href: "#experience", icon: History },
  { name: "Me", href: "#contact", icon: Mail },
];

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrollingProgrammatically, setIsScrollingProgrammatically] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingProgrammatically) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      // Check if at bottom of page
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection("contact");
        return;
      }

      if (scrollPosition < 100) {
        setActiveSection("home");
        return;
      }

      const sectionPositions = items.map(item => {
        const id = item.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // We want to detect the section that is currently taking up most of the viewport
          // or is at the top of the viewport
          return {
            id,
            top: rect.top,
            bottom: rect.bottom,
            distance: Math.abs(rect.top - 100) // 100px offset for smoother transition
          };
        }
        return { id: null, top: Infinity, bottom: Infinity, distance: Infinity };
      });

      const closest = sectionPositions.reduce((prev, curr) => 
        curr.distance < prev.distance ? curr : prev
      );

      if (closest.id && closest.id !== activeSection) {
        setActiveSection(closest.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, isScrollingProgrammatically]);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const elem = document.getElementById(id);
    if (elem) {
      setIsScrollingProgrammatically(true);
      setActiveSection(id);
      
      elem.scrollIntoView({ behavior: "smooth" });
      
      // Reset after animation usually finishes
      setTimeout(() => {
        setIsScrollingProgrammatically(false);
      }, 1000);
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] md:hidden w-[95%] max-w-[380px]"
    >
      <div className="bg-white/5 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 rounded-[2rem] p-1 flex items-center justify-between gap-0.5 shadow-2xl shadow-blue-500/10">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);
          
          return (
            <motion.button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              whileTap={{ scale: 0.9 }}
              className={cn(
                "flex items-center justify-center p-2.5 rounded-2xl transition-all duration-300 relative flex-1 min-w-0",
                isActive ? "text-blue-400" : "text-gray-400 hover:text-gray-200"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-mobile-nav"
                  className="absolute inset-0 bg-blue-500/20 rounded-2xl"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                />
              )}
              <Icon className={cn("w-5 h-5 relative z-10", isActive && "fill-blue-400/10")} />
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
