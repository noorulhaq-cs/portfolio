"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { achievements, experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Experience"
          description="As a fresh graduate, my experience comes from building real, complete projects — not just coursework."
        />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
          <div className="relative pl-8">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-8">
              {experience.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08} className="relative">
                  <div className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-bg text-accent">
                    <Code2 size={12} />
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-base font-semibold text-ink">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs text-ink-faint">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border bg-surface p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles size={16} className="text-accent" />
                <h3 className="font-display font-semibold text-ink">
                  Achievements
                </h3>
              </div>
              <ul className="space-y-3">
                {achievements.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="flex items-start gap-2.5 text-sm text-ink-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
