import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "1-1 Intensive Coaching — J&A Business Advisory",
  description: "Intensive 90-minute coaching for entrepreneurs and individuals. Focus on 1–2 specific areas where you need clarity, momentum, or strategic support.",
};

export default function EntrepreneurCoaching() {
  return (
    <ServicePage
      title="1-1 Intensive Coaching"
      titleAccent="for Entrepreneurs and Individuals"
      subtitle="clarity, momentum & strategic support"
      heroImage="/images/stock/service-coaching.jpg"
      intro="This is a 90-minute intensive with Jasmina designed to focus on 1–2 specific areas where you need clarity, momentum, or strategic support in your life or business. In addition to receiving a clear action plan, you will receive personalized feedback, a summary of the coaching session, and a 30-minute follow-up session with Jasmina to ensure implementation. These sessions take place virtually (online coaching format) and require completion of a thorough intake form prior to the session. This experience is designed for clients who are ready for meaningful progress. It requires openness, self-awareness, and a flexible mindset — a willingness to explore new perspectives, challenge existing patterns, and open to take actions."
      detailImage="/images/lifestyle.jpg"
      benefits={[
        { title: "Pattern Identification", desc: "Uncover the patterns in how you think, decide, and lead — so you can keep what works and change what doesn't." },
        { title: "Decision-Making Optimization", desc: "Develop a personalized framework for making business decisions with clarity, using proven strategies to maximize your strengths." },
        { title: "Habit Interruption & Growth", desc: "Identify and interrupt unhealthy habits that hold you back, replacing them with approaches that bring fulfillment and effectiveness." },
        { title: "Leadership & Risk Calibration", desc: "Refine your leadership approach and understand your relationship with risk — so you can grow your business more effectively." },
      ]}
      process={[
        { step: 1, title: "Discovery Session", desc: "An in-depth conversation about your business, your vision, your challenges, and your decision-making patterns." },
        { step: 2, title: "Assessment & Profiling", desc: "Using NLP and coaching tools, I create a profile of your leadership style, risk tolerance, and growth opportunities." },
        { step: 3, title: "Coaching Program", desc: "Regular 1-on-1 sessions focused on building your decision-making confidence and strategic thinking skills." },
        { step: 4, title: "Monthly Accountability", desc: "Ongoing check-ins to track progress, address new challenges, and keep your growth trajectory on course." },
      ]}
      pricing={{
        price: "$555",
        steps: [
          "Complete your payment securely online.",
          "You\u2019ll be directed to a thorough intake questionnaire to help Jasmina prepare for your session.",
          "Once submitted, your appointment becomes available to schedule within 24 hours.",
          "Attend your 90-minute virtual intensive — plus receive a 30-minute follow-up session to ensure implementation.",
        ],
      }}
      quote="It's not just what you do — it's how you do it."
    />
  );
}
