import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Portfolio & Trading Risk Advisory — Jasmina Kolekjeska",
  description: "Expert portfolio risk assessment and trading advisory. Understand your exposure, optimize position weighting, and trade with disciplined confidence.",
};

export default function PortfolioAdvisory() {
  return (
    <ServicePage
      title="Portfolio & Trading"
      titleAccent="Risk Advisory"
      subtitle="for active traders & investors"
      heroImage="/images/stock/financial-charts.jpg"
      intro="Understand your portfolio so you can trade with clarity. I evaluate portfolio risk, position weighting, and exposure across different scenarios — helping you make more disciplined and confident trading decisions."
      detailImage="/images/stock/trading-desk.jpg"
      benefits={[
        { title: "Portfolio Risk Assessment", desc: "Comprehensive evaluation of your current portfolio's risk profile, including concentration risk, sector exposure, and correlation analysis." },
        { title: "Position Weighting Analysis", desc: "Detailed review of how your capital is allocated across positions, with recommendations for optimal weighting based on your risk tolerance." },
        { title: "Scenario & Stress Testing", desc: "Understanding how your portfolio would perform under various market conditions — from mild corrections to severe downturns." },
        { title: "Strategy Optimization", desc: "Actionable recommendations to improve risk-adjusted returns while maintaining alignment with your investment objectives." },
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
