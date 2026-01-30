import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

const services = [
  "Área Contábil",
  "Área Fiscal",
  "Área Trabalhista",
  "Área Societária",
  "Consultoria Empresarial",
];

const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Rocha Assessoria Contábil" className="h-14 w-auto mb-6 brightness-0 invert" />
            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-6">
              Há mais de 40 anos oferecendo soluções contábeis de excelência, 
              com atendimento personalizado e compromisso com o sucesso do seu negócio.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-secondary-foreground/10 hover:bg-primary p-2.5 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-secondary-foreground/10 hover:bg-primary p-2.5 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-secondary-foreground/10 hover:bg-primary p-2.5 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-5">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#servicos"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#servicos");
                    }}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80 text-sm">
                  Rua Maestro Silvio Bianchi, nº 497<br />
                  Cordenonsi, Americana - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-sm">
                  <p>Contato: (19) 3407-0665</p>
                  <p>WhatsApp: (19) 99644-4205</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  contato@rochacontabil.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Rocha Assessoria Contábil. Todos os direitos reservados.
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
