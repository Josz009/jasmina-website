import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <Image src="/images/logo.png" alt="LiLLY'S Logo" width={28} height={28} />
        <span>J&A Business Advisory & Coaching</span>
      </div>
      <p className="footer-tagline">Exceptional Clarity for Exceptional Decisions.</p>
      <p className="footer-copy">&copy; 2026 J&A Business Advisory & Coaching. All rights reserved.</p>
    </footer>
  );
}
