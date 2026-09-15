import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-ink-muted">
          <span>© {new Date().getFullYear()} {profile.name}.</span>
          <span className="text-ink-faint">·</span>
          <span className="inline-flex items-center gap-1 text-ink-faint">
            Built with React & Next.js
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border bg-surface text-ink-muted hover:text-ink hover:border-ink-faint hover:bg-surface-2 transition-colors"
          >
            <Github size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border bg-surface text-ink-muted hover:text-ink hover:border-ink-faint hover:bg-surface-2 transition-colors"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border bg-surface text-ink-muted hover:text-ink hover:border-ink-faint hover:bg-surface-2 transition-colors"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
