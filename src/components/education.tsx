"use client";

import { GraduationCap, Calendar, Award } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          title="Education"
          description="My academic background, foundational coursework, and formal training in computer science."
        />

        <div className="relative pl-8 sm:pl-10">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[13px] sm:left-[17px] top-3 bottom-3 w-px bg-border" />

          <div className="space-y-10">
            {education.map((item, i) => (
              <Reveal key={item.school} delay={i * 0.1} className="relative">
                {/* Timeline Icon Marker */}
                <div className="absolute -left-8 sm:-left-10 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-bg text-accent shadow-sm">
                  <GraduationCap size={14} />
                </div>

                <div className="rounded-2xl border border-border bg-bg p-6 hover:border-accent/40 transition-colors shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                      {item.degree}
                    </h3>
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-ink-faint">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-ink-muted">{item.school}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-xs font-medium text-accent">
                    <Award size={13} />
                    {item.meta}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
