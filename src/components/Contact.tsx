import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Av. Paulista, 1000 - Sala 501",
    detail: "Bela Vista, São Paulo - SP, 01310-100",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(11) 9999-9999",
    detail: "(11) 3333-3333",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@rochacontabil.com.br",
    detail: "financeiro@rochacontabil.com.br",
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    content: "Segunda a Sexta: 8h às 18h",
    detail: "Sábado: 8h às 12h",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-3">CONTATO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em contato conosco
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos prontos para atender você. Escolha a forma de contato que preferir 
            ou envie uma mensagem pelo formulário.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border shadow-sm"
                >
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-foreground/80 text-sm">{item.content}</p>
                  <p className="text-muted-foreground text-sm">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976851289424!2d-46.65512548502153!3d-23.56399098468076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699561234567!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Rocha Assessoria Contábil"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Envie sua mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-foreground">
                  Nome completo *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="mt-1.5"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-foreground">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="mt-1.5"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground">
                  Mensagem *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar você?"
                  rows={5}
                  required
                  className="mt-1.5 resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary text-primary-foreground hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Ao enviar, você concorda com nossa política de privacidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
