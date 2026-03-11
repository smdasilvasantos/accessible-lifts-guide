import { GitCompareArrows, PiggyBank, FileCheck } from "lucide-react";

const benefits = [
  { icon: GitCompareArrows, text: "Compare equipamentos" },
  { icon: PiggyBank, text: "Poupe tempo e dinheiro" },
  { icon: FileCheck, text: "Peça orçamentos gratuitos" },
];

const BenefitsBar = () => {
  return (
    <section className="bg-primary py-5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
          {benefits.map((benefit) => (
            <div key={benefit.text} className="flex items-center gap-2.5">
              <benefit.icon className="w-5 h-5 text-primary-foreground shrink-0" />
              <span className="font-heading font-bold text-sm text-primary-foreground">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsBar;
