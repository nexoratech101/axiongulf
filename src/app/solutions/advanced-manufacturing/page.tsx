import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DiscoverLink } from "@/components/ui/DiscoverLink";
import { StatStrip } from "@/components/ui/StatStrip";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { Reveal } from "@/components/ui/Reveal";
import { IconPrinter3D, IconCNC, IconLaser } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Advanced Manufacturing — 3D Printing, CNC & Laser Cutting UAE",
  description:
    "3D printing, CNC machining, and laser cutting in the UAE — full setup, training & support. Axion's flagship advanced manufacturing capability, live today.",
};

const capabilities = [
  {
    icon: IconPrinter3D,
    title: "3D Printing",
    body: "FDM, resin, and industrial 3D printing — the most detailed, most mature part of what we do. Real stock, real support, backed by axion3d.shop.",
  },
  {
    icon: IconCNC,
    title: "CNC Routing",
    body: "Precision CNC routing across metal, wood, and composites, for parts and production runs that need industrial-grade accuracy.",
  },
  {
    icon: IconLaser,
    title: "Laser Cutting & Engraving",
    body: "CO₂ and fibre laser cutting and engraving for sheet materials, signage, and detailed finishing work.",
  },
];

const process = [
  {
    step: "01",
    title: "Get a Quote",
    body: "Send us your requirements through the Contact page, and we'll come back with a detailed quote and recommendation.",
  },
  {
    step: "02",
    title: "Delivery & Logistics",
    body: "Once your order is confirmed, we coordinate delivery to your site or facility across the UAE, and handle everything ahead of installation.",
  },
  {
    step: "03",
    title: "Setup, Training & Support",
    body: "Every printer purchase includes basic setup and orientation. Professional and industrial systems get structured on-site operator training, plus ongoing remote diagnostics, phone/email support, and locally held spare parts.",
  },
];

export default function AdvancedManufacturing() {
  return (
    <>
      <PageHero
        title="Advanced Manufacturing"
        subtitle="3D printing, CNC machining & laser cutting — live today, engineered for UAE industry"
      />

      <section className="bg-white">
        <Reveal className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-tech-blue">
            Flagship Capability · Live Today
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold text-charcoal sm:text-4xl">
            Fully operational. Ready to deploy.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Advanced Manufacturing is Axion&apos;s most established
            capability — FDM, resin, and industrial 3D printing, CNC
            routing, and laser cutting, all live today and ready to deploy.
            It&apos;s backed by real stock, real support, and the
            axion3d.shop storefront for materials and consumables.
          </p>
        </Reveal>
      </section>

      <section className="bg-[#f7f9fb]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 sm:grid-cols-3">
            {capabilities.map((cap, i) => (
              <Reveal
                key={cap.title}
                delay={i * 100}
                className="rounded-2xl border border-charcoal/10 bg-white p-8"
              >
                <cap.icon className="h-10 w-10 text-tech-blue" />
                <h3 className="font-display mt-5 text-lg font-bold text-charcoal">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                  {cap.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatStrip
        stats={[
          { value: "3", label: "Core Capabilities" },
          { value: "7", label: "Emirates Supported" },
          { value: "360°", label: "Setup to Support" },
          { value: "1", label: "Point of Contact" },
        ]}
      />

      <section className="bg-white">
        <Reveal className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>From Order to Operation</Eyebrow>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-bold text-charcoal sm:text-4xl">
            A straightforward process, start to finish.
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
                <span className="font-mono text-sm font-semibold text-tech-blue">
                  {item.step}
                </span>
                <h3 className="font-display mt-2 text-lg font-bold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-tech-blue">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-tech-blue via-tech-blue to-innovation-teal/40"
        />
        <Reveal className="relative mx-auto max-w-6xl px-6 py-20">
          <Eyebrow tone="white">Materials & Consumables</Eyebrow>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-bold text-white sm:text-4xl">
            Order filaments & resins through axion3d.shop.
          </h2>
          <p className="mt-4 max-w-xl text-white/80">
            We stock and supply filaments and resins to suit the printers we
            sell — order directly through our online store, with delivery
            across the UAE.
          </p>
          <div className="mt-8">
            <DiscoverLink href={site.shopUrl} tone="white" external>
              Visit axion3d.shop
            </DiscoverLink>
          </div>
        </Reveal>
      </section>

      <SectionCTA
        eyebrow="Start a Conversation"
        heading="Ready to bring 3D printing, CNC, or laser cutting into your operation?"
        body="Tell us what you're trying to build, and we'll recommend the right system and get you a quote — usually within 48 hours."
        ctaLabel="Get a Quote"
        ctaHref="/contact"
      />
    </>
  );
}
