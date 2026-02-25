"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  { year: "2002", title: "Bachelor's Degree in Management", desc: "Foundation in business strategy, entrepreneurship, finance, and organizational leadership." },
  { year: "2002", title: "High School Teacher — Management & Business", desc: "Developed future professionals while strengthening communication, structure, and leadership capabilities." },
  { year: "2003", title: "Underwriter & Senior Underwriter — Development Bank of N. Macedonia", desc: "Introduced and adapted European trade credit insurance models to Macedonian legislation and market conditions, contributing to financial infrastructure development." },
  { year: "2017", title: "Underwriting Specialist", desc: "Managed complex global risk portfolios and structured insurance solutions protecting international transactions." },
  { year: "2019", title: "Certified Coach — Maxwell Leadership", desc: "Earned certification as a Coach, Trainer & Speaker through the Maxwell Leadership program — a globally recognized leadership development organization." },
  { year: "2020", title: "NLP Practitioner Certification — AIP", desc: "Certified through the Association for Integrative Psychology, building expertise in neuro-linguistic programming and behavioral change." },
  { year: "2021", title: "Master NLP Practitioner — AIP", desc: "Advanced NLP certification through the Association for Integrative Psychology, deepening expertise in decision psychology and human performance." },
  { year: "2021", title: "HeartMath Coherence Certification", desc: "Training in heart-brain synchronization and psychophysiological coherence — regulating the nervous system, increasing emotional self-regulation, and aligning heart rhythms, breath, and brain activity." },
  { year: "2022", title: "Mental & Emotional Release® & Hypnotherapy — AIP", desc: "Certified in MER® and Hypnotherapy through the Association of Integrative Psychology, integrating behavioral science into coaching practice." },
  { year: "2026", title: "Gene Keys Guide Certification", desc: "Deep shadow work rooted in contemplation that creates space for clear vision and true productivity." },
  { year: "2026", title: "J&A Business Advisory & Coaching", desc: "Established a boutique advisory and coaching practice integrating financial risk expertise, decision psychology, and conscious leadership to support individuals, entrepreneurs, and business leaders." },
];

