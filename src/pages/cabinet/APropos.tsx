import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Phone, Mail, Clock } from "lucide-react";
import cabinetInterior from "@/assets/cabinet-interior.png";
import dentistPatient from "@/assets/dentist-patient-2.jpg";
import philosophiePatient from "@/assets/philosophie-patient.jpg";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const navItems = [
  { id: "a-propos", label: "À propos" },
  { id: "philosophie", label: "Philosophie" },
  { id: "equipe", label: "Notre équipe" },
  { id: "emplacement", label: "Emplacement et contact" },
  { id: "faq", label: "FAQ Administratif" },
];

// Section Divider Component
const SectionDivider = () => (
  <div className="w-full py-8 bg-background">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center gap-4">
        <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-primary/30" />
        <div className="w-2 h-2 rounded-full bg-primary/40" />
        <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-primary/30" />
      </div>
    </div>
  </div>
);

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
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-2xl ml-4 md:ml-12 lg:ml-20">
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
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
                  Notre cabinet d'orthodontie
                </h2>
                <div className="w-16 h-0.5 bg-primary mb-8" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un traitement orthodontique consiste à détecter, prévenir et, si nécessaire, traiter les malocclusions dentaires et/ou des mâchoires chez l'enfant, l'adolescent et l'adulte. Il doit être personnalisé, entrepris et suivi par un spécialiste en orthodontie.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tous les orthodontistes sont initialement chirurgiens-dentistes. La reconnaissance du titre de spécialiste nécessite toutefois trois années d'études hospitalo-universitaires supplémentaires, accessibles après un concours national.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cette spécialisation nous permet de maîtriser les technologies les plus avancées et d'entreprendre le traitement avec précision, rigueur et sécurité.
                </p>
              </div>

              {/* Right: Image with decorative block */}
              <div className="relative">
                <div className="absolute -right-4 -top-4 -bottom-4 w-2/3 bg-secondary rounded-lg -z-10 hidden md:block" />
                <img
                  src={dentistPatient}
                  alt="Dentiste avec patient"
                  className="w-full h-auto rounded-lg shadow-soft relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <SectionDivider />

      {/* Philosophie Section */}
      <section id="philosophie" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
                  Notre philosophie
                </h2>
                <div className="w-16 h-0.5 bg-primary mb-8" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Notre approche est centrée sur le patient. Nous prenons le temps d'écouter vos besoins et vos inquiétudes pour vous proposer un traitement personnalisé.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nous accordons une importance particulière au confort et à la sérénité de nos patients, en privilégiant des techniques modernes et peu invasives.
                </p>
              </div>

              {/* Right: Image with decorative block */}
              <div className="relative">
                <div className="absolute -right-4 -top-4 -bottom-4 w-2/3 bg-secondary rounded-lg -z-10 hidden md:block" />
                <img
                  src={philosophiePatient}
                  alt="Patient souriant lors d'un traitement orthodontique"
                  className="w-full h-auto rounded-lg shadow-soft relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <SectionDivider />

      {/* Notre équipe Section */}
      <section id="equipe" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
              Notre équipe
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Notre équipe pluridisciplinaire travaille en synergie pour vous proposer des solutions adaptées à votre situation, que vous soyez enfant, adolescent ou adulte.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nous sommes spécialisés dans les techniques d'orthodontie invisible, incluant les aligneurs transparents et la technique linguale WIN.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <SectionDivider />

      {/* Emplacement et contact Section */}
      <section id="emplacement" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
              Emplacement et contact
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Horaires */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
                  Horaires d'ouvertures
                </h3>
                <a 
                  href="tel:+2250575430000" 
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  TEL : +225 05 75 43 00 00
                </a>
                <div className="w-12 h-0.5 bg-primary mt-2 mb-8" />
                
                {/* Hours table */}
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border/30 pb-3">
                    <span className="text-foreground">Lundi</span>
                    <span className="text-muted-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-3">
                    <span className="text-foreground">Mardi</span>
                    <span className="text-muted-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-3">
                    <span className="text-foreground">Mercredi</span>
                    <span className="text-muted-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-3">
                    <span className="text-foreground">Jeudi</span>
                    <span className="text-muted-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-3">
                    <span className="text-foreground">Vendredi</span>
                    <span className="text-muted-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-3">
                    <span className="text-foreground">Samedi</span>
                    <span className="text-muted-foreground">Fermé</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Dimanche</span>
                    <span className="text-muted-foreground">Fermé</span>
                  </div>
                </div>

                <p className="text-muted-foreground mt-8 text-sm">
                  Boulevard de Marseille, Zone 4 Abidjan
                </p>
              </div>

              {/* Right: Google Maps */}
              <div className="h-[400px] rounded-lg overflow-hidden shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5!2d-3.9883!3d5.2888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTcnMTkuNiJOIDPCsDU5JzE4IlciZg!5e0!3m2!1sfr!2sci!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation du cabinet"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="border-[#3E2723] text-[#3E2723] hover:bg-[#3E2723] hover:text-white"
              >
                <a href="tel:+2250575430000">
                  +225 05 75 43 00 00
                </a>
              </Button>
              <Button 
                size="lg" 
                asChild 
                className="bg-[#3E2723] hover:bg-[#3E2723]/90 text-white"
              >
                <a href={RDV_LINK} target="_blank" rel="noopener noreferrer">
                  PRENDRE RENDEZ-VOUS
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <SectionDivider />

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
              FAQ Administratif
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-10" />
            <div className="space-y-6 text-left">
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
