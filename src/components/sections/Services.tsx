import { motion } from "motion/react";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 inline-block"
          >
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">Solutions</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-white"
          >
            My Expert <span className="text-purple-400">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-zinc-900/50 border border-white/5 p-10 rounded-[32px] group relative overflow-hidden flex flex-col items-center text-center transition-all hover:bg-zinc-800"
              >
                {/* Glow behind icon */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-8 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-purple-400">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="mt-8 pt-8 border-t border-white/5 w-full flex justify-center">
                  <span className="text-xs font-bold text-purple-500 uppercase tracking-widest cursor-pointer hover:underline">
                    Learn More
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
