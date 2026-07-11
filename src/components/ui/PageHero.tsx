import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="border-b border-charcoal/10 bg-[#f7f9fb]">
      <Reveal className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h1 className="font-display text-4xl font-bold text-charcoal sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-charcoal/65">{subtitle}</p>
      </Reveal>
    </section>
  );
}
