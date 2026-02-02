import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Phone, Mail, Clock } from "lucide-react";
import cabinetInterior from "@/assets/cabinet-interior.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const navItems = [
  { id: "a-propos", label: "À propos" },
  { id: "philosophie", label: "Philosophie" },
  { id: "equipe", label: "Notre équipe" },
  { id: "emplacement", label: "Emplacement et contact" },
  { id: "faq", label: "FAQ Administratif" },
];

const APropos = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNav = () => {
    const element = document.getElementById("nav-bar");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cabinetInterior})` }}
        />
        {/* Dark chocolate overlay on left side - gradient fade to right */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(to right, rgba(62, 39, 35, 0.75) 0%, rgba(62, 39, 35, 0.6) 40%, rgba(62, 39, 35, 0.2) 60%, transparent 80%)' 
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Tenor Sans', serif" }}>
              Présentation du cabinet et informations pratiques
            </h1>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/80 text-white hover:bg-white hover:text-foreground bg-white/10 backdrop-blur-sm uppercase tracking-wider px-8"
              asChild
            >
              <a href={RDV_LINK} target="_blank" rel="noopener noreferrer">
                Prendre RDV en ligne
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToNav}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Navigation Bar */}
      <nav id="nav-bar" className="sticky top-0 z-50 bg-white border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 md:gap-8 py-4 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap px-2 py-1"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* À propos Section */}
      <section id="a-propos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
              Notre cabinet d'orthodontie
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Un traitement orthodontique consiste à détecter, prévenir et, si nécessaire, traiter les malocclusions dentaires et/ou des mâchoires chez l'enfant, l'adolescent et l'adulte. Il doit être personnalisé, entrepris et suivi par un spécialiste en orthodontie.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tous les orthodontistes sont initialement chirurgiens-dentistes. La reconnaissance du titre de spécialiste nécessite toutefois trois années d'études hospitalo-universitaires supplémentaires, accessibles après un concours national.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cette spécialisation nous permet de maîtriser les technologies les plus avancées et d'entreprendre le traitement avec précision, rigueur et sécurité.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophie Section */}
      <section id="philosophie" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
              Philosophie
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Notre approche est centrée sur le patient. Nous prenons le temps d'écouter vos besoins et vos inquiétudes pour vous proposer un traitement personnalisé.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nous accordons une importance particulière au confort et à la sérénité de nos patients. Notre cabinet a été conçu pour être un espace apaisant où vous vous sentirez en confiance.
            </p>
          </div>
        </div>
      </section>

      {/* Notre équipe Section */}
      <section id="equipe" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
              Notre équipe
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Notre équipe pluridisciplinaire travaille en synergie pour vous proposer des solutions adaptées à votre situation, que vous soyez enfant, adolescent ou adulte.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nous sommes spécialisés dans les techniques d'orthodontie invisible, incluant les aligneurs transparents et la technique linguale WIN.
            </p>
          </div>
        </div>
      </section>

      {/* Emplacement et contact Section */}
      <section id="emplacement" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
              Emplacement et contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Adresse</p>
                    <p className="text-muted-foreground">
                      Boulevard de Marseille<br />
                      Zone 4 Abidjan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Horaires</p>
                    <p className="text-muted-foreground">
                      Lundi - Vendredi: 9h - 18h
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <a href="tel:+2250575430000" className="text-foreground hover:text-primary transition-colors block">
                      +225 05 75 43 00 00
                    </a>
                    <a href="tel:+2252721591299" className="text-foreground hover:text-primary transition-colors block">
                      +225 27 21 59 12 99
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a href="mailto:aribalorthodontie.abidjan@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    aribalorthodontie.abidjan@gmail.com
                  </a>
                </div>
                <Button variant="cta" size="lg" asChild className="mt-4">
                  <a href={RDV_LINK} target="_blank" rel="noopener noreferrer">
                    Prendre rendez-vous
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
              FAQ Administratif
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">Quels documents apporter lors de la première consultation ?</h3>
                <p className="text-muted-foreground">
                  Votre carte vitale, votre carte de mutuelle, et tout document médical pertinent (radiographies récentes, compte-rendu d'autres spécialistes).
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">Comment se déroule la prise en charge ?</h3>
                <p className="text-muted-foreground">
                  Un devis détaillé vous sera remis lors de la première consultation. Nous vous accompagnons dans les démarches administratives avec votre mutuelle.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">Quels moyens de paiement acceptez-vous ?</h3>
                <p className="text-muted-foreground">
                  Nous acceptons les paiements par carte bancaire, chèque et espèces. Des facilités de paiement peuvent être proposées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
