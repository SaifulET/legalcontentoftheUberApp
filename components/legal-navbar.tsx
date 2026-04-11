"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/terms-and-conditions",
    label: "Terms and Conditions",
  },
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
  },
];

export function LegalNavbar() {
  const pathname = usePathname();

  return (
    <header className="navbar-wrap">
      <nav className="navbar" aria-label="Legal navigation">
        <Link href="/" className="brand">
          <Image
            src="/logo.png"
            alt="Logo"
            width={132}
            height={42}
            className="brand-logo"
            priority
          />
        </Link>

        <div className="nav-actions">
          <div className="nav-links">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`.trim()}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <a className="nav-contact" href="mailto:support@ma3llc.co">
            support@ma3llc.co
          </a>
        </div>
      </nav>
    </header>
  );
}
