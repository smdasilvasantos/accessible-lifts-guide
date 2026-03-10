import { CheckCircle } from "lucide-react";

const BenefitsBar = () => {
  const benefits = [
    "Compare equipamentos",
    "Poupe tempo e dinheiro",
    "Peça orçamentos gratuitos",
  ];

  return (
    <section className="bg-foreground py-5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-cta shrink-0" />
              <span className="font-heading font-bold text-sm text-background">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsBar;
