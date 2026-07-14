"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "./theme-provider";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => {
      // 1. Header background solid karne ka purana logic
      setScrolled(window.scrollY > 8);

      // 2. Exact Active section dhoondne ka logic
      const sections = navLinks
        .map((l) => document.querySelector(l.href))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + window.innerHeight / 3; // Screen ka upper-middle area tracking

      // Check agar page bilkul end/bottom par hai toh Contact active karein
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20;

      if (isAtBottom) {
        setActive("#contact");
        return;
      }

      // Baaki saare sections ke liye accurate distance tracking
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.offsetTop) {
          setActive(`#${section.id}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Pehli baar load hone par bhi state check ho jaye
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface border-b border-border shadow-sm shadow-black/[0.03]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-display font-semibold tracking-tight text-lg text-ink"
        >
          Noor Ul Haq
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  active === link.href
                    ? "text-accent"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-accent rounded-full"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-ink hover:border-ink-faint transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-ink hover:border-ink-faint transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-ink hover:border-ink-faint transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="ml-1 inline-flex items-center gap-2 rounded-full bg-ink text-bg px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        <button
          className="lg:hidden h-9 w-9 flex items-center justify-center text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="lg:hidden glass border-t border-border overflow-hidden"
        >
          <ul className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-2 py-2.5 text-sm font-medium rounded-md ${
                    active === link.href
                      ? "text-accent"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-5 flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-ink-muted"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-ink-muted"
            >
              <Linkedin size={16} />
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-ink-muted"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href={profile.resumeUrl}
              download
              className="ml-auto inline-flex items-center gap-2 rounded-full bg-ink text-bg px-4 py-2 text-sm font-medium"
            >
              <Download size={14} />
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
