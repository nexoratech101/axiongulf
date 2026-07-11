import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export type Stat = { value: string; label: string };

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="bg-charcoal">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4 sm:gap-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80} className="text-center sm:text-left">
            <div className="font-display text-3xl font-bold text-innovation-teal sm:text-4xl">
              <Counter value={stat.value} />
            </div>
            <div className="mt-1 font-mono text-xs uppercase tracking-widest text-white/70">
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
