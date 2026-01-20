import { Link } from "react-router-dom";
import { Stethoscope, Heart, Sparkles, Shield, Award, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import waitingRoom from "@/assets/waiting-room.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";
import dentalServicesBg from "@/assets/dental-services-bg.jpg";
const services = [
  {
    icon: Stethoscope,
    title: "Soins conservateurs",
    description: "Traitement des caries, détartrage, polissage et soins préventifs pour maintenir une bonne santé bucco-dentaire.",
  },
  {
    icon: Heart,
    title: "Esthétique dentaire",
    description: "Blanchiment, facettes et restaurations esthétiques pour un sourire éclatant et harmonieux.",
  },
  {
    icon: Sparkles,
    title: "Prothèses dentaires",
    description: "Couronnes, bridges et prothèses pour restaurer votre dentition de manière durable.",
  },
  {
    icon: Shield,
    title: "Soins parodontaux",
    description: "Traitement des gencives et prévention des maladies parodontales pour une santé globale.",
  },
  {
    icon: Award,
    title: "Implantologie",
    description: "Pose d'implants dentaires pour remplacer les dents manquantes de façon naturelle et pérenne.",
  },
];

const features = [
  {
    title: "Équipements modernes",
    description: "Notre cabinet est équipé des dernières technologies pour des soins précis et confortables.",
  },
  {
    title: "Équipe bienveillante",
    description: "Une équipe à l'écoute pour vous accompagner en toute sérénité.",
  },
  {
    title: "Hygiène rigoureuse",
    description: "Protocoles stricts de stérilisation pour votre sécurité.",
  },
  {
    title: "Accessibilité",
    description: "Cabinet accessible aux personnes à mobilité réduite.",
  },
];

const SoinsDentaires = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Soins Dentaires
            </h1>
            <p className="text-xl text-white/80">
              Des soins dentaires complets pour toute la famille.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Notre Cabinet
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Un espace dédié à votre bien-être
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Notre cabinet dentaire vous accueille dans un environnement moderne, 
                apaisant et entièrement équipé pour vous offrir des soins de qualité. 
                Nous mettons tout en œuvre pour que chaque visite soit une expérience 
                positive et rassurante.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                De la simple visite de contrôle aux traitements plus complexes, 
                notre équipe vous accompagne avec professionnalisme et bienveillance.
              </p>
              <Button variant="cta" size="lg" asChild>
                <a
                  href="https://aribal-portail.orthoadvance.com/#/cabinets/aribal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Prendre rendez-vous
                </a>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={waitingRoom}
                  alt="Salle d'attente du cabinet"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl gradient-hero opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url(${dentalServicesBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/70" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nos Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={heroClinic}
                  alt="Salle de soins moderne"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Notre Engagement
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-8">
                Qualité et confort
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prenez soin de votre sourire
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Que ce soit pour un contrôle de routine ou un traitement spécifique, 
            nous sommes là pour vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://aribal-portail.orthoadvance.com/#/cabinets/aribal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Prendre rendez-vous
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Nous contacter
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SoinsDentaires;
