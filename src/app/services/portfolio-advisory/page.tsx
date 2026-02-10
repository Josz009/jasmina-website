import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Portfolio & Trading Risk Advisory — J&A Business Advisory",
  description: "Expert portfolio risk assessment and trading advisory. Understand your exposure, optimize position weighting, and trade with disciplined confidence.",
};

export default function PortfolioAdvisory() {
  return (
    <ServicePage
      title="Portfolio & Trading"
      titleAccent="Risk Advisory"
      subtitle="for active traders & investors"
      heroImage="/images/stock/financial-charts.jpg"
      intro="I help trading companies make more disciplined and confident trading decisions by analyzing their portfolio risk, exposure, and sector concentration. This advisory is designed for smaller trading companies that do not have an internal credit function but still carry significant balance-sheet risk through receivables and customer exposure."
      detailImage="/images/stock/trading-desk.jpg"
      benefits={[
        { title: "Risk Concentration Analysis", desc: "Understanding risk concentration across customers, sectors, and regions — identifying where your exposure is most vulnerable." },
        { title: "Portfolio Weighting & Exposure", desc: "Detailed review of portfolio weighting and exposure to help you understand how your risk is distributed across your book of business." },
        { title: "Balance-Sheet Risk Assessment", desc: "Analysis of balance-sheet risk tied to trade receivables — often the majority of a trader's risk — to protect your cash flow." },
        { title: "Portfolio Optimization & Diversification", desc: "Actionable guidance on how to optimize and diversify risk across your portfolio, reducing concentration and trading with greater confidence and discipline." },
      ]}
      process={[
        { step: 1, title: "Portfolio Review", desc: "I collect and review your current holdings, trading history, and investment strategy documentation." },
        { step: 2, title: "Risk Modeling", desc: "Advanced analysis of portfolio risk metrics, correlations, and stress scenarios tailored to your positions." },
        { step: 3, title: "Optimization Report", desc: "A detailed report with exposure analysis, risk ratings, and specific optimization recommendations." },
        { step: 4, title: "Strategy Discussion", desc: "An in-depth session to review findings and align on a disciplined, data-driven trading strategy." },
      ]}
      quote="Confidence in trading doesn't come from predictions — it comes from deeply understanding your own risk exposure."
    />
  );
}
