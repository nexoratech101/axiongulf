import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { LocationCard } from "@/components/ui/LocationCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { IconPhone, IconMail, IconClock, IconTracking } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Axion — Industrial Technology Solutions UAE │ Sharjah",
  },
  description:
    "Get in touch with Axion. We supply and support advanced manufacturing, robotics, drone, and IoT solutions across all 7 Emirates. Based in Sharjah, UAE.",
};

const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.address.line1}, ${site.address.line2}, ${site.address.line3}`,
)}&output=embed`;

export default function Contact() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Whether you have a question, a project in mind, or just want to understand what's possible — we're easy to reach."
      />

      <section className="bg-white">
        <Reveal className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Send an Enquiry
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Contact Details
            </h2>

            <div className="mt-8 space-y-8">
              <div className="flex gap-4">
                <IconTracking className="h-6 w-6 shrink-0 text-tech-blue" />
                <div>
                  <p className="font-semibold text-charcoal">Our Office</p>
                  <address className="mt-1 text-sm not-italic text-charcoal/65">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.line3}
                  </address>
                </div>
              </div>

              <div className="flex gap-4">
                <IconPhone className="h-6 w-6 shrink-0 text-tech-blue" />
                <div>
                  <p className="font-semibold text-charcoal">Call Us</p>
                  <div className="mt-1 space-y-1 text-sm text-charcoal/65">
                    {site.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="block transition-colors hover:text-tech-blue"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <IconMail className="h-6 w-6 shrink-0 text-tech-blue" />
                <div>
                  <p className="font-semibold text-charcoal">Email Us</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block text-sm text-charcoal/65 transition-colors hover:text-tech-blue"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <IconClock className="h-6 w-6 shrink-0 text-tech-blue" />
                <div>
                  <p className="font-semibold text-charcoal">Business Hours</p>
                  <p className="mt-1 text-sm text-charcoal/65">
                    {site.hours.weekdays}
                    <br />
                    {site.hours.weekend}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#f7f9fb]">
        <Reveal className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            <LocationCard
              heading="Sharjah HQ"
              lines={[
                site.address.line1,
                site.address.line2,
                site.address.line3,
              ]}
              phones={[...site.phones]}
              email={site.email}
            />
            <LocationCard
              heading="Online Store"
              lines={[
                "3D printers, filaments, resins & accessories.",
                "Delivery across the UAE.",
              ]}
              linkLabel="Visit axion3d.shop"
              linkHref={site.shopUrl}
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-white">
        <Reveal className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-2xl font-bold text-charcoal">
            Find Us
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-charcoal/10">
            <iframe
              title="Axion LLC — Sharjah HQ location"
              src={mapEmbedSrc}
              width="100%"
              height="400"
              loading="lazy"
              className="block"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
