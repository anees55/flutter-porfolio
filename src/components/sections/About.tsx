import { motion } from "motion/react";
import AboutCube from "@/components/three/AboutCube";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-12 md:gap-24">
          <div className="order-2 md:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-white mb-6 md:mb-8"
            >
              Building the Future of <br />
              <span className="text-blue-500">Mobile Experiences</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10"
            >
              {personalInfo.description} From complex state management to pixel-perfect UI development, 
              I specialize in creating apps that aren't just functional, but a joy to use. 
              My journey in Flutter development has been driven by a passion for clean code and high performance.
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
              {personalInfo.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-left"
                >
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}{stat.suffix}
                  </h3>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-semibold font-sans">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2 w-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl border border-white/5 p-6 md:p-8 relative group"
          >
            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-2xl group-hover:bg-blue-500/10 transition-colors" />
            <div className="relative h-[250px] md:h-[300px]">
              <AboutCube />
            </div>
            <div className="mt-6 md:mt-8 text-center">
              <p className="text-[10px] md:text-sm font-mono text-blue-400 uppercase tracking-widest">
                Interactive 3D Tech Stack
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
