import Image from "next/image";
import { DiscoverLink } from "@/components/ui/DiscoverLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function FlagshipPanel() {
  return (
    <section className="relative overflow-hidden bg-tech-blue">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-tech-blue via-tech-blue to-innovation-teal/40"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow tone="white">3D Printing · Live Today</Eyebrow>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-bold text-white sm:text-4xl">
            Fully operational. Backed by axion3d.shop.
          </h2>
          <p className="mt-4 max-w-xl text-white/80">
            FDM, resin, and industrial 3D printing, metal & polymer
            printing, and printer maintenance — fully operational and ready
            to deploy now. Order materials and consumables directly through
            our online store.
          </p>
          <div className="mt-8">
            <DiscoverLink href="https://axion3d.shop" tone="white" external>
              Visit axion3d.shop
            </DiscoverLink>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-black/20">
            <Image
              src="/images/flagship-3d-printing.jpg"
              alt="Finished 3D printed models fresh off the printer"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
