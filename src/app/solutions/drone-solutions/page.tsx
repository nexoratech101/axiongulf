import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatStrip } from "@/components/ui/StatStrip";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconDrone,
  IconSurveillance,
  IconInspection,
  IconCompliance,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Drone Solutions — Commercial UAV Systems UAE",
  description:
    "Axion brings commercial drone technology to the UAE — autonomous delivery, surveillance & security UAVs, and infrastructure inspection, with GCAA compliance guidance included.",
};

const capabilities = [
  {
    icon: IconDrone,
    title: "Autonomous Delivery Drones",
    body: "UAV platforms built for autonomous delivery — moving goods faster and more cost-effectively across sites and short-range routes.",
  },
  {
    icon: IconSurveillance,
    title: "Surveillance & Security UAVs",
    body: "Aerial surveillance and security monitoring for sites, facilities, and perimeters, enabling faster response and constant coverage.",
  },
  {
    icon: IconInspection,
    title: "Agricultural & Infrastructure Inspection",
    body: "UAVs for crop monitoring, infrastructure surveys, and site inspection — enabling safer, faster data collection than manual methods.",
  },
  {
    icon: IconCompliance,
    title: "GCAA Compliance Guidance",
    body: "Guidance through UAE aviation regulations, built into every deployment from day one.",
  },
];

const process = [
  {
    step: "01",
    title: "Consultation & Mission Planning",
    body: "We start by understanding what you're trying to achieve — delivery, inspection, or surveillance — and design a solution around your site and regulatory requirements.",
  },
  {
    step: "02",
    title: "Compliance & Deployment",
    body: "We guide you through GCAA registration, pilot certification, and operational approvals, then manage integration and deployment.",
  },
  {
    step: "03",
    title: "Ongoing Support",
    body: "Local support across all 7 Emirates keeps your drone operations running smoothly.",
  },
];

export default function DroneSolutions() {
  return (
    <>
      <PageHero
        title="Drone Solutions"
        subtitle="Commercial UAV systems for delivery, surveillance & inspection"
      />

      <section className="bg-white">
        <Reveal className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-tech-blue">
            Global Technology Partnerships
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold text-charcoal sm:text-4xl">
            Technology that works from the ground to the sky.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Axion brings commercial UAV technology to the UAE market through
            our global technology partnerships — for delivery, surveillance,
            and inspection use cases. Every deployment includes regulatory
            guidance and ongoing local support, so you know exactly what to
            expect before you take off.
          </p>
        </Reveal>
      </section>

      <section className="bg-[#f7f9fb]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <Reveal
                key={cap.title}
                delay={i * 100}
                className="rounded-2xl border border-charcoal/10 bg-white p-8"
              >
                <cap.icon className="h-10 w-10 text-tech-blue" />
                <h3 className="font-display mt-5 text-base font-bold text-charcoal">
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

      <section className="bg-white">
        <Reveal className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-10 sm:grid-cols-2 sm:gap-16">
            <div>
              <Eyebrow>Compliance & Safety</Eyebrow>
              <h2 className="font-display mt-3 text-2xl font-bold text-charcoal sm:text-3xl">
                We work within UAE GCAA requirements, every time.
              </h2>
              <p className="mt-4 text-charcoal/70">
                We work with UAE GCAA (General Civil Aviation Authority)
                requirements and provide guidance on registration, pilot
                certification, and operational approvals as part of every
                drone deployment. Compliance responsibility ultimately rests
                with the operator, but we make sure you know exactly what&apos;s
                required.
              </p>
            </div>
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-tech-blue/5 to-innovation-teal/10">
              <IconCompliance className="h-24 w-24 text-tech-blue/40" />
            </div>
          </div>
        </Reveal>
      </section>

      <StatStrip
        stats={[
          { value: "4", label: "Drone Capability Areas" },
          { value: "7", label: "Emirates Covered" },
          { value: "360°", label: "End-to-End Delivery" },
          { value: "1", label: "Point of Contact" },
        ]}
      />

      <section className="bg-white">
        <Reveal className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>How We Deliver It</Eyebrow>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-bold text-charcoal sm:text-4xl">
            From mission planning to liftoff.
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

      <SectionCTA
        eyebrow="Start a Conversation"
        heading="Ready to put drones to work?"
        body="Talk to our team about delivery, inspection, or surveillance use cases — we'll assess your requirements and recommend the right path, at no cost and no obligation."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
