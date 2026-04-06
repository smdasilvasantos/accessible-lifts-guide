const SiteFooter = () => {
  return (
    <footer className="bg-foreground py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="font-heading font-bold text-xl text-background">
              Vida Acessível
            </a>
            <p className="mt-3 text-sm text-background/60 leading-relaxed max-w-xs">
              Guia independente de acessibilidade em Portugal. Ligamos pessoas a instaladores certificados — de forma simples e sem pressão.
            </p>
            <p className="mt-4 text-xs text-background/40 italic">
              Uma casa sem obstáculos.
            </p>
          </div>

          {/* Equipamentos */}
          <div>
            <p className="font-heading font-semibold text-xs uppercase tracking-widest text-background/40 mb-4">
              Equipamentos
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href="/equipamentos/elevadores-de-escadas/" className="text-sm text-background/60 hover:text-background transition-colors">
                  Elevadores de Escadas
                </a>
              </li>
              <li>
                <a href="/equipamentos/elevadores/" className="text-sm text-background/60 hover:text-background transition-colors">
                  Elevadores Residenciais
                </a>
              </li>
              <li>
                <a href="/equipamentos/plataformas-elevatorias/" className="text-sm text-background/60 hover:text-background transition-colors">
                  Plataformas Elevatórias
                </a>
              </li>
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <p className="font-heading font-semibold text-xs uppercase tracking-widest text-background/40 mb-4">
              Soluções
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href="/solucoes-para-subir-escadas/" className="text-sm text-background/60 hover:text-background transition-colors">
                  Para Subir Escadas
                </a>
              </li>
              <li>
                <a href="/cadeiras-elevatorias-para-idosos/" className="text-sm text-background/60 hover:text-background transition-colors">
                  Para Idosos
                </a>
              </li>
              <li>
                <a href="/solucoes-para-cadeiras-de-rodas/" className="text-sm text-background/60 hover:text-background transition-colors">
                  Para Cadeiras de Rodas
                </a>
              </li>
              <li>
                <a href="/adaptar-casa-mobilidade-reduzida/" className="text-sm text-background/60 hover:text-background transition-colors">
                  Adaptar a Casa
                </a>
              </li>
              <li>
                <a href="/acessibilidade-condominios/" className="text-sm text-background/60 hover:text-background transition-colors">
                  Condomínios
                </a>
              </li>
            </ul>
          </div>

          {/* Informação */}
          <div>
            <p className="font-heading font-semibold text-xs uppercase tracking-widest text-background/40 mb-4">
              Informação
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href="/recursos/" className="text-sm text-background/60 hover:text-background transition-colors">
                  Guias e Recursos
                </a>
              </li>
              <li>
                <a href="/sobre/" className="text-sm text-background/60 hover:text-background transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="/contacto/" className="text-sm text-background/60 hover:text-background transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/pedir-orcamento/" className="text-sm text-background/60 hover:text-background transition-colors">
                  Pedir Orçamento
                </a>
              </li>
              <li>
                <a href="/catalogo-gratis/" className="text-sm text-background/60 hover:text-background transition-colors">
                  Catálogo Grátis
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Vida Acessível. Todos os direitos reservados.
          </p>
          <a
            href="/politica-de-privacidade/"
            className="text-xs text-background/40 hover:text-background/60 transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
