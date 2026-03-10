import { Button } from "@/components/ui/button";

const CatalogCTA = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-3">
            Receba um catálogo gratuito
          </h2>
          <p className="font-body text-base text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Peça um catálogo gratuito e sem compromisso e conheça as soluções
            disponíveis no mercado para si.
          </p>
          <Button variant="cta" size="lg">
            Pedir Catálogo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CatalogCTA;
