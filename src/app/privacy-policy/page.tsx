import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy │ Axion LLC — axiongulf.com" },
  description:
    "Axion LLC privacy policy. How we collect, use, and protect personal information submitted through axiongulf.com and axion3d.shop.",
};

const sections = [
  {
    title: "1. Who We Are",
    body: [
      "Axion LLC is a company registered in the Sharjah Media City Free Zone, United Arab Emirates. Our registered office is at Shams Business Center, Sharjah Media City Free Zone, Al Messaned, Sharjah, U.A.E. We operate the website axiongulf.com and the online store axion3d.shop.",
      `If you have any questions about this policy or how we handle your data, contact us at ${site.email}.`,
    ],
  },
  {
    title: "2. What Information We Collect",
    body: [
      "We collect information you provide directly to us, including:",
    ],
    bullets: [
      "Your name, company name, email address, and phone number when you complete the contact form",
      "Your email address if you subscribe to our newsletter",
      "Order and payment information when you purchase through axion3d.shop",
    ],
    after:
      "We also collect standard website usage data automatically, including your IP address, browser type, pages visited, and time spent on the site. This is collected via cookies and analytics tools.",
  },
  {
    title: "3. How We Use Your Information",
    body: ["We use the information we collect to:"],
    bullets: [
      "Respond to enquiries and provide the services you have requested",
      "Process orders placed through axion3d.shop",
      "Send service updates, quotes, and relevant product information",
      "Improve our website and understand how visitors use it",
      "Comply with our legal obligations",
    ],
    after:
      "We do not sell, rent, or share your personal information with third parties for marketing purposes.",
  },
  {
    title: "4. Cookies",
    body: [
      "Our website uses cookies to improve your experience and to help us understand how the site is used. By continuing to browse axiongulf.com, you consent to our use of cookies. You can disable cookies in your browser settings, though this may affect how the website functions.",
    ],
  },
  {
    title: "5. Data Storage and Security",
    body: [
      "Your information is stored securely. We take reasonable steps to protect personal data from loss, misuse, and unauthorised access. Our website is hosted on secure servers, and data submitted via our contact form is transmitted using SSL encryption.",
    ],
  },
  {
    title: "6. Your Rights",
    body: [
      `You have the right to access, correct, or request deletion of the personal information we hold about you. To make a request, contact us at ${site.email}. We will respond within a reasonable timeframe.`,
    ],
  },
  {
    title: "7. Third-Party Links",
    body: [
      "Our website contains links to third-party websites, including axion3d.shop. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    body: [
      "We may update this privacy policy from time to time. When we do, we will revise the 'Last Updated' date at the top of the page. We encourage you to review this page periodically.",
    ],
  },
  {
    title: "9. Contact",
    body: [
      "For any privacy-related queries, contact us at:",
      `Axion LLC | ${site.email} | ${site.phones[0]}`,
      `${site.address.line1}, ${site.address.line2}, ${site.address.line3}`,
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="Last updated: June 2026" />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl space-y-10 px-6 py-20">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-bold text-charcoal">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-charcoal/70">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc space-y-1.5 pl-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.after && <p>{section.after}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
