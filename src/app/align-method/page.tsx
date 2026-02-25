import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AlignMethodContent from "@/components/AlignMethodContent";

export const metadata = {
  title: "The ALIGN Method™ — J&A Business Advisory & Coaching",
  description: "A premium, transformative framework integrating your Gene Keys profile with brand identity, financial architecture, and embodied leadership. Private strategic advisory for conscious leaders.",
};

export default function AlignMethodPage() {
  return (
    <>
      <Navigation />
      <AlignMethodContent />
      <Footer />
    </>
  );
}
