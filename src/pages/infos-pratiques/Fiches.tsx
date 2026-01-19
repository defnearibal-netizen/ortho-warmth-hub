import Layout from "@/components/layout/Layout";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Fiches = () => {
  const fiches = [
    {
      category: "Avant le traitement",
      items: [
        { title: "Le premier rendez-vous", description: "Ce qu'il faut savoir et apporter" },
        { title: "Le bilan orthodontique", description: "Les examens nécessaires expliqués" },
        { title: "Comprendre votre devis", description: "Décryptage des postes de dépenses" },
      ],
    },
    {
      category: "Pendant le traitement",
      items: [
        { title: "Les premiers jours avec votre appareil", description: "Conseils pour bien démarrer" },
        { title: "L'hygiène bucco-dentaire", description: "Guide complet du brossage" },
        { title: "L'alimentation adaptée", description: "Ce qu'il faut manger et éviter" },
        { title: "Le port des élastiques", description: "Comment et pourquoi les porter" },
      ],
    },
    {
      category: "Après le traitement",
      items: [
        { title: "La contention", description: "Maintenir vos résultats dans le temps" },
        { title: "Le suivi post-traitement", description: "Les rendez-vous de contrôle" },
      ],
    },
    {
      category: "Informations pratiques",
      items: [
        { title: "La prise en charge Sécurité Sociale", description: "Conditions et montants remboursés" },
        { title: "Les mutuelles et l'orthodontie", description: "Optimiser votre remboursement" },
        { title: "Questions fréquentes", description: "Réponses aux interrogations courantes" },
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
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Fiches d'information
            </h1>
            <p className="text-lg text-muted-foreground">
              Documentation pratique pour mieux comprendre votre traitement
            </p>
          </div>
        </div>
      </section>

      {/* Fiches Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {fiches.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">
                    {category.category}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.items.map((fiche, ficheIndex) => (
                      <div
                        key={ficheIndex}
                        className="bg-secondary rounded-xl p-6 hover:shadow-soft transition-shadow cursor-pointer group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                              {fiche.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {fiche.description}
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
              Besoin d'informations complémentaires ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Ces fiches sont disponibles au cabinet. N'hésitez pas à nous demander 
              des exemplaires lors de votre prochaine visite ou à nous contacter 
              pour toute question.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" asChild>
                <a href="/contact" className="flex items-center gap-2">
                  Nous contacter
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://aribal-portail.orthoadvance.com/#/cabinets/aribal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Prendre rendez-vous
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fiches;
