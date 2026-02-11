"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    title: "Financial Analysis",
    featured: false,
    items: [
      "Financial statement review",
      "Cash-flow analysis",
      "Ratio analysis",
      "Risk summary report",
      "90-minute decision session",
    ],
  },
  {
    title: "Portfolio Review",
    featured: false,
    items: [
      "Portfolio risk assessment",
      "Exposure & weighting analysis",
      "Optimization recommendations",
      "Strategy discussion session",
    ],
  },
  {
    title: "Coaching",
    featured: false,
    items: [
      "1-on-1 coaching sessions",
      "Decision-making framework",
      "Business strategy clarity",
      "Monthly accountability sessions",
      "Complimentary portfolio review or financial analysis",
    ],
  },
];

export default function Packages() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const headerEls = sectionRef.current!.querySelectorAll(".pkg-top > *");
      gsap.fromTo(headerEls,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1,
          scrollTrigger: { trigger: ".pkg-top", start: "top 85%" } }
      );

      const cards = cardsRef.current!.querySelectorAll(".pkg-card");
      gsap.fromTo(cards,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 85%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="packages" id="packages" ref={sectionRef}>
      <div className="pkg-inner" style={{ position: "relative", zIndex: 1 }}>
        <div className="pkg-top">
          <span className="sec-tag sec-tag-gold">engagement options</span>
          <h2 className="sec-title sec-title-light">
            Structured for <em>Real Results.</em>
          </h2>
          <div className="sec-rule sec-rule-gold" />
          <p className="sec-desc sec-desc-light">
            Choose the engagement that aligns with where you are and what you need most.
          </p>
        </div>
        <div className="pkg-grid" ref={cardsRef}>
          {packages.map((pkg, i) => (
            <div className={`pkg-card ${pkg.featured ? "feat" : ""}`} key={i}>
              <h3>{pkg.title}</h3>
              <div className="pkg-rule" />
              {pkg.items.map((item, j) => (
                <div className="pkg-item" key={j}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
