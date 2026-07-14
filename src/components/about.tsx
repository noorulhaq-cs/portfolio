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
        <SectionHeading title="About me" />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-ink">
              I am a detail-oriented Computer Science graduate with some practical experience building responsive, scalable web applications and management systems. I have a strong foundation in modern full-stack development, leveraging reliable data structures and robust logic to solve real-world problems. For me, writing code is about creating solutions that are neat, modular, and easy to maintain.
            </p>
            <p className="mt-5 text-ink-muted leading-relaxed">
              Most of my project work revolves around integration—whether it's designing secure user authentication pipelines, managing databases like MySQL and PostgreSQL, or implementing real-time simulators. I am a quick learner who enjoys diving into both backend architecture and frontend interface polish, always keeping code reusability in mind.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {aboutHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-ink-muted"
                >
                  <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="space-y-4">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 hover:border-accent/40 transition-colors"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-accent">
                  <fact.icon size={18} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                    {fact.label}
                  </p>
                  <p className="font-medium text-ink">{fact.value}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
