import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatStrip } from "@/components/ui/StatStrip";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconTracking,
  IconIoT,
  IconFacility,
  IconDashboard,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "IoT Solutions — Connected Systems & Smart Monitoring UAE",
  description:
    "Axion brings IoT technology to the UAE — asset & fleet GPS tracking, environmental & industrial monitoring, smart facility management, and real-time dashboards, through our global technology partnerships.",
};

const capabilities = [
  {
    icon: IconTracking,
    title: "Asset & Fleet GPS Tracking",
    body: "Real-time location tracking for vehicles, equipment, and high-value assets — know where everything is, all the time.",
  },
  {
    icon: IconIoT,
    title: "Environmental & Industrial Monitoring",
    body: "Sensors and platforms that monitor conditions, equipment performance, and industrial processes around the clock.",
  },
  {
    icon: IconFacility,
    title: "Smart Facility Management",
    body: "Connected systems that give facility managers visibility and control over energy use, equipment, and building performance.",
  },
  {
    icon: IconDashboard,
    title: "Real-Time Dashboards & Alert Systems",
    body: "Centralised dashboards and automated alerts that turn raw sensor data into decisions you can act on immediately.",
  },
];

const process = [
  {
    step: "01",
    title: "Consultation & Solution Design",
    body: "We start by understanding what you need visibility into, then design a connected system around your assets, facility, and operations.",
  },
  {
    step: "02",
    title: "Integration & Deployment",
    body: "Our team manages sensor installation, platform setup, and integration with your existing systems.",
  },
  {
    step: "03",
    title: "Ongoing Support",
    body: "Local support across all 7 Emirates keeps your IoT systems monitored, maintained, and delivering data you can trust.",
  },
];

export default function IoTSolutions() {
  return (
    <>
      <PageHero
        title="IoT Solutions"
        subtitle="Connected systems for smarter operations across the UAE"
      />

      <section className="bg-white">
        <Reveal className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-tech-blue">
            Global Technology Partnerships
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold text-charcoal sm:text-4xl">
            From raw data to real decisions.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Axion brings connected IoT technology to the UAE market through
            our global technology partnerships — from asset tracking to
            full facility monitoring. We handle consultation, integration,
            and ongoing local support, so your data actually drives better
            decisions.
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

      <StatStrip
        stats={[
          { value: "4", label: "IoT Capability Areas" },
          { value: "7", label: "Emirates Covered" },
          { value: "360°", label: "End-to-End Delivery" },
          { value: "1", label: "Point of Contact" },
        ]}
      />

      <section className="bg-white">
        <Reveal className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>How We Deliver It</Eyebrow>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-bold text-charcoal sm:text-4xl">
            Connected systems, properly supported.
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
        heading="Ready to connect part of your operation?"
        body="Talk to our team about what you need visibility into — we'll assess your requirements and recommend the right path, at no cost and no obligation."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
