"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const credentials = [
  { name: "AIG", desc: "Regional Underwriting Specialist", icon: (
    <svg viewBox="0 0 40 40" fill="none" stroke="var(--color-gold)" strokeWidth="1">
      <rect x="4" y="8" width="32" height="24" rx="2" />
      <path d="M12 20h16M20 14v12" strokeWidth="1.5" />
    </svg>
  )},
  { name: "John C. Maxwell", desc: "Certified Coach, Trainer & Speaker", icon: (
    <svg viewBox="0 0 40 40" fill="none" stroke="var(--color-gold)" strokeWidth="1">
      <circle cx="20" cy="14" r="6" />
      <path d="M8 34c0-7 5.4-12 12-12s12 5 12 12" />
    </svg>
  )},
  { name: "MER® & Hypnotherapy", desc: "Certified — AIP", icon: (
    <svg viewBox="0 0 40 40" fill="none" stroke="var(--color-gold)" strokeWidth="1">
      <path d="M20 4l4 8h8l-6 5 2 9-8-5-8 5 2-9-6-5h8z" />
    </svg>
  )},
  { name: "Trade Credit University", desc: "AIG Certified", icon: (
    <svg viewBox="0 0 40 40" fill="none" stroke="var(--color-gold)" strokeWidth="1">
      <path d="M6 16l14-8 14 8-14 8z" />
      <path d="M10 18v10c0 2 4.5 4 10 4s10-2 10-4V18" />
    </svg>
  )},
  { name: "University St. Cyril", desc: "BA in Management", icon: (
    <svg viewBox="0 0 40 40" fill="none" stroke="var(--color-gold)" strokeWidth="1">
      <rect x="8" y="6" width="24" height="28" rx="1" />
      <path d="M14 14h12M14 20h12M14 26h8" />
    </svg>
  )},
];

export default function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".trust-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{
      background: "var(--color-cream)",
      padding: "56px 56px",
      borderTop: "1px solid rgba(201,149,43,0.1)",
      borderBottom: "1px solid rgba(201,149,43,0.1)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <span className="sec-tag sec-tag-gold" style={{ marginBottom: 32, display: "block" }}>
          credentials & certifications
        </span>
        <div className="trust-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 24,
        }}>
          {credentials.map((cred, i) => (
            <div className="trust-item" key={i} style={{ textAlign: "center" }}>
              <div style={{
                width: 52,
                height: 52,
                margin: "0 auto 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                border: "1px solid rgba(201,149,43,0.2)",
                background: "rgba(201,149,43,0.04)",
              }}>
                {cred.icon}
              </div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "var(--color-deep)",
                letterSpacing: "0.5px",
                marginBottom: 2,
              }}>
                {cred.name}
              </div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                color: "var(--color-body-light)",
                lineHeight: 1.4,
              }}>
                {cred.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
