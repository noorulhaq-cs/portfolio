"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
} from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || `Portfolio message from ${form.name}`
    )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  const contactItems = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: profile.location },
    { icon: Github, label: "GitHub", href: profile.github },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  ];

  return (
    <section id="contact" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Let's work together"
          description="Have a role, project, or just want to say hi? My inbox is open."
        />

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
          <Reveal>
            <div className="rounded-2xl border border-border bg-bg p-6 h-full space-y-3">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl px-1 py-1.5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-accent">
                    <item.icon size={15} />
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm text-ink-muted hover:text-ink transition-colors truncate"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm text-ink-muted truncate">
                      {item.label}
                    </span>
                  )}
                  {item.label === profile.email && (
                    <button
                      onClick={handleCopy}
                      aria-label="Copy email"
                      className="ml-auto shrink-0 h-8 w-8 flex items-center justify-center rounded-full text-ink-faint hover:text-accent transition-colors"
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-bg p-6 sm:p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                    Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm outline-none focus:border-accent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                  Subject
                </label>
                <input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm outline-none focus:border-accent transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm outline-none focus:border-accent transition-colors"
                  placeholder="Tell me a bit about the opportunity..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-ink text-bg px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {sent ? (
                  <>
                    <Check size={15} /> Opening your mail app…
                  </>
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
