import { CheckCircle2, Target, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Oferecer soluções contábeis de excelência, contribuindo para o crescimento sustentável dos nossos clientes.",
  },
  {
    icon: Lightbulb,
    title: "Visão",
    description: "Ser referência em assessoria contábil, reconhecida pela qualidade e inovação nos serviços prestados.",
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Ética, transparência, comprometimento e excelência no atendimento são a base do nosso trabalho.",
  },
];

const highlights = [
  "Atendimento personalizado para cada cliente",
  "Equipe altamente qualificada e atualizada",
  "Soluções sob medida para seu negócio",
  "Tecnologia de ponta em nossos processos",
  "Relacionamento de longo prazo e confiança",
  "Suporte contínuo e disponível",
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-3">SOBRE NÓS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Há mais de 40 anos oferecendo soluções contábeis completas e personalizadas.
          </h2>
          <p className="text-muted-foreground text-lg">
            Na Rocha Assessoria Contábil, unimos tradição e experiência para prestar serviços contábeis com comprometimento e atendimento humanizado. Nosso objetivo é garantir tranquilidade e segurança para você e sua empresa em todas as decisões fiscais, tributárias, trabalhistas e administrativas.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Equipe Rocha Assessoria Contábil"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-xl p-6 border border-border max-w-xs hidden md:block">
              <p className="text-4xl font-bold text-primary mb-2">40+</p>
              <p className="text-foreground font-medium">Anos de Experiência</p>
              <p className="text-muted-foreground text-sm mt-1">Tradição e inovação juntas</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Uma história de compromisso e dedicação
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Desde nossa fundação, a Rocha Assessoria Contábil tem sido parceira de 
              empresas de diversos segmentos, oferecendo serviços contábeis de alta qualidade 
              e soluções personalizadas. Nossa trajetória é marcada pela excelência no 
              atendimento e pelo compromisso com o sucesso de cada cliente.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ao longo dos anos, evoluímos constantemente, incorporando novas tecnologias 
              e metodologias para oferecer o melhor serviço possível. Nosso time de 
              profissionais qualificados está sempre atualizado com as mudanças na 
              legislação e nas melhores práticas do mercado.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-accent rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
