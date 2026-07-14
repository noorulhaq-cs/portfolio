import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-ink-muted">
          © 2026 {profile.name}. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-ink hover:border-ink-faint transition-colors"
          >
            <Github size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-ink hover:border-ink-faint transition-colors"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-ink hover:border-ink-faint transition-colors"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
