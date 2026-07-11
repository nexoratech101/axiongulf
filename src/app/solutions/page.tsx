import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { NumberedFeatureRow } from "@/components/ui/NumberedFeatureRow";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconPrinter3D,
  IconRobotArm,
  IconDrone,
  IconIoT,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Industrial Technology Solutions UAE — Manufacturing, Robotics, Drones & IoT",
  description:
    "Axion delivers advanced manufacturing, robotics, drone, and IoT solutions across all 7 Emirates. One partner. End-to-end support. Gulf-focused.",
};

const solutions = [
  {
    number: "01",
    title: "Advanced Manufacturing",
    tag: "Live Today",
    body: "3D printing, CNC machining, and laser cutting for UAE industry — FDM, resin & industrial 3D printing, CNC routing across metal, wood & composites, and CO₂ & fibre laser cutting & engraving. Full setup, training & support included, backed by axion3d.shop.",
    bullets: [
      "FDM, resin & industrial 3D printing",
      "CNC routing — metal, wood & composites",
      "CO₂ & fibre laser cutting & engraving",
      "Full setup, training & support",
    ],
    icon: IconPrinter3D,
    image: "/images/solutions-advanced-manufacturing.jpg",
    imageAlt: "Laser cutter engraving a design into wood in an Axion workshop",
    tone: "blue" as const,
    href: "/solutions/advanced-manufacturing",
    ctaLabel: "Explore Advanced Manufacturing",
  },
  {
    number: "02",
    title: "Robotics & Automation",
    body: "From kiosk robots to full production-line automation, brought to the UAE market through Axion's global technology partnerships — with local programming, integration, and maintenance support.",
    bullets: [
      "Self-service & customer interaction robots",
      "Autonomous delivery & logistics robots",
      "Industrial robotic arms & cobots",
      "Programming, integration & maintenance",
    ],
    icon: IconRobotArm,
    image: "/images/solutions-robotics-automation.jpg",
    imageAlt: "Industrial robotic arm gripper in an Axion facility",
    tone: "teal" as const,
    href: "/solutions/robotics-automation",
    ctaLabel: "Explore Robotics & Automation",
  },
  {
    number: "03",
    title: "Drone Solutions",
    body: "Commercial UAV systems for delivery, surveillance, and inspection, brought to the UAE market through Axion's global technology partnerships, with GCAA compliance guidance included.",
    bullets: [
      "Autonomous delivery drones",
      "Surveillance & security UAVs",
      "Agricultural & infrastructure inspection",
      "GCAA compliance guidance included",
    ],
    icon: IconDrone,
    image: "/images/solutions-drone-solutions.jpg",
    imageAlt: "Commercial UAV drone in flight",
    tone: "blue" as const,
    href: "/solutions/drone-solutions",
    ctaLabel: "Explore Drone Solutions",
  },
  {
    number: "04",
    title: "IoT Solutions",
    body: "Connected systems for smarter operations across the UAE, brought to market through Axion's global technology partnerships.",
    bullets: [
      "Asset & fleet GPS tracking",
      "Environmental & industrial monitoring",
      "Smart facility management",
      "Real-time dashboards & alert systems",
    ],
    icon: IconIoT,
    image: "/images/solutions-iot-solutions.jpg",
    imageAlt: "Smart city IoT monitoring concept on a mobile device",
    tone: "teal" as const,
    href: "/solutions/iot-solutions",
    ctaLabel: "Explore IoT Solutions",
  },
];

export default function Solutions() {
  return (
    <>
      <PageHero
        title="Our Solutions"
        subtitle="Technology that works — from the factory floor to the sky"
      />

      <section className="bg-white">
        <Reveal className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">
            Built for the Gulf. Powered by global technology.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Axion delivers four core technology solution areas — each one
            backed by global-grade hardware, expert local engineering, and
            the full Axion service model. Whether you&apos;re looking to
            modernise your manufacturing process, automate your operations,
            monitor your assets, or put drones to work, we have a ready-built
            solution and the local team to support it.
          </p>
        </Reveal>
      </section>

      <div>
        {solutions.map((solution, i) => (
          <NumberedFeatureRow
            key={solution.number}
            number={solution.number}
            title={solution.title}
            tag={solution.tag}
            body={solution.body}
            bullets={solution.bullets}
            icon={solution.icon}
            image={solution.image}
            imageAlt={solution.imageAlt}
            tone={solution.tone}
            reverse={i % 2 === 1}
            href={solution.href}
            ctaLabel={solution.ctaLabel}
          />
        ))}
      </div>

      <SectionCTA
        eyebrow="Start a Conversation"
        heading="Not sure which solution fits your needs?"
        body="Talk to our engineering team. We'll assess your requirements and recommend the right path — at no cost and no obligation."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
