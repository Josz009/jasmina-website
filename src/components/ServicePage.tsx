"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "./Navigation";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

interface Benefit {
  title: string;
  desc: string;
}

interface ProcessStep {
  step: number;
  title: string;
  desc: string;
}

interface ServicePageProps {
  title: string;
  titleAccent: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  detailImage: string;
  benefits: Benefit[];
  process: ProcessStep[];
  quote: string;
}

export default function ServicePage({
  title, titleAccent, subtitle, heroImage, intro, detailImage, benefits, process, quote,
}: ServicePageProps) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content
      gsap.from(".sp-hero-content > *", {
        opacity: 0, y: 30, duration: 0.7, stagger: 0.12, delay: 0.3,
      });

      // Intro
      gsap.fromTo(".sp-intro > *",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1,
          scrollTrigger: { trigger: ".sp-intro", start: "top 80%" } }
      );

      // Benefits
      gsap.fromTo(".sp-benefit",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12,
          scrollTrigger: { trigger: ".sp-benefits-grid", start: "top 80%" } }
      );

      // Process
      gsap.fromTo(".sp-step",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.15,
          scrollTrigger: { trigger: ".sp-process-list", start: "top 80%" } }
      );

      // Quote
      gsap.fromTo(".sp-quote-block",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: ".sp-quote-block", start: "top 85%" } }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Navigation />

      {/* Hero */}
      <section style={{
        position: "relative",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}>
        <Image
          src={heroImage}
          alt={`${title} ${titleAccent}`}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(26,16,40,0.88) 0%, rgba(36,24,56,0.8) 50%, rgba(26,16,40,0.92) 100%)",
        }} />
        <div className="sp-hero-content" style={{ position: "relative", zIndex: 2, maxWidth: 700, padding: "120px 32px 80px" }}>
          <span className="sec-tag sec-tag-gold" style={{ marginBottom: 16 }}>{subtitle}</span>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "3.2rem",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            {title} <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>{titleAccent}.</em>
          </h1>
          <div style={{ width: 60, height: 1.5, background: "var(--color-gold)", margin: "0 auto 24px" }} />
          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(250,246,238,0.6)", maxWidth: 560, margin: "0 auto" }}>
            {intro}
          </p>
          <Link href="/#contact" style={{
            display: "inline-block",
            marginTop: 36,
            background: "var(--color-gold)",
            color: "var(--color-deep)",
            padding: "14px 40px",
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            fontWeight: 700,
            textDecoration: "none",
            letterSpacing: "1.5px",
            textTransform: "uppercase" as const,
            borderRadius: 2,
          }}>
            Get Started
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "100px 56px", background: "var(--color-off-white)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="sp-intro" style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 64px" }}>
            <span className="sec-tag sec-tag-gold">what you receive</span>
            <h2 className="sec-title sec-title-dark">
              Comprehensive <em>Deliverables.</em>
            </h2>
            <div className="sec-rule sec-rule-gold" style={{ margin: "0 auto 22px" }} />
          </div>
          <div className="sp-benefits-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 32,
          }}>
            {benefits.map((b, i) => (
              <div className="sp-benefit" key={i} style={{
                padding: "36px 32px",
                background: "#fff",
                border: "1px solid rgba(201,149,43,0.1)",
                borderRadius: 2,
              }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.4rem",
                  fontWeight: 300,
                  color: "var(--color-gold)",
                  opacity: 0.5,
                  lineHeight: 1,
                  marginBottom: 12,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--color-deep)",
                  marginBottom: 10,
                }}>
                  {b.title}
                </h3>
                <p style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.8,
                  color: "var(--color-body)",
                }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process with image */}
      <section className="sp-process-section" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 500 }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src={detailImage}
            alt="Service detail"
            fill
            style={{ objectFit: "cover" }}
            sizes="50vw"
          />
        </div>
        <div style={{
          background: "#241838",
          padding: "64px 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <span className="sec-tag sec-tag-gold">the process</span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "2.2rem",
            fontWeight: 400,
            color: "#fff",
            marginBottom: 32,
            lineHeight: 1.2,
          }}>
            How We <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Work Together.</em>
          </h2>
          <div className="sp-process-list">
            {process.map((s) => (
              <div className="sp-step" key={s.step} style={{
                display: "flex",
                gap: 20,
                marginBottom: 28,
                alignItems: "flex-start",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "var(--color-gold)",
                  opacity: 0.6,
                  lineHeight: 1,
                  flexShrink: 0,
                  width: 36,
                }}>
                  {s.step}
                </div>
                <div>
                  <h4 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: 6,
                  }}>
                    {s.title}
                  </h4>
                  <p style={{
                    fontSize: "0.84rem",
                    lineHeight: 1.7,
                    color: "rgba(250,246,238,0.55)",
                  }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ padding: "80px 56px 48px", background: "var(--color-off-white)", textAlign: "center" }}>
        <div className="sp-quote-block" style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: "3rem",
            color: "var(--color-gold)",
            opacity: 0.3,
            lineHeight: 1,
            marginBottom: 16,
          }}>
            &ldquo;
          </div>
          <blockquote style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.3rem",
            fontStyle: "italic",
            color: "var(--color-body)",
            lineHeight: 1.65,
            marginBottom: 0,
          }}>
            {quote}
          </blockquote>
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
      <section style={{ padding: "80px 56px", background: "linear-gradient(180deg, var(--color-off-white) 0%, #241838 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <span className="sec-tag sec-tag-gold" style={{ marginBottom: 16 }}>let&apos;s connect</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 400, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
            Ready to Get <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Started?</em>
          </h2>
          <div style={{ width: 40, height: 1, background: "var(--color-gold)", margin: "0 auto 24px" }} />
          <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "rgba(250,246,238,0.55)", marginBottom: 36 }}>
            Every engagement starts with a conversation. Schedule a free discovery call and let&apos;s discuss how I can help.
          </p>
          <Link href="/#contact" style={{
            display: "inline-block",
            background: "var(--color-gold)",
            color: "var(--color-deep)",
            padding: "14px 44px",
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            fontWeight: 700,
            textDecoration: "none",
            letterSpacing: "1.5px",
            textTransform: "uppercase" as const,
            borderRadius: 2,
            transition: "all 0.3s",
          }}>
            Schedule a Consultation
          </Link>
          <div style={{ marginTop: 20 }}>
            <Link href="/" style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase" as const,
              color: "rgba(250,246,238,0.35)",
              textDecoration: "none",
              transition: "color 0.3s",
            }}>
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
