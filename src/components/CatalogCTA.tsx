import { Button } from "@/components/ui/button";
import catalogImage from "@/assets/catalogo-gratis.png";

const CatalogCTA = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <div className="bg-primary/5 border border-primary/15 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0">
            <img
              src={catalogImage}
              alt="Catálogo de Soluções de Acessibilidade - Vida Acessível"
              className="w-48 md:w-56 drop-shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
              Receba um catálogo gratuito
            </h2>
            <p className="font-body text-base text-muted-foreground mb-8 max-w-md">
              Peça um catálogo gratuito e sem compromisso e conheça as soluções
              disponíveis no mercado para si.
            </p>
            <Button variant="cta" size="lg">
              Pedir Catálogo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogCTA;
