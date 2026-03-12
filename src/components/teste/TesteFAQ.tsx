import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Os elevadores de escadas são seguros?",
    answer: "Sim. Todos os modelos cumprem as normas europeias de segurança e incluem sensores de obstáculo, cintos de segurança e sistemas de paragem automática.",
  },
  {
    question: "Podem ser instalados em escadas curvas?",
    answer: "Sim. Existem modelos com carris fabricados à medida que se adaptam a qualquer configuração de escada, incluindo curvas, cantos e patamares.",
  },
  {
    question: "As escadas estreitas permitem instalação?",
    answer: "Na maioria dos casos, sim. Os modelos compactos ocupam pouco espaço e o assento recolhe-se quando não está em uso, deixando a escada livre.",
  },
  {
    question: "Quanto tempo demora a instalação?",
    answer: "Para escadas retas, a instalação demora normalmente entre 2 a 4 horas. Escadas curvas podem necessitar de um dia completo.",
  },
  {
    question: "Qual o peso máximo suportado?",
    answer: "A maioria dos modelos suporta até 130 kg. Existem modelos reforçados com capacidade até 160 kg.",
  },
  {
    question: "Consomem muita energia?",
    answer: "Não. Os elevadores de escadas funcionam com baterias recarregáveis e têm um consumo energético muito baixo, comparável ao de um carregador de telemóvel.",
  },
];

const TesteFAQ = () => {
  return (
    <section className="bg-secondary section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-card rounded-xl border border-border px-5 shadow-sm"
            >
              <AccordionTrigger className="font-heading font-bold text-sm text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default TesteFAQ;
