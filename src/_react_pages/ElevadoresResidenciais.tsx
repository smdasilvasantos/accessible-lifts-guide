import SiteHeader from "@/components/SiteHeader";
import ElevatorHero from "@/components/elevator/ElevatorHero";
import BenefitsBar from "@/components/stairlift/BenefitsBar";
import ElevatorModels from "@/components/elevator/ElevatorModels";
import ElevatorQuoteForm from "@/components/elevator/ElevatorQuoteForm";
import ElevatorAbout from "@/components/elevator/ElevatorAbout";
import ElevatorFeatures from "@/components/elevator/ElevatorFeatures";
import ElevatorPricing from "@/components/elevator/ElevatorPricing";
import ElevatorSupport from "@/components/elevator/ElevatorSupport";
import CatalogCTA from "@/components/CatalogCTA";
import SiteFooter from "@/components/SiteFooter";

const ElevadoresResidenciais = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <ElevatorHero />
      <BenefitsBar />
      <ElevatorModels />
      <ElevatorQuoteForm />
      <ElevatorAbout />
      <ElevatorFeatures />
      <ElevatorPricing />
      <ElevatorSupport />
      <CatalogCTA />
      <SiteFooter />
    </div>
  );
};

export default ElevadoresResidenciais;
