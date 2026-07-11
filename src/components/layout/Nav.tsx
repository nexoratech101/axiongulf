"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, site } from "@/lib/site";
import { IconChevronDown, IconClose, IconMenu } from "@/components/icons";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "border-black/5 shadow-sm shadow-black/5" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center" aria-label={`${site.name} home`}>
          <Image
            src="/brand/logo.png"
            alt={site.name}
            width={180}
            height={45}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active =
              isActive(pathname, item.href) ||
              item.children?.some((child) => isActive(pathname, child.href));

            return item.children ? (
              <div key={item.label} className="group relative">
                <button
                  className={`flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-tech-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-tech-blue ${
                    active ? "text-tech-blue" : "text-charcoal"
                  }`}
                  aria-haspopup="true"
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  <IconChevronDown className="h-3.5 w-3.5" />
                </button>
                <div className="invisible absolute left-0 top-full w-72 rounded-xl border border-black/5 bg-white p-2 opacity-0 shadow-xl shadow-black/5 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-4 py-3 hover:bg-tech-blue/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-tech-blue"
                    >
                      <span className="block text-sm font-semibold text-charcoal">
                        {child.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-charcoal/60">
                        {child.blurb}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-tech-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-tech-blue ${
                  active ? "text-tech-blue" : "text-charcoal"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-tech-blue px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-tech-blue/90"
          >
            Get in Touch
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-charcoal lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-black/5 bg-white px-6 py-4 lg:hidden"
          aria-label="Primary mobile"
        >
          {primaryNav.map((item) => {
            const active =
              isActive(pathname, item.href) ||
              item.children?.some((child) => isActive(pathname, child.href));
            return (
              <div key={item.label} className="py-2">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`block py-2 text-base font-medium ${
                    active ? "text-tech-blue" : "text-charcoal"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 flex flex-col gap-1 border-l border-black/10 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1.5 text-sm text-charcoal/70"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
}
