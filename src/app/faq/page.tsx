"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { category: "General", icon: "01", questions: [
    { q: "Who are your services designed for?", a: "My services are designed for business buyers evaluating acquisitions, active traders and investors managing portfolios, and entrepreneurs who want to build with clarity and confidence. Whether you're making a $500K business purchase or managing a seven-figure portfolio, I provide the analysis and coaching to support your decisions." },
    { q: "What makes your approach different from other financial advisors?", a: "I combine deep financial analysis experience (20+ years in global finance) with certified executive coaching (John Maxwell, Mental and Emotional Release® & Hypnotherapy through AIP). Most advisors give you numbers. I give you numbers AND the decision-making framework to act on them with confidence." },
    { q: "Do you manage money or make trades on behalf of clients?", a: "No. I am not a registered investment advisor and do not manage funds or execute trades. My role is analytical and advisory — I help you understand your risk, evaluate opportunities, and make informed decisions. The decisions are always yours." },
    { q: "Do you work with clients remotely?", a: "Yes. All consultations can be conducted via video call, making my services accessible regardless of your location. I work with clients across the United States and internationally." },
  ]},
  { category: "Business Acquisition", icon: "02", questions: [
    { q: "What does your business acquisition analysis include?", a: "A comprehensive review of financial statements, cash flow analysis, risk exposure mapping, ratio and benchmark analysis, and a detailed written report. The engagement concludes with a 90-minute strategy session to walk through all findings." },
    { q: "How long does the analysis take?", a: "Depending on the complexity of the business and availability of documents, a typical engagement takes 2-4 weeks from document collection to final report delivery." },
    { q: "Can you help me decide whether to buy a specific business?", a: "I provide the financial analysis and risk assessment that informs your decision. I'll clearly present the strengths, weaknesses, red flags, and opportunities — then we'll discuss them together so you can make a confident, informed choice." },
  ]},
  { category: "Portfolio Advisory", icon: "03", questions: [
    { q: "What kind of portfolios do you analyze?", a: "I work with active stock portfolios, options-heavy portfolios, and mixed-asset portfolios. Whether you're trading individual equities, ETFs, or options strategies, I can evaluate your risk exposure and position weighting." },
    { q: "Do you provide specific buy/sell recommendations?", a: "No. I provide risk analysis, concentration assessment, and optimization frameworks. My goal is to help you understand your exposure and make better-informed decisions — not to tell you what to buy or sell." },
    { q: "How often should I get a portfolio review?", a: "For active traders, I recommend quarterly reviews. For long-term investors, semi-annual or annual reviews are typically sufficient. The frequency depends on your trading activity and market conditions." },
  ]},
  { category: "Coaching", icon: "04", questions: [
    { q: "What does an entrepreneur coaching engagement look like?", a: "We start with a discovery session to understand your business, vision, and challenges. I then create a profile of your decision-making style and risk tolerance. From there, we have regular 1-on-1 sessions focused on building your leadership and strategic thinking skills." },
    { q: "How is NLP used in your coaching?", a: "NLP (Neuro-Linguistic Programming) helps us understand how you process information, respond to pressure, and make decisions under uncertainty. I use NLP techniques to help you reframe challenges, build confidence, and develop more effective communication patterns." },
    { q: "How long is a typical coaching engagement?", a: "Most coaching clients work with me for 3-6 months, with sessions every two weeks. Some clients continue with monthly accountability check-ins after the initial program. The timeline is flexible and depends on your goals." },
  ]},
  { category: "Pricing & Process", icon: "05", questions: [
    { q: "How much do your services cost?", a: "Pricing varies based on the scope and complexity of the engagement. I offer single-session consultations, project-based analysis packages, and ongoing coaching programs. Please schedule a consultation so we can discuss your specific needs and I can provide a clear quote." },
    { q: "Do you offer a free initial consultation?", a: "Yes. I offer a complimentary 20-minute discovery call where we can discuss your situation, determine if my services are a good fit, and outline next steps." },
    { q: "What is your cancellation policy?", a: "I ask for 24-hour notice for session cancellations. Missed sessions without notice may be forfeited. For project-based work, cancellation terms are outlined in the engagement agreement." },
  ]},
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
      }
    }
  }, [open]);

  return (
    <div style={{ borderBottom: "1px solid rgba(201,149,43,0.08)", transition: "all 0.3s" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16, transition: "all 0.3s" }}
        onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = "8px"; }}
        onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = "0"; }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: open ? "var(--color-gold)" : "rgba(201,149,43,0.3)", fontWeight: 400, transition: "color 0.3s", minWidth: 20 }}>{String(index + 1).padStart(2, "0")}</span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: open ? "var(--color-gold)" : "var(--color-deep)", lineHeight: 1.35, transition: "color 0.3s" }}>{q}</span>
        </div>
        <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", border: `1px solid ${open ? "var(--color-gold)" : "rgba(201,149,43,0.15)"}`, background: open ? "rgba(201,149,43,0.08)" : "transparent", flexShrink: 0, transition: "all 0.3s" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke={open ? "var(--color-gold)" : "rgba(201,149,43,0.4)"} strokeWidth="1.5" style={{ width: 14, height: 14, transition: "transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>
      <div ref={contentRef} style={{ height: 0, opacity: 0, overflow: "hidden" }}>
        <div style={{ paddingBottom: 24, paddingLeft: 34 }}>
          <div style={{ width: 24, height: 1, background: "var(--color-gold)", marginBottom: 12 }} />
          <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-body)" }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.fromTo(".faq-hero-content > *", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.3, ease: "power3.out" });
      gsap.fromTo(".faq-hero-ornament", { scaleX: 0 }, { scaleX: 1, duration: 1.2, delay: 0.6, ease: "power2.out" });

      // Category tabs
      gsap.fromTo(".faq-tab", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, scrollTrigger: { trigger: ".faq-tabs", start: "top 90%" } });

      // FAQ items
      gsap.fromTo(".faq-category-block", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: ".faq-main", start: "top 85%" } });

      // CTA
      gsap.fromTo(".faq-cta > *", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, scrollTrigger: { trigger: ".faq-cta", start: "top 85%" } });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Navigation />

      {/* Hero */}
      <section style={{ position: "relative", minHeight: "55vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", overflow: "hidden" }}>
        <Image src="/images/stock/faq-header.jpg" alt="Frequently Asked Questions" fill priority style={{ objectFit: "cover" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,16,40,0.92) 0%, rgba(36,24,56,0.85) 50%, rgba(26,16,40,0.95) 100%)" }} />
        {/* Soft radial vignette behind text */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(26,16,40,0.5) 0%, transparent 100%)", pointerEvents: "none" }} />
        {/* Decorative corner accents */}
        <div style={{ position: "absolute", top: 80, left: 40, width: 60, height: 60, borderTop: "1px solid rgba(201,149,43,0.15)", borderLeft: "1px solid rgba(201,149,43,0.15)" }} />
        <div style={{ position: "absolute", bottom: 40, right: 40, width: 60, height: 60, borderBottom: "1px solid rgba(201,149,43,0.15)", borderRight: "1px solid rgba(201,149,43,0.15)" }} />
        <div className="faq-hero-content" style={{ position: "relative", zIndex: 2, maxWidth: 700, padding: "130px 32px 90px" }}>
          <span className="sec-tag sec-tag-gold" style={{ marginBottom: 16 }}>common questions</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "3.4rem", fontWeight: 400, color: "#fff", lineHeight: 1.15, marginBottom: 20, textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}>
            Frequently Asked <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Questions.</em>
          </h1>
          <div className="faq-hero-ornament" style={{ width: 80, height: 1.5, background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)", margin: "0 auto 24px", transformOrigin: "center" }} />
          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(250,246,238,0.82)", maxWidth: 560, margin: "0 auto", textShadow: "0 1px 16px rgba(0,0,0,0.3)" }}>
            Everything you need to know about working together. If you don&apos;t see your question here, don&apos;t hesitate to reach out.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(201,149,43,0.08)", position: "sticky", top: 0, zIndex: 10 }}>
        <div className="faq-tabs" style={{ display: "flex", justifyContent: "center", gap: 0, maxWidth: 900, margin: "0 auto", overflow: "auto" }}>
          {faqs.map((cat, i) => (
            <button
              className="faq-tab"
              key={i}
              onClick={() => {
                setActiveCategory(i);
                document.getElementById(`faq-cat-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              style={{
                padding: "18px 24px",
                background: "none",
                border: "none",
                borderBottom: activeCategory === i ? "2px solid var(--color-gold)" : "2px solid transparent",
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                fontWeight: activeCategory === i ? 700 : 600,
                letterSpacing: "1.2px",
                textTransform: "uppercase" as const,
                color: activeCategory === i ? "var(--color-gold)" : "var(--color-body-light)",
                cursor: "pointer",
                transition: "all 0.3s",
                whiteSpace: "nowrap" as const,
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-main" style={{ padding: "80px 56px 100px", background: "var(--color-off-white)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {faqs.map((cat, i) => (
            <div id={`faq-cat-${i}`} className="faq-category-block" key={i} style={{ marginBottom: 56, scrollMarginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
                <div style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", border: "1.5px solid rgba(201,149,43,0.2)", background: "rgba(201,149,43,0.04)" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 400, color: "var(--color-gold)" }}>{cat.icon}</span>
                </div>
                <div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 600, color: "var(--color-deep)", lineHeight: 1.2 }}>{cat.category}</h2>
                  <div style={{ width: 30, height: 1, background: "var(--color-gold)", marginTop: 8 }} />
                </div>
              </div>
              <div style={{ background: "#fff", padding: "4px 32px", border: "1px solid rgba(201,149,43,0.08)", borderRadius: 2, boxShadow: "0 2px 16px rgba(26,16,40,0.03)" }}>
                {cat.questions.map((faq, j) => (<FAQItem key={j} q={faq.q} a={faq.a} index={j} />))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative Divider */}
      <div style={{ background: "var(--color-off-white)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, padding: "0 56px" }}>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,149,43,0.2))" }} />
          <svg viewBox="0 0 20 20" fill="none" style={{ width: 12, height: 12 }}><rect x="4" y="4" width="12" height="12" transform="rotate(45 10 10)" stroke="rgba(201,149,43,0.3)" strokeWidth="1" /></svg>
          <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16 }}><rect x="4" y="4" width="12" height="12" transform="rotate(45 10 10)" fill="rgba(201,149,43,0.15)" /></svg>
          <svg viewBox="0 0 20 20" fill="none" style={{ width: 12, height: 12 }}><rect x="4" y="4" width="12" height="12" transform="rotate(45 10 10)" stroke="rgba(201,149,43,0.3)" strokeWidth="1" /></svg>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: "linear-gradient(90deg, rgba(201,149,43,0.2), transparent)" }} />
        </div>
      </div>

      {/* CTA Section */}
      <section style={{ padding: "80px 56px", background: "linear-gradient(180deg, var(--color-off-white) 0%, #241838 100%)", textAlign: "center" }}>
        <div className="faq-cta" style={{ maxWidth: 600, margin: "0 auto" }}>
          <span className="sec-tag sec-tag-gold" style={{ marginBottom: 16 }}>let&apos;s connect</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 400, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
            Still Have <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Questions?</em>
          </h2>
          <div style={{ width: 40, height: 1, background: "var(--color-gold)", margin: "0 auto 24px" }} />
          <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "rgba(250,246,238,0.55)", marginBottom: 36 }}>
            I&apos;m happy to answer any questions about my services. Schedule a free discovery call and let&apos;s talk.
          </p>
          <Link href="/#contact" style={{ display: "inline-block", background: "var(--color-gold)", color: "var(--color-deep)", padding: "14px 44px", fontFamily: "var(--font-body)", fontSize: "0.78rem", fontWeight: 700, textDecoration: "none", letterSpacing: "1.5px", textTransform: "uppercase" as const, borderRadius: 2, transition: "all 0.3s" }}>
            Schedule a Consultation
          </Link>
          <div style={{ marginTop: 20 }}>
            <Link href="/" style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" as const, color: "rgba(250,246,238,0.35)", textDecoration: "none", transition: "color 0.3s" }}>
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
