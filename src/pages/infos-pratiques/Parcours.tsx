import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Route, Calendar } from "lucide-react";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const Parcours = () => {
  const steps = [
    {
      number: 1,
      title: "Première consultation",
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
      title: "Constitution du dossier (bilan)",
      details: [
        "Photographies du visage et des dents.",
        "Radiographies numérique (panoramique, téléradiographie de profil) et analyse céphalométriques.",
        "Empreintes numériques.",
      ],
    },
    {
      number: 3,
      title: "Plan de traitement",
      details: [
        "Explication du diagnostic.",
        "Exposition des différentes options et moyens de traitement.",
        "Signature électronique du consentement éclairé.",
      ],
    },
    {
      number: 4,
      title: "La pose de l'appareil",
      intro: "C'est le jour J, il est conseillé :",
      details: [
        "D'arriver à l'heure et les dents parfaitement brossées.",
        "D'écouter les explications des techniques de brossage avec un appareil ainsi que les conseils alimentaires.",
        "De se préparer à son premier selfie avec l'appareil.",
      ],
    },
    {
      number: 5,
      title: "Suivi orthodontique",
      details: [
        "RDV d'activation de l'appareil toutes les 4 à 5 semaines.",
        "Contrôle de l'hygiène dentaire et des gencives.",
        "Réalisation des radiographies de contrôle.",
        "Vérification du respect des consignes comme le port des élastiques.",
      ],
    },
    {
      number: 6,
      title: "Dépose de l'appareil et contention",
      intro: "Bravo ! C'est la fin du traitement actif.",
      details: [
        "Dépose des appareils.",
        "Nettoyage complet des dents.",
        "Mise en place de la contention pour maintenir les dents dans leur nouvelle position (le plus souvent fil collé en bas et gouttière nocturne en haut).",
        "Rendez-vous de contrôle de la contention tous les 3 ou 4 mois pendant 1 an.",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Route className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Votre parcours de soins
            </h1>
            <p className="text-lg text-muted-foreground">
              Découvrez les étapes de votre traitement orthodontique
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Timeline Section */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Horizontal scrollable timeline */}
          <div className="relative">
            {/* Horizontal line */}
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />
            
            {/* Steps grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative"
                >
                  {/* Step number circle */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Step content */}
                  <div className="bg-secondary rounded-2xl p-5 ml-0 lg:ml-0 border-l-4 border-primary">
                    {step.intro && (
                      <p className="text-muted-foreground mb-3 italic">
                        {step.intro}
                      </p>
                    )}
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 font-heading">
            Prêt à commencer votre parcours ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous pour votre première consultation et découvrez le traitement adapté à vos besoins.
          </p>
          <Button variant="secondary" size="lg" asChild>
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

export default Parcours;
