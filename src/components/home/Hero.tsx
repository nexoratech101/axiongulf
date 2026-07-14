import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DiscoverLink } from "@/components/ui/DiscoverLink";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

export function Hero() {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden sm:min-h-[720px]">
      <Image
        src="/images/hero-3d-printer-toolhead.jpg"
        alt="Close-up of a 3D printer's toolhead with AI LiDAR sensor in operation"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/70 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="max-w-2xl [text-shadow:0_2px_16px_rgba(0,0,0,0.45)]">
          <Reveal>
            <Eyebrow tone="white">Industrial Technology · UAE</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display mt-6 text-4xl font-bold leading-[1.08] text-white sm:text-6xl">
              Engineering the future of the Gulf.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Axion is a UAE-based industrial technology company. 3D
              printing, CNC machining, and laser cutting are live today —
              real brands, real turnaround, backed by axion3d.shop. Robotics,
              drones, and IoT solutions are being brought to the UAE market
              through Axion&apos;s global technology partnerships, with the
              same local engineering and support across all 7 Emirates.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-tech-blue transition-colors hover:bg-white/90"
              >
                Explore Our Solutions
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-6">
              <DiscoverLink href="https://axion3d.shop" tone="white" external>
                Shop 3D Printing on axion3d.shop
              </DiscoverLink>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-white/20 pt-8 sm:max-w-lg">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-white/60">
                  Coverage
                </dt>
                <dd className="font-display mt-1 text-2xl font-bold text-innovation-teal">
                  <Counter value="7" /> Emirates
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-white/60">
                  Delivery Model
                </dt>
                <dd className="font-display mt-1 text-2xl font-bold text-innovation-teal">
                  <Counter value="360°" />
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-white/60">
                  Accountability
                </dt>
                <dd className="font-display mt-1 text-2xl font-bold text-innovation-teal">
                  <Counter value="1" /> Contact
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
