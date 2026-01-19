import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Wrench, CheckCircle, Calendar } from "lucide-react";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const Complements = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wrench className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Compléments techniques
            </h1>
            <p className="text-lg text-muted-foreground">
              Des techniques complémentaires pour optimiser votre traitement
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">
                Les techniques complémentaires en orthodontie
              </h2>
              <p className="text-muted-foreground mb-8">
                En plus des techniques principales, nous utilisons diverses méthodes 
                complémentaires pour optimiser les résultats de votre traitement et 
                répondre à des besoins spécifiques.
              </p>

              {/* Mini-vis */}
              <div className="bg-secondary rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Mini-vis orthodontiques (ancrage squelettique)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Les mini-vis sont de petites vis en titane temporairement placées dans l'os 
                  pour servir de point d'ancrage fixe. Elles permettent des mouvements dentaires 
                  impossibles avec les méthodes conventionnelles.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Pose simple et indolore</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Retrait facile en fin de traitement</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Permet des mouvements complexes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Réduit la durée du traitement</span>
                  </div>
                </div>
              </div>

              {/* Stripping */}
              <div className="bg-secondary rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Stripping dentaire
                </h3>
                <p className="text-muted-foreground mb-4">
                  Le stripping (ou réduction interproximale) consiste à réduire légèrement 
                  l'émail entre les dents pour créer de l'espace. Cette technique est utilisée 
                  pour éviter les extractions dans les cas d'encombrement modéré.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Alternative aux extractions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Indolore et sans anesthésie</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Préserve l'intégrité des dents</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Améliore la stabilité du résultat</span>
                  </div>
                </div>
              </div>

              {/* Contention */}
              <div className="bg-secondary rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Contention orthodontique
                </h3>
                <p className="text-muted-foreground mb-4">
                  La contention est la phase qui suit le traitement actif. Elle est essentielle 
                  pour maintenir les résultats obtenus et empêcher les dents de revenir à leur 
                  position initiale.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">Fil de contention collé</h4>
                    <p className="text-sm text-muted-foreground">
                      Un fil fin collé à l'arrière des dents, invisible et permanent.
                    </p>
                  </div>
                  <div className="bg-background rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">Gouttière de contention</h4>
                    <p className="text-sm text-muted-foreground">
                      Une gouttière transparente à porter la nuit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Chirurgie */}
              <div className="bg-secondary rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Chirurgie orthognathique
                </h3>
                <p className="text-muted-foreground mb-4">
                  Dans certains cas de décalage squelettique sévère, une intervention chirurgicale 
                  peut être nécessaire en complément du traitement orthodontique. Cette approche 
                  combinée permet de traiter des cas impossibles à corriger par orthodontie seule.
                </p>
                <p className="text-muted-foreground">
                  Notre cabinet travaille en étroite collaboration avec des chirurgiens 
                  maxillo-faciaux expérimentés pour assurer une prise en charge optimale.
                </p>
              </div>

              {/* Rééducation */}
              <div className="bg-secondary rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Rééducation fonctionnelle
                </h3>
                <p className="text-muted-foreground mb-4">
                  La rééducation linguale et la correction des mauvaises habitudes (respiration 
                  buccale, déglutition atypique) sont parfois nécessaires pour garantir la 
                  stabilité du traitement.
                </p>
                <p className="text-muted-foreground">
                  Nous travaillons en collaboration avec des orthophonistes spécialisés pour 
                  vous proposer une prise en charge complète.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 font-heading">
            Besoin d'informations complémentaires ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous pour une consultation et nous vous expliquerons les techniques 
            adaptées à votre situation.
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

export default Complements;
