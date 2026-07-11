import { Eyebrow } from "@/components/ui/Eyebrow";
import { DiscoverLink } from "@/components/ui/DiscoverLink";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconConsultation,
  IconSourcing,
  IconSupport,
  IconProjectManagement,
  IconTraining,
  IconPartnership,
} from "@/components/icons";

const services = [
  {
    icon: IconConsultation,
    title: "Consultation & Solution Design",
  },
  {
    icon: IconSourcing,
    title: "Product Sourcing",
  },
  {
    icon: IconSupport,
    title: "Technical Support & Maintenance",
  },
  {
    icon: IconProjectManagement,
    title: "Project Management & Implementation",
  },
  {
    icon: IconTraining,
    title: "Training & Capacity Building",
  },
  {
    icon: IconPartnership,
    title: "Ongoing Partnership",
  },
];

export function ServiceGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="font-display mt-4 max-w-xl text-3xl font-bold text-charcoal sm:text-4xl">
              One partner. Every stage.
            </h2>
          </div>
          <DiscoverLink href="/services">View All Services</DiscoverLink>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 80}>
              <div className="flex items-center gap-4">
                <service.icon className="h-9 w-9 text-tech-blue" />
                <span className="font-mono text-xs font-semibold text-charcoal/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display mt-4 text-base font-semibold text-charcoal">
                {service.title}
              </h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
