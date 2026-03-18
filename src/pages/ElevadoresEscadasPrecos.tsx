import SiteHeader from "@/components/SiteHeader";
import PrecosHero from "@/components/precos-escadas/PrecosHero";
import PrecosOverview from "@/components/precos-escadas/PrecosOverview";
import CatalogCTA from "@/components/CatalogCTA";
import PrecosOrcamento from "@/components/precos-escadas/PrecosOrcamento";
import PrecosMelhorPreco from "@/components/precos-escadas/PrecosMelhorPreco";
import PrecosModelos from "@/components/precos-escadas/PrecosModelos";
import PrecosFactores from "@/components/precos-escadas/PrecosFactores";
import PrecosInstalacao from "@/components/precos-escadas/PrecosInstalacao";
import PrecosUsados from "@/components/precos-escadas/PrecosUsados";
import ContactCTA from "@/components/ContactCTA";
import SiteFooter from "@/components/SiteFooter";

const ElevadoresEscadasPrecos = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PrecosHero />
      <PrecosOverview />
      <CatalogCTA />
      <PrecosOrcamento />
      <PrecosMelhorPreco />
      <PrecosModelos />
      <PrecosFactores />
      <PrecosInstalacao />
      <PrecosUsados />
      <ContactCTA />
      <SiteFooter />
    </div>
  );
};

export default ElevadoresEscadasPrecos;
