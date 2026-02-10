import ArticlePage from "@/components/ArticlePage";

export const metadata = {
  title: "Understanding Portfolio Concentration Risk — J&A Business Advisory",
  description: "Most investors think they're diversified. But concentration risk goes deeper than owning different stocks. Learn how to identify hidden correlations.",
};

export default function Article() {
  return (
    <ArticlePage
      title="Understanding Portfolio Concentration Risk: Why Diversification Isn't Enough"
      category="Portfolio Advisory"
      date="December 2024"
      readTime="5 min read"
      image="/images/stock/trading-desk.jpg"
    >
      <p>
        &quot;Don&apos;t put all your eggs in one basket.&quot; It&apos;s the most basic investment advice there is. And most investors think they follow it. They own 15 different stocks, maybe some ETFs, perhaps a few bonds. They feel diversified.
      </p>
      <p>
        But here&apos;s the uncomfortable truth: owning many different securities doesn&apos;t mean you&apos;re actually diversified. In fact, some of the most &quot;diversified&quot; portfolios I&apos;ve analyzed have had dangerously high concentration risk hiding in plain sight.
      </p>

      <h2>What Is Concentration Risk, Really?</h2>
      <p>
        Concentration risk is the risk that a large portion of your portfolio&apos;s value is exposed to the same underlying factor — whether that&apos;s a single company, a sector, a geographic region, or even a macroeconomic trend.
      </p>
      <p>
        The most obvious form is position concentration: having 40% of your portfolio in a single stock. But the more insidious forms are harder to spot:
      </p>
      <ul>
        <li><strong>Sector concentration:</strong> Owning 10 different tech stocks doesn&apos;t make you diversified — it means you&apos;re 100% concentrated in technology.</li>
        <li><strong>Factor concentration:</strong> All your holdings might be &quot;growth&quot; stocks that will drop simultaneously in a rising rate environment.</li>
        <li><strong>Correlation concentration:</strong> Your stocks might be in different sectors but still move together because they&apos;re all driven by the same economic cycle.</li>
        <li><strong>Geographic concentration:</strong> A portfolio of entirely US-listed companies still carries US economic and political risk, even if the companies operate globally.</li>
      </ul>

      <h2>The Correlation Trap</h2>
      <p>
        This is where most investors get caught. In normal market conditions, your portfolio looks diversified. Stocks move somewhat independently. But in a downturn — precisely when you need diversification most — correlations spike. Assets that seemed independent suddenly drop together.
      </p>
      <p>
        During the 2008 financial crisis, the average correlation between stocks in the S&amp;P 500 approached 0.80 — meaning nearly every stock moved in the same direction. Portfolios that looked diversified in 2007 turned out to be heavily concentrated in 2008.
      </p>
      <blockquote>
        <p>Diversification is tested in a crisis, not in calm markets. If you haven&apos;t stress-tested your portfolio, you don&apos;t actually know your risk.</p>
      </blockquote>

      <h2>How to Actually Assess Your Concentration Risk</h2>
      <p>
        Here&apos;s a practical framework I use with clients:
      </p>
      <h3>Step 1: Position Weighting Analysis</h3>
      <p>
        Map out your portfolio by position size. If any single position exceeds 10% of your total portfolio, that&apos;s a flag. If your top 3 positions represent more than 30%, you have meaningful concentration.
      </p>
      <h3>Step 2: Sector and Factor Mapping</h3>
      <p>
        Group your holdings by sector, market cap, growth/value orientation, and geographic exposure. Look for where you&apos;re overweighted relative to the broader market.
      </p>
      <h3>Step 3: Correlation Analysis</h3>
      <p>
        Calculate or estimate the correlation between your major holdings. If several large positions are highly correlated (0.70+), they&apos;re effectively acting as a single bet, no matter how different the companies seem.
      </p>
      <h3>Step 4: Stress Testing</h3>
      <p>
        Run your portfolio through historical scenarios: What would happen in a 2008-style crash? A rapid interest rate increase? A sector-specific downturn? This reveals your true risk profile better than any static analysis.
      </p>

      <h2>Reducing Concentration Without Sacrificing Returns</h2>
      <p>
        The goal isn&apos;t to eliminate all concentration — that would mean owning the entire market, which has its own limitations. The goal is to ensure that your concentration is <strong>intentional</strong> rather than accidental.
      </p>
      <p>
        Some practical strategies:
      </p>
      <ul>
        <li><strong>Set maximum position sizes</strong> and rebalance when positions grow beyond your threshold</li>
        <li><strong>Add truly uncorrelated assets</strong> — not just different stocks, but different asset classes</li>
        <li><strong>Use sector caps</strong> to prevent overexposure to any single industry</li>
        <li><strong>Consider inverse correlations</strong> — assets that tend to rise when your core holdings fall</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Diversification isn&apos;t about owning many things. It&apos;s about owning things that behave differently under stress. True portfolio risk management requires looking beneath the surface to understand the hidden connections between your holdings.
      </p>
      <p>
        If you&apos;d like a comprehensive assessment of your portfolio&apos;s concentration risk and actionable recommendations for optimization, I offer detailed portfolio risk reviews. Every engagement starts with understanding your unique situation.
      </p>
    </ArticlePage>
  );
}
