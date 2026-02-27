import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Account Receivables Portfolio & Trading Risk Advisory — J&A Business Advisory",
  description: "Expert portfolio risk assessment and trading advisory. Understand your exposure, optimize position weighting, and trade with disciplined confidence.",
};

export default function PortfolioAdvisory() {
  return (
    <ServicePage
      title="AR Portfolio & Trading"
      titleAccent="Risk Advisory"
      subtitle="for active traders & investors"
      heroImage="/images/stock/trading-chart-red.png"
      intro="I help trading companies make more disciplined and confident trading decisions by analyzing their portfolio risk, exposure, and sector concentration. This advisory is designed for smaller trading companies that do not have an internal credit function but still carry significant balance-sheet risk through receivables and customer exposure."
      detailImage="/images/stock/trading-desk.jpg"
      benefits={[
        { title: "Risk Concentration Analysis", desc: "Understanding risk concentration across customers, sectors, and regions — identifying where your exposure is most vulnerable." },
        { title: "Portfolio Weighting & Exposure", desc: "Detailed review of portfolio weighting and exposure to help you understand how your risk is distributed across your book of business." },
        { title: "Balance-Sheet Risk Assessment", desc: "Analysis of balance-sheet risk tied to trade receivables — often the majority of a trader's risk — to protect your cash flow." },
        { title: "Portfolio Optimization & Diversification", desc: "Actionable guidance on how to optimize and diversify risk across your portfolio, reducing concentration and trading with greater confidence and discipline." },
      ]}
      process={[
        { step: 1, title: "A/R Portfolio Review & Data Collection", desc: "Collect accounts receivable aging reports, trading history, customer exposure data, and credit management practices. This creates a complete view of how risk is distributed across your portfolio." },
        { step: 2, title: "Portfolio Risk Analysis", desc: "Conduct a structured analysis of customer concentration, sector exposure, geographic risk, and receivables quality. This includes portfolio segmentation, correlation assessment, and risk-matrix evaluation to identify vulnerabilities and hidden exposures." },
        { step: 3, title: "Risk & Optimization Report", desc: "Receive a comprehensive report outlining portfolio exposure, concentration risks, receivables quality, and specific optimization recommendations to strengthen resilience and financial stability." },
        { step: 4, title: "Strategy & Portfolio Quality Session", desc: "A one-on-one advisory session to review findings and align on disciplined credit management, trading strategy, and portfolio quality improvement. This step connects receivables performance directly to balance-sheet strength and long-term financial health." },
      ]}
      quote="Confidence in trading doesn't come from predictions — it comes from deeply understanding your own risk exposure."
    />
  );
}
