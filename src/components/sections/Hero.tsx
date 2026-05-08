import { motion, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

function InteractiveImage() {
  const { scrollYProgress } = useScroll();
  const radius = useTransform(scrollYProgress, [0, 0.2], ["2.5rem", "6rem"]);
  const tiltX = useTransform(scrollYProgress, [0, 0.3], [0, 10]);
  const tiltY = useTransform(scrollYProgress, [0, 0.3], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const baseRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const baseRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  // Combine scroll tilt with mouse rotate for desktop, just scroll tilt for mobile
  const rotateX = useTransform([baseRotateX, tiltX], ([rX, tX]) => (rX as number) + (tX as number));
  const rotateY = useTransform([baseRotateY, tiltY], ([rY, tY]) => (rY as number) + (tY as number));

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRelative = (e.clientX - rect.left) / width - 0.5;
    const mouseYRelative = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(mouseXRelative);
    mouseY.set(mouseYRelative);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center p-4 md:p-12 perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          borderRadius: radius,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[450px] aspect-[4/5] overflow-hidden shadow-2xl shadow-blue-500/20 group transition-all duration-700 ease-in-out"
      >
        {/* Background Glow Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/30 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Main Person Image */}
        <motion.div
          className="w-full h-full relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="images/aneesDp.png"
            alt="Anees - Flutter Developer"
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700"
          />
          {/* Inner Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-60" />
        </motion.div>

        {/* Dynamic Light Sweep Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>

        {/* Floating UI Elements (Parallax) */}
        <motion.div 
          style={{ transform: "translateZ(80px)" }}
          className="absolute top-6 md:top-10 left-6 md:left-10 bg-black/60 backdrop-blur-xl border border-white/20 p-2.5 md:p-4 rounded-xl md:rounded-2xl shadow-2xl flex items-center gap-2 md:gap-3"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs md:text-base">F</span>
          </div>
          <div>
            <p className="text-[8px] md:text-[10px] text-gray-400 uppercase font-black tracking-tighter">Expert In</p>
            <p className="text-xs md:text-sm font-bold text-white">Flutter Dev</p>
          </div>
        </motion.div>

        <motion.div 
          style={{ transform: "translateZ(60px)" }}
          className="absolute bottom-6 md:bottom-10 right-6 md:right-10 bg-indigo-600/90 backdrop-blur-md p-3 md:p-5 rounded-xl md:rounded-2xl border border-white/20 shadow-2xl"
        >
          <p className="text-[8px] md:text-[10px] font-bold text-white/80 uppercase tracking-[0.2em] mb-0.5 md:mb-1">Status</p>
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] md:text-sm font-black text-white uppercase">Building Apps</span>
          </div>
        </motion.div>

        {/* Decorative Internal Border on Hover */}
        <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 rounded-[1.5rem] transition-all duration-500 pointer-events-none scale-110 group-hover:scale-100" />
      </motion.div>

      {/* Background Floating Nodes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-24 h-24 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            top: `${20 + i * 25}%`,
            left: `${10 + i * 30}%`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse transition-all delay-700" />

      <div className="container mx-auto px-6 flex flex-col md:grid md:grid-cols-2 items-center gap-12 z-10 pt-10 md:pt-0">
        {/* Image Container - Order 2 on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="order-2 md:order-2 h-[450px] md:h-[600px] w-full relative"
        >
          <InteractiveImage />
        </motion.div>

        {/* Text Column - Order 1 on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Available for hire</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-white mb-6 leading-[1.1]">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Anees</span>
          </h1>
          
          <div className="text-xl md:text-2xl font-sans font-medium text-gray-400 mb-8 h-12 md:h-16">
            <TypeAnimation
              sequence={[
                "Flutter Developer",
                2000,
                "Cross Platform Engineer",
                2000,
                "Mobile UI/UX Specialist",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
            I craft ultra-smooth, high-performance mobile applications with artistic UI and cutting-edge features.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full group px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hire Me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 px-8">
              <Download className="mr-2 w-4 h-4" />
              Resume
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-gray-400 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-gray-400 hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-gray-400 hover:text-white">
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
