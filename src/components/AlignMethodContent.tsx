"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const audience = [
  { title: "Executives", desc: "Seeking deeper coherence between leadership and personal values." },
  { title: "Entrepreneurs", desc: "Redefining their brand to reflect who they truly are." },
  { title: "Conscious Founders", desc: "Ready for financial structure aligned with purpose." },
  { title: "Leaders", desc: "Who want profitability without self-betrayal." },
];

const steps = [
  {
    letter: "A",
    title: "Activate Your Genetic Identity",
    desc: "We begin with your complete Gene Keys profile. Through contemplative inquiry, we explore your Life\u2019s Work, evolutionary challenge, radiance and vitality, core vocation, and shadow patterns embedded in your leadership style. This reveals the energetic architecture behind your business and brand.",
  },
  {
    letter: "L",
    title: "Liberate Shadow into Gift",
    desc: "Every challenge holds strategic intelligence. Using contemplative practices inspired by The Gene Keys, we identify unconscious leadership patterns, transform fear-based decision loops, release inherited narratives, and shift shadow frequencies into embodied gifts. Your struggles become positioning strengths.",
  },
  {
    letter: "I",
    title: "Integrate Values & Brand Identity",
    desc: "We define your core values, your leadership voice, your brand essence, and whether your current brand truly reflects who you are. Your business must be a mirror of your internal truth. If it isn\u2019t aligned, it creates friction, burnout, and financial inconsistency. Alignment creates coherence.",
  },
  {
    letter: "G",
    title: "Ground Financial & Strategic Architecture",
    desc: "With over two decades of financial expertise, we structure your business so that your balance sheet reflects your integrity, your products align with your values, your pricing reflects your value, and your resources are optimized. Finance becomes a reflection of integrity \u2014 not survival.",
  },
  {
    letter: "N",
    title: "Navigate Through Embodied Coherence",
    desc: "We release limiting beliefs and emotional imprints stored in the body. Through mental-emotional integration techniques, we regulate your nervous system, dissolve scarcity conditioning, strengthen executive presence, and build clarity in decision-making. Strategy without embodiment collapses. Embodiment without strategy drifts. We integrate both.",
  },
];

const outcomes = [
  "A brand aligned with your genetic blueprint",
  "Leadership rooted in authenticity",
  "Financial structure reflecting your values",
  "Shadow transformed into strategic advantage",
  "Emotional coherence in decision-making",
  "Sustainable fulfillment, not just success",
];

