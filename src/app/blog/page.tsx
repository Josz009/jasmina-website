"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const featured = { slug: "five-things-before-buying-business", title: "5 Things You Must Know Before Buying a Business", excerpt: "Buying a business is one of the biggest financial decisions you'll ever make. Before you sign anything, here are the five critical areas most buyers overlook — and how to protect yourself.", category: "Business Acquisition", date: "January 2025", image: "/images/stock/business-deal.jpg", readTime: "6 min read" };

const articles = [
  { slug: "portfolio-concentration-risk", title: "Understanding Portfolio Concentration Risk: Why Diversification Isn't Enough", excerpt: "Most investors think they're diversified. But concentration risk goes deeper than owning different stocks. Learn how to identify hidden correlations that could expose your portfolio.", category: "Portfolio Advisory", date: "December 2024", image: "/images/stock/trading-desk.jpg", readTime: "5 min read" },
  { slug: "nlp-decision-making", title: "How NLP Can Transform Your Business Decision-Making", excerpt: "Neuro-Linguistic Programming isn't just therapy — it's a powerful framework for understanding how you process information, manage risk, and make high-stakes business decisions.", category: "Coaching & Mindset", date: "November 2024", image: "/images/stock/coaching-session.jpg", readTime: "7 min read" },
  { slug: "trade-credit-insurance-explained", title: "Trade Credit Insurance: The Safety Net Most Businesses Don't Know About", excerpt: "After 20 years in trade credit at AIG, I've seen how this often-overlooked insurance product can save businesses millions. Here's what every business owner should know.", category: "Risk Management", date: "October 2024", image: "/images/stock/financial-documents.jpg", readTime: "8 min read" },
];

