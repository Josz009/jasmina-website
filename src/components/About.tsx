"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Intro top reveal
      gsap.from(".intro-top .sec-tag", {
        opacity: 0, y: 20, duration: 0.6,
        scrollTrigger: { trigger: ".intro-top", start: "top 80%" },
      });
      gsap.from(".intro-top .sec-title", {
        opacity: 0, y: 30, duration: 0.7, delay: 0.1,
        scrollTrigger: { trigger: ".intro-top", start: "top 80%" },
      });
      gsap.from(".intro-top .sec-rule", {
        scaleX: 0, duration: 0.6, delay: 0.2, transformOrigin: "left",
        scrollTrigger: { trigger: ".intro-top", start: "top 80%" },
      });
      gsap.from(".intro-top .sec-desc", {
        opacity: 0, y: 20, duration: 0.7, delay: 0.3,
        scrollTrigger: { trigger: ".intro-top", start: "top 80%" },
      });

      // Photo clip reveal
      gsap.from(".about-img", {
        clipPath: "inset(0 100% 0 0)",
        duration: 0.9,
        ease: "power3.inOut",
        scrollTrigger: { trigger: ".about-row", start: "top 75%" },
      });

      // Text stagger
      gsap.from(".about-text > *", {
        opacity: 0, y: 25, duration: 0.6, stagger: 0.15,
        scrollTrigger: { trigger: ".about-text", start: "top 75%" },
      });

      // Credential pills
      gsap.from(".cred", {
        opacity: 0, scale: 0.8, duration: 0.4, stagger: 0.05,
        scrollTrigger: { trigger: ".creds", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="intro" id="about" ref={sectionRef}>
      <div className="intro-inner">
        <div className="intro-top">
          <span className="sec-tag sec-tag-gold">an exclusive advisory experience</span>
          <h2 className="sec-title sec-title-dark">
            Your Trusted Partner for <em>Life&apos;s Complexities.</em>
          </h2>
          <div className="sec-rule sec-rule-gold" />
          <p className="sec-desc sec-desc-dark">
            With over 20 years in global finance, I combine deep analytical expertise
            with a human-first approach. I don&apos;t just review the numbers — I help you
            understand the story behind them, so you can act with clarity and conviction.
          </p>
        </div>

        <div className="about-row">
          <div className="about-img">
            <Image
              src="/images/about-primary.jpg"
              alt="Jasmina Kolekjeska"
              width={600}
              height={750}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="about-text">
            <h3>Your story is powerful.</h3>
            <p>
              You have unique goals, a distinct risk profile, and decisions that carry
              real weight. That&apos;s why I prioritize listening and understanding above all.
              By taking the time to learn about your ambitions, your challenges, and your
              decision-making patterns, I craft strategies that are truly tailored to you.
            </p>
            <p>
              As a Certified Master Practitioner of NLP and a John C. Maxwell Certified
              Coach, Trainer, and Speaker, I bring a rare combination: the analytical
              precision of two decades in trade credit insurance at AIG and international
              banking, paired with coaching principles that unlock how you think, decide,
              and lead.
            </p>
            <p>
              Fluent in five languages, experienced across three continents — I bring a
              global perspective to every engagement.
            </p>
            <div className="creds">
              <span className="cred cred-dark">AIG Senior Underwriter</span>
              <span className="cred cred-gold">NLP Master Practitioner</span>
              <span className="cred cred-dark">Maxwell Certified Coach</span>
              <span className="cred cred-gold">Speaker of Influence</span>
              <span className="cred cred-dark">BA Management</span>
              <span className="cred cred-gold">5+ Languages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
