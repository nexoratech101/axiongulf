import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const strengths = [
  {
    title: "Experienced Leadership",
    body: "Australian-led management bringing international standards, structured processes, and industry best practices to the UAE market.",
  },
  {
    title: "Engineering Excellence",
    body: "A dedicated technical team with deep expertise across multiple domains, capable of handling complex, multi-disciplinary projects with confidence.",
  },
  {
    title: "Local Market Intelligence",
    body: "In-depth understanding of the UAE's operational challenges, regulatory landscape, and the specific technical requirements of Gulf industry.",
  },
  {
    title: "Strategic Partnerships",
    body: "Carefully selected local and international partners, ensuring access to high-quality technologies and a reliable, diversified supply chain.",
  },
  {
    title: "Flexibility & Agility",
    body: "A highly adaptable approach — open to client-preferred brands and technologies, always ensuring a truly customised solution experience.",
  },
];

export function WhyAxion() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow>Why Axion</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold text-charcoal sm:text-4xl">
            Five pillars, one accountable partner.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-charcoal/10 sm:grid-cols-2">
          {strengths.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className={`bg-white p-8 ${
                i === strengths.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              <span className="font-mono text-xs font-semibold text-tech-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-3 text-lg font-semibold text-charcoal">
                {item.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-charcoal/65">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
