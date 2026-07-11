export const site = {
  name: "Axion LLC",
  shortName: "Axion",
  tagline: "Innovation · Technology · Solutions",
  url: "https://axiongulf.com",
  shopUrl: "https://axion3d.shop",
  email: "sales1@axiongulf.com",
  phones: ["+971 52 582 8490", "+971 50 108 3257"],
  address: {
    line1: "Shams Business Center",
    line2: "Sharjah Media City Free Zone",
    line3: "Al Messaned, Sharjah, U.A.E.",
  },
  hours: {
    weekdays: "Sunday to Thursday: 9:00 AM – 6:00 PM GST",
    weekend: "Friday & Saturday: By appointment",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string; blurb: string }[];
};

export const solutionCategories = [
  {
    label: "Advanced Manufacturing",
    href: "/solutions/advanced-manufacturing",
    blurb: "3D printing, CNC machining & laser cutting for UAE industry",
  },
  {
    label: "Robotics & Automation",
    href: "/solutions/robotics-automation",
    blurb: "From kiosk robots to full production-line automation",
  },
  {
    label: "Drone Solutions",
    href: "/solutions/drone-solutions",
    blurb: "Commercial UAV systems for delivery, surveillance & inspection",
  },
  {
    label: "IoT Solutions",
    href: "/solutions/iot-solutions",
    blurb: "Connected systems for smarter operations across the UAE",
  },
] as const;

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Solutions",
    href: "/solutions",
    children: solutionCategories.map(({ label, href, blurb }) => ({
      label,
      href,
      blurb,
    })),
  },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];
