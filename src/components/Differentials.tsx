import { 
  Trophy, 
  Heart, 
  GraduationCap, 
  Clock, 
  Monitor,
  Shield
} from "lucide-react";

const differentials = [
  {
    icon: Trophy,
    title: "Tradição no Mercado",
    description: "Mais de 40 anos de experiência e solidez no mercado contábil, construindo relações duradouras com nossos clientes.",
    highlight: "40+ anos",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Tratamos cada cliente de forma única, entendendo suas necessidades específicas e oferecendo soluções personalizadas.",
    highlight: "100%",
  },
  {
    icon: GraduationCap,
    title: "Equipe Qualificada",
    description: "Profissionais altamente capacitados e em constante atualização com as mudanças na legislação e melhores práticas.",
    highlight: "Especialistas",
  },
  {
    icon: Clock,
    title: "Compromisso com Prazos",
    description: "Cumprimento rigoroso de todas as obrigações e prazos legais, garantindo tranquilidade para seu negócio.",
    highlight: "Pontualidade",
  },
  {
    icon: Monitor,
    title: "Uso de Tecnologia",
    description: "Sistemas modernos e integrados que otimizam processos e garantem segurança e agilidade nas informações.",
    highlight: "Inovação",
  },
  {
    icon: Shield,
    title: "Segurança e Sigilo",
    description: "Total confidencialidade das informações dos nossos clientes, seguindo rigorosos padrões de segurança.",
    highlight: "Confiança",
  },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-3">DIFERENCIAIS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a Rocha Contábil?
          </h2>
          <p className="text-muted-foreground text-lg">
            Nossa experiência e dedicação nos tornam a escolha ideal para cuidar 
            da contabilidade da sua empresa.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/50 rounded-bl-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-300" />
              
              {/* Icon */}
              <div className="relative bg-accent rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <item.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>

              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 bg-accent/50 rounded-full px-3 py-1">
                <span className="text-sm font-semibold text-primary">{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Pronto para transformar a gestão da sua empresa?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como a Rocha Assessoria Contábil 
            pode ajudar seu negócio a crescer com segurança e eficiência.
          </p>
          <button
            onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma conversa sobre os serviços da Rocha Assessoria Contábil.", "_blank")}
            className="inline-flex items-center gap-2 bg-primary-foreground text-secondary hover:bg-primary-foreground/90 font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Agende uma Conversa
          </button>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
