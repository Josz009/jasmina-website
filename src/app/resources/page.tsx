"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const guides = [
  { title: "Business Acquisition Due Diligence Checklist", desc: "A comprehensive 47-point checklist covering financial statements, legal documents, operational metrics, and red flags to evaluate before buying any business.", category: "Business Acquisition", format: "Interactive Checklist", file: "/downloads/business-acquisition-checklist.html", icon: (<svg viewBox="0 0 40 40" fill="none" stroke="var(--color-gold)" strokeWidth="1.2"><rect x="8" y="4" width="24" height="32" rx="1" /><path d="M14 14h12M14 20h12M14 26h8" /><path d="M14 10l2 2 4-4" strokeWidth="1.5" /></svg>) },
  { title: "Portfolio Risk Assessment Framework", desc: "A step-by-step guide to evaluating your portfolio's concentration risk, sector exposure, and correlation — with worksheets you can use immediately.", category: "Portfolio Advisory", format: "Guide + Worksheets", file: "/downloads/portfolio-risk-assessment.html", icon: (<svg viewBox="0 0 40 40" fill="none" stroke="var(--color-gold)" strokeWidth="1.2"><circle cx="20" cy="20" r="14" /><path d="M20 10v10l7 7" strokeWidth="1.5" /></svg>) },
  { title: "Entrepreneur Decision-Making Journal", desc: "A structured journaling template designed to help entrepreneurs track decisions, analyze outcomes, and develop a stronger decision-making framework over time.", category: "Coaching", format: "Printable Template", file: "/downloads/decision-making-journal.html", icon: (<svg viewBox="0 0 40 40" fill="none" stroke="var(--color-gold)" strokeWidth="1.2"><rect x="6" y="6" width="28" height="28" rx="2" /><path d="M12 14h16M12 20h16M12 26h10" /></svg>) },
  { title: "Understanding Trade Credit Insurance", desc: "A plain-language guide explaining what trade credit insurance is, how it works, and why every business that extends credit to customers should understand it.", category: "Risk Management", format: "Complete Guide", file: "/downloads/trade-credit-insurance-guide.html", icon: (<svg viewBox="0 0 40 40" fill="none" stroke="var(--color-gold)" strokeWidth="1.2"><path d="M20 4l14 8v10c0 8-6 14-14 18C12 36 6 30 6 22V12l14-8z" /><path d="M14 20l4 4 8-8" strokeWidth="1.5" /></svg>) },
  { title: "Financial Ratios Quick Reference Card", desc: "A compact reference card with 20 essential financial ratios, their formulas, and what they tell you about a business's health — perfect to keep on your desk.", category: "Business Analysis", format: "Reference Card", file: "/downloads/financial-ratios-reference.html", icon: (<svg viewBox="0 0 40 40" fill="none" stroke="var(--color-gold)" strokeWidth="1.2"><rect x="4" y="8" width="32" height="24" rx="2" /><path d="M12 20h16M20 14v12" strokeWidth="1.5" /></svg>) },
  { title: "NLP Techniques for Business Leaders", desc: "An introduction to five powerful NLP techniques that can transform how you communicate, negotiate, and make decisions in a business context.", category: "Coaching & Leadership", format: "Complete Guide", file: "/downloads/nlp-techniques-business.html", icon: (<svg viewBox="0 0 40 40" fill="none" stroke="var(--color-gold)" strokeWidth="1.2"><circle cx="20" cy="14" r="6" /><path d="M8 34c0-7 5.4-12 12-12s12 5 12 12" /><path d="M16 14l2 2 4-4" strokeWidth="1.5" /></svg>) },
];

const stats = [
  { number: "6", label: "Free Guides" },
  { number: "20+", label: "Years of Expertise" },
  { number: "100+", label: "Actionable Insights" },
  { number: "0", label: "Cost to You" },
];

