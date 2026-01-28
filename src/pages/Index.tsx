import { Link } from "react-router-dom";
import { 
  Calendar, Heart, Shield, Sparkles, ArrowRight, 
  Baby, User, UserCheck, Eye, MapPin, Phone, Clock,
  CheckCircle, Award, Stethoscope
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import InfosPratiquesSection from "@/components/home/InfosPratiquesSection";
import heroClinic from "@/assets/hero-clinic.jpg";
import waitingRoom from "@/assets/waiting-room.jpg";
import logoCabinet from "@/assets/logo-cabinet.jpg";
import logoDA from "@/assets/logo-da.png";
import treatmentEnfant from "@/assets/treatment-enfant.png";
import treatmentAutoligaturantes from "@/assets/treatment-autoligaturantes.jpg";
import treatmentAligneurs from "@/assets/treatment-aligneurs.jpg";
import treatmentLinguale from "@/assets/treatment-linguale.jpg";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const treatments = [
  {
    icon: Baby,
    title: "Orthodontie de l'enfant",
    description: "Traitement précoce pour corriger les problèmes de croissance.",
    link: "/soins/enfants",
    image: treatmentEnfant,
  },
  {
    icon: User,
    title: "Multi-attaches autoligaturantes",
    description: "Brackets modernes pour un traitement efficace.",
    link: "/soins/autoligaturantes",
    image: treatmentAutoligaturantes,
  },
  {
    icon: Eye,
    title: "Aligneurs invisibles",
    description: "Solution discrète et amovible pour adultes.",
    link: "/soins/aligneurs",
    image: treatmentAligneurs,
  },
  {
    icon: UserCheck,
    title: "Technique linguale WIN",
    description: "Appareil totalement invisible placé à l'intérieur.",
    link: "/soins/linguale-win",
    image: treatmentLinguale,
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


const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {/* Background image with blur effect */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroClinic})` }}
        />
        {/* Gradient overlay - less blur on left, more visible image */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-transparent" />

        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl ml-4 md:ml-8 lg:ml-12">
            {/* Small uppercase label */}
            <p className="text-sm md:text-base text-white font-medium uppercase tracking-[0.2em] mb-4 animate-fade-in">
              Orthodontie & Soins dentaires
            </p>
            
            {/* Large main title - serif style */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.15] mb-8 animate-fade-in" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Clinique Dentaire Panorama
            </h1>
            
            <p className="text-sm md:text-base text-white/85 mb-6 font-light italic tracking-wide animate-[fade-in_1s_ease-out_0.2s_both] max-w-xl">
              « Un sourire confiant et harmonieux, ça fait toute la différence ! »
            </p>

            <p className="text-base md:text-lg text-white/80 mb-10 leading-relaxed max-w-2xl animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
              Notre clinique dentaire propose des soins pluridisciplinaires. Allant de l'orthodontie 
              aux soins dentaires, chirurgicaux d'implantologie et de parodontologie, notre cabinet 
              dentaire moderne allie technologie et soins personnalisés pour votre santé bucco-dentaire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button variant="heroOutline" size="xl" asChild className="border-white/80 text-white hover:bg-white/10 uppercase tracking-widest text-sm font-medium px-8 py-6">
                <a
                  href={RDV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Prendre RDV
                </a>
              </Button>
              <Button variant="cta" size="xl" asChild className="uppercase tracking-widest text-sm font-medium">
                <Link to="/cabinet-dentaire" className="flex items-center gap-2">
                  Nos soins dentaires
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Le Cabinet d'Orthodontie */}
      <section className="py-24 bg-background" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-primary font-semibold text-base md:text-lg uppercase tracking-wider mb-6 block">
              Le cabinet dentaire d'orthodontie
            </span>
            
            <div className="flex justify-center mb-8">
              <img 
                src={logoDA} 
                alt="Logo DA" 
                className="h-16 md:h-20 object-contain"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Une approche centrée sur vous
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto text-center text-base md:text-lg">
              À la Clinique Dentaire Panorama, nous croyons que chaque sourire raconte une histoire. 
              C'est pourquoi nous adoptons une approche personnalisée, en prenant le temps de 
              comprendre vos attentes et vos préoccupations.
            </p>
            <p className="text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto text-center text-base md:text-lg">
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
      <section className="py-24 bg-secondary" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="container mx-auto px-4">
          {/* Header avec titre et description centrés */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nos Traitements
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              En fonction de l'âge du patient, de sa denture et des objectifs thérapeutiques à accomplir, 
              nous utilisons différents types de traitements orthodontiques :
            </p>
          </div>

          {/* Grille des 4 traitements sur une seule ligne */}
          <div className="flex flex-wrap lg:flex-nowrap gap-6 mb-10">
            {treatments.map((treatment, index) => (
              <Link
                key={index}
                to={treatment.link}
                className="group block flex-1 min-w-[200px]"
              >
                {/* Image du traitement */}
                <div className="aspect-[4/3] rounded-xl bg-muted/50 mb-4 overflow-hidden">
                  {treatment.image ? (
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-accent/20">
                      <treatment.icon className="h-12 w-12 text-primary/40" />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors text-center">
                  {treatment.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 text-center">{treatment.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services" className="flex items-center gap-2">
                Voir tous les soins
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Infos Pratiques - Section interactive avec tabs */}
      <InfosPratiquesSection />

      {/* Contact */}
      <section className="py-24 bg-background" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary uppercase tracking-wider">
              Accès
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left - Info */}
            <div className="space-y-10">
              {/* Horaires */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Horaires d'ouverture
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-8">
                    <span className="text-foreground font-medium w-28">Lundi</span>
                    <span className="text-muted-foreground">09h00 - 18h00</span>
                  </div>
                  <div className="flex gap-8">
                    <span className="text-foreground font-medium w-28">Mardi</span>
                    <span className="text-muted-foreground">09h00 - 18h00</span>
                  </div>
                  <div className="flex gap-8">
                    <span className="text-foreground font-medium w-28">Mercredi</span>
                    <span className="text-muted-foreground">09h00 - 18h00</span>
                  </div>
                  <div className="flex gap-8">
                    <span className="text-foreground font-medium w-28">Jeudi</span>
                    <span className="text-muted-foreground">09h00 - 18h00</span>
                  </div>
                  <div className="flex gap-8">
                    <span className="text-foreground font-medium w-28">Vendredi</span>
                    <span className="text-muted-foreground">09h00 - 18h00</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    <span className="text-foreground">+225 05 75 43 00 00</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    <span className="text-foreground">+225 27 21 59 12 99</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="text-foreground">Boulevard de Marseille</p>
                      <p className="text-foreground">Zone 4 Abidjan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Image Placeholder */}
            <div className="aspect-[4/3] rounded-xl bg-accent/20 flex items-center justify-center overflow-hidden">
              <Clock className="h-24 w-24 text-primary/30" />
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Voir la page contact
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
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