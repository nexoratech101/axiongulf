import type { ComponentType } from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function NumberedFeatureRow({
  number,
  title,
  tag,
  body,
  bullets,
  icon: Icon,
  image,
  imageAlt,
  tone = "blue",
  reverse,
  href,
  ctaLabel,
}: {
  number: string;
  title: string;
  tag?: string;
  body: string;
  bullets?: string[];
  icon: ComponentType<{ className?: string }>;
  image?: string;
  imageAlt?: string;
  tone?: "blue" | "teal";
  reverse?: boolean;
  href?: string;
  ctaLabel?: string;
}) {
  const isTeal = tone === "teal";

  return (
    <div className="grid sm:grid-cols-2">
      <div
        className={`flex flex-col justify-center p-10 sm:p-14 ${
          isTeal ? "bg-innovation-teal text-charcoal" : "bg-tech-blue text-white"
        } ${reverse ? "sm:order-2" : ""}`}
      >
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span
              className={`font-mono text-5xl font-bold ${
                isTeal ? "text-charcoal/20" : "text-white/25"
              }`}
            >
              {number}
            </span>
            {tag && (
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest">
                {tag}
              </span>
            )}
          </div>
          <h3 className="font-display mt-4 text-2xl font-bold">{title}</h3>
          <p
            className={`mt-4 text-sm leading-relaxed ${
              isTeal ? "text-charcoal/75" : "text-white/80"
            }`}
          >
            {body}
          </p>
          {bullets && (
            <ul className="mt-6 space-y-2 text-sm">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span aria-hidden>—</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          {href && ctaLabel && (
            <Link
              href={href}
              className={`group mt-8 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                isTeal
                  ? "bg-charcoal text-white hover:bg-charcoal/90"
                  : "bg-white text-tech-blue hover:bg-white/90"
              }`}
            >
              {ctaLabel}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          )}
        </Reveal>
      </div>
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-white ${
          image ? "min-h-[280px]" : "p-10"
        } ${reverse ? "sm:order-1" : ""}`}
      >
        {image ? (
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <Icon className="h-28 w-28 text-charcoal/10" />
        )}
      </div>
    </div>
  );
}
