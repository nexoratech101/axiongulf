import Link from "next/link";
import { IconArrowRight } from "@/components/icons";

export function DiscoverLink({
  href,
  children,
  tone = "blue",
  external,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "blue" | "white";
  external?: boolean;
}) {
  const light = tone === "white";
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-3 font-semibold ${
        light ? "text-white" : "text-tech-blue"
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
          light
            ? "border-white/40 group-hover:bg-white group-hover:text-tech-blue"
            : "border-tech-blue/40 group-hover:bg-tech-blue group-hover:text-white"
        }`}
      >
        <IconArrowRight className="h-4 w-4" />
      </span>
      <span className="text-sm tracking-wide">{children}</span>
    </Link>
  );
}
