import HeroSection from "@/components/HeroSection";
import PriceOverview from "@/components/PriceOverview";
import PriceShafts from "@/components/PriceShafts";
import CatalogCTA from "@/components/CatalogCTA";
import ProcessSteps from "@/components/ProcessSteps";
import PriceFactors from "@/components/PriceFactors";
import AdditionalInfo from "@/components/AdditionalInfo";
import ContactCTA from "@/components/ContactCTA";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PriceOverview />
      <PriceShafts />
      <CatalogCTA />
      <ProcessSteps />
      <PriceFactors />
      <AdditionalInfo />
      <ContactCTA />
      <SiteFooter />
    </div>
  );
};

export default Index;
