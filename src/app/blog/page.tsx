import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { IconPrinter3D } from "@/components/icons";

export const metadata: Metadata = {
  title: {
    absolute: "Blog — 3D Printing, Robotics & Technology Insights │ Axion UAE",
  },
  description:
    "Read the Axion blog for practical insights on 3D printing, robotics, IoT, and industrial technology — written for UAE businesses and engineers.",
};

const categories = [
  "3D Printing",
  "Robotics & Automation",
  "Drones & UAV",
  "IoT & Smart Technology",
  "Industry News",
  "Axion Updates",
];

const posts = [
  {
    title: "Best 3D Printers for Beginners in the UAE 2026",
    category: "3D Printing",
    teaser: "A practical starting point for choosing your first 3D printer in the UAE.",
  },
  {
    title: "Beyond Prototyping: How 3D Printing Is Reshaping Modern Industry",
    category: "3D Printing",
    teaser: "A look at how 3D printing is moving beyond prototyping into full production.",
  },
  {
    title: "How 3D Printing Is Revolutionizing Construction",
    category: "3D Printing",
    teaser: "Exploring the role 3D printing is starting to play in the construction sector.",
  },
  {
    title: "Top 5 Filaments for Beginners in 3D Printing",
    category: "3D Printing",
    teaser: "A rundown of filament types worth knowing before your first print.",
  },
];

export default function Blog() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Insights, guides, and industry news from the Axion team"
      />

      <section className="bg-white">
        <Reveal className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-charcoal/15 px-4 py-2 text-xs font-semibold text-charcoal/70"
              >
                {category}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm text-charcoal/60">
            Full articles are coming soon — in the meantime, here&apos;s what
            we&apos;re working on.
          </p>
        </Reveal>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-6xl divide-y divide-charcoal/10 border-t border-charcoal/10 px-6">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 80}>
              <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center">
                <div className="shrink-0 sm:w-28">
                  <span className="font-display block text-4xl font-bold text-tech-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-charcoal/50">
                    {post.category}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-lg font-bold text-charcoal sm:text-xl">
                      {post.title}
                    </h2>
                    <span className="rounded-full bg-charcoal/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-charcoal/50">
                      Coming Soon
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-charcoal/65">
                    {post.teaser}
                  </p>
                </div>

                <div className="hidden h-20 w-28 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-tech-blue/5 to-innovation-teal/10 sm:flex">
                  <IconPrinter3D className="h-9 w-9 text-tech-blue/40" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
