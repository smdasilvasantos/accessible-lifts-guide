import { Layers, Layers2, Layers3 } from "lucide-react";
import type { FloorCount } from "@/pages/PedirOrcamento";

const options: { value: FloorCount; label: string; icon: typeof Layers }[] = [
  { value: "1", label: "1 Andar", icon: Layers },
  { value: "2", label: "2 Andares", icon: Layers2 },
  { value: "3+", label: "3+ Andares", icon: Layers3 },
];

interface Props {
  value: FloorCount;
  onChange: (v: FloorCount) => void;
}

const StepFloors = ({ value, onChange }: Props) => (
  <div>
    <h2 className="font-heading text-xl font-bold text-foreground mb-2">
      Quantos andares?
    </h2>
    <p className="font-body text-sm text-muted-foreground mb-6">
      Selecione o número de andares que o elevador deverá servir.
    </p>
    <div className="grid gap-4 sm:grid-cols-3">
      {options.map((opt) => {
        const Icon = opt.icon;
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all text-center
              ${selected
                ? "border-primary bg-primary/5 shadow-md"
                : "border-border bg-background hover:border-primary/40 hover:shadow-sm"
              }`}
          >
            <div className={`flex h-14 w-14 items-center justify-center rounded-full ${selected ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
              <Icon className="h-7 w-7" />
            </div>
            <span className={`font-heading text-sm font-semibold ${selected ? "text-primary" : "text-foreground"}`}>
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  </div>
);

export default StepFloors;
