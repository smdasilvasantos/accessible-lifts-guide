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

/* ── Icons ─────────────────────────────────────────────────── */

const IconStairStraight = () => (
  <svg viewBox="0 0 96 84" fill="none" className="w-full h-full">
    <rect x="20" y="18" width="68" height="60" rx="14" fill="#edf0e8" />
    {/* steps profile */}
    <path
      d="M8 76 L8 64 L22 64 L22 52 L38 52 L38 40 L54 40 L54 28 L70 28 L70 16 L84 16"
      stroke="#4B5D5A" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"
    />
    {/* handrail diagonal */}
    <line x1="5" y1="79" x2="87" y2="13" stroke="#4B5D5A" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

const IconStairCurved = () => (
  <svg viewBox="0 0 96 84" fill="none" className="w-full h-full">
    <rect x="6" y="14" width="68" height="60" rx="14" fill="#edf0e8" />
    {/* lower stairs - dark */}
    <path
      d="M14 76 L14 62 L28 62 L28 50 L44 50 L44 38"
      stroke="#4B5D5A" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"
    />
    {/* lower handrail */}
    <line x1="11" y1="79" x2="47" y2="34" stroke="#4B5D5A" strokeWidth="3.5" strokeLinecap="round" />
    {/* upper / turned section - sage green */}
    <path
      d="M44 38 L58 38 L58 26 L74 26 L74 14 L88 14"
      stroke="#7A9E87" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"
    />
    {/* upper handrail - sage */}
    <line x1="41" y1="41" x2="91" y2="11" stroke="#7A9E87" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

const IconStairSpiral = () => (
  <svg viewBox="0 0 72 108" fill="none" className="w-full h-full">
    <rect x="18" y="14" width="42" height="86" rx="16" fill="#edf0e8" />
    {/* central pole */}
    <line x1="36" y1="10" x2="36" y2="100" stroke="#4B5D5A" strokeWidth="4.5" strokeLinecap="round" />
    {/* spiral steps — arcs going around the pole */}
    <path d="M36 22 Q60 22 60 36 Q60 50 36 50" stroke="#4B5D5A" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    <line x1="36" y1="22" x2="36" y2="50" stroke="#4B5D5A" strokeWidth="2" />
    <path d="M36 42 Q12 42 12 56 Q12 70 36 70" stroke="#4B5D5A" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    <line x1="36" y1="42" x2="36" y2="70" stroke="#4B5D5A" strokeWidth="2" />
    <path d="M36 62 Q60 62 60 76 Q60 90 36 90" stroke="#4B5D5A" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    <line x1="36" y1="62" x2="36" y2="90" stroke="#4B5D5A" strokeWidth="2" />
  </svg>
);

const IconHouse = () => (
  <svg viewBox="0 0 96 90" fill="none" className="w-full h-full">
    <rect x="10" y="16" width="72" height="66" rx="14" fill="#edf0e8" />
    {/* walls */}
    <path
      d="M18 82 L18 46 L48 18 L78 46 L78 82 Z"
      stroke="#4B5D5A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
    />
    {/* chimney */}
    <rect x="28" y="24" width="10" height="14" rx="2" stroke="#4B5D5A" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* door - sage green accent */}
    <rect x="40" y="60" width="16" height="22" rx="3" stroke="#7A9E87" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTree = () => (
  <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
    <ellipse cx="50" cy="44" rx="38" ry="36" fill="#edf0e8" />
    {/* tree crown outline */}
    <path
      d="M16 56 Q10 40 24 30 Q20 12 42 12 Q52 4 64 16 Q80 14 82 32 Q94 42 84 56 Q80 68 66 66 L48 66 Q26 68 16 56 Z"
      stroke="#4B5D5A" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
    />
    {/* trunk - sage green */}
    <path
      d="M48 66 L44 86 M48 66 L52 86"
      stroke="#7A9E87" strokeWidth="5" strokeLinecap="round"
    />
    <path
      d="M40 76 Q44 70 48 66 Q52 70 56 76"
      stroke="#7A9E87" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
  </svg>
);

/* ── Options ───────────────────────────────────────────────── */

const stairOptions: { value: StairType; label: string; desc: string; Icon: () => JSX.Element }[] = [
  { value: "reta",    label: "Reta",         desc: "Sem curvas nem patamares", Icon: IconStairStraight },
  { value: "curva",   label: "Curva",         desc: "Com curva ou patamar",     Icon: IconStairCurved },
  { value: "caracol", label: "Em Caracol",    desc: "Escada helicoidal",         Icon: IconStairSpiral },
];

const locationOptions: { value: Location; label: string; desc: string; Icon: () => JSX.Element }[] = [
  { value: "interior", label: "Interior", desc: "Dentro de casa, ambiente protegido", Icon: IconHouse },
  { value: "exterior", label: "Exterior", desc: "Fora de casa, exposta ao clima",     Icon: IconTree },
];

/* ── Component ─────────────────────────────────────────────── */

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
      reta: "Escada Reta", curva: "Escada Curva", caracol: "Escada em Caracol",
    };
    const locationLabels: Record<string, string> = {
      interior: "Interior", exterior: "Exterior",
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
              <p className="font-heading text-lg font-semibold text-foreground mb-6 text-center">
                Qual é o tipo de escada?
              </p>
              <div className="grid grid-cols-3 gap-3">
                {stairOptions.map(({ value, label, desc, Icon }) => {
                  const selected = data.stairType === value;
                  return (
                    <button
                      key={value}
                      onClick={() => setData({ ...data, stairType: value })}
                      className={`flex flex-col items-center gap-3 rounded-2xl border-2 px-3 py-5 text-center transition-all ${
                        selected
                          ? "border-[#1D6954] bg-[#1D6954]/5"
                          : "border-border hover:border-foreground/30 bg-[#fdfcf8]"
                      }`}
                    >
                      <div className="w-14 h-14">
                        <Icon />
                      </div>
                      <div>
                        <p className={`font-heading text-sm font-bold leading-tight ${selected ? "text-[#1D6954]" : "text-foreground"}`}>
                          {label}
                        </p>
                        <p className="text-xs text-foreground/45 mt-0.5 leading-snug">{desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Interior / Exterior */}
          {step === 2 && (
            <div>
              <p className="font-heading text-lg font-semibold text-foreground mb-6 text-center">
                A escada é interior ou exterior?
              </p>
              <div className="grid grid-cols-2 gap-4">
                {locationOptions.map(({ value, label, desc, Icon }) => {
                  const selected = data.location === value;
                  return (
                    <button
                      key={value}
                      onClick={() => setData({ ...data, location: value })}
                      className={`flex flex-col items-center gap-3 rounded-2xl border-2 px-4 py-6 text-center transition-all ${
                        selected
                          ? "border-[#1D6954] bg-[#1D6954]/5"
                          : "border-border hover:border-foreground/30 bg-[#fdfcf8]"
                      }`}
                    >
                      <div className="w-16 h-16">
                        <Icon />
                      </div>
                      <div>
                        <p className={`font-heading text-base font-bold ${selected ? "text-[#1D6954]" : "text-foreground"}`}>
                          {label}
                        </p>
                        <p className="text-sm text-foreground/45 mt-0.5 leading-snug">{desc}</p>
                      </div>
                    </button>
                  );
                })}
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
