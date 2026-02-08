"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 20, suffix: "+", label: "Years in Finance" },
  { number: 5, suffix: "+", label: "Languages Fluent" },
  { number: 3, suffix: "", label: "Continents" },
  { number: 25, suffix: "M+", label: "Underwriting Authority" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const counters = sectionRef.current!.querySelectorAll(".stat-number");

      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target") || "0");
        const suffix = counter.getAttribute("data-suffix") || "";
        const prefix = counter.getAttribute("data-prefix") || "";

        gsap.from(counter, {
          textContent: 0,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: function () {
            const val = Math.ceil(parseFloat(counter.textContent || "0"));
            counter.textContent = prefix + val + suffix;
          },
          onComplete: function () {
            counter.textContent = prefix + target + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="stats" ref={sectionRef}>
      <div className="stats-inner">
        {stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <div
              className="stat-number"
              data-target={stat.number}
              data-suffix={stat.suffix}
              data-prefix={stat.number === 25 ? "$" : ""}
            >
              {stat.number === 25 ? "$0M+" : `0${stat.suffix}`}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
