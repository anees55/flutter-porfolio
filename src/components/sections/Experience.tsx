import { motion } from "motion/react";
import { Briefcase, GraduationCap, Code, Rocket } from "lucide-react";
import { experience } from "@/data/portfolio";

const icons = [Briefcase, Code, Rocket, GraduationCap];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4 inline-block"
          >
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Career Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-white"
          >
            Experience <span className="text-cyan-400">Timeline</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative px-4">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-600 opacity-20" />

          {experience.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isEven = i % 2 === 0;

            return (
              <div key={item.title} className="relative mb-16 md:mb-24 last:mb-0">
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-0 -translate-x-[7px] md:-translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 rounded-full bg-black border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  />
                </div>

                <div className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12'} md:text-${isEven ? 'left' : 'right'}`}
                  >
                    <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl hover:border-cyan-500/30 transition-all group relative overflow-hidden">
                      {/* Glow inside card */}
                      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                        <Icon className="w-16 h-16 text-cyan-400" />
                      </div>
                      
                      <span className="inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 text-[10px] font-bold rounded-full mb-3 uppercase tracking-tighter">
                        {item.period}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-gray-500 mb-4">{item.company}</p>
                      <p className="text-gray-400 text-sm leading-relaxed italic">
                        "{item.description}"
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