export default function ResourcesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(".res-hero-content > *", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.3, ease: "power3.out" });
      gsap.fromTo(".res-hero-ornament", { scaleX: 0 }, { scaleX: 1, duration: 1.2, delay: 0.6, ease: "power2.out" });

      // Stats bar
      gsap.fromTo(".res-stat", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".res-stats-bar", start: "top 90%" } });

      // Section header
      gsap.fromTo(".res-section-header > *", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: ".res-section-header", start: "top 85%" } });

      // Cards stagger
      gsap.fromTo(".res-card", { opacity: 0, y: 40, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: ".res-grid", start: "top 85%" } });

      // CTA section
      gsap.fromTo(".res-cta > *", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, scrollTrigger: { trigger: ".res-cta", start: "top 85%" } });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Navigation />

      {/* Hero */}
      <section style={{ position: "relative", minHeight: "55vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", overflow: "hidden" }}>
        <Image src="/images/stock/resources-tools.jpg" alt="Free Resources & Guides" fill priority style={{ objectFit: "cover" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,16,40,0.92) 0%, rgba(36,24,56,0.85) 50%, rgba(26,16,40,0.95) 100%)" }} />
        {/* Decorative corner accents */}
        <div style={{ position: "absolute", top: 80, left: 40, width: 60, height: 60, borderTop: "1px solid rgba(201,149,43,0.15)", borderLeft: "1px solid rgba(201,149,43,0.15)" }} />
        <div style={{ position: "absolute", bottom: 40, right: 40, width: 60, height: 60, borderBottom: "1px solid rgba(201,149,43,0.15)", borderRight: "1px solid rgba(201,149,43,0.15)" }} />
        <div className="res-hero-content" style={{ position: "relative", zIndex: 2, maxWidth: 700, padding: "130px 32px 90px" }}>
          <span className="sec-tag sec-tag-gold" style={{ marginBottom: 16 }}>free resources</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "3.4rem", fontWeight: 400, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
            Tools & <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Guides.</em>
          </h1>
          <div className="res-hero-ornament" style={{ width: 80, height: 1.5, background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)", margin: "0 auto 24px", transformOrigin: "center" }} />
          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(250,246,238,0.6)", maxWidth: 560, margin: "0 auto" }}>
            Practical resources to help you make better financial decisions. Download free checklists, templates, and guides built from 20+ years of experience.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="res-stats-bar" style={{ padding: "0 56px", background: "var(--color-off-white)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", transform: "translateY(-36px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", background: "#fff", border: "1px solid rgba(201,149,43,0.1)", boxShadow: "0 8px 40px rgba(26,16,40,0.08)", padding: "28px 48px" }}>
            {stats.map((s, i) => (
              <div className="res-stat" key={i} style={{ textAlign: "center", flex: 1, borderRight: i < stats.length - 1 ? "1px solid rgba(201,149,43,0.1)" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "var(--color-gold)", lineHeight: 1 }}>{s.number}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "var(--color-body-light)", marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Header + Grid */}
      <section style={{ padding: "40px 56px 100px", background: "var(--color-off-white)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="res-section-header" style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="sec-tag" style={{ marginBottom: 12 }}>download & grow</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", fontWeight: 400, color: "var(--color-deep)", lineHeight: 1.2 }}>
              Built From <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Experience.</em>
            </h2>
            <div style={{ width: 40, height: 1, background: "var(--color-gold)", margin: "20px auto 0" }} />
          </div>

          <div className="res-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {guides.map((guide, i) => (
              <div className="res-card" key={i} style={{ padding: "40px 28px 36px", background: "#fff", border: "1px solid rgba(201,149,43,0.08)", borderRadius: 2, textAlign: "center", transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)", cursor: "pointer", position: "relative", overflow: "hidden" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 16px 48px rgba(201,149,43,0.12)";
                  el.style.borderColor = "rgba(201,149,43,0.25)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "rgba(201,149,43,0.08)";
                }}
              >
                {/* Top gold line accent */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 40, height: 2, background: "var(--color-gold)" }} />
                <div style={{ width: 64, height: 64, margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", border: "1.5px solid rgba(201,149,43,0.2)", background: "rgba(201,149,43,0.04)", transition: "all 0.4s" }}>
                  {guide.icon}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, color: "var(--color-gold)", marginBottom: 10 }}>{guide.category}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600, color: "var(--color-deep)", lineHeight: 1.3, marginBottom: 12 }}>{guide.title}</h3>
                <p style={{ fontSize: "0.84rem", lineHeight: 1.75, color: "var(--color-body)", marginBottom: 20 }}>{guide.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 20 }}>
                  <svg viewBox="0 0 16 16" fill="none" stroke="var(--color-body-light)" strokeWidth="1.5" style={{ width: 14, height: 14 }}><path d="M8 2v8M4 7l4 4 4-4" /><path d="M2 12v2h12v-2" /></svg>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", color: "var(--color-body-light)" }}>{guide.format}</span>
                </div>
                <a href={guide.file} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "var(--color-deep)", color: "var(--color-cream)", padding: "11px 28px", border: "none", fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" as const, cursor: "pointer", borderRadius: 2, transition: "all 0.3s", textDecoration: "none" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-gold)"; e.currentTarget.style.color = "var(--color-deep)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "var(--color-deep)"; e.currentTarget.style.color = "var(--color-cream)"; }}
                >
                  Download Free
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div style={{ background: "var(--color-off-white)", paddingBottom: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, padding: "0 56px" }}>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,149,43,0.2))" }} />
          <svg viewBox="0 0 20 20" fill="none" style={{ width: 12, height: 12 }}><rect x="4" y="4" width="12" height="12" transform="rotate(45 10 10)" stroke="rgba(201,149,43,0.3)" strokeWidth="1" /></svg>
          <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16 }}><rect x="4" y="4" width="12" height="12" transform="rotate(45 10 10)" fill="rgba(201,149,43,0.15)" /></svg>
          <svg viewBox="0 0 20 20" fill="none" style={{ width: 12, height: 12 }}><rect x="4" y="4" width="12" height="12" transform="rotate(45 10 10)" stroke="rgba(201,149,43,0.3)" strokeWidth="1" /></svg>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: "linear-gradient(90deg, rgba(201,149,43,0.2), transparent)" }} />
        </div>
      </div>

      {/* CTA Section */}
      <section style={{ padding: "80px 56px", background: "linear-gradient(180deg, var(--color-off-white) 0%, var(--color-cream) 100%)", textAlign: "center" }}>
        <div className="res-cta" style={{ maxWidth: 600, margin: "0 auto" }}>
          <span className="sec-tag sec-tag-gold" style={{ marginBottom: 16 }}>go deeper</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 400, color: "var(--color-deep)", marginBottom: 16, lineHeight: 1.2 }}>
            Need Personalized <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Guidance?</em>
          </h2>
          <div style={{ width: 40, height: 1, background: "var(--color-gold)", margin: "0 auto 24px" }} />
          <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--color-body)", marginBottom: 36 }}>
            These resources are a great starting point. For deeper analysis tailored to your specific situation, let&apos;s schedule a consultation.
          </p>
          <Link href="/#contact" style={{ display: "inline-block", background: "var(--color-gold)", color: "var(--color-deep)", padding: "14px 44px", fontFamily: "var(--font-body)", fontSize: "0.78rem", fontWeight: 700, textDecoration: "none", letterSpacing: "1.5px", textTransform: "uppercase" as const, borderRadius: 2, transition: "all 0.3s" }}>
            Schedule a Consultation
          </Link>
          <div style={{ marginTop: 20 }}>
            <Link href="/" style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" as const, color: "var(--color-body-light)", textDecoration: "none", transition: "color 0.3s" }}>
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
