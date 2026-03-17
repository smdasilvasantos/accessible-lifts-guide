import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    title: "Apoios para a aquisição de equipamentos de mobilidade",
    category: "Acessibilidade e Mobilidade",
    date: "2 de Maio, 2023",
  },
  {
    title: "As Principais Características de Segurança dos Elevadores de Escadas",
    category: "Elevadores de Escadas",
    date: "14 de Abril, 2023",
  },
  {
    title: "Guia de Compra de Elevadores de Escadas",
    category: "Elevadores de Escadas",
    date: "1 de Abril, 2023",
  },
];

const HomeResources = () => {
  return (
    <section className="bg-secondary section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Recursos
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
            Guias informativos
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
            Encontre informações essenciais sobre acessibilidade, mobilidade,
            bem-estar e apoio no dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.title}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <span className="font-body text-xs text-primary font-semibold uppercase tracking-wide">
                {article.category}
              </span>
              <h3 className="font-heading font-bold text-base text-foreground mt-1 mb-3 leading-snug">
                {article.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="font-body text-xs text-muted-foreground">
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-1 font-heading font-semibold text-sm text-primary group-hover:gap-2 transition-all">
                  Ler <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeResources;
