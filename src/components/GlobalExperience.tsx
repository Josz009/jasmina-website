"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { name: "Financial Precision", desc: "Two decades of experience in trade credit insurance, risk analysis, and financial advisory — delivering clarity through data-driven insight." },
  { name: "Cultural Fluency", desc: "A truly international perspective shaped by working across European, Middle Eastern, and American markets — fluent in three languages." },
  { name: "Conscious Leadership", desc: "Certified coaching, NLP, and human development expertise — helping leaders align decisions with values for sustainable, meaningful impact." },
];

const languages = [
  { name: "Macedonian", native: true },
  { name: "English", native: true },
  { name: "Serbian", native: true },
];

export default function GlobalExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".global-top > *", {
        opacity: 0, y: 25, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: ".global-top", start: "top 80%" },
      });

      gsap.from(".global-region", {
        opacity: 0, y: 30, duration: 0.6, stagger: 0.15,
        scrollTrigger: { trigger: ".global-regions", start: "top 80%" },
      });

      gsap.from(".lang-item", {
        opacity: 0, scale: 0.8, duration: 0.4, stagger: 0.06,
        scrollTrigger: { trigger: ".lang-list", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="global-exp" ref={sectionRef}>
      {/* World map stock background */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, opacity: 0.08,
      }}>
        <Image
          src="/images/stock/world-connections.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", mixBlendMode: "luminosity" }}
          sizes="100vw"
        />
      </div>

      <div className="global-inner">
        <div className="global-top">
          <span className="sec-tag sec-tag-gold">global perspective</span>
          <h2 className="sec-title sec-title-light">
            One Mission. <em>Global Reach.</em>
          </h2>
          <div className="sec-rule sec-rule-gold" />
          <p className="sec-desc sec-desc-light">
            A truly international perspective built on decades of experience across
            diverse markets, cultures, and financial systems — serving clients with
            precision, empathy, and purpose.
          </p>
        </div>

        <div className="global-regions">
          {pillars.map((pillar, i) => (
            <div className="global-region" key={i}>
              <h4>{pillar.name}</h4>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="lang-list">
          {languages.map((lang, i) => (
            <span className={`lang-item ${lang.native ? "native" : ""}`} key={i}>
              {lang.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
