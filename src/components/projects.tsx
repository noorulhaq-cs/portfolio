"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  // Shuru me 2 (ya 4) projects show hongay
  const [showAll, setShowAll] = useState(false);
  
  const INITIAL_COUNT = 4; // Isay 2 ya 4 apni marzi se set kar sakte hain
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Featured projects"
          description="A collection of projects and web applications I developed during my studies."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {visibleProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group h-full flex flex-col rounded-2xl border border-border bg-surface overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-black/[0.06] transition-[border-color,box-shadow]"
                >
                  <div className="relative h-48 w-full shrink-0 overflow-hidden border-b border-border bg-surface-2">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                    ) : (
                      <>
                        <div
                          className="absolute inset-0 opacity-50"
                          style={{
                            backgroundImage:
                              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                            backgroundSize: "24px 24px",
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display text-2xl font-semibold text-ink/15 group-hover:text-accent/25 transition-colors">
                            {project.title}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {project.tagline}
                    </p>
                    <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                      {project.description}
                    </p>

                    {project.features && (
                      <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
                        {project.features.map((f) => (
                          <li
                            key={f}
                            className="text-xs text-ink-muted before:content-['—'] before:mr-1.5 before:text-ink-faint"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-bg px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-3 mt-auto pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium hover:border-ink-faint transition-colors"
                      >
                        <Github size={13} />
                        GitHub
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-ink text-bg px-3.5 py-2 text-xs font-medium hover:opacity-90 transition-opacity"
                        >
                          Live Demo
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </AnimatePresence>
        </div>

        {/* View More / View Less Button */}
        {projects.length > INITIAL_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-2.5 text-sm font-medium text-ink hover:border-accent/50 hover:bg-surface-2 transition-all cursor-pointer"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  View More Projects ({projects.length - INITIAL_COUNT} more){" "}
                  <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}