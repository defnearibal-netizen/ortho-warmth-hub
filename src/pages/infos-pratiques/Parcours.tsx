import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import ctaBackground from "@/assets/cta-background.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const Parcours = () => {
  const steps = [
    {
      number: 1,
      title: "Première consultation",
      description: "La première étape de votre parcours orthodontique",
      details: [
        "Motif de consultation (avis esthétique, fonctionnel).",
        "Réalisation d'un examen clinique complet (visage, dents, langue).",
        "Présentation du devis de bilan et du traitement.",
        "Explication sur la vie au cours du traitement.",
        "Des réponses à toutes vos questions (durée, techniques innovantes).",
      ],
    },
    {
      number: 2,
      title: "Constitution du dossier",
      description: "Le bilan complet pour préparer votre traitement",
      details: [
        "Photographies du visage et des dents.",
        "Radiographies numérique (panoramique, téléradiographie de profil) et analyse céphalométriques.",
        "Empreintes numériques.",
      ],
    },
    {
      number: 3,
      title: "Plan de traitement",
      description: "Présentation détaillée de votre traitement personnalisé",
      details: [
        "Explication du diagnostic.",
        "Exposition des différentes options et moyens de traitement.",
        "Signature électronique du consentement éclairé.",
      ],
    },
    {
      number: 4,
      title: "La pose de l'appareil",
      description: "C'est le jour J, il est conseillé :",
      details: [
        "D'arriver à l'heure et les dents parfaitement brossées.",
        "D'écouter les explications des techniques de brossage avec un appareil ainsi que les conseils alimentaires.",
        "De se préparer à son premier selfie avec l'appareil.",
      ],
    },
    {
      number: 5,
      title: "Suivi orthodontique",
      description: "L'accompagnement tout au long de votre traitement",
      details: [
        "RDV d'activation de l'appareil toutes les 4 à 5 semaines.",
        "Contrôle de l'hygiène dentaire et des gencives.",
        "Réalisation des radiographies de contrôle.",
        "Vérification du respect des consignes comme le port des élastiques.",
      ],
    },
    {
      number: 6,
      title: "Dépose et contention",
      description: "Bravo ! C'est la fin du traitement actif.",
      details: [
        "Dépose des appareils.",
        "Nettoyage complet des dents.",
        "Mise en place de la contention pour maintenir les dents dans leur nouvelle position.",
        "Rendez-vous de contrôle de la contention tous les 3 ou 4 mois pendant 1 an.",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-center font-heading">
            Votre parcours de soins
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6 mb-4" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Découvrez les étapes de votre traitement orthodontique, de la première consultation à la fin de votre traitement.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto relative">
            {/* Vertical timeline line - centered */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/30" />

            {/* Steps */}
            <div className="space-y-12 md:space-y-0">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={step.number}
                    className="relative md:flex md:items-start md:min-h-[280px]"
                  >
                    {/* Left side content (for even steps) */}
                    <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pr-12 md:order-1 md:pl-12 md:pr-0 md:text-left'}`}>
                      {isEven && (
                        <div className="bg-secondary rounded-2xl p-6 shadow-soft">
                          <h3 className="text-xl font-semibold text-foreground mb-2 font-heading">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 italic">
                            {step.description}
                          </p>
                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground justify-end">
                                <span>{detail}</span>
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Center number */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-cta-hover text-primary-foreground rounded-full items-center justify-center font-bold text-2xl shadow-lg z-10 font-heading">
                      {step.number}
                    </div>

                    {/* Right side content (for odd steps) */}
                    <div className={`md:w-1/2 ${!isEven ? 'md:pl-12 md:text-left' : 'md:pl-12 md:order-1'}`}>
                      {!isEven && (
                        <div className="bg-secondary rounded-2xl p-6 shadow-soft">
                          <h3 className="text-xl font-semibold text-foreground mb-2 font-heading">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 italic">
                            {step.description}
                          </p>
                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Mobile number */}
                    <div className="md:hidden flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-cta-hover text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg font-heading">
                        {step.number}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground font-heading">
                        {step.title}
                      </h3>
                    </div>

                    {/* Mobile content */}
                    <div className="md:hidden bg-secondary rounded-2xl p-5 border-l-4 border-primary">
                      <p className="text-sm text-muted-foreground mb-3 italic">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ctaBackground})` }}
        />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16 h-full min-h-[50vh] md:min-h-[60vh] flex items-center py-12">
          <div className="bg-background/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-lg shadow-xl ml-2 md:ml-6 lg:ml-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading">
              Prêt à commencer votre parcours ?
            </h2>
            <div className="w-12 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground mb-8">
              Prenez rendez-vous pour votre première consultation et découvrez le traitement adapté à vos besoins.
            </p>
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Parcours;
