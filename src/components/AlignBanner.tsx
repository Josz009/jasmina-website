"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AlignBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".align-banner-content > *",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="align-banner" ref={sectionRef}>
      <div className="align-banner-bg" />
      <div className="align-banner-content">
        <span className="sec-tag" style={{ color: "rgba(201,149,43,0.6)", letterSpacing: "5px" }}>
          flagship offering
        </span>
        <h2 className="align-banner-title">
          The ALIGN Method<span className="align-tm">&trade;</span>
        </h2>
        <div className="align-banner-rule" />
        <p className="align-banner-desc">
          Where strategic intelligence meets conscious leadership. A premium framework
          that integrates your genetic blueprint with brand identity, financial architecture,
          and embodied leadership.
        </p>
        <Link href="/align-method" className="align-banner-cta">
          Discover The Method
        </Link>
      </div>
    </section>
  );
}
