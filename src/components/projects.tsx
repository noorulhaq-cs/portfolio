"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ChevronDown, ChevronUp, Code2 } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  const INITIAL_COUNT = 4;
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  const handleImageError = (slug: string) => {
    setBrokenImages((prev) => ({ ...prev, [slug]: true }));
  };

  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading
          title="Featured projects"
          description="A collection of web applications, full-stack platforms, and software systems I developed during my studies and personal practice."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="group h-full flex flex-col rounded-xl sm:rounded-2xl border border-border bg-surface overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-black/[0.05] transition-[border-color,box-shadow]"
                >
                  {/* Project Image Banner */}
                  <div className="relative h-28 sm:h-52 w-full shrink-0 overflow-hidden border-b border-border bg-surface-2 flex items-center justify-center">
                    {project.image && !brokenImages[project.slug] ? (
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        onError={() => handleImageError(project.slug)}
                        className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 p-3 sm:p-6 text-ink-faint">
                        <Code2 size={24} className="text-accent/60 sm:hidden" />
                        <Code2 size={32} className="text-accent/60 hidden sm:block" />
                        <span className="font-display text-xs sm:text-lg font-semibold text-ink/40 text-center line-clamp-1">
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="flex flex-1 flex-col p-3 sm:p-6">
                    <h3 className="font-display text-xs sm:text-xl font-semibold text-ink group-hover:text-accent transition-colors line-clamp-1 sm:line-clamp-none">
                      {project.title}
                    </h3>
                    <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-sm font-medium text-accent line-clamp-1">
                      {project.tagline}
                    </p>
                    <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm text-ink-muted leading-relaxed line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                      {project.description}
                    </p>

                    {project.features && (
                      <ul className="mt-3 sm:mt-4 hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                        {project.features.map((f) => (
                          <li
                            key={f}
                            className="text-xs text-ink-muted before:content-['—'] before:mr-1.5 before:text-accent"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Badges */}
                    <div className="mt-3 sm:mt-5 flex flex-wrap gap-1 sm:gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded sm:rounded-md border border-border bg-bg px-1.5 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[9px] sm:text-[11px] text-ink-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-1.5 sm:gap-3 mt-auto pt-2.5 sm:pt-4 border-t border-border/60">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-border bg-bg hover:bg-surface-2 px-2.5 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-medium text-ink transition-colors"
                      >
                        <Github size={11} className="sm:hidden" />
                        <Github size={13} className="hidden sm:inline" />
                        GitHub
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View live demo of ${project.title}`}
                          className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-ink text-bg px-2.5 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-medium hover:opacity-90 active:scale-95 transition-all shadow-sm"
                        >
                          Live Demo
                          <ArrowUpRight size={11} className="sm:hidden" />
                          <ArrowUpRight size={13} className="hidden sm:inline" />
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
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              aria-label={showAll ? "Show fewer projects" : "View more projects"}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-ink hover:border-accent/50 hover:bg-surface-2 active:scale-95 transition-all cursor-pointer shadow-sm"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={15} />
                </>
              ) : (
                <>
                  View More Projects ({projects.length - INITIAL_COUNT} more){" "}
                  <ChevronDown size={15} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}