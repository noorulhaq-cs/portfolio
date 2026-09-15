"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, User } from "lucide-react";
import { profile } from "@/lib/data";

const floatIcons = [
  { label: "TS", top: "6%", left: "6%", delay: 0 },
  { label: "</>", top: "68%", left: "0%", delay: 0.6 },
  { label: "{ }", top: "16%", left: "84%", delay: 0.3 },
  { label: "λ", top: "76%", left: "78%", delay: 0.9 },
  { label: "DB", top: "44%", left: "90%", delay: 1.2 },
];

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center pt-28 pb-16"
    >
      {/* Animated gradient / glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-bg" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-24 h-[440px] w-[440px] rounded-full bg-accent/20 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, -35, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-24 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[110px]"
        />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 65% 65% at 50% 40%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl w-full px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
        <div>
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1.5 text-xs font-mono text-accent mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {profile.status}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-ink"
          >
            Hi, I&apos;m{" "}
            <span className="relative inline-block text-accent">
              <span className="relative z-10">{profile.name}</span>
              <span className="absolute left-0 bottom-1.5 h-3 w-full bg-accent/15 -z-0 rounded-sm" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-mono text-sm sm:text-base text-ink-muted"
          >
            {profile.role} <span className="text-ink-faint">|</span>{" "}
            <span className="text-ink font-medium">{profile.stack}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 max-w-xl text-ink-muted leading-relaxed text-sm sm:text-base"
          >
            A Computer Science graduate eager to apply my academic foundation and project experience to real-world software solutions. Passionate about full-stack engineering, robust backend design, and building clean, responsive user interfaces.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink text-bg px-6 py-3 text-sm font-medium hover:opacity-95 active:scale-95 transition-all shadow-md shadow-black/5"
            >
              View Projects
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-ink hover:border-accent/50 hover:bg-surface-2 active:scale-95 transition-all"
            >
              <Download size={15} />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-ink-muted hover:text-accent transition-colors"
            >
              <Mail size={15} />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Profile Card / Avatar Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-sm flex items-center justify-center"
        >
          {/* Decorative Card Frames */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-border bg-surface/70 glass shadow-2xl shadow-black/5" />
          <div className="absolute inset-4 sm:inset-5 rounded-[2rem] border border-dashed border-border/70" />

          {/* Avatar Container */}
          <div className="relative z-10 h-44 w-44 sm:h-52 sm:w-52 rounded-full p-1.5 border-2 border-accent/40 bg-surface shadow-xl">
            <div className="h-full w-full rounded-full overflow-hidden bg-surface-2 flex items-center justify-center relative">
              {!imageError ? (
                <img
                  src="/dp.JPG"
                  alt={profile.name}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className={`h-full w-full object-cover object-center transition-opacity duration-500 ${
                    imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-ink-faint">
                  <User size={48} className="text-accent/60 mb-1" />
                  <span className="font-mono text-xs font-semibold text-ink">{profile.name}</span>
                </div>
              )}
            </div>
          </div>

          {/* Floating Technology Chips */}
          {floatIcons.map((icon) => (
            <motion.div
              key={icon.label}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: icon.delay,
                ease: "easeInOut",
              }}
              style={{ top: icon.top, left: icon.left }}
              className="absolute z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-border bg-surface/90 glass font-mono text-xs font-semibold text-accent shadow-lg shadow-black/5 select-none"
            >
              {icon.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
