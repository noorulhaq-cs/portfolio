"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading
          title="What I work with"
          description="A snapshot of the languages, frameworks, databases, and development tools I reach for most — organized systematically."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group h-full rounded-xl sm:rounded-2xl border border-border bg-bg p-3.5 sm:p-6 hover:border-accent/40 hover:shadow-xl hover:shadow-black/[0.04] transition-[border-color,box-shadow] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 border-b border-border/60 gap-1">
                    <h3 className="font-display font-semibold text-xs sm:text-base md:text-lg text-ink group-hover:text-accent transition-colors truncate">
                      {group.title}
                    </h3>
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-ink-faint shrink-0">
                      {group.items.length}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md sm:rounded-lg border border-border bg-surface px-1.5 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[10px] sm:text-xs font-medium text-ink-muted group-hover:border-border hover:!border-accent/50 hover:!text-ink hover:!bg-surface-2 transition-colors select-none"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
