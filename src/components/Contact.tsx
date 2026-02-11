"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-info > *", {
        opacity: 0, y: 25, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: ".contact-info", start: "top 75%" },
      });

      gsap.from(".contact-form-wrap > *", {
        opacity: 0, y: 25, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: ".contact-form-wrap", start: "top 75%" },
      });

      gsap.from(".ci-photo img", {
        opacity: 0, scale: 0.9, duration: 0.6,
        scrollTrigger: { trigger: ".ci-photo", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      alert("Something went wrong. Please email jasminavigil79@gmail.com directly.");
    }

    setSubmitting(false);
  };

  return (
    <section id="contact" ref={sectionRef}>
      <div className="contact">
        <div className="contact-info">
          <span className="sec-tag sec-tag-gold">connect</span>
          <h2>
            Let&apos;s Discuss Your <em>Tailored Strategy.</em>
          </h2>
          <p>
            Contact me to discuss how I can help navigate the complexities of your
            financial life and decision-making.
          </p>

          <div className="ci-item">
            <div className="ci-icon">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
            </div>
            <a href="mailto:jasminavigil79@gmail.com">jasminavigil79@gmail.com</a>
          </div>


          <div className="ci-divider" />

          <div className="ci-photo">
            <Image
              src="/images/contact.jpg"
              alt="Jasmina Kolekjeska"
              width={100}
              height={100}
              style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid #C9952B" }}
            />
          </div>
        </div>

        <div className="contact-form-wrap">
          <h3>Speak with Jasmina.</h3>
          <p>Fill out the form and I&apos;ll respond within 24 hours.</p>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <h3 style={{ color: "#C9952B", marginBottom: "12px" }}>Thank you!</h3>
              <p style={{ color: "#5a4d68", fontSize: "0.92rem" }}>
                Your message has been sent. I&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form className="cf" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
              <input type="hidden" name="subject" value="New Inquiry — J&A Business Advisory Website" />
              <input type="hidden" name="from_name" value="J&A Advisory Website Contact Form" />
              <label>Name</label>
              <input type="text" placeholder="First and last name" required name="name" />

              <label>Email</label>
              <input type="email" placeholder="your@email.com" required name="email" />

              <label>Phone</label>
              <input type="tel" placeholder="(000) 000-0000" name="phone" />

              <label>Service Interest</label>
              <select name="service" defaultValue="">
                <option value="" disabled>Select a service...</option>
                <option>Business Acquisition Financial Analysis</option>
                <option>Portfolio &amp; Trading Risk Advisory</option>
                <option>Entrepreneur Coaching</option>
                <option>Not sure yet — let&apos;s talk</option>
              </select>

              <label>Message</label>
              <textarea
                placeholder="Tell me about your goals and how I can help..."
                name="message"
              />

              <button className="cf-btn" type="submit" disabled={submitting}>
                {submitting ? "Sending..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
