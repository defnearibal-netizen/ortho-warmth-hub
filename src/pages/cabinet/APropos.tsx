import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Phone, Mail, Clock } from "lucide-react";
import cabinetInterior from "@/assets/cabinet-interior.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const navItems = [
  { id: "formation", label: "Formation" },
  { id: "philosophie", label: "Philosophie" },
  { id: "specialisation", label: "Notre spécialisation en orthodontie invisible" },
  { id: "cabinet", label: "Se rendre au cabinet" },
  { id: "contact", label: "Nous contacter" },
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
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cabinetInterior})` }}
        />
        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-foreground/40" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8" style={{ fontFamily: "'Tenor Sans', serif" }}>
              Notre cabinet d'orthodontie
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
              Un traitement orthodontique consiste à détecter, prévenir et, si nécessaire, traiter les malocclusions dentaires et/ou des mâchoires chez l'enfant, l'adolescent et l'adulte. Il doit être personnalisé, entrepris et suivi par un spécialiste en orthodontie.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent uppercase tracking-wider"
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
          <div className="flex items-center justify-center gap-2 md:gap-6 py-4 overflow-x-auto scrollbar-hide">
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

      {/* Formation Section */}
      <section id="formation" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
              Formation
            </h2>
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

      {/* Spécialisation Section */}
      <section id="specialisation" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
              Notre spécialisation en orthodontie invisible
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nous sommes spécialisés dans les techniques d'orthodontie invisible, incluant les aligneurs transparents et la technique linguale WIN.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ces techniques permettent de corriger les malpositions dentaires de manière discrète, pour un traitement esthétique adapté à votre vie quotidienne.
            </p>
          </div>
        </div>
      </section>

      {/* Se rendre au cabinet Section */}
      <section id="cabinet" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
              Se rendre au cabinet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-3 mb-4">
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
              <div className="bg-card rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Notre cabinet est facilement accessible en transport en commun et dispose d'un parking à proximité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nous contacter Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
              Nous contacter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              </div>
              <div>
                <Button variant="cta" size="lg" asChild className="w-full md:w-auto">
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
      <section id="faq" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
              FAQ Administratif
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Quels documents apporter lors de la première consultation ?</h3>
                <p className="text-muted-foreground">
                  Votre carte vitale, votre carte de mutuelle, et tout document médical pertinent (radiographies récentes, compte-rendu d'autres spécialistes).
                </p>
              </div>
              <div className="bg-card rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Comment se déroule la prise en charge ?</h3>
                <p className="text-muted-foreground">
                  Un devis détaillé vous sera remis lors de la première consultation. Nous vous accompagnons dans les démarches administratives avec votre mutuelle.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6">
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
