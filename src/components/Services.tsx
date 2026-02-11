import { 
  Calculator, 
  FileText, 
  Users, 
  Building2, 
  TrendingUp,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Calculator,
    title: "Área Contábil",
    description: "Abertura e alterações societárias, escrituração contábil digital, análise de balanços demonstrativos e elaboração de demonstrações financeiras.",
    items: [
      "Abertura e alterações societárias",
      "Escrituração contábil digital",
      "Análise de balanços e demonstrativos",
      "Elaboração de demonstrações financeiras",
    ],
  },
  {
    icon: FileText,
    title: "Área Fiscal",
    description: "Apuração de tributos, obrigações acessórias, regularização fiscal e planejamento tributário.",
    items: [
      "Apuração de tributos",
      "Obrigações acessórias (SPED, DCTF, EFD)",
      "Regularização fiscal",
      "Planejamento tributário",
    ],
  },
  {
    icon: Users,
    title: "Área Trabalhista",
    description: "Folha de pagamento, cálculo de encargos e reservas, obrigações trabalhistas e acompanhamento de admissões e demissões.",
    items: [
      "Folha de pagamento",
      "Cálculo de encargos e reservas",
      "Obrigações trabalhistas",
      "Acompanhamento de admissões e demissões",
    ],
  },
  {
    icon: Building2,
    title: "Área Societária",
    description: "Abertura, alteração e encerramento de empresas, contratos, alterações de sócios e capital, gestão de natureza jurídica e atendimento jurídico-contábil básico.",
    items: [
      "Abertura, alteração e encerramento de empresas",
      "Contratos, alterações de sócios e capital",
      "Gestão de natureza jurídica",
      "Atendimento jurídico-contábil básico",
    ],
  },
  {
    icon: TrendingUp,
    title: "Consultoria Empresarial",
    description: "Planejamento financeiro, análise de processos internos, consultoria estratégica contábil e suporte a decisões empresariais.",
    items: [
      "Planejamento financeiro",
      "Análise de processos internos",
      "Consultoria estratégica contábil",
      "Suporte a decisões empresariais",
    ],
  },
];

const Services = () => {
  const handleWhatsApp = (service: string) => {
    window.open(
      `https://wa.me/5519996444205?text=Olá! Gostaria de mais informações sobre ${service}.`,
      "_blank"
    );
  };

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-3">NOSSOS SERVIÇOS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções completas para sua empresa
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços contábeis e de assessoria empresarial, 
            adaptados às necessidades específicas do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="bg-accent rounded-xl w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Card Content */}
              <div className="px-6 pb-4">
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2">
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary/80 font-medium group/btn"
                  onClick={() => handleWhatsApp(service.title)}
                >
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Não encontrou o que procura? Entre em contato e vamos encontrar a solução ideal para você.
          </p>
          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da Rocha Assessoria Contábil.", "_blank")}
            className="gradient-primary text-primary-foreground hover:opacity-90"
          >
            Fale com um especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
