import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar } from "lucide-react";
import complementsHero from "@/assets/complements-hero.png";
import ctaBackground from "@/assets/cta-background.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const Complements = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${complementsHero})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/75" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16 h-full min-h-[60vh] md:min-h-[70vh] flex items-center">
          <div className="max-w-xl py-16 md:py-24 ml-4 md:ml-12 lg:ml-20">
            <p className="text-primary-foreground/80 text-lg mb-4 font-medium">
              Optimisation du traitement
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-heading leading-tight">
              Compléments techniques
            </h1>
            <div className="w-16 h-1 bg-primary mb-8" />
            <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
              En plus des techniques principales, nous utilisons diverses méthodes 
              complémentaires pour optimiser les résultats de votre traitement et 
              répondre à des besoins spécifiques.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Mini-vis */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Mini-vis orthodontiques (ancrage squelettique)
              </h3>
              <p className="text-muted-foreground mb-6">
                Les mini-vis sont de petites vis en titane temporairement placées dans l'os 
                pour servir de point d'ancrage fixe. Elles permettent des mouvements dentaires 
                impossibles avec les méthodes conventionnelles.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
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

              {/* Stripping */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Stripping dentaire
              </h3>
              <p className="text-muted-foreground mb-6">
                Le stripping (ou réduction interproximale) consiste à réduire légèrement 
                l'émail entre les dents pour créer de l'espace. Cette technique est utilisée 
                pour éviter les extractions dans les cas d'encombrement modéré.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
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

              {/* Types de contention */}
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contention orthodontique
              </h3>
              <p className="text-muted-foreground mb-6">
                La contention est la phase qui suit le traitement actif. Elle est essentielle 
                pour maintenir les résultats obtenus et empêcher les dents de revenir à leur 
                position initiale.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Fil de contention collé</h4>
                  <p className="text-sm text-muted-foreground">
                    Un fil fin collé à l'arrière des dents, invisible et permanent.
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Gouttière de contention</h4>
                  <p className="text-sm text-muted-foreground">
                    Une gouttière transparente à porter la nuit.
                  </p>
                </div>
              </div>

              {/* Chirurgie */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Chirurgie orthognathique
              </h3>
              <p className="text-muted-foreground mb-6">
                Dans certains cas de décalage squelettique sévère, une intervention chirurgicale 
                peut être nécessaire en complément du traitement orthodontique. Cette approche 
                combinée permet de traiter des cas impossibles à corriger par orthodontie seule.
              </p>
              <p className="text-muted-foreground mb-8">
                Notre cabinet travaille en étroite collaboration avec des chirurgiens 
                maxillo-faciaux expérimentés pour assurer une prise en charge optimale.
              </p>

              {/* Rééducation */}
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
              Besoin d'informations complémentaires ?
            </h2>
            <div className="w-12 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground mb-8">
              Prenez rendez-vous pour une consultation et nous vous expliquerons les techniques 
              adaptées à votre situation.
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

export default Complements;
