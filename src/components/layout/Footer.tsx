import Image from "next/image";
import Link from "next/link";
import { footerQuickLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/brand/logo-white.png"
              alt={site.name}
              width={160}
              height={40}
              className="h-9 w-auto"
            />
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-white/60">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              UAE-based industrial technology company delivering advanced
              manufacturing, robotics, IoT, and drone solutions across all 7
              Emirates.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-innovation-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/60 transition-colors hover:text-innovation-teal"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <address className="mt-4 space-y-1 text-sm not-italic text-white/60">
              <p>{site.address.line1}</p>
              <p>{site.address.line2}</p>
              <p>{site.address.line3}</p>
            </address>
            <p className="mt-4 space-y-1 text-sm text-white/60">
              {site.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="block transition-colors hover:text-innovation-teal"
                >
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="block transition-colors hover:text-innovation-teal"
              >
                {site.email}
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Online Store
            </h3>
            <p className="mt-4 text-sm text-white/60">
              3D printers, filaments, resins & accessories — delivered across
              the UAE.
            </p>
            <a
              href={site.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-innovation-teal"
            >
              axion3d.shop →
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-xs text-white/50">
          © 2026 Axion LLC. All rights reserved. | Sharjah, U.A.E.
        </div>
      </div>
    </footer>
  );
}