export default function BlogPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.fromTo(".blog-hero-content > *", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.3, ease: "power3.out" });
      gsap.fromTo(".blog-hero-ornament", { scaleX: 0 }, { scaleX: 1, duration: 1.2, delay: 0.6, ease: "power2.out" });

      // Featured article
      gsap.fromTo(".blog-featured", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: ".blog-featured", start: "top 85%" } });

      // Section header
      gsap.fromTo(".blog-section-header > *", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: ".blog-section-header", start: "top 85%" } });

      // Article cards
      gsap.fromTo(".blog-card", { opacity: 0, y: 35, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: "power2.out", scrollTrigger: { trigger: ".blog-grid", start: "top 85%" } });

      // Newsletter
      gsap.fromTo(".blog-newsletter > *", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, scrollTrigger: { trigger: ".blog-newsletter", start: "top 85%" } });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Navigation />

      {/* Hero */}
      <section style={{ position: "relative", minHeight: "55vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", overflow: "hidden" }}>
        <Image src="/images/stock/blog-header.jpg" alt="Insights & Articles" fill priority style={{ objectFit: "cover" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,16,40,0.92) 0%, rgba(36,24,56,0.85) 50%, rgba(26,16,40,0.95) 100%)" }} />
        {/* Decorative corner accents */}
        <div style={{ position: "absolute", top: 80, left: 40, width: 60, height: 60, borderTop: "1px solid rgba(201,149,43,0.15)", borderLeft: "1px solid rgba(201,149,43,0.15)" }} />
        <div style={{ position: "absolute", bottom: 40, right: 40, width: 60, height: 60, borderBottom: "1px solid rgba(201,149,43,0.15)", borderRight: "1px solid rgba(201,149,43,0.15)" }} />
        <div className="blog-hero-content" style={{ position: "relative", zIndex: 2, maxWidth: 700, padding: "130px 32px 90px" }}>
          <span className="sec-tag sec-tag-gold" style={{ marginBottom: 16 }}>insights & articles</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "3.4rem", fontWeight: 400, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
            Financial <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Insights.</em>
          </h1>
          <div className="blog-hero-ornament" style={{ width: 80, height: 1.5, background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)", margin: "0 auto 24px", transformOrigin: "center" }} />
          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(250,246,238,0.6)", maxWidth: 560, margin: "0 auto" }}>
            Practical perspectives on business acquisition, portfolio management, risk analysis, and the mindset behind great financial decisions.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section style={{ padding: "80px 56px 0", background: "var(--color-off-white)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="blog-featured" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 0, background: "#fff", border: "1px solid rgba(201,149,43,0.1)", borderRadius: 2, overflow: "hidden", transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)", cursor: "pointer" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 16px 48px rgba(201,149,43,0.1)";
                e.currentTarget.style.borderColor = "rgba(201,149,43,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(201,149,43,0.1)";
              }}
            >
              <div style={{ position: "relative", minHeight: 340, overflow: "hidden" }}>
                <Image src={featured.image} alt={featured.title} fill style={{ objectFit: "cover", transition: "transform 0.6s" }} sizes="60vw" />
                <div style={{ position: "absolute", top: 20, left: 20, background: "var(--color-gold)", color: "var(--color-deep)", fontFamily: "var(--font-body)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" as const, padding: "5px 14px", borderRadius: 2 }}>
                  Featured
                </div>
              </div>
              <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column" as const, justifyContent: "center" }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, color: "var(--color-gold)", marginBottom: 14 }}>{featured.category}</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem", fontWeight: 600, color: "var(--color-deep)", lineHeight: 1.25, marginBottom: 16 }}>{featured.title}</h2>
                <div style={{ width: 30, height: 1, background: "var(--color-gold)", marginBottom: 16 }} />
                <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-body)", marginBottom: 24 }}>{featured.excerpt}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 16, fontSize: "0.7rem", color: "var(--color-body-light)" }}>
                    <span>{featured.date}</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "var(--color-gold)" }}>
                    Read Article &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Decorative Divider */}
      <div style={{ background: "var(--color-off-white)", padding: "56px 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, padding: "0 56px" }}>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,149,43,0.2))" }} />
          <svg viewBox="0 0 20 20" fill="none" style={{ width: 12, height: 12 }}><rect x="4" y="4" width="12" height="12" transform="rotate(45 10 10)" stroke="rgba(201,149,43,0.3)" strokeWidth="1" /></svg>
          <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16 }}><rect x="4" y="4" width="12" height="12" transform="rotate(45 10 10)" fill="rgba(201,149,43,0.15)" /></svg>
          <svg viewBox="0 0 20 20" fill="none" style={{ width: 12, height: 12 }}><rect x="4" y="4" width="12" height="12" transform="rotate(45 10 10)" stroke="rgba(201,149,43,0.3)" strokeWidth="1" /></svg>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: "linear-gradient(90deg, rgba(201,149,43,0.2), transparent)" }} />
        </div>
      </div>

      {/* More Articles */}
      <section style={{ padding: "0 56px 100px", background: "var(--color-off-white)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="blog-section-header" style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="sec-tag" style={{ marginBottom: 12 }}>more articles</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 400, color: "var(--color-deep)", lineHeight: 1.2 }}>
              Continue <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Reading.</em>
            </h2>
            <div style={{ width: 40, height: 1, background: "var(--color-gold)", margin: "20px auto 0" }} />
          </div>

          <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {articles.map((article, i) => (
              <Link href={`/blog/${article.slug}`} key={i} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="blog-card" style={{ background: "#fff", border: "1px solid rgba(201,149,43,0.08)", borderRadius: 2, overflow: "hidden", transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)", height: "100%", position: "relative" }}
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
                  <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                    <Image src={article.image} alt={article.title} fill style={{ objectFit: "cover", transition: "transform 0.6s" }} sizes="33vw" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(26,16,40,0.3) 100%)" }} />
                    <div style={{ position: "absolute", top: 14, left: 14, background: "var(--color-gold)", color: "var(--color-deep)", fontFamily: "var(--font-body)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" as const, padding: "4px 12px", borderRadius: 2 }}>
                      {article.category}
                    </div>
                  </div>
                  <div style={{ padding: "24px 24px 28px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", color: "var(--color-body-light)" }}>{article.date}</span>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", color: "var(--color-gold)", fontWeight: 600 }}>{article.readTime}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, color: "var(--color-deep)", lineHeight: 1.3, marginBottom: 10 }}>{article.title}</h3>
                    <p style={{ fontSize: "0.82rem", lineHeight: 1.75, color: "var(--color-body)", marginBottom: 18 }}>{article.excerpt}</p>
                    <div style={{ width: 24, height: 1, background: "var(--color-gold)", marginBottom: 14 }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "var(--color-gold)" }}>
                      Read Article &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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

      {/* Newsletter + CTA Section */}
      <section style={{ padding: "80px 56px", background: "linear-gradient(180deg, var(--color-off-white) 0%, #241838 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="blog-newsletter" style={{ maxWidth: 560, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <span className="sec-tag sec-tag-gold" style={{ marginBottom: 16 }}>let&apos;s connect</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 400, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
            Get Insights <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Delivered.</em>
          </h2>
          <div style={{ width: 40, height: 1, background: "var(--color-gold)", margin: "0 auto 24px" }} />
          <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "rgba(250,246,238,0.55)", marginBottom: 36 }}>
            Subscribe to receive practical financial insights, market perspectives, and coaching wisdom — straight to your inbox.
          </p>
          <div className="newsletter-form" style={{ display: "flex", gap: 12, maxWidth: 460, margin: "0 auto 36px" }}>
            <input type="email" placeholder="Your email address" style={{ flex: 1, padding: "14px 18px", border: "1px solid rgba(201,149,43,0.2)", background: "rgba(255,255,255,0.05)", color: "#fff", fontFamily: "var(--font-body)", fontSize: "0.88rem", borderRadius: 2, outline: "none", transition: "border-color 0.3s" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,149,43,0.5)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,149,43,0.2)"; }}
            />
            <button style={{ background: "var(--color-gold)", color: "var(--color-deep)", padding: "14px 28px", fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" as const, border: "none", borderRadius: 2, cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#d4a43a"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--color-gold)"; }}
            >
              Subscribe
            </button>
          </div>
          <Link href="/#contact" style={{ display: "inline-block", background: "transparent", color: "var(--color-gold)", padding: "12px 36px", fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, textDecoration: "none", letterSpacing: "1.5px", textTransform: "uppercase" as const, borderRadius: 2, border: "1px solid rgba(201,149,43,0.3)", transition: "all 0.3s" }}>
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
