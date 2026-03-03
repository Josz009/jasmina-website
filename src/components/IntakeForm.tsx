"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import Navigation from "./Navigation";
import Footer from "./Footer";
import IntakeSliderGroup from "./IntakeSliderGroup";

const STORAGE_KEY = "ja-intake-draft";
const STEP_LABELS = ["Personal Info", "Reflection", "Assessment I", "Assessment II", "Review"];

const assessmentSections = [
  {
    id: "grounded",
    number: "I",
    title: "Grounded Stability",
    statements: [
      "I regularly restore myself through nature or quiet space.",
      "I proactively care for my wellbeing (not only when something is wrong).",
      "I regulate myself during stress or unexpected change.",
      "I feel safe and grounded in my body most days.",
    ],
  },
  {
    id: "emotional",
    number: "II",
    title: "Emotional Maturity & Relationships",
    statements: [
      "I stay present during challenging conversations.",
      "I maintain healthy and flexible boundaries.",
      "I take ownership of my emotional patterns.",
      "I experience depth and intimacy in key relationships.",
    ],
  },
  {
    id: "creativity",
    number: "III",
    title: "Creativity & Adaptive Thinking",
    statements: [
      "I view myself as creative in life or business.",
      "I act on ideas instead of postponing them.",
      "I balance intuition with logic.",
      "I use creativity to move through stuck states.",
    ],
  },
  {
    id: "courage",
    number: "IV",
    title: "Courage & Change Capacity",
    statements: [
      "I initiate growth rather than waiting for crisis.",
      "I tolerate uncertainty without collapsing into fear.",
      "I move through endings with resilience.",
      "I take aligned risks.",
    ],
  },
  {
    id: "purpose",
    number: "V",
    title: "Purpose & Calling",
    statements: [
      "I have clarity around my deeper contribution.",
      "I take consistent action toward it.",
      "I trust the unfolding of my path.",
      "My inner truth matches my external life.",
    ],
  },
  {
    id: "community",
    number: "VI",
    title: "Community & Contribution",
    statements: [
      "I contribute beyond myself.",
      "I feel supported by allies or community.",
      "I ask for help when needed.",
      "I own my impact on others.",
    ],
  },
  {
    id: "brand",
    number: "VII",
    title: "Brand & Self-Expression",
    statements: [
      "I am clear about what I stand for.",
      "I speak my truth even when vulnerable.",
      "My external expression reflects my inner identity.",
      "I do not shrink under pressure.",
    ],
  },
];

function getDefaultSliders(): Record<string, number> {
  const defaults: Record<string, number> = {};
  assessmentSections.forEach((section) => {
    section.statements.forEach((_, i) => {
      defaults[`${section.id}_${i}`] = 50;
    });
  });
  return defaults;
}

interface FormFields {
  name: string;
  email: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
}

const defaultFields: FormFields = {
  name: "",
  email: "",
  birthDate: "",
  birthTime: "",
  birthPlace: "",
  q1: "",
  q2: "",
  q3: "",
  q4: "",
};

