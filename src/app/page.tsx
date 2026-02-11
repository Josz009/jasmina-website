import LenisProvider from "@/components/LenisProvider";
import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Process from "@/components/Process";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import GlobalExperience from "@/components/GlobalExperience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DecorativeDivider from "@/components/DecorativeDivider";
import TrustBar from "@/components/TrustBar";
import Results from "@/components/Results";

export default function Home() {
  return (
    <LenisProvider>
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <TrustBar />
      <DecorativeDivider variant="squares" />
      <Services />
      <Philosophy />
      <DecorativeDivider variant="squares" />
      <Process />
      <Packages />
      {/* <Results /> */}
      {/* <Testimonials /> */}
      <DecorativeDivider variant="squares" />
      <GlobalExperience />
      <Contact />
      <Footer />
    </LenisProvider>
  );
}
