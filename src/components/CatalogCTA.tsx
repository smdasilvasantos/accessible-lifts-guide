import { Button } from "@/components/ui/button";

const CatalogCTA = () => {
  return (
    <section className="section-spacing">
      <div className="content-width text-center">
        <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-4">
          Receba um catálogo gratuito
        </h2>
        <p className="font-body text-base text-muted-foreground mb-8 max-w-md mx-auto">
          Peça um catálogo gratuito e sem compromisso e conheça as soluções
          disponíveis no mercado para si.
        </p>
        <Button variant="cta" size="lg">
          Pedir Catálogo
        </Button>
      </div>
    </section>
  );
};

export default CatalogCTA;
