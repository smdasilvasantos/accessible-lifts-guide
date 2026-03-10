import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="section-spacing">
      <div className="content-width text-center">
        <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          100% Gratuito
        </p>
        <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-4">
          Peça um orçamento sem compromisso
        </h2>
        <p className="font-body text-base text-muted-foreground mb-8 max-w-md mx-auto">
          Coloque-se em contacto direto com as principais empresas instaladoras
          de elevadores em Portugal.
        </p>
        <Button variant="cta" size="lg">
          Pedir Orçamento
        </Button>
      </div>
    </section>
  );
};

export default ContactCTA;
