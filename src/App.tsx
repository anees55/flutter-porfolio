import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/Navbar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import CustomCursor from "@/components/animations/CustomCursor";
import ScrollProgress from "@/components/animations/ScrollProgress";
import LoadingScreen from "@/components/animations/LoadingScreen";

export default function App() {
  return (
    <TooltipProvider>
      <div className="relative min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <MobileBottomNav />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Testimonials />
          <Contact />
        </main>

        <footer className="py-12 border-t border-white/5 bg-zinc-950">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Anees. Built with passion & Flutter mindset.
            </p>
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </footer>

        <Toaster richColors closeButton position="bottom-right" />
      </div>
    </TooltipProvider>
  );
}
