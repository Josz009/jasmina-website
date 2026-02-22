"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax on photo
      gsap.to(".phil-img img", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text stagger
      gsap.from(".phil-text > *", {
        opacity: 0, y: 25, duration: 0.6, stagger: 0.12,
        scrollTrigger: { trigger: ".phil-text", start: "top 75%" },
      });

      // Quote border
      gsap.from(".phil-quote", {
        opacity: 0, duration: 0.7,
        scrollTrigger: { trigger: ".phil-quote", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="philosophy" ref={sectionRef}>
      <div className="phil-img">
        <Image
          src="/images/lifestyle.jpg"
          alt="Jasmina lifestyle"
          width={960}
          height={640}
          style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "460px" }}
        />
      </div>
      <div className="phil-text">
        <span className="sec-tag sec-tag-gold">the philosophy</span>
        <h2>
          More Than <em>Numbers.</em>
        </h2>
        <p>
          Business success begins with you. Every leader carries unique strengths that,
          when intentionally cultivated, drive conscious decisions, aligned growth, and
          meaningful impact. I combine analytical precision with human-first insight to
          help you optimize strengths, navigate risk, and build strategies that serve
          both business and community — creating results that are intentional, sustainable,
          and values-driven.
        </p>
        <div className="phil-quote">
          <p>
            &ldquo;The quality of your decisions determines the quality of your life. My job
            is to make sure those decisions are informed, intentional, and fearless.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
