import { useState } from "react";
import { ArrowLeft, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

type FloorCount = "2" | "3" | "4plus" | null;
type LiftType = "plataforma" | "cabine" | "exterior" | null;

interface FormData {
  floorCount: FloorCount;
  liftType: LiftType;
  nomeProprio: string;
  apelido: string;
  telefone: string;
  email: string;
  localidade: string;
}

const initialData: FormData = {
  floorCount: null,
  liftType: null,
  nomeProprio: "",
  apelido: "",
  telefone: "",
  email: "",
  localidade: "",
};

/* ── Icons ─────────────────────────────────────────────────── */

const IconFloors2 = () => (
  <svg viewBox="0 0 80 88" fill="none" className="w-full h-full">
    <rect x="10" y="20" width="60" height="58" rx="12" fill="#edf0e8" />
    {/* building outline */}
    <rect x="14" y="24" width="52" height="50" rx="6" stroke="#4B5D5A" strokeWidth="4.5" strokeLinejoin="round" />
    {/* floor divider */}
    <line x1="14" y1="49" x2="66" y2="49" stroke="#4B5D5A" strokeWidth="3" />
    {/* upper window */}
    <rect x="28" y="31" width="14" height="11" rx="3" stroke="#7A9E87" strokeWidth="3.5" />
    {/* lower window */}
    <rect x="28" y="56" width="14" height="11" rx="3" stroke="#4B5D5A" strokeWidth="3.5" />
    {/* floor count label */}
    <text x="40" y="83" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4B5D5A" fontFamily="sans-serif">2 andares</text>
  </svg>
);

const IconFloors3 = () => (
  <svg viewBox="0 0 80 100" fill="none" className="w-full h-full">
    <rect x="10" y="8" width="60" height="74" rx="12" fill="#edf0e8" />
    {/* building outline */}
    <rect x="14" y="12" width="52" height="66" rx="6" stroke="#4B5D5A" strokeWidth="4.5" strokeLinejoin="round" />
    {/* floor dividers */}
    <line x1="14" y1="34" x2="66" y2="34" stroke="#4B5D5A" strokeWidth="3" />
    <line x1="14" y1="56" x2="66" y2="56" stroke="#4B5D5A" strokeWidth="3" />
    {/* windows */}
    <rect x="29" y="18" width="12" height="9" rx="2.5" stroke="#7A9E87" strokeWidth="3" />
    <rect x="29" y="40" width="12" height="9" rx="2.5" stroke="#4B5D5A" strokeWidth="3" />
    <rect x="29" y="62" width="12" height="9" rx="2.5" stroke="#4B5D5A" strokeWidth="3" />
    {/* floor count label */}
    <text x="40" y="96" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4B5D5A" fontFamily="sans-serif">3 andares</text>
  </svg>
);

const IconFloors4Plus = () => (
  <svg viewBox="0 0 80 108" fill="none" className="w-full h-full">
    <rect x="12" y="4" width="56" height="86" rx="12" fill="#edf0e8" />
    {/* building outline */}
    <rect x="16" y="8" width="48" height="78" rx="6" stroke="#4B5D5A" strokeWidth="4.5" strokeLinejoin="round" />
    {/* floor dividers */}
    <line x1="16" y1="27" x2="64" y2="27" stroke="#4B5D5A" strokeWidth="2.5" />
    <line x1="16" y1="46" x2="64" y2="46" stroke="#4B5D5A" strokeWidth="2.5" />
    <line x1="16" y1="65" x2="64" y2="65" stroke="#4B5D5A" strokeWidth="2.5" />
    {/* windows */}
    <rect x="28" y="13" width="10" height="8" rx="2" stroke="#7A9E87" strokeWidth="3" />
    <rect x="28" y="32" width="10" height="8" rx="2" stroke="#4B5D5A" strokeWidth="3" />
    <rect x="28" y="51" width="10" height="8" rx="2" stroke="#4B5D5A" strokeWidth="3" />
    <rect x="28" y="70" width="10" height="8" rx="2" stroke="#4B5D5A" strokeWidth="3" />
    {/* floor count label */}
    <text x="40" y="104" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4B5D5A" fontFamily="sans-serif">4+ andares</text>
  </svg>
);

const IconPlatformLift = () => (
  <svg viewBox="0 0 88 90" fill="none" className="w-full h-full">
    <rect x="8" y="10" width="68" height="70" rx="14" fill="#edf0e8" />
    {/* upper floor line */}
    <line x1="10" y1="28" x2="78" y2="28" stroke="#4B5D5A" strokeWidth="3.5" strokeLinecap="round" />
    {/* lower floor line */}
    <line x1="10" y1="76" x2="78" y2="76" stroke="#4B5D5A" strokeWidth="3.5" strokeLinecap="round" />
    {/* shaft walls */}
    <line x1="34" y1="28" x2="34" y2="76" stroke="#4B5D5A" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 3" />
    <line x1="54" y1="28" x2="54" y2="76" stroke="#4B5D5A" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 3" />
    {/* platform */}
    <rect x="30" y="46" width="28" height="8" rx="3" fill="#7A9E87" />
    {/* upward arrow */}
    <path d="M44 42 L44 22" stroke="#7A9E87" strokeWidth="3" strokeLinecap="round" />
    <path d="M38 28 L44 22 L50 28" stroke="#7A9E87" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCabinLift = () => (
  <svg viewBox="0 0 88 92" fill="none" className="w-full h-full">
    <rect x="10" y="8" width="68" height="74" rx="14" fill="#edf0e8" />
    {/* shaft outer */}
    <rect x="18" y="14" width="52" height="66" rx="6" stroke="#4B5D5A" strokeWidth="4.5" strokeLinejoin="round" />
    {/* cabin inner */}
    <rect x="22" y="32" width="44" height="42" rx="4" fill="white" stroke="#4B5D5A" strokeWidth="3.5" />
    {/* door gap */}
    <line x1="44" y1="32" x2="44" y2="74" stroke="#4B5D5A" strokeWidth="2.5" strokeLinecap="round" />
    {/* door handles */}
    <line x1="38" y1="54" x2="42" y2="54" stroke="#7A9E87" strokeWidth="3" strokeLinecap="round" />
    <line x1="46" y1="54" x2="50" y2="54" stroke="#7A9E87" strokeWidth="3" strokeLinecap="round" />
    {/* indicator light */}
    <circle cx="44" cy="22" r="4" fill="#7A9E87" />
    {/* cable */}
    <line x1="44" y1="14" x2="44" y2="18" stroke="#4B5D5A" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const IconExternalLift = () => (
  <svg viewBox="0 0 96 90" fill="none" className="w-full h-full">
    <rect x="6" y="10" width="80" height="70" rx="14" fill="#edf0e8" />
    {/* building (right portion) */}
    <rect x="42" y="14" width="46" height="66" rx="6" stroke="#4B5D5A" strokeWidth="4.5" strokeLinejoin="round" />
    {/* floor divider */}
    <line x1="42" y1="47" x2="88" y2="47" stroke="#4B5D5A" strokeWidth="2.5" />
    {/* windows */}
    <rect x="54" y="22" width="12" height="10" rx="2.5" stroke="#4B5D5A" strokeWidth="3" />
    <rect x="54" y="55" width="12" height="10" rx="2.5" stroke="#4B5D5A" strokeWidth="3" />
    {/* external lift shaft (left, attached to building wall) */}
    <rect x="18" y="14" width="26" height="66" rx="5" stroke="#7A9E87" strokeWidth="4" strokeLinejoin="round" />
    {/* platform inside shaft */}
    <rect x="22" y="44" width="18" height="10" rx="3" fill="#7A9E87" />
    {/* upward arrow */}
    <path d="M31 40 L31 24" stroke="#7A9E87" strokeWidth="3" strokeLinecap="round" />
    <path d="M26 30 L31 24 L36 30" stroke="#7A9E87" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    {/* wall bracket */}
    <line x1="42" y1="30" x2="44" y2="30" stroke="#4B5D5A" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="42" y1="60" x2="44" y2="60" stroke="#4B5D5A" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

/* ── Options ───────────────────────────────────────────────── */

const floorOptions: { value: FloorCount; label: string; desc: string; Icon: () => JSX.Element }[] = [
  { value: "2",      label: "2 andares",       desc: "R/C + 1.º andar",          Icon: IconFloors2 },
  { value: "3",      label: "3 andares",       desc: "R/C + 2.º andar",          Icon: IconFloors3 },
  { value: "4plus",  label: "4 ou mais",       desc: "Edifício com vários pisos", Icon: IconFloors4Plus },
];

const liftTypeOptions: { value: LiftType; label: string; desc: string; Icon: () => JSX.Element }[] = [
  { value: "plataforma", label: "Plataforma",   desc: "Compacta, passa entre pisos", Icon: IconPlatformLift },
  { value: "cabine",     label: "Cabine",        desc: "Cabine fechada, conforto máximo", Icon: IconCabinLift },
  { value: "exterior",   label: "Exterior",      desc: "Fixado na fachada, sem obras internas", Icon: IconExternalLift },
];

/* ── Component ─────────────────────────────────────────────── */

export default function ElevadoresQuoteForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const canAdvance = () => {
    if (step === 1) return !!data.floorCount;
    if (step === 2) return !!data.liftType;
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
    const floorLabels: Record<string, string> = {
      "2": "2 andares (R/C + 1.º)",
      "3": "3 andares (R/C + 2.º)",
      "4plus": "4 andares ou mais",
    };
    const liftLabels: Record<string, string> = {
      plataforma: "Plataforma entre pisos",
      cabine: "Elevador em cabine",
      exterior: "Elevador exterior",
    };
    const body =
      `Novo pedido de orçamento — Elevador Residencial\n\n` +
      `Número de andares: ${floorLabels[data.floorCount!]}\n` +
      `Tipo de elevador: ${liftLabels[data.liftType!]}\n\n` +
      `Nome: ${data.nomeProprio} ${data.apelido}\n` +
      `Telefone: ${data.telefone}\n` +
      `Email: ${data.email}\n` +
      `Localidade: ${data.localidade}`;

    window.location.href = `mailto:escreva@yahoo.co.uk?subject=${encodeURIComponent(
      "Pedido de Orçamento — Elevador Residencial"
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
            Calcule o preço para a sua casa
          </h2>
          <p className="text-base text-foreground/60 leading-relaxed max-w-md mx-auto">
            Cada habitação é diferente. Com duas ou três perguntas simples conseguimos dar-lhe uma indicação de preço realista.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2 text-sm text-foreground/50">
            <span>Passo {step} de {totalSteps}</span>
            <span className="font-semibold text-foreground/70">
              {step === 1 && "Número de andares"}
              {step === 2 && "Tipo de elevador"}
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

          {/* Step 1: Floor count */}
          {step === 1 && (
            <div>
              <p className="font-heading text-lg font-semibold text-foreground mb-6 text-center">
                Quantos andares tem a sua casa?
              </p>
              <div className="grid grid-cols-3 gap-3">
                {floorOptions.map(({ value, label, desc, Icon }) => {
                  const selected = data.floorCount === value;
                  return (
                    <button
                      key={value}
                      onClick={() => setData({ ...data, floorCount: value })}
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

          {/* Step 2: Lift type */}
          {step === 2 && (
            <div>
              <p className="font-heading text-lg font-semibold text-foreground mb-6 text-center">
                Que tipo de elevador prefere?
              </p>
              <div className="grid grid-cols-3 gap-3">
                {liftTypeOptions.map(({ value, label, desc, Icon }) => {
                  const selected = data.liftType === value;
                  return (
                    <button
                      key={value}
                      onClick={() => setData({ ...data, liftType: value })}
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
