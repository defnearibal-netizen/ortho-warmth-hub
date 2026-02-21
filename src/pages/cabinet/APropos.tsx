import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import EmplacementContact from "@/components/shared/EmplacementContact";
import CtaBanner from "@/components/shared/CtaBanner";
import cabinetInterior from "@/assets/cabinet-interior.png";
import dentistPatient from "@/assets/dentist-patient-2.jpg";
import philosophiePatient from "@/assets/philosophie-patient.jpg";
import teamPhoto from "@/assets/notre-equipe.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const navItems = [
  { id: "a-propos", label: "À propos" },
  { id: "philosophie", label: "Philosophie" },
  { id: "equipe", label: "Notre équipe" },
  { id: "emplacement", label: "Emplacement et contact" },
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
              <div className="relative cursor-pointer" onClick={() => scrollToSection("a-propos")}>
                <div className="absolute -right-4 -top-4 -bottom-4 w-2/3 bg-secondary rounded-lg -z-10 hidden md:block" />
                <div className="overflow-hidden rounded-lg shadow-soft relative z-10">
                  <img
                    src={dentistPatient}
                    alt="Dentiste avec patient"
                    className="w-full h-auto transition-transform duration-500 hover:scale-110"
                  />
                </div>
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
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nous accordons une importance particulière au confort et à la sérénité de nos patients, en privilégiant des techniques modernes et peu invasives.
                </p>
                <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link to="/cabinet/philosophie">En savoir plus</Link>
                </Button>
              </div>

              {/* Right: Image with decorative block */}
              <Link to="/cabinet/philosophie" className="relative block">
                <div className="absolute -right-4 -top-4 -bottom-4 w-2/3 bg-secondary rounded-lg -z-10 hidden md:block" />
                <div className="overflow-hidden rounded-lg shadow-soft relative z-10">
                  <img
                    src={philosophiePatient}
                    alt="Patient souriant lors d'un traitement orthodontique"
                    className="w-full h-auto transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <SectionDivider />

      {/* Notre équipe Section */}
      <section id="equipe" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
                  Notre équipe
                </h2>
                <div className="w-16 h-0.5 bg-primary mb-8" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Notre équipe pluridisciplinaire travaille en synergie pour vous proposer des solutions adaptées à votre situation, que vous soyez enfant, adolescent ou adulte.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nous sommes spécialisés dans les techniques d'orthodontie invisible, incluant les aligneurs transparents et la technique linguale WIN.
                </p>
                <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link to="/cabinet/equipe">Découvrir l'équipe</Link>
                </Button>
              </div>

              {/* Right: Image with decorative block */}
              <Link to="/cabinet/equipe" className="relative block">
                <div className="absolute -right-4 -top-4 -bottom-4 w-2/3 bg-secondary rounded-lg -z-10 hidden md:block" />
                <div className="overflow-hidden rounded-lg shadow-soft relative z-10">
                  <img
                    src={teamPhoto}
                    alt="Notre équipe de professionnels"
                    className="w-full h-auto max-h-80 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmplacementContact id="emplacement" showDivider />

      <CtaBanner />
    </Layout>
  );
};

export default APropos;
