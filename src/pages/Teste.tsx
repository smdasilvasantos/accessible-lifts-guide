import TesteHero from "@/components/teste/TesteHero";
import TesteProblem from "@/components/teste/TesteProblem";
import TesteSolution from "@/components/teste/TesteSolution";
import TesteModels from "@/components/teste/TesteModels";
import TesteAdvantages from "@/components/teste/TesteAdvantages";
import TesteHowItWorks from "@/components/teste/TesteHowItWorks";
import TesteFeatures from "@/components/teste/TesteFeatures";
import TestePricing from "@/components/teste/TestePricing";
import TesteProcess from "@/components/teste/TesteProcess";
import TesteSupport from "@/components/teste/TesteSupport";
import TesteFAQ from "@/components/teste/TesteFAQ";
import TesteFinalCTA from "@/components/teste/TesteFinalCTA";
import SiteFooter from "@/components/SiteFooter";

const Teste = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <TesteHero />
      <TesteProblem />
      <TesteSolution />
      <TesteModels />
      <TesteAdvantages />
      <TesteHowItWorks />
      <TesteFeatures />
      <TestePricing />
      <TesteProcess />
      <TesteSupport />
      <TesteFAQ />
      <TesteFinalCTA />
      <SiteFooter />
    </div>
  );
};

export default Teste;
