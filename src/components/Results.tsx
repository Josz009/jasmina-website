"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const results = [
  {
    metric: "$2.4M",
    context: "in hidden risk identified",
    desc: "Helped a prospective buyer discover significant undisclosed liabilities before closing on a business acquisition — saving millions in potential losses.",
    category: "Business Acquisition",
  },
  {
    metric: "37%",
    context: "portfolio risk reduction",
    desc: "Restructured an active trader's portfolio weighting to dramatically reduce concentration risk while maintaining upside exposure across key positions.",
    category: "Portfolio Advisory",
  },
  {
    metric: "3x",
    context: "revenue growth in 18 months",
    desc: "Coached a first-time entrepreneur through critical decision points, helping them build a framework that tripled their business revenue within a year and a half.",
    category: "Entrepreneur Coaching",
  },
];

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const headerEls = sectionRef.current!.querySelectorAll(".results-top > *");
      gsap.fromTo(headerEls,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1,
          scrollTrigger: { trigger: ".results-top", start: "top 85%" } }
      );

      const cards = cardsRef.current!.querySelectorAll(".result-card");
      gsap.fromTo(cards,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15,
          scrollTrigger: { trigger: cardsRef.current, start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{
      background: "var(--color-off-white)",
      padding: "100px 56px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="results-top" style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 64px" }}>
          <span className="sec-tag sec-tag-gold">proven impact</span>
          <h2 className="sec-title sec-title-dark">
            Real Outcomes for <em>Real Decisions.</em>
          </h2>
          <div className="sec-rule sec-rule-gold" style={{ margin: "0 auto 22px" }} />
          <p className="sec-desc sec-desc-dark" style={{ margin: "0 auto" }}>
            Every engagement is measured by the clarity and confidence it creates.
            Here are examples of the impact my clients have experienced.
          </p>
        </div>
        <div ref={cardsRef} style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 32,
        }}>
          {results.map((r, i) => (
            <div className="result-card" key={i} style={{
              padding: "44px 32px",
              background: "#fff",
              border: "1px solid rgba(201,149,43,0.1)",
              borderRadius: 2,
              textAlign: "center",
              transition: "0.4s",
            }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "3rem",
                fontWeight: 300,
                color: "var(--color-gold)",
                lineHeight: 1,
                marginBottom: 4,
              }}>
                {r.metric}
              </div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase" as const,
                color: "var(--color-purple)",
                marginBottom: 16,
              }}>
                {r.context}
              </div>
              <p style={{
                fontSize: "0.86rem",
                lineHeight: 1.75,
                color: "var(--color-body)",
                marginBottom: 20,
              }}>
                {r.desc}
              </p>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase" as const,
                color: "var(--color-gold)",
                padding: "6px 14px",
                border: "1px solid rgba(201,149,43,0.2)",
                display: "inline-block",
                borderRadius: 2,
              }}>
                {r.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
