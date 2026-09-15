"use client";

import { MapPin, GraduationCap, BadgeCheck, Check } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { aboutHighlights, profile } from "@/lib/data";

const facts = [
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: GraduationCap, label: "Degree", value: profile.degree },
  { icon: BadgeCheck, label: "Status", value: profile.status },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="About me"
          description="A quick overview of my engineering philosophy, technical background, and what drives my development journey."
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          <Reveal delay={0.05}>
            <p className="text-base sm:text-lg leading-relaxed text-ink">
              I am a detail-oriented Computer Science graduate with practical experience building responsive, scalable web applications and management systems. I have a strong foundation in modern full-stack development, leveraging reliable data structures and robust logic to solve real-world problems. For me, writing code is about creating solutions that are neat, modular, and easy to maintain.
            </p>
            <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed">
              Most of my project work revolves around integration—whether it&apos;s designing secure user authentication pipelines, managing databases like MySQL and PostgreSQL, or implementing real-time simulators. I am a quick learner who enjoys diving into both backend architecture and frontend interface polish, always keeping code reusability in mind.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {aboutHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted leading-snug"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="space-y-4">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 hover:border-accent/40 hover:shadow-lg hover:shadow-black/[0.03] transition-all"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent group-hover:scale-105 transition-transform">
                  <fact.icon size={20} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                    {fact.label}
                  </p>
                  <p className="font-display font-semibold text-ink sm:text-base mt-0.5">
                    {fact.value}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
