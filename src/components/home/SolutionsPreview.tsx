import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DiscoverLink } from "@/components/ui/DiscoverLink";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowRight } from "@/components/icons";

function HoverReveal() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 bg-tech-blue/0 transition-colors duration-300 group-hover:bg-tech-blue/40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex scale-75 items-center justify-center opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white text-white">
          <IconArrowRight className="h-6 w-6" />
        </span>
      </div>
    </>
  );
}

const flagship = {
  number: "01",
  title: "Advanced Manufacturing",
  tag: "Flagship — Live Today",
  body: "FDM, resin & industrial 3D printing, CNC routing, and laser cutting — live today, backed by real brands, real turnaround times, and full setup, training & support across the UAE.",
  image: "/images/solutions-advanced-manufacturing.jpg",
  href: "/solutions/advanced-manufacturing",
};

const solutions = [
  {
    number: "02",
    title: "Robotics & Automation",
    image: "/images/solutions-robotics-automation.jpg",
    href: "/solutions/robotics-automation",
  },
  {
    number: "03",
    title: "Drone Solutions",
    image: "/images/solutions-drone-solutions.jpg",
    href: "/solutions/drone-solutions",
  },
  {
    number: "04",
    title: "IoT Solutions",
    image: "/images/solutions-iot-solutions.jpg",
    href: "/solutions/iot-solutions",
  },
];

export function SolutionsPreview() {
  return (
    <section className="bg-[#f7f9fb]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Our Solutions</Eyebrow>
            <h2 className="font-display mt-4 max-w-xl text-3xl font-bold text-charcoal sm:text-4xl">
              Built for the Gulf. Powered by global technology.
            </h2>
          </div>
          <DiscoverLink href="/solutions">All Solutions</DiscoverLink>
        </Reveal>

        <Reveal delay={80}>
          <a
            href={flagship.href}
            className="group relative mt-12 flex min-h-[320px] items-end overflow-hidden rounded-2xl"
          >
            <Image
              src={flagship.image}
              alt={flagship.title}
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent"
            />
            <HoverReveal />
            <div className="relative flex w-full flex-wrap items-end justify-between gap-6 p-8 sm:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-bold text-white/40">
                    {flagship.number}
                  </span>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-innovation-teal">
                    {flagship.tag}
                  </span>
                </div>
                <h3 className="font-display mt-2 text-2xl font-bold text-white">
                  {flagship.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
                  {flagship.body}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-tech-blue transition-colors group-hover:bg-white/90">
                Learn More
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </a>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {solutions.map((solution, i) => (
            <Reveal key={solution.href} delay={160 + i * 80}>
              <a
                href={solution.href}
                className="group relative flex h-full min-h-[280px] items-end overflow-hidden rounded-2xl"
              >
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent"
                />
                <HoverReveal />
                <div className="relative p-6">
                  <span className="font-display text-2xl font-bold text-white/40">
                    {solution.number}
                  </span>
                  <h3 className="font-display mt-1 text-lg font-bold text-white">
                    {solution.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-innovation-teal">
                    Learn More
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
