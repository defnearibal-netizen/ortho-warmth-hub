import { Link } from "react-router-dom";
import { Calendar, Heart, Shield, Sparkles, Users, ArrowRight, Baby, User, UserCheck, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroClinic from "@/assets/hero-clinic.jpg";
import waitingRoom from "@/assets/waiting-room.jpg";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const engagements = [
  {
    icon: Heart,
    title: "Pédagogie",
    description: "Nous prenons le temps d'expliquer chaque étape du traitement à nos patients.",
  },
  {
    icon: Shield,
    title: "Transparence",
    description: "Des devis clairs et détaillés, sans surprise sur les tarifs.",
  },
  {
    icon: Sparkles,
    title: "Technologie",
    description: "Équipements de dernière génération pour des soins de qualité optimale.",
  },
];

const treatments = [
  {
    icon: Baby,
    title: "Orthodontie de l'enfant",
    description: "Traitement précoce pour corriger les problèmes de croissance.",
    link: "/orthodontie/techniques",
  },
  {
    icon: User,
    title: "Orthodontie de l'adolescent",
    description: "Solutions adaptées aux besoins des adolescents.",
    link: "/orthodontie/techniques",
  },
  {
    icon: UserCheck,
    title: "Orthodontie de l'adulte",
    description: "Il n'est jamais trop tard pour un beau sourire.",
    link: "/orthodontie/techniques",
  },
  {
    icon: Eye,
    title: "Orthodontie invisible",
    description: "Aligneurs transparents pour un traitement discret.",
    link: "/orthodontie/techniques",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroClinic})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-heading">
              Un sourire confiant et harmonieux,
              <span className="block text-accent">ça fait toute la différence !</span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
              La Clinique Dentaire Panorama vous accueille dans un cadre moderne et chaleureux 
              pour tous vos traitements d'orthodontie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <a
                  href={RDV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Prendre rendez-vous
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/cabinet-dentaire" className="flex items-center gap-2">
                  Découvrir la chirurgie dentaire
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Presentation */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Notre cabinet d'orthodontie
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 font-heading">
                Une expertise au service de votre sourire
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                La Clinique Dentaire Panorama est spécialisée dans les traitements d'orthodontie 
                pour enfants, adolescents et adultes. Notre équipe de praticiens qualifiés vous 
                accompagne tout au long de votre parcours vers un sourire harmonieux.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nous utilisons les dernières technologies et techniques pour vous offrir des 
                soins de qualité optimale dans un environnement moderne et accueillant.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/cabinet" className="flex items-center gap-2">
                  En savoir plus
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={waitingRoom}
                  alt="Salle d'attente moderne de la Clinique Dentaire Panorama"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl bg-accent/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nos engagements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 font-heading">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-muted-foreground">
              Nous mettons tout en œuvre pour vous offrir une expérience de soins 
              exceptionnelle et des résultats durables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagements.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Les différentes techniques
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 font-heading">
              Nos traitements d'orthodontie
            </h2>
            <p className="text-muted-foreground">
              Des solutions adaptées à chaque âge et chaque besoin pour un sourire parfait.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <Link
                key={index}
                to={treatment.link}
                className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <treatment.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-heading group-hover:text-primary transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-muted-foreground text-sm">{treatment.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* High-tech & Eco */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={heroClinic}
                  alt="Équipements modernes du cabinet"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Cabinet High-Tech & Écoresponsable
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 font-heading">
                L'innovation au service de votre santé
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Notre cabinet est équipé des technologies les plus récentes : radiographie 
                numérique, scanner 3D, empreintes optiques... pour des diagnostics précis 
                et des traitements optimisés.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nous sommes également engagés dans une démarche écoresponsable avec la 
                réduction des déchets, l'utilisation de matériaux recyclables et une 
                gestion énergétique optimisée.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent/30 text-foreground rounded-full text-sm font-medium">
                  Scanner 3D
                </span>
                <span className="px-4 py-2 bg-accent/30 text-foreground rounded-full text-sm font-medium">
                  Radiographie numérique
                </span>
                <span className="px-4 py-2 bg-accent/30 text-foreground rounded-full text-sm font-medium">
                  Empreintes optiques
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Prêt à transformer votre sourire ?
          </h2>
          <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto">
            Prenez rendez-vous dès aujourd'hui pour une première consultation 
            et découvrez comment nous pouvons vous accompagner.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a
              href={RDV_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Prendre rendez-vous
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
