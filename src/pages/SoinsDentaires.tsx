import { Link } from "react-router-dom";
import { Stethoscope, Heart, Sparkles, Shield, Award, ArrowRight, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import soinsDentairesHero from "@/assets/soins-dentaires-hero.png";
import heroClinic from "@/assets/hero-clinic.jpg";
import ctaBackground from "@/assets/cta-background.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const services = [
  {
    icon: Stethoscope,
    title: "Soins conservateurs",
    items: [
      "Traitement des caries",
      "Détartrage et polissage",
      "Soins préventifs",
    ],
  },
  {
    icon: Heart,
    title: "Esthétique dentaire",
    items: [
      "Éclaircissement dentaire",
      "Facettes esthétiques",
      "Restaurations harmonieuses",
    ],
  },
  {
    icon: Sparkles,
    title: "Prothèses dentaires",
    items: [
      "Couronnes et bridges",
      "Prothèses durables",
      "Restauration complète",
    ],
  },
  {
    icon: Shield,
    title: "Soins parodontaux",
    items: [
      "Traitement des gencives",
      "Prévention parodontale",
      "Santé bucco-dentaire globale",
    ],
  },
  {
    icon: Award,
    title: "Implantologie",
    items: [
      "Implants dentaires",
      "Remplacement naturel",
      "Solution pérenne",
    ],
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
      {/* Hero with background image + centered title + overlapping service cards */}
      <section className="relative">
        {/* Background Image */}
        <div
          className="relative min-h-[70vh] md:min-h-[80vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${soinsDentairesHero})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-foreground/50" />

          {/* Centered content */}
          <div className="relative flex flex-col items-center justify-center text-center min-h-[70vh] md:min-h-[80vh] px-4">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center mb-6">
              <Stethoscope className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 font-heading">
              Soins Dentaires
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl">
              Des soins dentaires complets pour toute la famille
            </p>
          </div>
        </div>

        {/* Overlapping service cards */}
        <div className="container mx-auto px-4 relative z-10 -mt-24 md:-mt-32 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-7 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualité et confort */}
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
      <section className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ctaBackground})` }}
        />
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16 h-full min-h-[50vh] md:min-h-[60vh] flex items-center py-12">
          <div className="bg-background/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-lg shadow-xl ml-2 md:ml-6 lg:ml-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading">
              Prenez soin de votre sourire
            </h2>
            <div className="w-12 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground mb-8">
              Que ce soit pour un contrôle de routine ou un traitement spécifique,
              nous sommes là pour vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" asChild>
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
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Nous contacter
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SoinsDentaires;
