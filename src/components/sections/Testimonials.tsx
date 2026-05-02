"use client";

import { motion } from "framer-motion";

const reviews = [
  { name: "John Doe", role: "CEO, TechFlow", comment: "Avishek is hands down the best developer I've worked with. His attention to detail is unmatched.", avatar: "JD" },
  { name: "Sarah Smith", role: "CTO, Innovate", comment: "The architectural depth he brings to frontend projects is rare. A true expert in React.", avatar: "SS" },
  { name: "Mike Ross", role: "Product Manager", comment: "Speed, quality, and incredible communication. Highly recommend for any scaling project.", avatar: "MR" },
  { name: "Anna Lee", role: "Designer, Figma", comment: "He translates designs into code with pixel perfection. A pleasure to collaborate with.", avatar: "AL" },
  { name: "David Kim", role: "Founder, GreenScale", comment: " Transformed our slow legacy app into a high-performance machine. Truly impressive.", avatar: "DK" },
  { name: "Elena Gray", role: "Engineering Lead", comment: "Built our design system from scratch. It's now used by over 50 engineers globally.", avatar: "EG" }
];

const ReviewCard = ({ review }: any) => (
  <div className="w-[400px] flex-shrink-0 glass p-8 rounded-[2.5rem] border border-foreground/5 shadow-xl mx-4 group hover:bg-foreground hover:text-background transition-all duration-500">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary group-hover:bg-white group-hover:text-black transition-colors">
        {review.avatar}
      </div>
      <div>
        <h4 className="font-bold tracking-tight">{review.name}</h4>
        <p className="text-xs font-bold uppercase tracking-widest opacity-40">{review.role}</p>
      </div>
    </div>
    <p className="text-lg font-medium leading-relaxed opacity-60 group-hover:opacity-90">
      &ldquo;{review.comment}&rdquo;
    </p>
  </div>
);

export function Testimonials() {
  return (
    <section className="py-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6 italic">Wall of <span className="text-primary">Love</span>.</h2>
        <p className="text-xl md:text-2xl text-foreground/40 font-medium">Kind words from partners and collaborators.</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1 - Left */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...reviews, ...reviews].map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...reviews, ...reviews].map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
