import Layout from "@/components/layout/Layout";
import { AlertTriangle, Phone, CheckCircle } from "lucide-react";

const UrgencesPage = () => {
  const urgences = [
    {
      title: "Bracket décollé",
      description: "Un bracket s'est détaché de la dent",
      solution: "Conservez le bracket. S'il gêne, appliquez de la cire orthodontique. Contactez-nous pour un rendez-vous de recollage.",
      urgent: false,
    },
    {
      title: "Fil qui pique",
      description: "L'extrémité du fil dépasse et blesse la joue",
      solution: "Utilisez de la cire orthodontique pour couvrir le fil. Si la douleur persiste, contactez-nous pour couper le fil.",
      urgent: false,
    },
    {
      title: "Douleur importante",
      description: "Douleurs intenses après un ajustement",
      solution: "Prenez un antalgique (paracétamol). Si la douleur persiste au-delà de 48h, contactez-nous.",
      urgent: false,
    },
    {
      title: "Appareil amovible cassé",
      description: "Votre appareil amovible est endommagé",
      solution: "Cessez de le porter et contactez-nous rapidement pour une réparation ou un remplacement.",
      urgent: true,
    },
    {
      title: "Aligneur perdu ou cassé",
      description: "Vous avez perdu ou cassé un aligneur",
      solution: "Portez l'aligneur précédent en attendant. Contactez-nous pour commander un nouvel aligneur.",
      urgent: true,
    },
    {
      title: "Gonflement ou infection",
      description: "Gonflement de la gencive, douleur pulsatile, fièvre",
      solution: "Contactez-nous immédiatement. En cas de fièvre élevée, consultez les urgences.",
      urgent: true,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Urgences orthodontiques
            </h1>
            <p className="text-lg text-muted-foreground">
              Comment réagir en cas de problème avec votre appareil
            </p>
          </div>
        </div>
      </section>

      {/* Contact urgence */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Phone className="h-8 w-8 text-primary-foreground" />
            <div>
              <p className="text-primary-foreground font-semibold">
                En cas d'urgence, contactez-nous au
              </p>
              <a
                href="tel:+33123456789"
                className="text-2xl font-bold text-primary-foreground hover:underline"
              >
                01 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Urgences list */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center font-heading">
              Situations courantes et solutions
            </h2>
            <div className="space-y-6">
              {urgences.map((urgence, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 ${
                    urgence.urgent ? "bg-destructive/10 border border-destructive/20" : "bg-secondary"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        urgence.urgent ? "bg-destructive/20" : "bg-primary/10"
                      }`}
                    >
                      {urgence.urgent ? (
                        <AlertTriangle className="h-5 w-5 text-destructive" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {urgence.title}
                        {urgence.urgent && (
                          <span className="ml-2 text-xs bg-destructive text-destructive-foreground px-2 py-0.5 rounded-full">
                            Prioritaire
                          </span>
                        )}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {urgence.description}
                      </p>
                      <div className="bg-background rounded-lg p-4">
                        <p className="text-sm text-foreground">
                          <strong>Solution :</strong> {urgence.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kit urgence */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">
              Votre kit d'urgence
            </h2>
            <p className="text-muted-foreground mb-8">
              Nous vous remettons un kit d'urgence lors de la pose de votre appareil. 
              Gardez-le toujours à portée de main.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">Cire orthodontique</h3>
                <p className="text-sm text-muted-foreground">
                  Pour protéger les muqueuses des frottements
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">Brossette interdentaire</h3>
                <p className="text-sm text-muted-foreground">
                  Pour nettoyer autour de l'appareil
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">Élastiques de rechange</h3>
                <p className="text-sm text-muted-foreground">
                  En cas de rupture de vos élastiques
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UrgencesPage;
