import { Link } from "react-router-dom";
import { Calendar, Award, Users, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroClinic from "@/assets/hero-clinic.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import waitingRoom from "@/assets/waiting-room.jpg";

const services = [
  {
    icon: Award,
    title: "Expertise Certifiée",
    description: "Plus de 15 ans d'expérience en orthodontie avec les dernières techniques.",
  },
  {
    icon: Sparkles,
    title: "Technologie Avancée",
    description: "Équipements de pointe pour des traitements précis et confortables.",
  },
  {
    icon: Users,
    title: "Approche Personnalisée",
    description: "Chaque patient bénéficie d'un plan de traitement sur mesure.",
  },
];

const features = [
  "Première consultation gratuite",
  "Facilités de paiement",
  "Urgences prises en charge",
  "Suivi personnalisé",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroClinic})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Cabinet d'Orthodontie à Paris
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Un sourire parfait,
              <span className="block text-accent">c'est notre métier</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Spécialistes en orthodontie pour enfants et adultes. Nous utilisons 
              les techniques les plus modernes pour vous offrir le sourire dont 
              vous avez toujours rêvé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" asChild>
                <a
                  href="https://www.doctolib.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Prendre rendez-vous
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/orthodontie" className="flex items-center gap-2">
                  Découvrir nos services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white/80 text-sm"
                >
                  <CheckCircle className="h-4 w-4 text-accent" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Nos Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-muted-foreground">
              Notre équipe de spécialistes vous accompagne tout au long de votre 
              traitement orthodontique avec professionnalisme et bienveillance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
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

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-card">
                <img
                  src={doctorPortrait}
                  alt="Dr. Martin, Orthodontiste"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 rounded-2xl gradient-hero opacity-20" />
            </div>

            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                À Propos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Dr. Sophie Martin
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Diplômée de la Faculté de Chirurgie Dentaire de Paris, spécialisée 
                en orthodontie depuis plus de 15 ans. Je m'engage à offrir à chaque 
                patient des soins de la plus haute qualité dans un environnement 
                chaleureux et moderne.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ma philosophie : prendre le temps d'écouter, expliquer et accompagner 
                chaque patient vers le sourire qu'il mérite.
              </p>
              <Button variant="cta" size="lg" asChild>
                <Link to="/orthodontie/diplomes" className="flex items-center gap-2">
                  En savoir plus
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre sourire ?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous dès aujourd'hui pour une première consultation 
            gratuite et découvrez comment nous pouvons vous aider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://www.doctolib.fr"
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
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Notre Cabinet
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Un environnement moderne et accueillant
            </h2>
            <p className="text-muted-foreground">
              Découvrez notre cabinet équipé des dernières technologies pour votre confort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroClinic}
                alt="Salle de soins"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={waitingRoom}
                alt="Salle d'attente"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
