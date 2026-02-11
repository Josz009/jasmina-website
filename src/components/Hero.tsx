"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".hero-icon", { opacity: 0, scale: 0.8, duration: 0.8, delay: 0.3 })
        .from(".hero h1", { opacity: 0, y: 50, duration: 1 }, "-=0.3")
        .from(".hero-rule", { scaleX: 0, duration: 0.8, transformOrigin: "center" }, "-=0.5")
        .from(".hero-sub", { opacity: 0, y: 30, duration: 0.8 }, "-=0.4")
        .from(".hero-tagline", { opacity: 0, y: 20, duration: 0.8 }, "-=0.4")
        .from(".hero-btn", { opacity: 0, y: 20, duration: 0.7 }, "-=0.3")
        .from(".scroll-indicator", { opacity: 0, duration: 1 }, "-=0.2");

      // Ken Burns slow zoom
      if (bgRef.current) {
        gsap.to(bgRef.current.querySelector("img"), {
          scale: 1.08,
          duration: 25,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-bg" ref={bgRef}>
        <Image
          src="/images/stock/luxury-office.jpg"
          alt="Luxury office"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center center" }}
          sizes="100vw"
        />
      </div>
      <div className="hero-overlay" />

      {/* Decorative geometric overlay */}
      <div className="hero-geometric">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="80" height="80" stroke="rgba(201,149,43,0.06)" strokeWidth="0.5"/>
          <rect x="150" y="50" width="80" height="80" stroke="rgba(201,149,43,0.04)" strokeWidth="0.5"/>
          <rect x="250" y="50" width="80" height="80" stroke="rgba(201,149,43,0.06)" strokeWidth="0.5"/>
          <rect x="50" y="150" width="80" height="80" stroke="rgba(201,149,43,0.04)" strokeWidth="0.5"/>
          <rect x="150" y="150" width="80" height="80" stroke="rgba(201,149,43,0.06)" strokeWidth="0.5"/>
          <rect x="1000" y="550" width="80" height="80" stroke="rgba(201,149,43,0.06)" strokeWidth="0.5"/>
          <rect x="1100" y="550" width="80" height="80" stroke="rgba(201,149,43,0.04)" strokeWidth="0.5"/>
          <rect x="1000" y="650" width="80" height="80" stroke="rgba(201,149,43,0.04)" strokeWidth="0.5"/>
          <rect x="1100" y="650" width="80" height="80" stroke="rgba(201,149,43,0.06)" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="hero-content">
        <div className="hero-icon">
          <Image src="/images/logo.png" alt="LiLLY'S Logo" width={64} height={64} />
        </div>
        <h1>
          Exceptional Clarity for <em>Complex Financial Decisions.</em>
        </h1>
        <div className="hero-rule" />
        <p className="hero-sub">
          Personalized financial analysis, risk advisory, and executive
          coaching to help you understand risk, optimize opportunity, and move
          forward with confidence — supported by thoughtful, high-touch guidance.
        </p>
        <p className="hero-tagline">Clarity. Confidence. Results.</p>
        <a href="#contact" className="hero-btn">
          Schedule a Consultation
        </a>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <svg viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
