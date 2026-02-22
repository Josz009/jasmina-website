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
      subtitle="for business buyers & investors"
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
        { step: 1, title: "Discovery & Document Collection", desc: "Collect essential financial and operational documents, including financial statements, tax returns, contracts, receivables reports, and supporting records. This creates the factual foundation for objective analysis." },
        { step: 2, title: "Financial Deep-Dive Analysis", desc: "Analyze financial performance, cash flow patterns, liabilities, receivables quality, and operational indicators. Identify trends, inconsistencies, risks, and opportunities that may not be immediately visible." },
        { step: 3, title: "Risk & Financial Clarity Report", desc: "Receive a comprehensive written report outlining key findings, financial risks, and overall business health — presented in a clear and decision-ready format." },
        { step: 4, title: "Decision Strategy Session", desc: "A one-on-one advisory session to review the analysis, clarify implications, and support confident decision-making. We define next steps aligned with your financial, strategic, and personal goals." },
      ]}
      quote="The difference between a good deal and a costly mistake often lies in the quality of the financial analysis behind the decision."
    />
  );
}
