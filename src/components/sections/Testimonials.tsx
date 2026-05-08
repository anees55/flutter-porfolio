import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4 inline-block"
          >
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Feedback</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-white"
          >
            Client <span className="text-amber-400">Voices</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-white/5 border-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden group hover:border-amber-500/20 transition-all h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-amber-500 opacity-50" />
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 italic flex-grow">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-bold text-white uppercase">
                      {testimonial.name.slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
