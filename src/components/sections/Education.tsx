"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiAward, FiCheckCircle } from "react-icons/fi";

const education = [
  {
    institution: "Amrita Vishwa Vidyapeetham",
    degree: "B.Tech in Computer Science and Engineering",
    year: "2022 — 2026",
    location: "CHENNAI, INDIA",
    description: "Currently pursuing advanced studies in software architecture, distributed systems, and modern web technologies.",
    courses: ["Software Engineering", "DSA", "System Design", "Cloud Computing"]
  },
  {
    institution: "National Infotech College",
    degree: "12th Standard",
    year: "2019 — 2021",
    location: "BIRGUNJ, NEPAL",
    description: "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.",
    courses: ["Physics", "Mathematics", "Computer Science"]
  }
];

const certifications = [
  { title: "AWS Solutions Architect", issuer: "Amazon Web Services", date: "2023" },
  { title: "Meta Frontend Specialist", issuer: "Meta", date: "2022" },
  { title: "Full Stack Masterclass", issuer: "Udemy", date: "2021" }
];

export function Education() {
  return (
    <section id="education" className="py-32 relative overflow-hidden bg-background">
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(var(--primary-rgb),0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-8"
          >
             <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Academic Foundation</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-6">
            Knowledge <span className="text-primary italic">Base.</span>
          </h2>
          <p className="text-sm md:text-base text-foreground/40 font-medium max-w-lg mx-auto">
            A continuous journey of academic excellence and specialized technical certification.
          </p>
        </div>

        <div className="space-y-12">
          {/* Main Degree Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 md:p-14 rounded-[3.5rem] border-2 border-foreground/5 bg-background/50 backdrop-blur-3xl flex flex-col items-center text-center group hover:border-primary/20 transition-all duration-700 shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-10 group-hover:scale-110 transition-transform duration-500">
                  <FiBookOpen />
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">{edu.year}</span>
                    <span className="text-[8px] font-black text-foreground/20 uppercase tracking-[0.2em]">{edu.location}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <h4 className="text-base md:text-lg text-foreground/40 font-bold italic">at {edu.institution}</h4>
                </div>

                <p className="text-xs md:text-sm text-foreground/50 leading-relaxed font-medium mb-10">
                  {edu.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  {edu.courses.map((course) => (
                    <span key={course} className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/5 text-[9px] font-black uppercase tracking-widest text-foreground/30 group-hover:border-primary/10 transition-all">
                      {course}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="pt-16">
            <div className="mb-12 text-center">
              <h4 className="text-xs font-black uppercase tracking-[0.6em] text-foreground/20">Specialized Credentials</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 rounded-[2.5rem] border-2 border-foreground/5 group hover:border-primary/30 transition-all duration-500 bg-background/30 backdrop-blur-xl flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center text-foreground/20 group-hover:text-primary group-hover:bg-primary/10 transition-all mb-6">
                    <FiAward size={24} />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-lg font-black tracking-tight leading-tight group-hover:text-primary transition-colors">{cert.title}</h5>
                    <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">{cert.issuer}</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-foreground/5 w-full">
                    <span className="text-[9px] font-black text-foreground/20 uppercase tracking-widest">Achieved {cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
