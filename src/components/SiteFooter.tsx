const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="content-width">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-heading font-semibold text-lg mb-2">
              Vida Acessível
            </p>
            <p className="font-body text-sm text-muted-foreground max-w-xs">
              Ajudamos a encontrar soluções e parceiros de confiança para tornar
              habitações e espaços mais acessíveis em Portugal.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="font-heading font-semibold text-xs uppercase tracking-widest mb-3">
                Equipamentos
              </p>
              <ul className="space-y-2">
                <li className="font-body text-sm text-muted-foreground">Elevadores de escadas</li>
                <li className="font-body text-sm text-muted-foreground">Elevadores residenciais</li>
                <li className="font-body text-sm text-muted-foreground">Plataformas elevatórias</li>
              </ul>
            </div>
            <div>
              <p className="font-heading font-semibold text-xs uppercase tracking-widest mb-3">
                Informação
              </p>
              <ul className="space-y-2">
                <li className="font-body text-sm text-muted-foreground">Sobre nós</li>
                <li className="font-body text-sm text-muted-foreground">Contacto</li>
                <li className="font-body text-sm text-muted-foreground">Recursos</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border">
          <p className="font-body text-xs text-muted-foreground">
            © 2025 Vida Acessível · Política de Privacidade
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
