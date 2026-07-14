import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent mb-4">{"// error 404"}</p>
      <h1 className="font-display text-6xl sm:text-7xl font-semibold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-ink-muted leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist, moved, or the
        route was mistyped.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-bg px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
      >
        <ArrowLeft size={15} />
        Back to home
      </Link>
    </div>
  );
}
