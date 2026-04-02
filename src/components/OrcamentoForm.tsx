import { useState } from "react";
import { ArrowLeft, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import StepProduct from "@/components/orcamento/StepProduct";
import StepStairType from "@/components/orcamento/StepStairType";
import StepBuildingType from "@/components/orcamento/StepBuildingType";
import StepFloors from "@/components/orcamento/StepFloors";
import StepDetails from "@/components/orcamento/StepDetails";

export type ProductChoice = "escadas" | "residenciais" | "plataformas" | null;
export type StairType = "curvas" | "retas" | "exteriores" | null;
export type BuildingType = "moradia" | "predio" | "empresa" | null;
export type FloorCount = "1" | "2" | "3+" | null;

export interface FormData {
  product: ProductChoice;
  stairType: StairType;
  buildingType: BuildingType;
  floorCount: FloorCount;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  privacidade: boolean;
}

const initialFormData: FormData = {
  product: null,
  stairType: null,
  buildingType: null,
  floorCount: null,
  nome: "",
  email: "",
  telefone: "",
  mensagem: "",
  privacidade: false,
};

const OrcamentoForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isElevadorPath = formData.product === "residenciais";
  const totalSteps = isElevadorPath ? 4 : 3;

  const getStepLabel = () => {
    if (step === 1) return "Tipo de Solução";
    if (isElevadorPath) {
      if (step === 2) return "Tipo de Edifício";
      if (step === 3) return "Número de Andares";
      return "Dados Pessoais";
    }
    if (step === 2) return "Tipo de Escadas";
    return "Dados Pessoais";
  };

  const canAdvance = () => {
    if (step === 1) return !!formData.product;
    if (step === 2) {
      return isElevadorPath ? !!formData.buildingType : !!formData.stairType;
    }
    if (isElevadorPath && step === 3) return !!formData.floorCount;
    const lastStep = isElevadorPath ? 4 : 3;
    if (step === lastStep) {
      return formData.nome.trim() !== "" && formData.email.trim() !== "" && formData.telefone.trim() !== "" && formData.privacidade;
    }
    return true;
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const productLabels: Record<string, string> = {
        escadas: "Elevadores de Escadas",
        residenciais: "Elevadores Residenciais",
        plataformas: "Plataformas Elevatórias",
      };
      const stairLabels: Record<string, string> = {
        curvas: "Curvas e com patamares",
        retas: "Retas",
        exteriores: "Exteriores",
      };
      const buildingLabels: Record<string, string> = {
        moradia: "Moradia",
        predio: "Prédio Residencial",
        empresa: "Empresa",
      };

      let body = `Nova solicitação de orçamento:\n\n`;
      body += `Solução: ${productLabels[formData.product!]}\n`;
      if (isElevadorPath) {
        body += `Tipo de Edifício: ${buildingLabels[formData.buildingType!]}\n`;
        body += `Andares: ${formData.floorCount}\n`;
      } else {
        body += `Tipo de Escadas: ${stairLabels[formData.stairType!]}\n`;
      }
      body += `\nNome: ${formData.nome}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}`;
      if (formData.mensagem) body += `\nMensagem: ${formData.mensagem}`;

      const mailtoLink = `mailto:escreva@yahoo.co.uk?subject=${encodeURIComponent(
        `Pedido de Orçamento — ${productLabels[formData.product!]}`
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
      setSubmitted(true);
    } catch {
      // fallback
    } finally {
      setSubmitting(false);
    }
  };

  const isLastStep = step === totalSteps;
  const progress = (step / totalSteps) * 100;

  if (submitted) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center bg-secondary px-4">
        <div className="max-w-md text-center space-y-6">
          <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
          <h1 className="font-heading text-2xl font-bold text-foreground">Obrigado pelo seu pedido!</h1>
          <p className="font-body text-muted-foreground">
            O seu pedido de orçamento foi preparado. Complete o envio através do seu cliente de email.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a href="/home">Voltar à Página Inicial</a>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] bg-secondary">
      <div className="mx-auto max-w-2xl px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Peça orçamentos gratuitos
          </h1>
          <p className="font-body text-muted-foreground text-base md:text-lg">
            Preencha o formulário e receba até 3 orçamentos de empresas instaladoras.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-body text-sm text-muted-foreground">
              Passo {step} de {totalSteps}
            </span>
            <span className="font-heading text-sm font-semibold text-foreground">
              {getStepLabel()}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Card */}
        <div className="bg-card rounded-2xl border border-border p-6 md:p-10 shadow-sm">
          {step === 1 && (
            <StepProduct
              value={formData.product}
              onChange={(v) => setFormData({ ...formData, product: v, stairType: null, buildingType: null, floorCount: null })}
            />
          )}
          {step === 2 && !isElevadorPath && (
            <StepStairType
              value={formData.stairType}
              onChange={(v) => setFormData({ ...formData, stairType: v })}
            />
          )}
          {step === 2 && isElevadorPath && (
            <StepBuildingType
              value={formData.buildingType}
              onChange={(v) => setFormData({ ...formData, buildingType: v })}
            />
          )}
          {step === 3 && isElevadorPath && (
            <StepFloors
              value={formData.floorCount}
              onChange={(v) => setFormData({ ...formData, floorCount: v })}
            />
          )}
          {((step === 3 && !isElevadorPath) || (step === 4 && isElevadorPath)) && (
            <StepDetails
              formData={formData}
              onChange={(updates) => setFormData({ ...formData, ...updates })}
            />
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={step === 1}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar
            </Button>

            {isLastStep ? (
              <Button
                variant="cta"
                size="lg"
                onClick={handleSubmit}
                disabled={!canAdvance() || submitting}
                className="gap-2"
              >
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Enviar Pedido
              </Button>
            ) : (
              <Button
                variant="cta"
                size="lg"
                onClick={handleNext}
                disabled={!canAdvance()}
                className="gap-2"
              >
                Seguinte <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrcamentoForm;
