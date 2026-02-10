import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Entrepreneur Coaching — J&A Business Advisory",
  description: "Executive coaching for entrepreneurs and business owners. Develop your decision-making framework, leadership approach, and business strategy with clarity.",
};

export default function EntrepreneurCoaching() {
  return (
    <ServicePage
      title="Entrepreneur"
      titleAccent="Coaching"
      subtitle="for entrepreneurs & business owners"
      heroImage="/images/stock/coaching-session.jpg"
      intro="Build your business with clarity and intention. I work with founders to understand their decision-making style, risk tolerance, and leadership approach — so they can build and grow their businesses more effectively."
      detailImage="/images/lifestyle.jpg"
      benefits={[
        { title: "Decision-Making Framework", desc: "Develop a personalized framework for making business decisions with clarity, drawing from NLP principles and proven coaching methodologies." },
        { title: "Risk Tolerance Profiling", desc: "Understand your unique relationship with risk — where you're too conservative, where you're overexposed, and how to calibrate for growth." },
        { title: "Leadership Style Development", desc: "Refine your leadership approach using insights from behavioral psychology and executive coaching best practices." },
        { title: "Strategic Business Clarity", desc: "Cut through complexity to identify the priorities, opportunities, and strategic moves that matter most for your business stage." },
      ]}
      process={[
        { step: 1, title: "Discovery Session", desc: "An in-depth conversation about your business, your vision, your challenges, and your decision-making patterns." },
        { step: 2, title: "Assessment & Profiling", desc: "Using NLP and coaching tools, I create a profile of your leadership style, risk tolerance, and growth opportunities." },
        { step: 3, title: "Coaching Program", desc: "Regular 1-on-1 sessions focused on building your decision-making confidence and strategic thinking skills." },
        { step: 4, title: "Monthly Accountability", desc: "Ongoing check-ins to track progress, address new challenges, and keep your growth trajectory on course." },
      ]}
      quote="The quality of your business will never exceed the quality of the decisions you make building it."
    />
  );
}
