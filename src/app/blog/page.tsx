import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/blog";

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

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

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
        </Reveal>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-6xl divide-y divide-charcoal/10 border-t border-charcoal/10 px-6">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-6 py-10 sm:flex-row sm:items-center"
              >
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
                    <h2 className="font-display text-lg font-bold text-charcoal transition-colors group-hover:text-tech-blue sm:text-xl">
                      {post.title}
                    </h2>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-charcoal/40">
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-charcoal/65">
                    {post.excerpt}
                  </p>
                </div>

                <div className="relative hidden h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-charcoal/5 sm:block">
                  <Image
                    src={post.image.url}
                    alt={post.image.alt}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
