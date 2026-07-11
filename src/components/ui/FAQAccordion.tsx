import { IconChevronDown } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";

export type FAQItem = { question: string; answer: string };
export type FAQGroup = { label: string; items: FAQItem[] };

export function FAQAccordion({ groups }: { groups: FAQGroup[] }) {
  return (
    <div className="space-y-12">
      {groups.map((group, gi) => (
        <Reveal key={group.label} delay={gi * 80}>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-tech-blue">
            {group.label}
          </p>
          <div className="mt-4 divide-y divide-charcoal/10 border-t border-charcoal/10">
            {group.items.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-tech-blue sm:text-lg">
                  {item.question}
                  <IconChevronDown className="h-5 w-5 shrink-0 text-tech-blue transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-charcoal/70">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
