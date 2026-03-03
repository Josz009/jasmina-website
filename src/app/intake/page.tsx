import { Suspense } from "react";
import IntakeForm from "@/components/IntakeForm";

export const metadata = {
  title: "Coaching Intake Questionnaire — J&A Business Advisory",
  description:
    "Complete your intake questionnaire to prepare for your 1-1 intensive coaching session with Jasmina.",
};

export default function IntakePage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#1a1028",
            color: "rgba(250,246,238,0.4)",
            fontFamily: "var(--font-body)",
            fontSize: "0.88rem",
          }}
        >
          Loading...
        </div>
      }
    >
      <IntakeForm />
    </Suspense>
  );
}
