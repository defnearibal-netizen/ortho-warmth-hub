import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Route, Calendar } from "lucide-react";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const Parcours = () => {
  const steps = [
    {
      number: 1,
      title: "Premier rendez-vous",
      description: "Consultation initiale pour évaluer votre situation et discuter de vos attentes.",
      details: [
        "Examen clinique complet",
        "Discussion de vos objectifs",
        "Présentation des options de traitement",
        "Remise d'un devis préliminaire",
      ],
    },
    {
      number: 2,
      title: "Bilan orthodontique",
      description: "Examens complémentaires pour établir un diagnostic précis.",
      details: [
        "Radiographies panoramique et téléradiographie",
        "Photos intra et extra-buccales",
        "Empreintes ou scan 3D",
        "Analyse céphalométrique",
      ],
    },
    {
      number: 3,
      title: "Plan de traitement",
      description: "Présentation détaillée du plan de traitement personnalisé.",
      details: [
        "Explication du diagnostic",
        "Présentation des différentes étapes",
        "Durée estimée du traitement",
        "Devis détaillé et modalités de paiement",
      ],
    },
    {
      number: 4,
      title: "Pose de l'appareil",
      description: "Installation de votre appareil orthodontique.",
      details: [
        "Pose en douceur par notre équipe",
        "Explications sur l'entretien quotidien",
        "Conseils pour les premiers jours",
        "Remise d'un kit d'urgence",
      ],
    },
    {
      number: 5,
      title: "Suivi régulier",
      description: "Rendez-vous de contrôle tout au long du traitement.",
      details: [
        "Ajustements réguliers de l'appareil",
        "Suivi de l'évolution du traitement",
        "Réponse à vos questions",
        "Motivation et encouragements",
      ],
    },
    {
      number: 6,
      title: "Fin de traitement",
      description: "Retrait de l'appareil et mise en place de la contention.",
      details: [
        "Retrait de l'appareil",
        "Pose de la contention",
        "Photos de résultat final",
        "Planification du suivi post-traitement",
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

      {/* Timeline Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex gap-6"
                >
                  {/* Timeline line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-14 w-0.5 h-full bg-border" />
                  )}
                  
                  {/* Step number */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg z-10">
                    {step.number}
                  </div>
                  
                  {/* Step content */}
                  <div className="flex-1 bg-secondary rounded-2xl p-6 mb-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {detail}
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
