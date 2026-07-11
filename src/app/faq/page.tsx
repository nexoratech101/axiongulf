import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FAQAccordion, type FAQGroup } from "@/components/ui/FAQAccordion";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: {
    absolute:
      "FAQ — Axion Technology Solutions UAE │ 3D Printing, Robotics, Drones & IoT",
  },
  description:
    "Answers to common questions about Axion's technology solutions, products, delivery, installation, and support services across the UAE and Gulf region.",
};

const faqGroups: FAQGroup[] = [
  {
    label: "About Axion",
    items: [
      {
        question: "What does Axion do?",
        answer:
          "Axion is a UAE-based industrial technology company. We supply, install, and support advanced manufacturing equipment (3D printers, CNC machines, laser cutters), robotics and automation systems, commercial drones, and IoT solutions. We cover every stage from initial consultation through to ongoing maintenance — all under one roof.",
      },
      {
        question: "Where is Axion based?",
        answer:
          "Our registered office is at Shams Business Center, Sharjah Media City Free Zone, Al Messaned, Sharjah, U.A.E. We operate across all 7 Emirates and can support clients throughout the Gulf region.",
      },
      {
        question: "Is Axion an Australian company?",
        answer:
          "Axion LLC is registered in the UAE and operates as a UAE company. Our management team has an Australian background, which means we bring international business standards, structured processes, and a no-nonsense approach to project delivery — applied locally in the Gulf market.",
      },
      {
        question: "Do you work with small businesses or only large companies?",
        answer:
          "Both. We work with individual makers and designers buying a single desktop 3D printer, as well as large industrial operations deploying multiple automation systems. The engagement model scales to suit the size and complexity of your requirement.",
      },
    ],
  },
  {
    label: "3D Printing",
    items: [
      {
        question: "What 3D printing brands do you carry?",
        answer:
          "We carry a curated range of trusted 3D printing brands covering desktop through industrial tiers. We'll recommend the right system based on your materials, output requirements, and budget.",
      },
      {
        question: "Can I buy consumables (filament, resin) from Axion?",
        answer:
          "Yes. We stock and supply filaments and resins to suit the printers we sell. You can also order through our online store at axion3d.shop, which carries a growing range of consumables for delivery across the UAE.",
      },
      {
        question: "Do you provide training when I buy a printer?",
        answer:
          "Yes. All printer purchases include basic setup and orientation training. For professional and industrial systems, we provide structured operator training at your facility. Extended training programmes are also available for larger teams.",
      },
      {
        question: "What happens if my printer has a problem after installation?",
        answer:
          "We provide post-sale technical support for all products we supply. Depending on your support plan, this includes remote diagnostics, phone and email assistance, and on-site visits where required. We also hold spare parts for the brands we carry.",
      },
    ],
  },
  {
    label: "Purchasing & Delivery",
    items: [
      {
        question: "Can I see the equipment before buying?",
        answer:
          "For standard products, we can arrange a demonstration at your premises or at our facility. For larger industrial systems, we can facilitate factory demonstrations or provide detailed video documentation from the manufacturer. Contact us to arrange.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery times depend on the product and stock status. We'll provide a clear lead time before you confirm an order, so you know exactly what to expect.",
      },
      {
        question: "Do you offer payment terms or financing?",
        answer:
          "For commercial and project-based purchases, we can discuss staged payment arrangements. Contact our sales team to discuss your specific situation. We accept bank transfer and cheque for B2B transactions.",
      },
      {
        question: "Do you provide quotes?",
        answer:
          "Yes — and we encourage you to request one before committing. Use the Contact Us page to send us your requirements, and we'll come back with a detailed quote, usually within 48 hours for standard products.",
      },
    ],
  },
  {
    label: "Projects & Installation",
    items: [
      {
        question: "Can Axion manage a full technology deployment project?",
        answer:
          "Yes. Project management and implementation is one of our core services. We handle everything from site assessment and equipment procurement through to installation, commissioning, staff training, and handover. You get a single project manager and a single point of accountability.",
      },
      {
        question: "Do you handle UAE customs and import?",
        answer:
          "Yes. For products sourced internationally, Axion manages import logistics, customs clearance, and delivery to site. This is included in the product supply cost — there are no hidden import fees.",
      },
      {
        question: "Are your drone solutions compliant with UAE regulations?",
        answer:
          "We work with UAE GCAA (General Civil Aviation Authority) requirements and provide guidance on registration, pilot certification, and operational approvals as part of every drone deployment. Compliance responsibility ultimately rests with the operator, but we make sure you know exactly what's required.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before getting started"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-tech-blue">
              Help Center
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold text-charcoal sm:text-3xl">
              Got a question? Find your answer below.
            </h2>
          </Reveal>
          <div className="mt-12">
            <FAQAccordion groups={faqGroups} />
          </div>
        </div>
      </section>

      <SectionCTA
        eyebrow="Still Have a Question?"
        heading="Our team is happy to help."
        body="Reach out directly and we'll get back to you quickly."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
