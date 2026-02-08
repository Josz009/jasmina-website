"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    slug: "business-acquisition",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 3h18v18H3z" />
        <path d="M8 17V10" />
        <path d="M12 17V7" />
        <path d="M16 17V13" />
      </svg>
    ),
    image: "/images/stock/executive-meeting.jpg",
    title: "Business Acquisition Financial Analysis",
    desc: "Comprehensive analysis of financial statements, cash flow, and risk exposure — giving you a clear view before you commit.",
    target: "For Buyers & Investors",
  },
  {
    slug: "portfolio-advisory",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    image: "/images/stock/financial-charts.jpg",
    title: "Portfolio & Trading Risk Advisory",
    desc: "Rigorous evaluation of portfolio risk, position weighting, and exposure so you can trade with discipline and confidence.",
    target: "For Active Traders & Investors",
  },
  {
    slug: "entrepreneur-coaching",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    image: "/images/stock/modern-workspace.jpg",
    title: "Entrepreneur Coaching",
    desc: "Personalized coaching to understand your decision-making style, risk tolerance, and leadership approach.",
    target: "For Entrepreneurs & Owners",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animations
      const headerEls = sectionRef.current!.querySelectorAll(".srv-top > *");
      gsap.fromTo(headerEls,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1,
          scrollTrigger: { trigger: ".srv-top", start: "top 85%" } }
      );

      // Card animations
      const cards = cardsRef.current!.querySelectorAll(".srv-card");
      gsap.fromTo(cards,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 85%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="srv-inner" style={{ position: "relative", zIndex: 1 }}>
        <div className="srv-top">
          <span className="sec-tag sec-tag-gold">advanced strategy for confident decisions</span>
          <h2 className="sec-title sec-title-light">
            A Curated Suite of <em>Financial Solutions.</em>
          </h2>
          <div className="sec-rule sec-rule-gold" />
          <p className="sec-desc sec-desc-light">
            Whether you&apos;re acquiring a business, navigating portfolio risk, or building
            something new — every engagement is tailored to your distinct needs.
          </p>
        </div>
        <div className="srv-grid" ref={cardsRef}>
          {services.map((srv) => (
            <Link href={`/services/${srv.slug}`} key={srv.slug} style={{ textDecoration: "none" }}>
              <div className="srv-card">
                <div className="srv-card-img">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    width={400}
                    height={200}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="srv-icon">{srv.icon}</div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
                <div className="srv-for">{srv.target}</div>
                <span className="srv-link">Learn More &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
