"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Jasmina's financial analysis gave me the confidence to move forward with a major business acquisition. Her depth of insight is unmatched.",
    author: "Client Testimonial",
    role: "Business Buyer",
  },
  {
    quote: "Working with Jasmina transformed how I approach portfolio risk. Her combination of analytical rigor and personal coaching is truly unique.",
    author: "Client Testimonial",
    role: "Active Trader",
  },
  {
    quote: "As an entrepreneur, I needed someone who understood both the numbers and the mindset. Jasmina delivered on both fronts brilliantly.",
    author: "Client Testimonial",
    role: "Startup Founder",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".test-top > *", {
        opacity: 0, y: 25, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: ".test-top", start: "top 80%" },
      });

      gsap.from(".test-card", {
        opacity: 0, y: 40, duration: 0.7, stagger: 0.15,
        scrollTrigger: { trigger: ".test-grid", start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials" ref={sectionRef}>
      <div className="test-inner">
        <div className="test-top">
          <span className="sec-tag sec-tag-gold">client perspectives</span>
          <h2 className="sec-title sec-title-dark">
            Trusted by <em>Decision-Makers.</em>
          </h2>
          <div className="sec-rule sec-rule-gold" />
          <p className="sec-desc sec-desc-dark">
            Hear from professionals who have experienced the clarity and confidence that
            comes from working with a dedicated advisory partner.
          </p>
        </div>
        <div className="test-grid">
          {testimonials.map((t, i) => (
            <div className="test-card" key={i}>
              <div className="test-quote-icon">&ldquo;</div>
              <blockquote>{t.quote}</blockquote>
              <div className="test-author">{t.author}</div>
              <div className="test-role">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
