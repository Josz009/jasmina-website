import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <Image src="/images/logo.png" alt="LiLLY'S Logo" width={28} height={28} />
        <span>Jasmina Kolekjeska</span>
      </div>
      <p className="footer-tagline">Exceptional Clarity for Exceptional Decisions.</p>
      <p className="footer-copy">&copy; 2026 Jasmina Kolekjeska. All rights reserved.</p>
    </footer>
  );
}
