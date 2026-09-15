"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  Eye,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { certificates, type Certificate, type CertificateCategory } from "@/lib/data";

const CATEGORIES: CertificateCategory[] = [
  "All",
  "Specialization",
  "Data & AI",
  "AI & Prompting",
  "Development",
  "Finance",
];

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState<CertificateCategory>("All");
  const [showAll, setShowAll] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  const filteredCertificates = certificates.filter((cert) => {
    if (selectedCategory === "All") return true;
    return cert.category === selectedCategory;
  });

  const INITIAL_COUNT = 6;
  const visibleCertificates =
    showAll || selectedCategory !== "All"
      ? filteredCertificates
      : filteredCertificates.slice(0, INITIAL_COUNT);

  const activeIndex = activeCertificate
    ? filteredCertificates.findIndex((c) => c.id === activeCertificate.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      setActiveCertificate(filteredCertificates[activeIndex - 1]);
    } else {
      setActiveCertificate(filteredCertificates[filteredCertificates.length - 1]);
    }
  }, [activeIndex, filteredCertificates]);

  const handleNext = useCallback(() => {
    if (activeIndex < filteredCertificates.length - 1) {
      setActiveCertificate(filteredCertificates[activeIndex + 1]);
    } else {
      setActiveCertificate(filteredCertificates[0]);
    }
  }, [activeIndex, filteredCertificates]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeCertificate) return;
      if (e.key === "Escape") setActiveCertificate(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCertificate, handlePrev, handleNext]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (activeCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeCertificate]);

  const handleImageError = (id: string) => {
    setBrokenImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="certificates" className="section-pad">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading
          title="Certifications & Credentials"
          description="Verified professional specializations, course completions, and technical credentials from Google, Meta, Microsoft Learn, and PSX."
        />

        {/* Category Tabs */}
        <div
          role="tablist"
          aria-label="Filter certificates by category"
          className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10"
        >
          {CATEGORIES.map((category) => {
            const count =
              category === "All"
                ? certificates.length
                : certificates.filter((c) => c.category === category).length;
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAll(false);
                }}
                className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-medium transition-all cursor-pointer select-none ${
                  isSelected
                    ? "bg-ink text-bg shadow-sm"
                    : "border border-border bg-surface text-ink-muted hover:border-accent/40 hover:text-ink"
                }`}
              >
                {category === "Specialization" && (
                  <Sparkles size={12} className="text-amber-500 shrink-0" />
                )}
                {category}
                <span
                  className={`rounded-full px-1.5 py-0.2 font-mono text-[9px] sm:text-[10px] ${
                    isSelected
                      ? "bg-bg/20 text-bg"
                      : "bg-surface-2 text-ink-faint"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificate Cards Grid - 2 columns on mobile */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visibleCertificates.map((cert, i) => (
              <Reveal key={cert.id} delay={i * 0.05}>
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="group h-full flex flex-col rounded-xl sm:rounded-2xl border border-border bg-surface overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-black/[0.05] transition-[border-color,box-shadow]"
                >
                  {/* Certificate Thumbnail with Hover Overlay */}
                  <div
                    onClick={() => setActiveCertificate(cert)}
                    className="relative h-28 sm:h-48 w-full cursor-pointer shrink-0 overflow-hidden border-b border-border bg-surface-2 flex items-center justify-center"
                  >
                    {!brokenImages[cert.id] ? (
                      <img
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        onError={() => handleImageError(cert.id)}
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-1 p-3 sm:p-6 text-ink-faint">
                        <Award size={24} className="text-accent/60 sm:hidden" />
                        <Award size={32} className="text-accent/60 hidden sm:block" />
                        <span className="font-display text-[10px] sm:text-sm font-semibold text-ink/50 text-center line-clamp-1">
                          {cert.title}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-surface/90 backdrop-blur-md px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-xs font-medium text-ink opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                        <Eye size={12} className="sm:hidden" />
                        <Eye size={14} className="hidden sm:inline" />
                        View
                      </span>
                    </div>

                    {/* Specialization Badge */}
                    {cert.category === "Specialization" && (
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center gap-1 rounded-full bg-amber-500/90 backdrop-blur-md px-1.5 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[9px] sm:text-[10px] font-medium text-white shadow-sm">
                        <Sparkles size={10} />
                        <span className="hidden sm:inline">Specialization</span>
                        <span className="sm:hidden">Spec</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-3 sm:p-5">
                    <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-2">
                      <span className="font-mono text-[10px] sm:text-[11px] font-medium text-accent truncate">
                        {cert.issuer}
                      </span>
                      {cert.issueDate && (
                        <span className="font-mono text-[9px] sm:text-[11px] text-ink-faint shrink-0">
                          {cert.issueDate}
                        </span>
                      )}
                    </div>

                    <h3
                      onClick={() => setActiveCertificate(cert)}
                      className="font-display text-xs sm:text-base font-semibold text-ink group-hover:text-accent transition-colors cursor-pointer line-clamp-2"
                      title={cert.title}
                    >
                      {cert.title}
                    </h3>

                    {/* Skills / Tags */}
                    <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-1.5">
                      {cert.skills.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="rounded border border-border bg-bg px-1.5 py-0.5 sm:px-2 sm:py-0.5 font-mono text-[9px] sm:text-[10px] text-ink-muted truncate max-w-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 2 && (
                        <span className="rounded border border-border bg-surface-2 px-1 py-0.5 font-mono text-[9px] sm:text-[10px] text-ink-faint">
                          +{cert.skills.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-3 sm:mt-5 flex items-center gap-1 sm:gap-2 pt-2 sm:pt-3 border-t border-border/60 mt-auto">
                      <button
                        onClick={() => setActiveCertificate(cert)}
                        aria-label={`Preview ${cert.title}`}
                        className="flex-1 inline-flex items-center justify-center gap-1 rounded-md sm:rounded-lg border border-border bg-bg hover:bg-surface-2 px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-medium text-ink transition-colors cursor-pointer"
                      >
                        <Eye size={11} className="sm:hidden" />
                        <Eye size={13} className="hidden sm:inline" />
                        Preview
                      </button>

                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Verify ${cert.title} credential on ${cert.organization || 'Coursera'}`}
                          className="inline-flex items-center justify-center gap-0.5 sm:gap-1 rounded-md sm:rounded-lg border border-accent/20 bg-accent/10 hover:bg-accent/20 px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-medium text-accent transition-colors"
                          title="Verify Credential"
                        >
                          <span className="hidden sm:inline">Verify</span>
                          <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / View Less Button */}
        {selectedCategory === "All" && filteredCertificates.length > INITIAL_COUNT && (
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              aria-label={showAll ? "Show fewer certificates" : "View all certificates"}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-ink hover:border-accent/50 hover:bg-surface-2 active:scale-95 transition-all cursor-pointer shadow-sm"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={15} />
                </>
              ) : (
                <>
                  View All Certificates ({filteredCertificates.length - INITIAL_COUNT} more){" "}
                  <ChevronDown size={15} />
                </>
              )}
            </button>
          </div>
        )}

        {/* Fullscreen Interactive Lightbox Modal */}
        <AnimatePresence>
          {activeCertificate && (
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-modal-title"
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCertificate(null)}
                className="absolute inset-0 bg-ink/80 backdrop-blur-md"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-border bg-surface overflow-hidden shadow-2xl"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-border bg-surface">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <Award size={16} className="sm:hidden" />
                      <Award size={18} className="hidden sm:block" />
                    </div>
                    <div className="truncate">
                      <h3
                        id="certificate-modal-title"
                        className="font-display font-semibold text-sm sm:text-lg text-ink truncate"
                      >
                        {activeCertificate.title}
                      </h3>
                      <p className="font-mono text-[11px] sm:text-xs text-ink-muted">
                        {activeCertificate.issuer}
                        {activeCertificate.organization && ` · ${activeCertificate.organization}`}
                        {activeCertificate.issueDate && ` · ${activeCertificate.issueDate}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    {activeCertificate.verifyUrl && (
                      <a
                        href={activeCertificate.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-ink px-3 py-1.5 text-xs font-medium hover:opacity-90 transition-opacity"
                      >
                        Verify
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <button
                      onClick={() => setActiveCertificate(null)}
                      aria-label="Close certificate preview"
                      className="h-8 w-8 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-ink hover:border-ink-faint transition-colors cursor-pointer"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Modal Image Viewer with Next/Prev Controls */}
                <div className="relative flex-1 bg-black/40 flex items-center justify-center p-3 sm:p-6 overflow-hidden min-h-[240px] max-h-[62vh]">
                  <img
                    src={activeCertificate.image}
                    alt={activeCertificate.title}
                    className="max-h-[56vh] max-w-full object-contain rounded-lg shadow-xl"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrev}
                    aria-label="Previous certificate"
                    className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-surface/90 border border-border text-ink hover:bg-surface hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={handleNext}
                    aria-label="Next certificate"
                    className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-surface/90 border border-border text-ink hover:bg-surface hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* Modal Footer / Details */}
                <div className="px-4 sm:px-6 py-3 sm:py-3.5 border-t border-border bg-surface flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
                  <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                    <span className="text-[11px] sm:text-xs font-medium text-ink-muted mr-1">Skills:</span>
                    {activeCertificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 rounded border border-border bg-bg px-1.5 py-0.5 sm:px-2 sm:py-0.5 font-mono text-[10px] sm:text-[11px] text-ink-muted"
                      >
                        <CheckCircle2 size={10} className="text-accent" />
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 ml-auto">
                    {activeCertificate.verifyUrl && (
                      <a
                        href={activeCertificate.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="sm:hidden inline-flex items-center gap-1 text-[11px] text-accent font-medium"
                      >
                        Verify <ExternalLink size={10} />
                      </a>
                    )}
                    <span className="font-mono text-[11px] sm:text-xs text-ink-faint">
                      {activeIndex + 1} of {filteredCertificates.length}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
