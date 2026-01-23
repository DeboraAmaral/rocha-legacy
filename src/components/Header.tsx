import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3" onClick={() => handleNavClick("#home")}>
            <img src={logo} alt="Rocha Assessoria Contábil" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+551199999999" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">(11) 9999-9999</span>
            </a>
            <Button
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os serviços da Rocha Assessoria Contábil.", "_blank")}
              className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <a href="tel:+551199999999" className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">(11) 9999-9999</span>
                </a>
                <Button
                  onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os serviços da Rocha Assessoria Contábil.", "_blank")}
                  className="w-full gradient-primary text-primary-foreground"
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
