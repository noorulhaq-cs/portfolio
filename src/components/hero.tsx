"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const floatIcons = [
  { label: "TS", top: "8%", left: "6%", delay: 0 },
  { label: "</>", top: "68%", left: "2%", delay: 0.6 },
  { label: "{ }", top: "20%", left: "84%", delay: 0.3 },
  { label: "λ", top: "74%", left: "80%", delay: 0.9 },
  { label: "DB", top: "44%", left: "92%", delay: 1.2 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-16"
    >
      {/* Animated gradient / glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-bg" />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-24 h-[380px] w-[380px] rounded-full bg-accent/10 blur-[100px]"
        />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 40%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl w-full px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          {/* <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            available.status = &quot;open to work&quot;
          </motion.p> */}

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]"
          >
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{profile.name}</span>
              <span className="absolute left-0 bottom-1 h-3 w-full bg-accent/20 -z-0" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 font-mono text-sm sm:text-base text-ink-muted"
          >
            {profile.role} <span className="text-ink-faint">|</span>{" "}
            <span className="text-accent">{profile.stack}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-ink-muted leading-relaxed"
          >
            A Computer Science graduate eager to apply my academic foundation and project experience to real-world software solutions. Currently polishing my skills in modern web technologies while focusing on learning robust backend practices. I am enthusiastic about continuous growth and writing clean code within a collaborative engineering team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-bg px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:border-ink-faint transition-colors"
            >
              <Download size={15} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
            >
              <Mail size={15} />
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-[2.5rem] border border-border bg-surface glass shadow-2xl shadow-black/5" />
          <div className="absolute inset-6 rounded-[2rem] border border-dashed border-border" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-50 w-50">
          <svg viewBox="0 0 200 200" className="h-full w-full">
            {/* Outer Border Line */}
            <circle
              cx="100"
              cy="100"
              r="96"
              fill="none"
              stroke="var(--accent)"
              strokeOpacity="0.25"
              strokeWidth="2"
            />

            {/* Masking lagayi hai takay image border se bahar na nikle */}
            <defs>
              <clipPath id="circleView">
                <circle cx="100" cy="100" r="95" />
              </clipPath>
            </defs>

            {/* Aapki Image */}
            <image
              href={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/dp.JPG`}
              width="200"
              height="200"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#circleView)"
            />
          </svg>
        </div>
      </div>

          {floatIcons.map((icon) => (
            <motion.div
              key={icon.label}
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                delay: icon.delay,
                ease: "easeInOut",
              }}
              style={{ top: icon.top, left: icon.left }}
              className="absolute flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/90 glass font-mono text-xs font-medium text-accent shadow-lg shadow-black/5"
            >
              {icon.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
