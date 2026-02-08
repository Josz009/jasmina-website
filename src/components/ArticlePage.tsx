"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ArticlePageProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  children: React.ReactNode;
}

export default function ArticlePage({ title, category, date, readTime, image, children }: ArticlePageProps) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".article-hero-content > *", { opacity: 0, y: 25, duration: 0.6, stagger: 0.1, delay: 0.3 });
      gsap.from(".article-body", { opacity: 0, y: 20, duration: 0.6, delay: 0.6 });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Navigation />
      <section style={{ position: "relative", minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", overflow: "hidden" }}>
        <Image src={image} alt={title} fill priority style={{ objectFit: "cover" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,16,40,0.88) 0%, rgba(36,24,56,0.8) 50%, rgba(26,16,40,0.92) 100%)" }} />
        <div className="article-hero-content" style={{ position: "relative", zIndex: 2, maxWidth: 700, padding: "120px 32px 80px" }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, color: "var(--color-gold)", marginBottom: 16 }}>{category}</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: 20 }}>{title}</h1>
          <div style={{ width: 60, height: 1.5, background: "var(--color-gold)", margin: "0 auto 20px" }} />
          <div style={{ display: "flex", justifyContent: "center", gap: 24, fontSize: "0.78rem", color: "rgba(250,246,238,0.5)" }}>
            <span>{date}</span>
            <span>{readTime}</span>
            <span>By Jasmina Kolekjeska</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 56px", background: "var(--color-off-white)" }}>
        <div className="article-body" style={{ maxWidth: 720, margin: "0 auto" }}>
          {children}
          <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid rgba(201,149,43,0.15)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <Link href="/blog" style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" as const, color: "var(--color-gold)", textDecoration: "none" }}>
              &larr; All Articles
            </Link>
            <Link href="/#contact" style={{ display: "inline-block", background: "var(--color-gold)", color: "var(--color-deep)", padding: "12px 32px", fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, textDecoration: "none", letterSpacing: "1.5px", textTransform: "uppercase" as const, borderRadius: 2 }}>
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