const values = [
  { title: "Clarity Over Complexity", desc: "I believe the best financial decisions come from clear thinking, not complicated models. My role is to simplify." },
  { title: "Integrity First", desc: "Every recommendation I make is grounded in honesty and your best interest. No hidden agendas, no sales pitches." },
  { title: "Empowerment Through Knowledge", desc: "I don't just give you answers — I teach you the frameworks so you can make confident decisions independently." },
  { title: "Global Perspective", desc: "Having worked across European, Middle Eastern, and American markets, I bring a worldview that sees opportunities others miss." },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero-content > *", { opacity: 0, y: 30, duration: 0.7, stagger: 0.12, delay: 0.3 });
      gsap.fromTo(".timeline-item", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".timeline-list", start: "top 80%" } });
      gsap.fromTo(".value-card", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, scrollTrigger: { trigger: ".values-grid", start: "top 80%" } });
      gsap.fromTo(".about-story > *", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: ".about-story", start: "top 80%" } });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Navigation />
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", overflow: "hidden" }}>
        {/* Deep purple gradient + logo watermark */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #1a1028 0%, #241838 40%, #1a1028 100%)" }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.15 }}>
            <Image src="/images/logo.png" alt="" width={700} height={700} priority style={{ width: "70vh", height: "70vh", objectFit: "contain" }} />
          </div>
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,16,40,0.3) 0%, rgba(36,24,56,0.15) 50%, rgba(26,16,40,0.4) 100%)" }} />
        {/* Soft radial vignette behind text */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(26,16,40,0.5) 0%, transparent 100%)", pointerEvents: "none" }} />
        <div className="about-hero-content" style={{ position: "relative", zIndex: 2, maxWidth: 700, padding: "120px 32px 80px" }}>
          <span className="sec-tag sec-tag-gold" style={{ marginBottom: 16 }}>about jasmina</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "3.2rem", fontWeight: 400, color: "#fff", lineHeight: 1.15, marginBottom: 20, textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}>
            Global <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Financial Expertise.</em>
          </h1>
          <div style={{ width: 60, height: 1.5, background: "var(--color-gold)", margin: "0 auto 24px" }} />
          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(250,246,238,0.82)", maxWidth: 560, margin: "0 auto", textShadow: "0 1px 16px rgba(0,0,0,0.3)" }}>
            Helping business owners and entrepreneurs make confident financial decisions — backed by decades of real-world experience in risk, strategy, and human potential.
          </p>
        </div>
      </section>

      <section className="about-story-section" style={{ padding: "100px 56px", background: "var(--color-off-white)" }}>
        <div className="about-story-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }}>
          <div style={{ position: "relative" }}>
            <Image src="/images/about-primary.jpg" alt="Jasmina Kolekjeska" width={480} height={600} style={{ width: "100%", height: "auto", borderRadius: 4, boxShadow: "0 16px 48px rgba(26,16,40,0.08)" }} />
            <div style={{ position: "absolute", top: 12, left: 12, right: -12, bottom: -12, border: "1.5px solid var(--color-gold)", borderRadius: 4, zIndex: -1, opacity: 0.3 }} />
          </div>
          <div className="about-story">
            <span className="sec-tag sec-tag-gold">my story</span>
            <h2 className="sec-title sec-title-dark">Where Finance Meets <em>Human Potential.</em></h2>
            <div className="sec-rule sec-rule-gold" />
            <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-body)", marginBottom: 16 }}>
              I&apos;ve spent more than two decades in finance, building a career in risk analysis and trade credit insurance. I began as an underwriter, structuring insurance solutions that protected billions of dollars in global business transactions.
            </p>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-body)", marginBottom: 16 }}>
              Over time, I realized something deeper. Numbers tell a story — but they only tell the story of what has already happened. The future is not shaped by spreadsheets, balance sheets, or financial models. It is shaped by the people interpreting them and the decisions they choose to make.
            </p>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-body)", marginBottom: 16 }}>
              The most powerful force in finance is not data — it&apos;s mindset.
            </p>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-body)", marginBottom: 16 }}>
              That realization shifted the direction of my work. I invested in advanced trainings, certifications, and coaching to better understand how people think about risk, growth, leadership, and decision-making. I wanted to move beyond protecting businesses — and begin supporting the individuals behind them.
            </p>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-body)", marginBottom: 16 }}>
              Today, I integrate two worlds: financial risk expertise and human development.
            </p>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-body)", marginBottom: 16 }}>
              Whether you are acquiring a business, managing receivables, navigating complex financial decisions, or building something from the ground up, I help you see the full picture. Together, we align financial clarity with personal values — so your decisions are not only strategic, but grounded and sustainable.
            </p>
            <div style={{ marginTop: 12, marginBottom: 24 }}>
              <div style={{ width: 40, height: 1.5, background: "var(--color-gold)", marginBottom: 16 }} />
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 400, fontStyle: "italic", color: "var(--color-gold)", lineHeight: 1.5, letterSpacing: "0.3px" }}>
                Move from stress to confidence.<br />From unease to clarity.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              <span className="cred cred-gold">Maxwell Certified Coach</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-timeline-section" style={{ padding: "100px 56px", background: "#241838" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="sec-tag sec-tag-gold">professional journey</span>
            <h2 className="sec-title sec-title-light">A Career Built on <em>Expertise.</em></h2>
            <div className="sec-rule sec-rule-gold" style={{ margin: "0 auto" }} />
          </div>
          <div className="timeline-list" style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 24, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, transparent, rgba(201,149,43,0.3), transparent)" }} />
            {timeline.map((item, i) => (
              <div className="timeline-item" key={i} style={{ display: "flex", gap: 32, marginBottom: 36, alignItems: "flex-start", paddingLeft: 8 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", border: "1.5px solid var(--color-gold)", background: "#241838", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 2 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-gold)" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, color: "var(--color-gold)", marginBottom: 6 }}>{item.year}</div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, color: "#fff", marginBottom: 6 }}>{item.title}</h4>
                  <p style={{ fontSize: "0.84rem", lineHeight: 1.7, color: "rgba(250,246,238,0.5)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values-section" style={{ padding: "100px 56px", background: "var(--color-off-white)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 64px" }}>
            <span className="sec-tag sec-tag-gold">guiding principles</span>
            <h2 className="sec-title sec-title-dark">What I <em>Stand For.</em></h2>
            <div className="sec-rule sec-rule-gold" style={{ margin: "0 auto" }} />
          </div>
          <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
            {values.map((v, i) => (
              <div className="value-card" key={i} style={{ padding: "36px 32px", background: "#fff", border: "1px solid rgba(201,149,43,0.1)", borderRadius: 2 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", fontWeight: 300, color: "var(--color-gold)", opacity: 0.5, lineHeight: 1, marginBottom: 12 }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-body)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
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

      {/* CTA Section */}
      <section className="about-cta" style={{ padding: "80px 56px", background: "linear-gradient(180deg, var(--color-off-white) 0%, #241838 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <span className="sec-tag sec-tag-gold" style={{ marginBottom: 16 }}>let&apos;s connect</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 400, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
            Ready to Work <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Together?</em>
          </h2>
          <div style={{ width: 40, height: 1, background: "var(--color-gold)", margin: "0 auto 24px" }} />
          <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "rgba(250,246,238,0.55)", marginBottom: 36 }}>
            Whether you need financial analysis, portfolio guidance, or executive coaching — let&apos;s start with a conversation.
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