export default function IntakeForm() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [currentStep, setCurrentStep] = useState(0);
  const [fields, setFields] = useState<FormFields>(defaultFields);
  const [sliders, setSliders] = useState<Record<string, number>>(getDefaultSliders);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  // Load saved draft from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.fields) setFields(parsed.fields);
        if (parsed.sliders) setSliders((prev) => ({ ...prev, ...parsed.sliders }));
        if (typeof parsed.currentStep === "number") setCurrentStep(parsed.currentStep);
      }
    } catch {
      // ignore
    }
  }, []);

  // Auto-save to localStorage
  useEffect(() => {
    if (submitted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ fields, sliders, currentStep }));
    } catch {
      // ignore
    }
  }, [fields, sliders, currentStep, submitted]);

  // Warn before leaving mid-form
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (!submitted && currentStep > 0) {
        e.preventDefault();
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [submitted, currentStep]);

  const updateField = useCallback((key: keyof FormFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  }, []);

  const updateSlider = useCallback((key: string, value: number) => {
    setSliders((prev) => ({ ...prev, [key]: value }));
  }, []);

  const goToStep = (step: number) => {
    if (stepRef.current) {
      gsap.to(stepRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        onComplete: () => {
          setCurrentStep(step);
          window.scrollTo({ top: 0, behavior: "smooth" });
          gsap.fromTo(
            stepRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.3 }
          );
        },
      });
    } else {
      setCurrentStep(step);
    }
  };

  const canAdvance = (): boolean => {
    if (currentStep === 0) {
      return !!(fields.name && fields.email && fields.birthDate && fields.birthPlace);
    }
    if (currentStep === 1) {
      return !!(fields.q1 && fields.q2 && fields.q3 && fields.q4);
    }
    return true;
  };

  const getSectionAvg = (sectionId: string, statementsCount: number) => {
    let sum = 0;
    for (let i = 0; i < statementsCount; i++) {
      sum += sliders[`${sectionId}_${i}`] ?? 50;
    }
    return Math.round(sum / statementsCount);
  };

  const getOverallScore = () => {
    const sectionAverages = assessmentSections.map((s) =>
      getSectionAvg(s.id, s.statements.length)
    );
    return Math.round(sectionAverages.reduce((a, b) => a + b, 0) / sectionAverages.length);
  };

  const handleSubmit = async () => {
    setSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", "029ce860-14f8-45a3-abb4-f52c0442f2b0");
    formData.append("subject", `1-1 Intake Questionnaire \u2014 ${fields.name}`);
    formData.append("from_name", "J&A Coaching Intake Form");
    formData.append("replyto", fields.email);

    // Personal info
    formData.append("Full Name", fields.name);
    formData.append("Email", fields.email);
    formData.append("Date of Birth", fields.birthDate);
    formData.append("Time of Birth", fields.birthTime || "Not provided");
    formData.append("Place of Birth", fields.birthPlace);

    // Pre-session questions
    formData.append(
      "Q1: Problem area to focus on",
      fields.q1
    );
    formData.append(
      "Q2: Situation description",
      fields.q2
    );
    formData.append(
      "Q3: Underlying emotions",
      fields.q3
    );
    formData.append(
      "Q4: Desired outcome",
      fields.q4
    );

    // Assessment sections — consolidated
    assessmentSections.forEach((section) => {
      const scores = section.statements.map(
        (_, i) => sliders[`${section.id}_${i}`] ?? 50
      );
      const avg = getSectionAvg(section.id, section.statements.length);
      const detail = section.statements
        .map((s, i) => `\u2022 ${s}: ${scores[i]}/100`)
        .join("\n");
      formData.append(
        `Section ${section.number} \u2014 ${section.title} (Avg: ${avg}/100)`,
        detail
      );
    });

    formData.append("Overall Assessment Score", `${getOverallScore()}/100`);
    formData.append("Stripe Session ID", sessionId || "N/A");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
        localStorage.removeItem(STORAGE_KEY);
      } else {
        alert("Something went wrong. Please email align@jabusinesscoaching.com directly.");
      }
    } catch {
      alert("Something went wrong. Please email align@jabusinesscoaching.com directly.");
    }

    setSubmitting(false);
  };

  // ── Gate: no session_id ──
  if (!sessionId) {
    return (
      <div>
        <Navigation />
        <section
          style={{
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background: "linear-gradient(160deg, #1a1028 0%, #241838 40%, #1a1028 100%)",
            padding: "120px 32px 80px",
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <div style={{ position: "relative", width: 80, height: 80, margin: "0 auto 32px" }}>
              <Image src="/images/logo.png" alt="" width={80} height={80} style={{ objectFit: "contain", opacity: 0.6 }} />
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.4rem",
                fontWeight: 400,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Intake <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Questionnaire</em>
            </h1>
            <div style={{ width: 40, height: 1, background: "var(--color-gold)", margin: "0 auto 24px" }} />
            <p
              style={{
                fontSize: "0.92rem",
                lineHeight: 1.8,
                color: "rgba(250,246,238,0.6)",
                marginBottom: 36,
              }}
            >
              This questionnaire is available after completing your coaching session payment.
              Please book your 1-1 Intensive Coaching session to get started.
            </p>
            <Link
              href="/services/entrepreneur-coaching"
              style={{
                display: "inline-block",
                background: "var(--color-gold)",
                color: "var(--color-deep)",
                padding: "14px 44px",
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                borderRadius: 2,
              }}
            >
              Book Your Session
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // ── Submitted confirmation ──
  if (submitted) {
    return (
      <div>
        <Navigation />
        <section
          style={{
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background: "linear-gradient(160deg, #1a1028 0%, #241838 40%, #1a1028 100%)",
            padding: "120px 32px 80px",
          }}
        >
          <div style={{ maxWidth: 560 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                border: "2px solid var(--color-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 28px",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={{ width: 28, height: 28 }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.4rem",
                fontWeight: 400,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Thank <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>You</em>
            </h1>
            <div style={{ width: 40, height: 1, background: "var(--color-gold)", margin: "0 auto 24px" }} />
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: "rgba(250,246,238,0.7)",
                marginBottom: 12,
              }}
            >
              Your questionnaire has been submitted successfully. Jasmina will review your responses
              and your appointment will become available to schedule within 24 hours.
            </p>
            <p
              style={{
                fontSize: "0.84rem",
                lineHeight: 1.7,
                color: "rgba(250,246,238,0.45)",
                marginBottom: 36,
              }}
            >
              You will receive a confirmation email with next steps.
            </p>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "rgba(250,246,238,0.35)",
                textDecoration: "none",
              }}
            >
              &larr; Back to Home
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // ── Main wizard ──
  return (
    <div>
      <Navigation />

      {/* Hero header */}
      <section
        style={{
          position: "relative",
          padding: "120px 32px 48px",
          textAlign: "center",
          background: "linear-gradient(160deg, #1a1028 0%, #241838 40%, #1a1028 100%)",
        }}
      >
        <span className="sec-tag sec-tag-gold" style={{ marginBottom: 12 }}>
          intake questionnaire
        </span>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2.4rem",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: 12,
          }}
        >
          Intensive 1:1 Coaching &mdash;{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
            Integral Alignment
          </em>
        </h1>
        <div style={{ width: 40, height: 1, background: "var(--color-gold)", margin: "0 auto 20px" }} />
        <p
          style={{
            fontSize: "0.88rem",
            lineHeight: 1.7,
            color: "rgba(250,246,238,0.55)",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          Please complete this questionnaire thoroughly and honestly. Your responses help
          Jasmina prepare for your session.
        </p>
      </section>

      {/* Progress bar */}
      <div
        style={{
          background: "#241838",
          padding: "24px 32px",
          borderBottom: "1px solid rgba(201,149,43,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {STEP_LABELS.map((label, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 12px",
                  borderRadius: 20,
                  background:
                    i === currentStep
                      ? "rgba(201,149,43,0.15)"
                      : i < currentStep
                        ? "rgba(201,149,43,0.08)"
                        : "transparent",
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    border: `1.5px solid ${i <= currentStep ? "var(--color-gold)" : "rgba(250,246,238,0.15)"}`,
                    background: i < currentStep ? "var(--color-gold)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: i < currentStep ? "#1a1028" : i === currentStep ? "var(--color-gold)" : "rgba(250,246,238,0.2)",
                    flexShrink: 0,
                    transition: "all 0.3s",
                  }}
                >
                  {i < currentStep ? "\u2713" : i + 1}
                </div>
                <span
                  className="intake-step-label"
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    color:
                      i === currentStep
                        ? "var(--color-gold)"
                        : i < currentStep
                          ? "rgba(201,149,43,0.6)"
                          : "rgba(250,246,238,0.15)",
                    transition: "color 0.3s",
                  }}
                >
                  {label}
                </span>
              </div>
              {i < STEP_LABELS.length - 1 && (
                <div
                  style={{
                    width: 20,
                    height: 1,
                    background: i < currentStep ? "rgba(201,149,43,0.4)" : "rgba(250,246,238,0.08)",
                    transition: "background 0.3s",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form content */}
      <section style={{ padding: "56px 32px 80px", background: "var(--color-off-white)", minHeight: "60vh" }}>
        <div ref={stepRef} style={{ maxWidth: 680, margin: "0 auto" }}>
          {/* Step 0: Personal Details */}
          {currentStep === 0 && (
            <div className="intake-step">
              <h2 className="intake-step-title">Personal Details</h2>
              <p className="intake-step-desc">
                This information is needed for your hologenetic profile.
              </p>

              <div className="intake-field">
                <label className="intake-label">Full Name *</label>
                <input
                  type="text"
                  className="intake-input"
                  placeholder="First and last name"
                  value={fields.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  required
                />
              </div>

              <div className="intake-field">
                <label className="intake-label">Email *</label>
                <input
                  type="email"
                  className="intake-input"
                  placeholder="your@email.com"
                  value={fields.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  required
                />
              </div>

              <div className="intake-field">
                <label className="intake-label">Date of Birth *</label>
                <input
                  type="date"
                  className="intake-input"
                  value={fields.birthDate}
                  onChange={(e) => updateField("birthDate", e.target.value)}
                  required
                />
              </div>

              <div className="intake-field">
                <label className="intake-label">
                  Time of Birth{" "}
                  <span style={{ fontSize: "0.78rem", color: "var(--color-body)", fontWeight: 400 }}>
                    (if you don&apos;t know, go with the closest assumption)
                  </span>
                </label>
                <input
                  type="time"
                  className="intake-input"
                  value={fields.birthTime}
                  onChange={(e) => updateField("birthTime", e.target.value)}
                />
              </div>

              <div className="intake-field">
                <label className="intake-label">Place of Birth *</label>
                <input
                  type="text"
                  className="intake-input"
                  placeholder="City, Country"
                  value={fields.birthPlace}
                  onChange={(e) => updateField("birthPlace", e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 1: Pre-Session Reflection */}
          {currentStep === 1 && (
            <div className="intake-step">
              <h2 className="intake-step-title">Pre-Session Reflection</h2>
              <div className="intake-honesty-note">
                <p>
                  Before our session, please answer the following questions as truthfully
                  and thoroughly as you can.
                </p>
                <p>
                  <strong>Do not filter. Do not perform. Do not answer the way you think you &ldquo;should.&rdquo;</strong>
                </p>
                <p>This is a space for radical honesty.</p>
                <p>
                  The more transparent and specific you are, the faster we can scratch
                  beneath the surface of the problem and identify the real root &mdash; not
                  just the symptom. Depth creates transformation. Precision creates results.
                </p>
                <p><em>Take your time.</em></p>
              </div>

              <div className="intake-field">
                <label className="intake-label">
                  1. Which specific problem area would you like to focus on during this session? *
                </label>
                <p className="intake-field-hint">Be as specific as possible about the situation you want to work on.</p>
                <textarea
                  className="intake-textarea"
                  rows={4}
                  value={fields.q1}
                  onChange={(e) => updateField("q1", e.target.value)}
                  required
                />
              </div>

              <div className="intake-field">
                <label className="intake-label">
                  2. Describe the situation briefly in a few sentences. *
                </label>
                <p className="intake-field-hint">What is happening? What feels stuck or challenging?</p>
                <textarea
                  className="intake-textarea"
                  rows={4}
                  value={fields.q2}
                  onChange={(e) => updateField("q2", e.target.value)}
                  required
                />
              </div>

              <div className="intake-field">
                <label className="intake-label">
                  3. What underlying emotions are present for you in this situation? *
                </label>
                <p className="intake-field-hint">
                  For example: fear, frustration, guilt, sadness, anger, confusion, pressure, etc.
                </p>
                <textarea
                  className="intake-textarea"
                  rows={3}
                  value={fields.q3}
                  onChange={(e) => updateField("q3", e.target.value)}
                  required
                />
              </div>

              <div className="intake-field">
                <label className="intake-label">
                  4. What would you like to accomplish in this session? *
                </label>
                <p className="intake-field-hint">
                  What outcome would feel meaningful, relieving, or empowering for you?
                </p>
                <textarea
                  className="intake-textarea"
                  rows={4}
                  value={fields.q4}
                  onChange={(e) => updateField("q4", e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2: Assessment Part 1 (Sections I-IV) */}
          {currentStep === 2 && (
            <div className="intake-step">
              <h2 className="intake-step-title">
                The Integral Alignment &amp; Expression Assessment
              </h2>
              <p className="intake-step-desc">
                Rate each statement from 0&ndash;100. Be honest &mdash; this is for awareness, not judgment.
              </p>
              <div className="intake-scale-legend">
                <span>0&ndash;35: Rarely True</span>
                <span>36&ndash;65: Sometimes True</span>
                <span>66&ndash;100: Consistently True</span>
              </div>
              {assessmentSections.slice(0, 4).map((section) => (
                <IntakeSliderGroup
                  key={section.id}
                  sectionId={section.id}
                  sectionNumber={section.number}
                  sectionTitle={section.title}
                  statements={section.statements}
                  values={sliders}
                  onChange={updateSlider}
                />
              ))}
            </div>
          )}

          {/* Step 3: Assessment Part 2 (Sections V-VII) */}
          {currentStep === 3 && (
            <div className="intake-step">
              <h2 className="intake-step-title">
                Assessment <em>Continued</em>
              </h2>
              <p className="intake-step-desc">
                Rate each statement from 0&ndash;100. Be honest &mdash; this is for awareness, not judgment.
              </p>
              <div className="intake-scale-legend">
                <span>0&ndash;35: Rarely True</span>
                <span>36&ndash;65: Sometimes True</span>
                <span>66&ndash;100: Consistently True</span>
              </div>
              {assessmentSections.slice(4).map((section) => (
                <IntakeSliderGroup
                  key={section.id}
                  sectionId={section.id}
                  sectionNumber={section.number}
                  sectionTitle={section.title}
                  statements={section.statements}
                  values={sliders}
                  onChange={updateSlider}
                />
              ))}
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {currentStep === 4 && (
            <div className="intake-step">
              <h2 className="intake-step-title">
                Review &amp; <em>Submit</em>
              </h2>
              <p className="intake-step-desc">
                Please review your responses before submitting.
              </p>

              {/* Personal info summary */}
              <div className="intake-review-section">
                <h3 className="intake-review-heading">Personal Details</h3>
                <div className="intake-review-grid">
                  <div><strong>Name:</strong> {fields.name}</div>
                  <div><strong>Email:</strong> {fields.email}</div>
                  <div><strong>Date of Birth:</strong> {fields.birthDate}</div>
                  <div><strong>Time of Birth:</strong> {fields.birthTime || "Not provided"}</div>
                  <div><strong>Place of Birth:</strong> {fields.birthPlace}</div>
                </div>
              </div>

              {/* Questions summary */}
              <div className="intake-review-section">
                <h3 className="intake-review-heading">Pre-Session Reflection</h3>
                <div className="intake-review-question">
                  <p className="intake-review-q-label">Problem area to focus on:</p>
                  <p className="intake-review-q-answer">{fields.q1}</p>
                </div>
                <div className="intake-review-question">
                  <p className="intake-review-q-label">Situation description:</p>
                  <p className="intake-review-q-answer">{fields.q2}</p>
                </div>
                <div className="intake-review-question">
                  <p className="intake-review-q-label">Underlying emotions:</p>
                  <p className="intake-review-q-answer">{fields.q3}</p>
                </div>
                <div className="intake-review-question">
                  <p className="intake-review-q-label">Desired outcome:</p>
                  <p className="intake-review-q-answer">{fields.q4}</p>
                </div>
              </div>

              {/* Assessment scores */}
              <div className="intake-review-section">
                <h3 className="intake-review-heading">Assessment Scores</h3>
                <div className="intake-scores-grid">
                  {assessmentSections.map((section) => {
                    const avg = getSectionAvg(section.id, section.statements.length);
                    return (
                      <div className="intake-score-card" key={section.id}>
                        <div className="intake-score-card-num">{section.number}</div>
                        <div className="intake-score-card-title">{section.title}</div>
                        <div className="intake-score-card-value">{avg}<span>/100</span></div>
                      </div>
                    );
                  })}
                </div>
                <div className="intake-overall-score">
                  <span>Overall Score</span>
                  <strong>{getOverallScore()}<span>/100</span></strong>
                </div>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="intake-nav">
            {currentStep > 0 && (
              <button
                type="button"
                className="intake-btn intake-btn-back"
                onClick={() => goToStep(currentStep - 1)}
              >
                &larr; Back
              </button>
            )}
            <div style={{ flex: 1 }} />
            {currentStep < STEP_LABELS.length - 1 ? (
              <button
                type="button"
                className="intake-btn intake-btn-next"
                onClick={() => goToStep(currentStep + 1)}
                disabled={!canAdvance()}
              >
                Continue &rarr;
              </button>
            ) : (
              <button
                type="button"
                className="intake-btn intake-btn-submit"
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Questionnaire"}
              </button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
