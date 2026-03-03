import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tagline from "@/components/Tagline";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import TerminalDemo from "@/components/TerminalDemo";
import InstallSection from "@/components/InstallSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-14">
        <Hero />
        <Tagline />
        <HowItWorks />
        <Features />
        <TerminalDemo />
        <InstallSection />
      </main>
      <Footer />
    </>
  );
}
