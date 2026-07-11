import type { ComponentType } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function FeatureBlock({
  eyebrow,
  heading,
  subheading,
  body,
  icon: Icon,
  reverse,
}: {
  eyebrow: string;
  heading: string;
  subheading?: string;
  body: string;
  icon: ComponentType<{ className?: string }>;
  reverse?: boolean;
}) {
  return (
    <Reveal className="grid items-center gap-10 sm:grid-cols-2 sm:gap-16">
      <div className={reverse ? "sm:order-2" : ""}>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-tech-blue">
          {eyebrow}
        </p>
        <h3 className="font-display mt-3 text-2xl font-bold text-charcoal sm:text-3xl">
          {heading}
        </h3>
        {subheading && (
          <p className="mt-3 font-semibold text-charcoal/80">{subheading}</p>
        )}
        <p className="mt-4 text-charcoal/70">{body}</p>
      </div>
      <div
        className={`flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-tech-blue/5 to-innovation-teal/10 ${
          reverse ? "sm:order-1" : ""
        }`}
      >
        <Icon className="h-24 w-24 text-tech-blue/40" />
      </div>
    </Reveal>
  );
}
