import { motion } from "motion/react";
import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4"
          >
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-white mb-4"
          >
            Technical <span className="text-blue-500">Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-xl"
          >
            A comprehensive overview of my specialized skill set in mobile development 
            and modern backend ecosystems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-4xl font-black text-white">{skill.level}%</span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>
                <Badge variant="outline" className="text-[10px] uppercase font-bold border-white/10 text-gray-500 group-hover:text-blue-300">
                  {skill.category}
                </Badge>
              </div>

              <div className="space-y-4">
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                  />
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 group-hover:text-blue-500 transition-colors">Proficiency Level</span>
                  <span className="text-gray-300 font-mono font-bold">{skill.level}%</span>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
