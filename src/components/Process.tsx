"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: 1,
    title: "Discovery",
    desc: "I take the time to truly understand your life, aspirations, and the complexities you face — ensuring every strategy starts with your vision and values.",
  },
  {
    num: 2,
    title: "Deep Analysis",
    desc: "I craft personalized insights combining advanced financial analysis, risk assessment, and strategic recommendations tailored to your distinct needs.",
  },
  {
    num: 3,
    title: "Strategy Session",
    desc: "We align every detail with your priorities, walking through findings and building a clear, actionable path forward.",
  },
  {
    num: 4,
    title: "Ongoing Support",
    desc: "I proactively refine your approach, protecting your interests and capturing new opportunities as your life and goals evolve.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".proc-top .sec-tag", {
        opacity: 0, y: 20, duration: 0.6,
        scrollTrigger: { trigger: ".proc-top", start: "top 80%" },
      });
      gsap.from(".proc-top .sec-title", {
        opacity: 0, y: 30, duration: 0.7, delay: 0.1,
        scrollTrigger: { trigger: ".proc-top", start: "top 80%" },
      });
      gsap.from(".proc-top .sec-rule", {
        scaleX: 0, duration: 0.6, delay: 0.2, transformOrigin: "left",
        scrollTrigger: { trigger: ".proc-top", start: "top 80%" },
      });
      gsap.from(".proc-top .sec-desc", {
        opacity: 0, y: 20, duration: 0.7, delay: 0.3,
        scrollTrigger: { trigger: ".proc-top", start: "top 80%" },
      });

      gsap.from(".proc-num", {
        opacity: 0, y: 20, duration: 0.6, stagger: 0.12,
        scrollTrigger: { trigger: ".proc-grid", start: "top 80%" },
      });

      gsap.from(".proc-step h4", {
        opacity: 0, y: 15, duration: 0.5, stagger: 0.12, delay: 0.2,
        scrollTrigger: { trigger: ".proc-grid", start: "top 80%" },
      });

      gsap.from(".proc-step p", {
        opacity: 0, y: 15, duration: 0.5, stagger: 0.12, delay: 0.3,
        scrollTrigger: { trigger: ".proc-grid", start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="process" id="process" ref={sectionRef}>
      <div className="proc-inner">
        <div className="proc-top">
          <span className="sec-tag sec-tag-purple">a refined process</span>
          <h2 className="sec-title sec-title-dark">
            Strategy Designed for Your <em>Distinct Needs.</em>
          </h2>
          <div className="sec-rule sec-rule-gold" />
          <p className="sec-desc sec-desc-dark">
            A collaborative, meticulously tailored approach — ensuring every strategy
            reflects your unique aspirations and simplifies complexity.
          </p>
        </div>
        <div className="proc-grid">
          {steps.map((step) => (
            <div className="proc-step" key={step.num}>
              <div className="proc-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
