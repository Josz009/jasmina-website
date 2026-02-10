import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Business Acquisition Financial Analysis — J&A Business Advisory",
  description: "Comprehensive financial analysis for business buyers and investors. Evaluate financial statements, cash flow, and risk exposure before making acquisition decisions.",
};

export default function BusinessAcquisition() {
  return (
    <ServicePage
      title="Business Acquisition"
      titleAccent="Financial Analysis"
      subtitle="for buyers & investors"
      heroImage="/images/stock/business-deal.jpg"
      intro="Make confident decisions before buying a business. I analyze financial statements, cash flow, and risk exposure — giving you a clear view of the strengths, weaknesses, and sustainability of any business opportunity before you commit."
      detailImage="/images/stock/financial-documents.jpg"
      benefits={[
        { title: "Detailed Financial Analysis Report", desc: "A clear interpretation of the company's financial statements, cash flow, and performance trends." },
        { title: "Strengths and Weaknesses Assessment", desc: "Identification of what the business does well, where it is vulnerable, and where risk is concentrated." },
        { title: "Actionable Decision Guidance", desc: "Practical steps you can take — whether to proceed, renegotiate, restructure, or walk away." },
        { title: "Business Resilience & Sustainability Review", desc: "An evaluation of how resilient the business is in a changing environment, including trend analysis and what the business needs to remain sustainable in the future." },
      ]}
      process={[
        { step: 1, title: "Document Collection", desc: "I gather financial statements, tax returns, contracts, and other critical documents from the target business." },
        { step: 2, title: "Deep Financial Analysis", desc: "Rigorous analysis of all financial data, identifying trends, anomalies, red flags, and opportunities." },
        { step: 3, title: "Risk Assessment Report", desc: "A comprehensive written report detailing findings, risk factors, and a clear summary of the financial picture." },
        { step: 4, title: "Decision Strategy Session", desc: "A 90-minute one-on-one session to walk through all findings and help you make an informed decision." },
      ]}
      quote="The difference between a good deal and a costly mistake often lies in the quality of the financial analysis behind the decision."
    />
  );
}
