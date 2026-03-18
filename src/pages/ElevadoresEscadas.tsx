import SiteHeader from "@/components/SiteHeader";
import StairliftHero from "@/components/stairlift/StairliftHero";
import BenefitsBar from "@/components/stairlift/BenefitsBar";
import StairliftModels from "@/components/stairlift/StairliftModels";
import StairliftQuoteForm from "@/components/stairlift/StairliftQuoteForm";
import StairliftAbout from "@/components/stairlift/StairliftAbout";
import StairliftFeatures from "@/components/stairlift/StairliftFeatures";
import StairliftPricing from "@/components/stairlift/StairliftPricing";
import StairliftSupport from "@/components/stairlift/StairliftSupport";
import CatalogCTA from "@/components/CatalogCTA";
import SiteFooter from "@/components/SiteFooter";

const ElevadoresEscadas = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <StairliftHero />
      <BenefitsBar />
      <StairliftModels />
      <StairliftQuoteForm />
      <StairliftAbout />
      <StairliftFeatures />
      <StairliftPricing />
      <StairliftSupport />
      <CatalogCTA />
      <SiteFooter />
    </div>
  );
};

export default ElevadoresEscadas;
