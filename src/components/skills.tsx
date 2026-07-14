"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="What I work with"
          description="A snapshot of the languages, frameworks, and tools I reach for most — organized the way a project's dependencies would be."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="h-full rounded-2xl border border-border bg-bg p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-black/[0.04] transition-[border-color,box-shadow]"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-semibold text-ink">
                    {group.title}
                  </h3>
                  <span className="font-mono text-[11px] text-ink-faint">
                    {(group as any).file}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
