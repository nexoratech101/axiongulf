import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function SectionCTA({
  eyebrow,
  heading,
  body,
  ctaLabel,
  ctaHref,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="border-t border-black/5 bg-white">
      <Reveal className="mx-auto max-w-4xl px-6 py-20 text-center">
        {eyebrow && (
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-tech-blue">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display mt-3 text-3xl font-bold text-charcoal sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-charcoal/70">{body}</p>
        <Link
          href={ctaHref}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-tech-blue px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-tech-blue/90"
        >
          {ctaLabel}
        </Link>
      </Reveal>
    </section>
  );
}
