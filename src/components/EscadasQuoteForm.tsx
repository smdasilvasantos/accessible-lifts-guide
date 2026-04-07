import { useState } from "react";
import { ArrowLeft, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

type StairType = "reta" | "curva" | "caracol" | null;
type Location = "interior" | "exterior" | null;

interface FormData {
  stairType: StairType;
  location: Location;
  nomeProprio: string;
  apelido: string;
  telefone: string;
  email: string;
  localidade: string;
}

const initialData: FormData = {
  stairType: null,
  location: null,
  nomeProprio: "",
  apelido: "",
  telefone: "",
  email: "",
  localidade: "",
};

const stairOptions: { value: StairType; label: string; desc: string }[] = [
  { value: "reta", label: "Escada Reta", desc: "Sem curvas nem patamares intermédios" },
  { value: "curva", label: "Escada Curva", desc: "Com curva, patamar ou troço em ângulo" },
  { value: "caracol", label: "Escada em Caracol", desc: "Escada helicoidal ou em espiral" },
];

const locationOptions: { value: Location; label: string; desc: string }[] = [
  { value: "interior", label: "Interior", desc: "Dentro de casa, ambiente protegido" },
  { value: "exterior", label: "Exterior", desc: "Fora de casa, exposta ao clima" },
];

export default function EscadasQuoteForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const canAdvance = () => {
    if (step === 1) return !!data.stairType;
    if (step === 2) return !!data.location;
    return (
      data.nomeProprio.trim() !== "" &&
      data.apelido.trim() !== "" &&
      data.telefone.trim() !== "" &&
      data.email.trim() !== "" &&
      data.localidade.trim() !== ""
    );
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const stairLabels: Record<string, string> = {
      reta: "Escada Reta",
      curva: "Escada Curva",
      caracol: "Escada em Caracol",
    };
    const locationLabels: Record<string, string> = {
      interior: "Interior",
      exterior: "Exterior",
    };

    const body =
      `Novo pedido de orçamento — Elevador de Escadas\n\n` +
      `Tipo de escada: ${stairLabels[data.stairType!]}\n` +
      `Localização: ${locationLabels[data.location!]}\n\n` +
      `Nome: ${data.nomeProprio} ${data.apelido}\n` +
      `Telefone: ${data.telefone}\n` +
      `Email: ${data.email}\n` +
      `Localidade: ${data.localidade}`;

    window.location.href = `mailto:escreva@yahoo.co.uk?subject=${encodeURIComponent(
      "Pedido de Orçamento — Elevador de Escadas"
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="bg-secondary py-20 px-4 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-[#1D6954] mb-6" />
        <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
          Pedido enviado com sucesso
        </h3>
        <p className="text-base text-foreground/60 max-w-sm mx-auto leading-relaxed">
          Iremos analisar a sua situação e entrar em contacto em breve com uma indicação de preço.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-secondary py-14 md:py-20 px-4">
      <div className="mx-auto max-w-xl">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3" style={{ lineHeight: 1.2 }}>
            Calcule o preço para a sua escada
          </h2>
          <p className="text-base text-foreground/60 leading-relaxed max-w-md mx-auto">
            Com base em algumas perguntas simples, conseguimos dar-lhe uma indicação de preço. Como cada escada é diferente, precisamos de perceber melhor a sua situação.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2 text-sm text-foreground/50">
            <span>Passo {step} de {totalSteps}</span>
            <span className="font-semibold text-foreground/70">
              {step === 1 && "Tipo de escada"}
              {step === 2 && "Localização"}
              {step === 3 && "Os seus dados"}
            </span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-foreground/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#1D6954] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6 md:p-8">

          {/* Step 1: Stair type */}
          {step === 1 && (
            <div>
              <p className="font-heading text-lg font-semibold text-foreground mb-5">
                Qual é o tipo de escada?
              </p>
              <div className="grid grid-cols-1 gap-3">
                {stairOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setData({ ...data, stairType: opt.value })}
                    className={`flex items-start gap-4 rounded-xl border-2 px-5 py-4 text-left transition-all ${
                      data.stairType === opt.value
                        ? "border-[#1D6954] bg-[#1D6954]/5"
                        : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <div className={`mt-0.5 h-4 w-4 flex-shrink-0 rounded-full border-2 flex items-center justify-center ${
                      data.stairType === opt.value ? "border-[#1D6954]" : "border-foreground/30"
                    }`}>
                      {data.stairType === opt.value && (
                        <div className="h-2 w-2 rounded-full bg-[#1D6954]" />
                      )}
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground">{opt.label}</p>
                      <p className="text-sm text-foreground/55 mt-0.5">{opt.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Interior / Exterior */}
          {step === 2 && (
            <div>
              <p className="font-heading text-lg font-semibold text-foreground mb-5">
                A escada é interior ou exterior?
              </p>
              <div className="grid grid-cols-2 gap-3">
                {locationOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setData({ ...data, location: opt.value })}
                    className={`flex flex-col gap-2 rounded-xl border-2 px-5 py-5 text-left transition-all ${
                      data.location === opt.value
                        ? "border-[#1D6954] bg-[#1D6954]/5"
                        : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <p className="font-heading font-semibold text-foreground">{opt.label}</p>
                    <p className="text-sm text-foreground/55 leading-snug">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Personal details */}
          {step === 3 && (
            <div>
              <p className="font-heading text-lg font-semibold text-foreground mb-5">
                Para onde enviamos a indicação de preço?
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5">Nome próprio</label>
                  <input
                    type="text"
                    value={data.nomeProprio}
                    onChange={(e) => setData({ ...data, nomeProprio: e.target.value })}
                    placeholder="Ana"
                    className="w-full rounded-xl border border-border bg-[#fdfcf8] px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:border-[#1D6954] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5">Apelido</label>
                  <input
                    type="text"
                    value={data.apelido}
                    onChange={(e) => setData({ ...data, apelido: e.target.value })}
                    placeholder="Silva"
                    className="w-full rounded-xl border border-border bg-[#fdfcf8] px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:border-[#1D6954] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5">Telefone</label>
                  <input
                    type="tel"
                    value={data.telefone}
                    onChange={(e) => setData({ ...data, telefone: e.target.value })}
                    placeholder="912 345 678"
                    className="w-full rounded-xl border border-border bg-[#fdfcf8] px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:border-[#1D6954] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    placeholder="ana@exemplo.pt"
                    className="w-full rounded-xl border border-border bg-[#fdfcf8] px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:border-[#1D6954] focus:outline-none transition-colors"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5">Localidade</label>
                  <input
                    type="text"
                    value={data.localidade}
                    onChange={(e) => setData({ ...data, localidade: e.target.value })}
                    placeholder="Lisboa"
                    className="w-full rounded-xl border border-border bg-[#fdfcf8] px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:border-[#1D6954] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-7 pt-6 border-t border-border">
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground/50 hover:text-foreground disabled:opacity-0 transition-all"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar
            </button>

            {step < totalSteps ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canAdvance()}
                className="flex items-center gap-2 rounded-full bg-cta px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-40"
              >
                Seguinte <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canAdvance() || submitting}
                className="flex items-center gap-2 rounded-full bg-cta px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-40"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                Pedir indicação de preço
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
