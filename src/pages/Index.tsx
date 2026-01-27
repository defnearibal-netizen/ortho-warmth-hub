import { Link } from "react-router-dom";
import { 
  Calendar, Heart, Shield, Sparkles, ArrowRight, 
  Baby, User, UserCheck, Eye, MapPin, Phone, Clock,
  CheckCircle, Award, Stethoscope, AlertTriangle, FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroBackground from "@/assets/hero-background.jpg";
import waitingRoom from "@/assets/waiting-room.jpg";
import logoCabinet from "@/assets/logo-cabinet.jpg";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const treatments = [
  {
    icon: Baby,
    title: "Orthodontie de l'enfant",
    description: "Traitement précoce pour corriger les problèmes de croissance.",
    link: "/soins/enfants",
  },
  {
    icon: User,
    title: "Multi-attaches autoligaturantes",
    description: "Brackets modernes pour un traitement efficace.",
    link: "/soins/autoligaturantes",
  },
  {
    icon: Eye,
    title: "Aligneurs invisibles",
    description: "Solution discrète et amovible pour adultes.",
    link: "/soins/aligneurs",
  },
  {
    icon: UserCheck,
    title: "Technique linguale WIN",
    description: "Appareil totalement invisible placé à l'intérieur.",
    link: "/soins/linguale-win",
  },
];

const cabinetValues = [
  {
    icon: Heart,
    title: "Bienveillance",
    description: "Chaque patient est unique.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Formation continue aux dernières techniques.",
  },
  {
    icon: Shield,
    title: "Confiance",
    description: "Transparence sur les traitements et tarifs.",
  },
  {
    icon: CheckCircle,
    title: "Résultats",
    description: "Des milliers de sourires transformés.",
  },
];

const dentalServices = [
  {
    icon: Stethoscope,
    title: "Soins conservateurs",
    description: "Caries, détartrage, polissage.",
  },
  {
    icon: Heart,
    title: "Esthétique dentaire",
    description: "Blanchiment et facettes.",
  },
  {
    icon: Sparkles,
    title: "Prothèses dentaires",
    description: "Couronnes et bridges.",
  },
  {
    icon: Shield,
    title: "Soins parodontaux",
    description: "Traitement des gencives.",
  },
  {
    icon: Award,
    title: "Implantologie",
    description: "Pose d'implants dentaires.",
  },
];

const practicalInfos = [
  {
    icon: MapPin,
    title: "Votre parcours",
    description: "De la consultation à la fin du traitement, nous vous accompagnons.",
    link: "/infos-pratiques/parcours",
  },
  {
    icon: AlertTriangle,
    title: "Urgences",
    description: "Bracket décollé, fil qui pique ? Nous sommes là pour vous.",
    link: "/infos-pratiques/urgences",
  },
  {
    icon: FileText,
    title: "Conseils",
    description: "Recommandations pour bien vivre votre traitement.",
    link: "/infos-pratiques/conseils",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 font-heading animate-fade-in">
              Clinique Dentaire Panorama
            </h1>
            
            <p className="text-xs md:text-sm text-white/85 mb-6 font-light italic tracking-wide animate-[fade-in_1s_ease-out_0.2s_both,scale-in_0.8s_ease-out_0.2s_both] hover:scale-105 transition-transform duration-300 cursor-default">
              « Un sourire confiant et harmonieux, ça fait toute la différence ! »
            </p>

            <p className="text-base md:text-lg text-white/85 mb-10 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Notre clinique dentaire propose des soins pluridisciplinaires. Allant de l'orthodontie 
              aux soins dentaires, chirurgicaux d'implantologie et de parodontologie, notre cabinet 
              dentaire moderne allie technologie et soins personnalisés pour votre santé bucco-dentaire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button variant="cta" size="xl" asChild>
                <a
                  href={RDV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Prendre rendez-vous en orthodontie
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/cabinet-dentaire" className="flex items-center gap-2">
                  Découvrir nos soins dentaires
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Le Cabinet d'Orthodontie */}
      <section className="py-24 bg-secondary" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Le cabinet d'orthodontie DA
              </span>
              <img 
                src={logoCabinet} 
                alt="Logo Cabinet d'Orthodontie" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Une approche centrée sur vous
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto text-center">
              À la Clinique Dentaire Panorama, nous croyons que chaque sourire raconte une histoire. 
              C'est pourquoi nous adoptons une approche personnalisée, en prenant le temps de 
              comprendre vos attentes et vos préoccupations.
            </p>
            <p className="text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto text-center">
              Notre équipe pluridisciplinaire travaille en synergie pour vous proposer 
              des solutions adaptées à votre situation, que vous soyez enfant, adolescent ou adulte.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {cabinetValues.map((value, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-primary/40 flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-muted-foreground text-sm">{value.title}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg" asChild>
              <Link to="/cabinet" className="flex items-center gap-2">
                Découvrir le cabinet
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Les Soins et Techniques */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Les soins et techniques
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 font-heading">
              Nos traitements d'orthodontie
            </h2>
            <p className="text-muted-foreground">
              Des solutions adaptées à chaque âge et chaque besoin pour un sourire parfait.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {treatments.map((treatment, index) => (
              <Link
                key={index}
                to={treatment.link}
                className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 hover-scale"
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

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services" className="flex items-center gap-2">
                Voir tous les soins
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Infos Pratiques */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Infos pratiques
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 font-heading">
              Tout ce qu'il faut savoir
            </h2>
            <p className="text-muted-foreground">
              Préparez votre visite et vivez votre traitement sereinement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {practicalInfos.map((info, index) => (
              <Link
                key={index}
                to={info.link}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <info.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-heading group-hover:text-primary transition-colors">
                  {info.title}
                </h3>
                <p className="text-muted-foreground">{info.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/infos-pratiques" className="flex items-center gap-2">
                Toutes les infos pratiques
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 font-heading">
                Nous trouver
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-card rounded-xl p-6 text-center shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                <p className="text-muted-foreground text-sm">
                  Boulevard de Marseille<br />Zone 4 Abidjan
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 text-center shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
                <p className="text-muted-foreground text-sm">
                  +225 05 75 43 00 00<br />+225 27 21 59 12 99
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 text-center shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Horaires</h3>
                <p className="text-muted-foreground text-sm">
                  Lundi - Vendredi<br />9h - 18h
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Voir la page contact
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Dentaire */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Cabinet dentaire
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 font-heading">
              Soins dentaires complets
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            {dentalServices.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-heading">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/cabinet-dentaire" className="flex items-center gap-2">
                En savoir plus
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
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