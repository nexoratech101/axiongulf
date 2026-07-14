import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image.url],
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="border-b border-charcoal/10 bg-[#f7f9fb]">
        <Reveal className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <Link
            href="/blog"
            className="font-mono text-xs font-semibold uppercase tracking-widest text-tech-blue"
          >
            ← Back to Blog
          </Link>
          <span className="mt-6 block rounded-full bg-tech-blue/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-tech-blue w-fit">
            {post.category}
          </span>
          <h1 className="font-display mt-4 text-3xl font-bold text-charcoal sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-widest text-charcoal/50">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>
        </Reveal>
      </section>

      <section className="bg-white">
        <Reveal className="mx-auto max-w-3xl px-6 pt-12">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-charcoal/5">
            <Image
              src={post.image.url}
              alt={post.image.alt}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-white pb-20">
        <Reveal className="mx-auto max-w-3xl px-6 pt-10">
          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
          />

          <div className="mt-4 flex flex-wrap gap-2 border-t border-charcoal/10 pt-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-charcoal/15 px-3 py-1 text-[11px] font-semibold text-charcoal/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <SectionCTA
        eyebrow="Ready to print?"
        heading="Get this material or printer from axion3d.shop"
        body="Everything mentioned in this article — filaments, printers, and accessories — is available to order directly from our live storefront."
        ctaLabel="Shop axion3d.shop"
        ctaHref={site.shopUrl}
      />
    </>
  );
}
