import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureBlock } from "@/components/ui/FeatureBlock";
import { NumberedFeatureRow } from "@/components/ui/NumberedFeatureRow";
import { StatStrip } from "@/components/ui/StatStrip";
import { SectionCTA } from "@/components/ui/SectionCTA";
import {
  IconPartnership,
  IconConsultation,
  IconSourcing,
  IconSupport,
  IconProjectManagement,
  IconTraining,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Industrial Technology Services UAE — Consult, Source, Install, Support",
  description:
    "Axion provides end-to-end industrial technology services across the UAE — consultation, product sourcing, project management, installation, and ongoing technical support.",
};

const services = [
  {
    number: "01",
    title: "Consultation & Solution Design",
    body: "Every engagement starts with a conversation. Our engineers take time to understand your operation, your constraints, and what you're actually trying to achieve — before recommending anything. We map out a solution architecture that fits your budget, your facility, and your team's capability to operate it.",
    bullets: [
      "Needs assessment and site survey",
      "Technology selection and vendor comparison",
      "Solution architecture and system design",
      "ROI and feasibility analysis",
    ],
    icon: IconConsultation,
    tone: "blue" as const,
  },
  {
    number: "02",
    title: "Product Sourcing",
    body: "Axion maintains direct relationships with leading technology manufacturers across Australia, Asia, Europe, and the US. We source the right products at competitive prices, handle import logistics, and ensure everything arrives UAE-compliant and ready to deploy.",
    bullets: [
      "Global sourcing network across 20+ technology brands",
      "UAE customs clearance and import handling",
      "Quality inspection before delivery",
      "Flexible procurement — project-based or ongoing supply",
    ],
    icon: IconSourcing,
    tone: "teal" as const,
  },
  {
    number: "03",
    title: "Technical Support & Maintenance",
    body: "Technology that isn't supported is a liability. Axion provides structured support contracts covering preventative maintenance, remote diagnostics, spare parts supply, and on-site response when you need it. Our team is available across all 7 Emirates.",
    bullets: [
      "Scheduled preventative maintenance visits",
      "Remote monitoring and diagnostics",
      "Spare parts sourcing and same-day dispatch where available",
      "On-site emergency response across the UAE",
    ],
    icon: IconSupport,
    tone: "blue" as const,
  },
  {
    number: "04",
    title: "Project Management & Implementation",
    body: "We don't hand over equipment and walk away. Axion's project team manages every installation from delivery scheduling through to commissioning, testing, and staff training. We follow structured project management processes that keep timelines, budgets, and quality on track.",
    bullets: [
      "Dedicated project manager for every deployment",
      "Site preparation and installation coordination",
      "Commissioning, testing, and sign-off",
      "Operator training and user handover documentation",
    ],
    icon: IconProjectManagement,
    tone: "teal" as const,
  },
  {
    number: "05",
    title: "Training & Capacity Building",
    body: "A system is only as effective as the people operating it. We offer structured training programmes for operators, supervisors, and technical staff — tailored to the technology deployed and the skill level of your team.",
    bullets: [
      "Hands-on operator training at your facility",
      "Technical training for in-house maintenance teams",
      "Training manuals and reference documentation in English and Arabic",
      "Refresher sessions and new staff onboarding",
    ],
    icon: IconTraining,
    tone: "blue" as const,
  },
  {
    number: "06",
    title: "Ongoing Partnership",
    body: "Many of our clients started with a single product and grew into a full technology partner relationship. We're a long-term partner — available for technology reviews, upgrade planning, expansion projects, and strategic advice as your business evolves.",
    bullets: [
      "Annual technology review and upgrade planning",
      "Priority access to new products and pilot programmes",
      "Preferred pricing for returning clients",
      "Strategic input on technology roadmaps",
    ],
    icon: IconPartnership,
    tone: "teal" as const,
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="End-to-end support from first conversation to final delivery"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FeatureBlock
            eyebrow="How We Work"
            heading="One partner. Every stage."
            subheading="Most technology suppliers stop at the sale. Axion doesn't."
            body="We handle every phase of the technology journey — from initial consultation and system design, through product sourcing, project management, installation, and long-term technical support. That means you deal with one team, one point of contact, and one organisation that's accountable for the outcome from day one."
            icon={IconPartnership}
            reverse
          />
        </div>
      </section>

      <div>
        {services.map((service) => (
          <NumberedFeatureRow
            key={service.number}
            number={service.number}
            title={service.title}
            body={service.body}
            bullets={service.bullets}
            icon={service.icon}
            tone={service.tone}
            reverse={Number(service.number) % 2 === 0}
          />
        ))}
      </div>

      <StatStrip
        stats={[
          { value: "6", label: "Core Service Areas" },
          { value: "7", label: "Emirates Covered" },
          { value: "360°", label: "End-to-End Delivery" },
          { value: "1", label: "Point of Contact" },
        ]}
      />

      <SectionCTA
        eyebrow="Start a Conversation"
        heading="Not sure which service you need? Start with a conversation."
        body="Our engineers are happy to assess your requirements at no cost and no obligation."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
