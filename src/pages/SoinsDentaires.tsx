import { Stethoscope, Heart, Sparkles, Shield, Award, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CtaBanner from "@/components/shared/CtaBanner";
import soinsDentairesHero from "@/assets/soins-dentaires-hero.png";
import smileCouple from "@/assets/smile-couple.png";




const services = [
  {
    icon: Stethoscope,
    title: "Soins et prothèses dentaires",
    items: ["Traitement des caries", "Couronnes et bridges", "Prothèses dentaires"],
  },
  {
    icon: Award,
    title: "Implantologie",
    items: ["Implants dentaires", "Remplacement naturel", "Solution pérenne"],
  },
  {
    icon: Sparkles,
    title: "Éclaircissement dentaire",
    items: ["Blanchiment professionnel", "Résultats durables", "Technique douce"],
  },
  {
    icon: Shield,
    title: "Chirurgie",
    items: ["Extractions dentaires", "Chirurgie pré-implantaire", "Actes chirurgicaux"],
  },
  {
    icon: Heart,
    title: "Parodontologie",
    items: ["Traitement des gencives", "Prévention parodontale", "Santé bucco-dentaire globale"],
  },
];

const features = [
  { title: "Équipements modernes", description: "Notre cabinet est équipé des dernières technologies pour des soins précis et confortables." },
  { title: "Équipe bienveillante", description: "Une équipe à l'écoute pour vous accompagner en toute sérénité." },
  { title: "Hygiène rigoureuse", description: "Protocoles stricts de stérilisation pour votre sécurité." },
  { title: "Accessibilité", description: "Cabinet accessible aux personnes à mobilité réduite." },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
  <div className="bg-card rounded-2xl p-7 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
        <service.icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
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
);

const SoinsDentaires = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <div
          className="relative min-h-[70vh] md:min-h-[80vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${soinsDentairesHero})` }}
        >
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="relative flex flex-col items-center justify-start text-center min-h-[70vh] md:min-h-[80vh] px-4 pt-16 md:pt-24">
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
          <div className="max-w-5xl mx-auto">
            {/* Row 1: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {services.slice(0, 3).map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
            {/* Row 2: 2 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[66.666%] mx-auto">
              {services.slice(3).map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Dr Aribal */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Les soins dentaires sont assurés par le Docteur Jamal ARIBAL, docteur en chirurgie dentaire, diplômé de l'Université Claude Bernard de Lyon (1984). Il a complété sa formation par une spécialisation en implantologie à Toulouse en 2005 et est inscrit à l'Ordre des chirurgiens-dentistes sous le numéro 120.
            </p>
          </div>
        </div>
      </section>

      {/* Qualité et confort */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden no-zoom shadow-card">
                <img src={smileCouple} alt="Sourires éclatants" className="w-full h-auto" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Notre Engagement</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-8">Qualité et confort</h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </Layout>
  );
};

export default SoinsDentaires;
