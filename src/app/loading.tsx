export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg">
      <div className="flex items-center gap-3 font-mono text-sm text-ink-muted">
        <span className="h-2 w-2 animate-ping rounded-full bg-accent" />
        loading...
      </div>
    </div>
  );
}
