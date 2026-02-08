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
          I believe the best financial decisions come from understanding both the data
          and the person behind it. My approach blends analytical depth with coaching
          principles — because clarity isn&apos;t just about spreadsheets.
        </p>
        <p>
          It&apos;s about knowing yourself well enough to act decisively when it matters most.
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
