"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "I booked a session with Jasmina through her website because I was looking for clarity in my personal journey—especially around becoming more independent in my work and reaching a higher level of success.\n\nThe entire process, from booking the appointment to the session itself, was very smooth and well-organized. Jasmina created a comfortable and focused space that allowed me to really open up and reflect.\n\nThe session lasted around two hours, and it was incredibly insightful. She helped me better understand my own thoughts, goals, and unconscious patterns, but also what I truly want to pursue—both personally and professionally. What stood out most was her ability to guide me toward clarity without pushing a one-size-fits-all approach.\n\nBy the end of the session, I not only had a deeper understanding of myself, but also a clear and practical action plan on how to move forward. She also helped me recognize certain distractions that were leading me in directions I don't actually want to go.\n\nI would highly recommend Jasmina to anyone who feels stuck, wants more clarity, or is looking to grow and succeed on a deeper level.",
    author: "Marija Kostovski",
    role: "Regional Operations Manager at Freedom International Group — Vienna, Austria",
    image: "/images/marija-kostovski.jpg",
  },
  {
    quote:
      "I found the intensive coaching session with Jasmina extremely valuable as I embark on a career transition. She created a supportive, thoughtful, and intentional space that helped me gain clarity, uncover patterns, and see things from a new perspective. Her ability to balance empathy with strategic guidance truly stood out. I left with a clear and strong sense of direction, and I highly recommend Jasmina to anyone ready to make meaningful progress in their career and life.",
    author: "Natalie Gomez",
    role: "",
    image: "",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".test-top > *",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: { trigger: ".test-top", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".test-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: { trigger: ".test-grid", start: "top 80%" },
        }
      );
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
              {t.image ? (
                <div className="test-avatar">
                  <Image
                    src={t.image}
                    alt={t.author}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ) : (
                <div className="test-quote-icon">&ldquo;</div>
              )}
              <blockquote>{t.quote}</blockquote>
              <div className="test-author">{t.author}</div>
              {t.role && <div className="test-role">{t.role}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
