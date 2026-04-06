import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const equipamentosLinks = [
  { label: "Elevadores de Escadas", href: "/equipamentos/elevadores-de-escadas/" },
  { label: "Elevadores Residenciais", href: "/equipamentos/elevadores/" },
  { label: "Plataformas Elevatórias", href: "/equipamentos/plataformas-elevatorias/" },
];

const solucoesLinks = [
  { label: "Soluções para Subir Escadas", href: "/solucoes-para-subir-escadas/" },
  { label: "Cadeiras Elevatórias para Idosos", href: "/cadeiras-elevatorias-para-idosos/" },
  { label: "Soluções para Cadeiras de Rodas", href: "/solucoes-para-cadeiras-de-rodas/" },
  { label: "Adaptar Casa: Mobilidade Reduzida", href: "/adaptar-casa-mobilidade-reduzida/" },
  { label: "Acessibilidade em Condomínios", href: "/acessibilidade-condominios/" },
];

const precosLinks = [
  { label: "Preços: Elevadores de Escadas", href: "/equipamentos/elevadores-de-escadas/preco/" },
  { label: "Preços: Elevadores Residenciais", href: "/equipamentos/elevadores/preco/" },
  { label: "Preços: Plataformas Elevatórias", href: "/equipamentos/plataformas-elevatorias/preco/" },
];

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-lg border border-border bg-background p-1.5 shadow-lg"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const toggleMobileSection = (section: string) => {
    setMobileSection(mobileSection === section ? null : section);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={(logo as unknown as { src: string }).src ?? (logo as unknown as string)} alt="Vida Acessível" className="h-9 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          <Dropdown label="Equipamentos" items={equipamentosLinks} />
          <Dropdown label="Soluções" items={solucoesLinks} />
          <Dropdown label="Preços" items={precosLinks} />
          <a
            href="/recursos/"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
          >
            Recursos
          </a>
          <a
            href="/sobre/"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
          >
            Sobre nós
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="/pedir-orcamento/"
            className="inline-flex items-center rounded-full bg-cta px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Pedir Orçamento — Grátis
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:bg-accent md:hidden"
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col gap-0.5">
            {/* Equipamentos */}
            <button
              onClick={() => toggleMobileSection("equipamentos")}
              className="flex items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-accent"
            >
              Equipamentos
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileSection === "equipamentos" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileSection === "equipamentos" && (
              <div className="ml-3 flex flex-col gap-0.5">
                {equipamentosLinks.map((l) => (
                  <a key={l.href} href={l.href} className="rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-accent">
                    {l.label}
                  </a>
                ))}
              </div>
            )}

            {/* Soluções */}
            <button
              onClick={() => toggleMobileSection("solucoes")}
              className="flex items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-accent"
            >
              Soluções
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileSection === "solucoes" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileSection === "solucoes" && (
              <div className="ml-3 flex flex-col gap-0.5">
                {solucoesLinks.map((l) => (
                  <a key={l.href} href={l.href} className="rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-accent">
                    {l.label}
                  </a>
                ))}
              </div>
            )}

            {/* Preços */}
            <button
              onClick={() => toggleMobileSection("precos")}
              className="flex items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-accent"
            >
              Preços
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileSection === "precos" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileSection === "precos" && (
              <div className="ml-3 flex flex-col gap-0.5">
                {precosLinks.map((l) => (
                  <a key={l.href} href={l.href} className="rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-accent">
                    {l.label}
                  </a>
                ))}
              </div>
            )}

            <a href="/recursos/" className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-accent">
              Recursos
            </a>
            <a href="/sobre/" className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-accent">
              Sobre nós
            </a>

            <div className="mt-3">
              <a
                href="/pedir-orcamento/"
                className="block w-full rounded-full bg-cta px-4 py-3 text-center text-base font-semibold text-white hover:opacity-90"
              >
                Pedir Orçamento — Grátis
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
