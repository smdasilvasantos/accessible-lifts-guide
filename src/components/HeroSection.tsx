import heroImage from "@/assets/hero-elevator.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] min-h-[500px]">
        <img
          src={heroImage}
          alt="Detalhe de mecanismo de elevador residencial em betão e aço"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 flex items-end h-full pb-16">
          <div className="content-width w-full">
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">
              Preços
            </p>
            <h1 className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Elevadores Residenciais: Preços
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-[600px] leading-relaxed">
              Saiba quanto custa instalar um elevador residencial em Portugal e
              descubra os fatores que influenciam o preço, o processo e a escolha
              do modelo ideal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
