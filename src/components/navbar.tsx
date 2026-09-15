"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "./theme-provider";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

  const checkActiveSection = useCallback(() => {
    if (isClickScrolling.current) return;

    setScrolled(window.scrollY > 8);

    // Check if scrolled to the absolute bottom of the document
    const isAtBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 50;

    if (isAtBottom) {
      setActive(navLinks[navLinks.length - 1].href);
      return;
    }

    // Measure each section's position relative to the viewport
    const triggerOffset = 220; // Trigger threshold below top of viewport
    let currentActive = navLinks[0].href;

    for (const link of navLinks) {
      const el = document.querySelector(link.href) as HTMLElement | null;
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerOffset && rect.bottom > 80) {
          currentActive = link.href;
        }
      }
    }

    setActive(currentActive);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      checkActiveSection();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    checkActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
    };
  }, [checkActiveSection]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setActive(href);
    setOpen(false);

    // Lock scroll spy briefly during smooth animation
    isClickScrolling.current = true;
    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
      checkActiveSection();
    }, 750);

    const target = document.querySelector(href);
    if (target) {
      const navbarHeight = 64;
      const top =
        target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-sm shadow-black/[0.04]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between"
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-display font-semibold tracking-tight text-lg text-ink hover:text-accent transition-colors"
        >
          {profile.name}
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-ink-muted hover:text-ink hover:bg-surface-2/60"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-accent rounded-full"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Action Icons */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-ink hover:border-ink-faint hover:bg-surface transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-ink hover:border-ink-faint hover:bg-surface transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-ink hover:border-ink-faint hover:bg-surface transition-colors cursor-pointer"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="ml-1 inline-flex items-center gap-2 rounded-full bg-ink text-bg px-4 py-2 text-sm font-medium hover:opacity-90 active:scale-95 transition-all shadow-sm"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden h-10 w-10 flex items-center justify-center rounded-lg text-ink hover:bg-surface border border-transparent hover:border-border transition-colors cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden glass border-t border-border overflow-hidden"
        >
          <ul className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                      isActive
                        ? "bg-accent/10 text-accent font-semibold"
                        : "text-ink-muted hover:text-ink hover:bg-surface"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="px-5 pb-5 flex items-center gap-2 border-t border-border/50 pt-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-ink"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-ink"
            >
              <Linkedin size={16} />
            </a>
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="h-10 w-10 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-ink cursor-pointer"
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
