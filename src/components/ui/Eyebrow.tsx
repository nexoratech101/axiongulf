export function Eyebrow({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "white";
}) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] ${
        tone === "white" ? "text-white/80" : "text-tech-blue"
      }`}
    >
      <span
        className={`h-px w-8 ${tone === "white" ? "bg-white/50" : "bg-tech-blue"}`}
      />
      {children}
    </div>
  );
}
