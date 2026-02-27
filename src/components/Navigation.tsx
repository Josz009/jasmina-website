"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isHome) return; // Let Link handle navigation on non-home pages
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-top">
          <Link href="/" className="nav-logo" style={{ textDecoration: "none" }}>
            <Image src="/images/logo.png" alt="LiLLY'S Logo" width={38} height={38} />
            <span className="nav-logo-text">J&A Business Advisory & Coaching</span>
          </Link>
          <div className="nav-links">
            <Link href="/about">About</Link>
            <div
              className="nav-dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a
                href={isHome ? "#services" : "/#services"}
                onClick={isHome ? (e) => handleNavClick(e, "#services") : undefined}
                className="nav-dropdown-trigger"
              >
                Services
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 10, height: 10, marginLeft: 4, verticalAlign: "middle" }}>
                  <path d="M3 5l3 3 3-3" />
                </svg>
              </a>
              <div className={`nav-dropdown-menu ${servicesOpen ? "open" : ""}`}>
                <Link href="/services/business-acquisition" onClick={() => setServicesOpen(false)}>
                  Business Acquisition Analysis
                </Link>
                <Link href="/services/portfolio-advisory" onClick={() => setServicesOpen(false)}>
                  AR Portfolio & Trading Advisory
                </Link>
                <Link href="/services/entrepreneur-coaching" onClick={() => setServicesOpen(false)}>
                  1-1 Intensive Coaching
                </Link>
                <div className="nav-dropdown-divider" />
                <Link href="/align-method" onClick={() => setServicesOpen(false)} className="nav-dropdown-align">
                  The ALIGN Method&trade;
                  <span className="nav-align-badge">Premium</span>
                </Link>
              </div>
            </div>
            <Link href="/blog">Insights</Link>
            {/* <Link href="/resources">Resources</Link> */}
            {/* <Link href="/faq">FAQ</Link> */}
            <Link href={isHome ? "#contact" : "/#contact"} className="nav-cta"
              onClick={isHome ? (e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, "#contact") : undefined}
            >
              Contact
            </Link>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <svg viewBox="0 0 24 24">
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
        <div className="nav-rule" />
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/services/business-acquisition" onClick={() => setMenuOpen(false)}>Business Acquisition</Link>
        <Link href="/services/portfolio-advisory" onClick={() => setMenuOpen(false)}>AR Portfolio & Trading Advisory</Link>
        <Link href="/services/entrepreneur-coaching" onClick={() => setMenuOpen(false)}>1-1 Intensive Coaching</Link>
        <Link href="/align-method" onClick={() => setMenuOpen(false)} className="mobile-align-link">The ALIGN Method&trade;</Link>
        <Link href="/blog" onClick={() => setMenuOpen(false)}>Insights</Link>
        {/* <Link href="/resources" onClick={() => setMenuOpen(false)}>Resources</Link> */}
        {/* <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link> */}
        <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </>
  );
}
