import { motion } from "motion/react";
import { Mail, MapPin, Linkedin, Twitter, Github, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-white mb-6">
              Let's Build Something <br />
              <span className="text-blue-500">Extraordinary</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Have a revolutionary idea for a mobile app? or just want to say hi? 
              I'm always open to discussing new projects and creative opportunities.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Email Me</p>
                  <p className="text-white font-medium text-lg">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Based In</p>
                  <p className="text-white font-medium text-lg">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-white/5 p-8 md:p-12 rounded-[32px] relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10" />

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Your Name</label>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-black/40 border-white/5 h-14 rounded-xl focus:border-blue-500 transition-colors text-white" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-black/40 border-white/5 h-14 rounded-xl focus:border-blue-500 transition-colors text-white" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Project Message</label>
                <Textarea 
                  placeholder="Tell me about your amazing project..." 
                  className="bg-black/40 border-white/5 min-h-[150px] rounded-xl focus:border-blue-500 transition-colors text-white px-4 py-4" 
                />
              </div>

              <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-bold group shadow-lg shadow-blue-600/20">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="rounded-full border-green-500/30 text-green-500 hover:bg-green-500/10 hover:text-green-400 gap-2">
                <MessageSquare className="w-4 h-4" />
                Quick chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
