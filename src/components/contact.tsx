"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { profile } from "@/lib/data";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!form.email.trim() || !isEmailValid(form.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    if (!form.message.trim()) {
      setStatus("error");
      setErrorMessage("Please write a message before sending.");
      return;
    }

    setStatus("submitting");

    // Compose mailto and trigger after brief animation
    setTimeout(() => {
      const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
        form.subject.trim() || `Portfolio message from ${form.name.trim()}`
      )}&body=${encodeURIComponent(
        `${form.message.trim()}\n\n— Sent by: ${form.name.trim()} (${form.email.trim()})`
      )}`;

      window.location.href = mailto;
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTouched({ name: false, email: false, message: false });

      setTimeout(() => {
        setStatus("idle");
      }, 6000);
    }, 600);
  };

  const contactItems = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: profile.location },
    { icon: Github, label: "github.com/noorulhaq-cs", href: profile.github },
    { icon: Linkedin, label: "linkedin.com/in/noorulhaq-cs", href: profile.linkedin },
  ];

  return (
    <section id="contact" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Let's work together"
          description="Have an engineering opportunity, internship, or project inquiry? Feel free to reach out directly or send a message below."
        />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          {/* Contact Details Card */}
          <Reveal>
            <div className="rounded-2xl border border-border bg-bg p-6 sm:p-7 h-full flex flex-col justify-between space-y-6 shadow-sm">
              <div>
                <h3 className="font-display font-semibold text-lg text-ink mb-1">
                  Contact Details
                </h3>
                <p className="text-xs font-mono text-ink-muted mb-6">
                  Based in {profile.location} · Open to local & remote roles
                </p>

                <div className="space-y-3">
                  {contactItems.map((item) => (
                    <div
                      key={item.label}
                      className="group flex items-center gap-3 rounded-xl p-2 hover:bg-surface transition-colors"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:scale-105 transition-transform">
                        <item.icon size={16} />
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="text-xs sm:text-sm text-ink-muted hover:text-accent font-medium transition-colors truncate"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className="text-xs sm:text-sm text-ink-muted truncate font-medium">
                          {item.label}
                        </span>
                      )}
                      {item.label === profile.email && (
                        <button
                          onClick={handleCopy}
                          aria-label="Copy email address"
                          className="ml-auto shrink-0 h-8 w-8 flex items-center justify-center rounded-lg border border-border text-ink-faint hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
                        >
                          {copied ? (
                            <Check size={14} className="text-emerald-500" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Note */}
              <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
                <p className="text-xs font-mono text-accent leading-relaxed">
                  💡 Typically replies within 24 hours. Feel free to connect on LinkedIn or reach out directly by email.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-border bg-bg p-6 sm:p-8 space-y-4 shadow-sm"
            >
              {/* Form Feedback Alerts */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-xs text-rose-600 dark:text-rose-400 font-medium"
                  >
                    <AlertCircle size={15} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs text-emerald-600 dark:text-emerald-400 font-medium"
                  >
                    <CheckCircle2 size={15} className="shrink-0" />
                    <span>Message composed! Your default mail client has been opened.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-ink-faint"
                  >
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    required
                    value={form.name}
                    onBlur={() => setTouched((p) => ({ ...p, name: true }))}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (status === "error") setStatus("idle");
                    }}
                    className={`w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors ${
                      touched.name && !form.name.trim()
                        ? "border-rose-500 focus:border-rose-500"
                        : "border-border focus:border-accent"
                    }`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-ink-faint"
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    value={form.email}
                    onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (status === "error") setStatus("idle");
                    }}
                    className={`w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors ${
                      touched.email && (!form.email.trim() || !isEmailValid(form.email))
                        ? "border-rose-500 focus:border-rose-500"
                        : "border-border focus:border-accent"
                    }`}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-ink-faint"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent transition-colors"
                  placeholder="Internship / Role Inquiry / Project"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-ink-faint"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={form.message}
                  onBlur={() => setTouched((p) => ({ ...p, message: true }))}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    if (status === "error") setStatus("idle");
                  }}
                  className={`w-full resize-none rounded-xl border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors ${
                    touched.message && !form.message.trim()
                      ? "border-rose-500 focus:border-rose-500"
                      : "border-border focus:border-accent"
                  }`}
                  placeholder="Tell me a bit about the opportunity or project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-ink text-bg px-7 py-3.5 text-sm font-medium hover:opacity-90 active:scale-95 disabled:opacity-60 transition-all cursor-pointer shadow-md shadow-black/5"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={15} className="animate-spin" /> Preparing email…
                  </>
                ) : status === "success" ? (
                  <>
                    <Check size={15} /> Message Sent
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
