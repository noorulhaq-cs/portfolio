"use client";

import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading title="Education" />

        <div className="relative pl-8">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-10">
            {education.map((item, i) => (
              <Reveal key={item.school} delay={i * 0.1} className="relative">
                <div className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-bg text-accent">
                  <GraduationCap size={13} />
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-xs text-ink-faint">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-ink-muted">{item.school}</p>
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.meta}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
