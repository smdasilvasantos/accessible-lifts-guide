import type { FormData } from "@/pages/PedirOrcamento";

interface Props {
  formData: FormData;
  onChange: (updates: Partial<FormData>) => void;
}

const StepDetails = ({ formData, onChange }: Props) => (
  <div>
    <h2 className="font-heading text-xl font-bold text-foreground mb-2">
      Os seus dados
    </h2>
    <p className="font-body text-sm text-muted-foreground mb-6">
      Preencha os seus dados para recebermos o seu pedido.
    </p>
    <div className="space-y-4">
      <div>
        <label className="font-body text-sm text-foreground mb-1.5 block">Nome *</label>
        <input
          type="text"
          value={formData.nome}
          onChange={(e) => onChange({ nome: e.target.value })}
          className="w-full h-11 rounded-lg border border-input bg-background px-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="O seu nome"
        />
      </div>
      <div>
        <label className="font-body text-sm text-foreground mb-1.5 block">Email *</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onChange({ email: e.target.value })}
          className="w-full h-11 rounded-lg border border-input bg-background px-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="email@exemplo.com"
        />
      </div>
      <div>
        <label className="font-body text-sm text-foreground mb-1.5 block">Telefone *</label>
        <input
          type="tel"
          value={formData.telefone}
          onChange={(e) => onChange({ telefone: e.target.value })}
          className="w-full h-11 rounded-lg border border-input bg-background px-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="912 345 678"
        />
      </div>
      <div>
        <label className="font-body text-sm text-foreground mb-1.5 block">
          Mensagem <span className="text-muted-foreground">(opcional)</span>
        </label>
        <textarea
          value={formData.mensagem}
          onChange={(e) => onChange({ mensagem: e.target.value })}
          className="w-full rounded-lg border border-input bg-background px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          rows={3}
          placeholder="Descreva brevemente as suas necessidades..."
        />
      </div>
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="privacidade"
          checked={formData.privacidade}
          onChange={(e) => onChange({ privacidade: e.target.checked })}
          className="mt-1"
        />
        <label htmlFor="privacidade" className="font-body text-xs text-muted-foreground">
          Li e aceito a Política de Privacidade *
        </label>
      </div>
    </div>
  </div>
);

export default StepDetails;
