const SiteFooter = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="content-width">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-heading font-bold text-lg text-background mb-2">
              Vida Acessível
            </p>
            <p className="font-body text-sm text-background/60 max-w-xs">
              Ajudamos a encontrar soluções e parceiros de confiança para tornar
              habitações mais acessíveis em Portugal.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="font-heading font-bold text-xs uppercase tracking-widest text-background/40 mb-3">
                Equipamentos
              </p>
              <ul className="space-y-2">
                <li className="font-body text-sm text-background/60">Elevadores de escadas</li>
                <li className="font-body text-sm text-background/60">Elevadores residenciais</li>
                <li className="font-body text-sm text-background/60">Plataformas elevatórias</li>
              </ul>
            </div>
            <div>
              <p className="font-heading font-bold text-xs uppercase tracking-widest text-background/40 mb-3">
                Informação
              </p>
              <ul className="space-y-2">
                <li className="font-body text-sm text-background/60">Sobre nós</li>
                <li className="font-body text-sm text-background/60">Contacto</li>
                <li className="font-body text-sm text-background/60">Recursos</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-background/10">
          <p className="font-body text-xs text-background/40">
            © 2025 Vida Acessível · Política de Privacidade
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