export default function AlignMethodContent() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".am-hero-content > *", { opacity: 0, y: 40, duration: 0.8, stagger: 0.15, delay: 0.3, ease: "power3.out" });
      gsap.fromTo(".am-intro-text > *", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, scrollTrigger: { trigger: ".am-intro-text", start: "top 80%" } });
      gsap.fromTo(".am-audience-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, scrollTrigger: { trigger: ".am-audience-grid", start: "top 80%" } });
      gsap.fromTo(".am-step", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: ".am-steps", start: "top 80%" } });
      gsap.fromTo(".am-outcome-item", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, scrollTrigger: { trigger: ".am-outcomes", start: "top 80%" } });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="am-hero">
        <Image
          src="/images/stock/align-hero.jpg"
          alt="The ALIGN Method"
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(26,16,40,0.72) 0%, rgba(36,24,56,0.65) 50%, rgba(26,16,40,0.78) 100%)",
          zIndex: 1,
        }} />
        <div className="am-hero-bg" />
        {/* Gold border lines */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent 10%, var(--color-gold) 50%, transparent 90%)", opacity: 0.35 }} />
        <div className="am-hero-content">
          <span className="sec-tag" style={{ color: "rgba(201,149,43,0.6)", letterSpacing: "5px", marginBottom: 16 }}>flagship offering</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "3.6rem", fontWeight: 400, color: "#fff", lineHeight: 1.1, marginBottom: 20, textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}>
            The ALIGN Method<span className="align-tm">&trade;</span>
          </h1>
          <div style={{ width: 80, height: 2, background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)", margin: "0 auto 24px" }} />
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontStyle: "italic", color: "var(--color-gold)", lineHeight: 1.5, marginBottom: 24, letterSpacing: "0.3px" }}>
            Where Strategic Intelligence Meets Conscious Leadership
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(250,246,238,0.65)", maxWidth: 580, margin: "0 auto 40px", textShadow: "0 1px 16px rgba(0,0,0,0.3)" }}>
            A genetic blueprint for strategic identity and aligned leadership.
          </p>
          <Link href="/#contact" style={{ display: "inline-block", padding: "14px 44px", background: "transparent", border: "1.5px solid var(--color-gold)", color: "var(--color-gold)", fontFamily: "var(--font-body)", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, textDecoration: "none", borderRadius: 2, transition: "0.4s" }}>
            Apply to Begin
          </Link>
          <div style={{ marginTop: 24 }}>
            <span style={{ fontSize: "0.72rem", color: "rgba(250,246,238,0.35)", letterSpacing: "2px", textTransform: "uppercase" as const }}>
              Private strategic advisory &middot; Limited client spaces
            </span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "100px 56px", background: "var(--color-off-white)" }}>
        <div className="am-intro-text" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span className="sec-tag sec-tag-gold">a premium framework</span>
          <h2 className="sec-title sec-title-dark">Align Your Leadership with <em>Your Deepest Values.</em></h2>
          <div className="sec-rule sec-rule-gold" style={{ margin: "0 auto" }} />
          <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-body)", marginBottom: 16 }}>
            The ALIGN Method&trade; integrates your holographic Gene Keys profile with your brand identity, financial architecture, and embodied leadership.
          </p>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-body)", marginBottom: 16 }}>
            This is not traditional coaching. It is strategic identity work for leaders who are ready to align success with authenticity.
          </p>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-body)", marginBottom: 16 }}>
            We decode your genetic blueprint and transform shadow patterns into strategic advantage through contemplative practices inspired by The Gene Keys. We clarify your core values and redefine your brand so it becomes a true reflection of who you are &mdash; not who you were conditioned to be.
          </p>
          <div style={{ marginTop: 32, padding: "24px 32px", background: "rgba(201,149,43,0.04)", border: "1px solid rgba(201,149,43,0.12)", borderRadius: 2 }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-body)", margin: 0 }}>
              Your brand reflects your gifts &middot; Your pricing reflects your value &middot; Your balance sheet reflects your integrity &middot; Your strategy reflects your vision
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ padding: "80px 56px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="sec-tag sec-tag-gold">who this is for</span>
            <h2 className="sec-title sec-title-dark">Designed for <em>Visionary Leaders.</em></h2>
            <div className="sec-rule sec-rule-gold" style={{ margin: "0 auto" }} />
          </div>
          <div className="am-audience-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {audience.map((a, i) => (
              <div className="am-audience-card" key={i}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300, color: "var(--color-gold)", opacity: 0.5, lineHeight: 1, marginBottom: 12 }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: 8 }}>{a.title}</h3>
                <p style={{ fontSize: "0.84rem", lineHeight: 1.75, color: "var(--color-body)" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The A-L-I-G-N Framework */}
      <section style={{ padding: "100px 56px", background: "#241838" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="sec-tag sec-tag-gold">the framework</span>
            <h2 className="sec-title sec-title-light">Five Pillars of <em>Transformation.</em></h2>
            <div className="sec-rule sec-rule-gold" style={{ margin: "0 auto" }} />
          </div>
          <div className="am-steps" style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 30, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, transparent, rgba(201,149,43,0.3), transparent)" }} />
            {steps.map((s, i) => (
              <div className="am-step" key={i}>
                <div className="am-step-letter">{s.letter}</div>
                <div className="am-step-content">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ padding: "80px 56px", background: "var(--color-off-white)" }}>
        <div className="am-outcomes" style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="sec-tag sec-tag-gold">the outcome</span>
            <h2 className="sec-title sec-title-dark">What You <em>Receive.</em></h2>
            <div className="sec-rule sec-rule-gold" style={{ margin: "0 auto" }} />
          </div>
          {outcomes.map((o, i) => (
            <div className="am-outcome-item" key={i}>
              <div className="am-outcome-dot" />
              <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "var(--color-body)", margin: 0 }}>{o}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative Divider */}
      <div style={{ background: "var(--color-off-white)", padding: "32px 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, padding: "0 56px" }}>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,149,43,0.2))" }} />
          <svg viewBox="0 0 20 20" fill="none" style={{ width: 12, height: 12 }}><rect x="4" y="4" width="12" height="12" transform="rotate(45 10 10)" stroke="rgba(201,149,43,0.3)" strokeWidth="1" /></svg>
          <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16 }}><rect x="4" y="4" width="12" height="12" transform="rotate(45 10 10)" fill="rgba(201,149,43,0.15)" /></svg>
          <svg viewBox="0 0 20 20" fill="none" style={{ width: 12, height: 12 }}><rect x="4" y="4" width="12" height="12" transform="rotate(45 10 10)" stroke="rgba(201,149,43,0.3)" strokeWidth="1" /></svg>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: "linear-gradient(90deg, rgba(201,149,43,0.2), transparent)" }} />
        </div>
      </div>

      {/* CTA */}
      <section style={{ padding: "80px 56px", background: "linear-gradient(180deg, var(--color-off-white) 0%, #241838 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <span className="sec-tag sec-tag-gold" style={{ marginBottom: 16 }}>begin your alignment</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 400, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
            Ready to <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>ALIGN?</em>
          </h2>
          <div style={{ width: 40, height: 1, background: "var(--color-gold)", margin: "0 auto 24px" }} />
          <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "rgba(250,246,238,0.55)", marginBottom: 12 }}>
            Apply to begin your ALIGN process and build a business that reflects both your depth and your leadership.
          </p>
          <p style={{ fontSize: "0.74rem", letterSpacing: "2px", textTransform: "uppercase" as const, color: "rgba(201,149,43,0.5)", marginBottom: 36 }}>
            Private strategic advisory &middot; Limited client spaces
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
    </div>
  );
}
