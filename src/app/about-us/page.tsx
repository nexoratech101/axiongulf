import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { StatStrip } from "@/components/ui/StatStrip";
import { LocationCard } from "@/components/ui/LocationCard";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { CompetencyBars } from "@/components/about/CompetencyBars";
import { FeatureBlock } from "@/components/ui/FeatureBlock";
import { Reveal } from "@/components/ui/Reveal";
import { IconGlobe, IconSpark } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "About Axion — Innovation, Technology & Solutions for the Gulf",
  },
  description:
    "Axion LLC is a UAE-based industrial technology company delivering advanced manufacturing, IoT, robotics, and drone solutions. Australian-led. Gulf-focused.",
};

export default function AboutUs() {
  return (
    <>
      <PageHero title="About Axion" subtitle={site.tagline} />

      <section className="bg-white">
        <Reveal className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">
            Engineering a Smarter Gulf
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Axion LLC is a UAE-based industrial technology company led by
            experienced Australian management, with over a decade of proven
            expertise in engineering, technical services, and industrial
            operations. We bridge the gap between world-class technology and
            the unique operational demands of the Middle East market —
            combining global knowledge with deep local market understanding
            to deliver reliable, innovative, and cost-effective solutions
            across the UAE and Gulf region.
          </p>

          <CompetencyBars />
        </Reveal>
      </section>

      <section className="bg-[#f7f9fb]">
        <div className="mx-auto max-w-6xl space-y-20 px-6 py-20">
          <FeatureBlock
            eyebrow="Global Heritage"
            heading="Our companies push the edge of what's possible"
            body="While Axion is a new name in the Gulf, our leadership brings over a decade of proven success as the driving force behind Le Parfait Australia. Sharing the same ownership and core values as our Australian sister company, Axion operates with a deep-rooted commitment to transparency, technical precision, and long-term partnership — now applied to the UAE's industrial and technology landscape."
            icon={IconGlobe}
          />

          <FeatureBlock
            eyebrow="Our Approach"
            heading="Innovation is simple — it means doing things differently"
            body="For us, innovation isn't about chasing every new trend — it's about matching the right technology to the right problem, without defaulting to our own inventory or preferences. Every recommendation is anchored in measurable value, and if a simpler or more cost-effective option meets your needs, we'll recommend it without hesitation."
            icon={IconSpark}
            reverse
          />
        </div>
      </section>

      <StatStrip
        stats={[
          { value: "7", label: "Emirates" },
          { value: "360°", label: "Coverage" },
          { value: "100%", label: "Australian-Led" },
          { value: "1", label: "Point of Contact" },
        ]}
      />

      <section className="bg-white">
        <Reveal className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-tech-blue">
            Our Commitment
          </p>
          <blockquote className="font-display mt-6 text-2xl font-semibold leading-snug text-charcoal sm:text-3xl">
            &ldquo;We aim to build long-term relationships by consistently
            delivering quality, reliability, and the kind of honest
            partnership that drives real industrial progress.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-charcoal/60">— Axion LLC</p>
        </Reveal>
      </section>

      <section className="bg-[#f7f9fb]">
        <Reveal className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            <LocationCard
              heading="Sharjah HQ"
              lines={[
                site.address.line1,
                site.address.line2,
                site.address.line3,
              ]}
              phones={[...site.phones]}
              email={site.email}
            />
            <LocationCard
              heading="Online Store"
              lines={[
                "3D printers, filaments, resins & accessories.",
                "Delivery across the UAE.",
              ]}
              linkLabel="Visit axion3d.shop"
              linkHref={site.shopUrl}
            />
          </div>
        </Reveal>
      </section>

      <SectionCTA
        eyebrow="Start a Conversation"
        heading="Ready to bring Axion's model to your operation?"
        body="Talk to our team about your project — we'll assess your requirements and recommend the right path, at no cost and no obligation."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
