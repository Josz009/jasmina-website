"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DecorativeDivider({ variant = "squares" }: { variant?: "squares" | "line" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      if (variant === "squares") {
        gsap.from(ref.current!.querySelectorAll("rect"), {
          opacity: 0,
          scale: 0.5,
          duration: 0.4,
          stagger: 0.05,
          scrollTrigger: { trigger: ref.current, start: "top 90%" },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [variant]);

  if (variant === "line") {
    return (
      <div ref={ref} style={{ padding: "0 56px" }}>
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(201,149,43,0.2), transparent)",
        }} />
      </div>
    );
  }

  return (
    <div ref={ref} style={{ display: "flex", justifyContent: "center", padding: "24px 0", overflow: "hidden" }}>
      <svg width="320" height="48" viewBox="0 0 320 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="88" y="0" width="16" height="16" stroke="rgba(201,149,43,0.15)" strokeWidth="0.5" />
        <rect x="108" y="0" width="16" height="16" stroke="rgba(201,149,43,0.1)" strokeWidth="0.5" />
        <rect x="128" y="0" width="16" height="16" stroke="rgba(201,149,43,0.15)" strokeWidth="0.5" />
        <rect x="148" y="0" width="16" height="16" stroke="rgba(201,149,43,0.1)" strokeWidth="0.5" />
        <rect x="168" y="0" width="16" height="16" stroke="rgba(201,149,43,0.15)" strokeWidth="0.5" />
        <rect x="188" y="0" width="16" height="16" stroke="rgba(201,149,43,0.1)" strokeWidth="0.5" />
        <rect x="208" y="0" width="16" height="16" stroke="rgba(201,149,43,0.15)" strokeWidth="0.5" />

        <rect x="88" y="20" width="16" height="16" stroke="rgba(201,149,43,0.1)" strokeWidth="0.5" />
        <rect x="108" y="20" width="16" height="16" stroke="rgba(201,149,43,0.15)" strokeWidth="0.5" />
        <rect x="128" y="20" width="16" height="16" stroke="rgba(201,149,43,0.1)" strokeWidth="0.5" />
        <rect x="148" y="20" width="16" height="16" stroke="rgba(201,149,43,0.15)" strokeWidth="0.5" />
        <rect x="168" y="20" width="16" height="16" stroke="rgba(201,149,43,0.1)" strokeWidth="0.5" />
        <rect x="188" y="20" width="16" height="16" stroke="rgba(201,149,43,0.15)" strokeWidth="0.5" />
        <rect x="208" y="20" width="16" height="16" stroke="rgba(201,149,43,0.1)" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
