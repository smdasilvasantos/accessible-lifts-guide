import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="section-spacing">
      <div className="content-width text-center">
        <span className="inline-block bg-cta/10 text-cta font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
          100% Gratuito
        </span>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
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
