"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

const competencies = [
  { label: "Advanced Manufacturing", value: 95 },
  { label: "IoT & Automation", value: 90 },
  { label: "Project Delivery", value: 98 },
];

export function CompetencyBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-10 space-y-6">
      {competencies.map((item, i) => (
        <Reveal key={item.label} delay={i * 100}>
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-semibold text-charcoal">
              {item.label}
            </span>
            <span className="font-mono text-sm font-semibold text-tech-blue">
              <Counter value={`${item.value}%`} />
            </span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-charcoal/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-tech-blue to-innovation-teal transition-[width] duration-[1400ms] ease-out motion-reduce:transition-none"
              style={{ width: filled ? `${item.value}%` : "0%" }}
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
