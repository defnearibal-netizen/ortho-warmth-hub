import { Calendar, CheckCircle, Smile, Baby, User, Sparkles, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: Smile,
    title: "Orthodontie classique",
    description: "Les appareils dentaires traditionnels restent une solution efficace et éprouvée pour corriger les problèmes d'alignement dentaire.",
    features: [
      "Brackets métalliques ou céramiques",
      "Efficacité pour tous les cas",
      "Suivi régulier personnalisé",
      "Résultats durables",
    ],
    forWhom: "Enfants, adolescents et adultes",
  },
  {
    icon: Sparkles,
    title: "Orthodontie invisible",
    description: "Les aligneurs transparents offrent une alternative discrète pour corriger votre sourire sans compromettre votre apparence.",
    features: [
      "Aligneurs amovibles et transparents",
      "Confort optimal au quotidien",
      "Hygiène dentaire facilitée",
      "Suivi digital de progression",
    ],
    forWhom: "Adolescents et adultes",
  },
  {
    icon: Baby,
    title: "Orthodontie pédiatrique",
    description: "Un accompagnement adapté aux plus jeunes pour prévenir les problèmes dentaires et guider la croissance des mâchoires.",
    features: [
      "Première consultation dès 7 ans",
      "Traitement interceptif précoce",
      "Approche ludique et rassurante",
      "Suivi de la croissance",
    ],
    forWhom: "Enfants de 7 à 12 ans",
  },
  {
    icon: User,
    title: "Orthodontie adulte",
    description: "Il n'est jamais trop tard pour retrouver un beau sourire. Nous proposons des solutions adaptées aux contraintes des adultes.",
    features: [
      "Solutions discrètes disponibles",
      "Traitements accélérés possibles",
      "Prise en charge des cas complexes",
      "Flexibilité des rendez-vous",
    ],
    forWhom: "Adultes de tous âges",
  },
];

const process = [
  {
    step: "1",
    title: "Première consultation",
    description: "Examen complet, discussion de vos attentes et présentation des options de traitement.",
  },
  {
    step: "2",
    title: "Bilan et plan de traitement",
    description: "Radiographies, photos, empreintes et élaboration d'un plan personnalisé.",
  },
  {
    step: "3",
    title: "Début du traitement",
    description: "Pose de l'appareil et explications détaillées pour un suivi optimal.",
  },
  {
    step: "4",
    title: "Suivi régulier",
    description: "Rendez-vous de contrôle pour ajuster le traitement et suivre les progrès.",
  },
  {
    step: "5",
    title: "Fin et contention",
    description: "Retrait de l'appareil et mise en place d'un système de contention pour des résultats durables.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos Services d'Orthodontie
            </h1>
            <p className="text-xl text-white/80">
              Des solutions adaptées à chaque âge et chaque besoin pour un sourire parfait.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Nos traitements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Une gamme complète de soins
            </h2>
            <p className="text-muted-foreground">
              Découvrez nos différentes solutions orthodontiques pour toute la famille.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-card transition-shadow"
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-3">
                      {service.forWhom}
                    </p>
                    <p className="text-muted-foreground mb-5">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Comment ça marche
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Le parcours de votre traitement
            </h2>
            <p className="text-muted-foreground">
              De la première consultation à la fin du traitement, nous vous accompagnons à chaque étape.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />
              
              <div className="space-y-8">
                {process.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-white rounded-xl p-6 shadow-soft">
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                      {item.step}
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Durée moyenne</h3>
              <p className="text-muted-foreground text-sm">
                12 à 24 mois selon le traitement et la complexité du cas.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Garantie</h3>
              <p className="text-muted-foreground text-sm">
                Suivi post-traitement inclus pour garantir la stabilité des résultats.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Rendez-vous</h3>
              <p className="text-muted-foreground text-sm">
                Consultations de suivi toutes les 4 à 8 semaines selon le traitement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à commencer votre traitement ?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Prenez rendez-vous pour une première consultation et découvrez le traitement adapté à votre situation.
          </p>
          <Button variant="hero" size="lg" asChild>
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
      </section>
    </Layout>
  );
};

export default Services;
