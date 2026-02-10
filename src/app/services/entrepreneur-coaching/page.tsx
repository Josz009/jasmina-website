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
      subtitle="build with clarity & intention"
      heroImage="/images/stock/coaching-session.jpg"
      intro="I work with entrepreneurs and individuals to understand their decision-making style, risk tolerance, and leadership approach so they can build and grow their business more effectively. Everything starts from the individual — identifying patterns and processes. Everything we do in our lives has a certain strategy; the goal is to optimize your decision-making and maximize your strengths while moderating the risk."
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
      quote="It's not just what you do — it's how you do it."
    />
  );
}
