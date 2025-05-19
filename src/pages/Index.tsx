
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import DashboardLinks from "@/components/DashboardLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-whistle-dark text-white">
      <Navbar />
      <HeroSection />
      <DashboardLinks />
      <HowItWorks />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
