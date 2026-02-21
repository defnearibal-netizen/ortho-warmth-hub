import Layout from "@/components/layout/Layout";
import { CheckCircle } from "lucide-react";
import complementsHero from "@/assets/complements-hero.png";




const Complements = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${complementsHero})` }} />

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
                Très utiles pour étendre le pouvoir du traitement orthodontique et d’en repousser les limites, ces petits dispositifs sont à inclure dans le plan de traitement si nécessaire.

              
              </p>

              <div className="bg-cta-hover rounded-2xl p-6 md:p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Pose simple</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Procédure rapide et indolore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Retrait facile</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Retrait simple en fin de traitement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Mouvements complexes</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Déplacements impossibles autrement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Durée réduite</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Accélère le traitement global</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stripping */}
              <h3 className="text-xl font-semibold text-foreground mb-4">Chirurgie maxillo-faciale

              </h3>
              <p className="text-muted-foreground mb-6">La chirurgie maxillo-faciale ou chirurgie des mâchoires peut être parfois indispensable dans certaine dysmorphose maxillo-faciale.




              </p>

              <div className="bg-cta-hover rounded-2xl p-6 md:p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Alternative aux extractions</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Évite le retrait de dents saines</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Indolore</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Sans anesthésie nécessaire</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Préserve l'intégrité</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Respecte la structure dentaire</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Stabilité améliorée</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Meilleure stabilité à long terme</p>
                    </div>
                  </div>
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
                Orthophonie et Kinésithérapie
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



    </Layout>);
};

export default Complements;