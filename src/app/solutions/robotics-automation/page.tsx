import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatStrip } from "@/components/ui/StatStrip";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconKiosk,
  IconAutonomousRobot,
  IconRobotArm,
  IconSupport,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Robotics & Automation — Industrial & Service Robots UAE",
  description:
    "Axion brings robotics and automation technology to the UAE — kiosk robots, autonomous delivery, industrial robotic arms & cobots, and full integration support, through our global technology partnerships.",
};

const capabilities = [
  {
    icon: IconKiosk,
    title: "Self-Service & Customer Interaction Robots",
    body: "Robots designed for retail, hospitality, and public-facing environments — greeting, guiding, and serving customers without added headcount.",
  },
  {
    icon: IconAutonomousRobot,
    title: "Autonomous Delivery & Logistics Robots",
    body: "Autonomous mobile robots that move goods and materials through warehouses, facilities, and last-mile delivery routes.",
  },
  {
    icon: IconRobotArm,
    title: "Industrial Robotic Arms & Cobots",
    body: "Robotic arms and collaborative robots (cobots) that work safely alongside your team, built for repetitive, precision, or high-volume tasks.",
  },
  {
    icon: IconSupport,
    title: "Programming, Integration & Maintenance",
    body: "We handle the programming, systems integration, and ongoing maintenance — so your robotics investment stays productive long after installation.",
  },
];

const process = [
  {
    step: "01",
    title: "Consultation & Solution Design",
    body: "We start by understanding your operation and where automation adds the most value, then design a solution around your facility, workflow, and team.",
  },
  {
    step: "02",
    title: "Integration & Deployment",
    body: "Our team manages installation, programming, and integration with your existing systems and processes.",
  },
  {
    step: "03",
    title: "Ongoing Support",
    body: "Local support across all 7 Emirates keeps your robotics and automation systems running at their best.",
  },
];

export default function RoboticsAutomation() {
  return (
    <>
      <PageHero
        title="Robotics & Automation"
        subtitle="From kiosk robots to full production-line automation"
      />

      <section className="bg-white">
        <Reveal className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-tech-blue">
            Global Technology Partnerships
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold text-charcoal sm:text-4xl">
            Automation that scales with your operation.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Axion brings world-class robotics and automation technology to
            the UAE market through our global technology partnerships — from
            self-service kiosks to full production-line automation. Our team
            handles consultation, integration, programming, and ongoing
            local support, so the technology works from day one.
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
          { value: "4", label: "Robotics Capability Areas" },
          { value: "7", label: "Emirates Covered" },
          { value: "360°", label: "End-to-End Delivery" },
          { value: "1", label: "Point of Contact" },
        ]}
      />

      <section className="bg-white">
        <Reveal className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>How We Deliver It</Eyebrow>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-bold text-charcoal sm:text-4xl">
            Consultation-first, integration-ready.
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
        heading="Ready to automate part of your operation?"
        body="Talk to our team about where robotics and automation could fit — we'll assess your requirements and recommend the right path, at no cost and no obligation."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
