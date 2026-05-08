import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 inline-block"
            >
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Selected Work</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-white"
            >
              Featured <span className="text-blue-500">Case Studies</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="link" className="text-blue-400 p-0 text-lg hover:text-blue-300">
              View all 20+ projects
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 aspect-video mb-6">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
                />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-black/40 backdrop-blur-sm">
                  <div className="flex gap-4">
                    <Button size="icon" className="rounded-full bg-white text-black hover:bg-gray-200">
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button size="icon" className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 2).map((t) => (
                    <Badge key={t} className="bg-black/80 backdrop-blur-md border hover:bg-black/90 border-white/20 text-[10px] uppercase font-bold">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="px-2">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.features.slice(0, 2).map((feature) => (
                    <div key={feature} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-[11px] text-gray-400 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
