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
              <p className="text-muted-foreground mb-4">La chirurgie maxillo-faciale ou chirurgie des mâchoires peut être parfois indispensable dans certaine dysmorphose maxillo-faciale.
              </p>
              <p className="text-muted-foreground mb-2">
                Elle a pour but de rétablir un équilibre squelettique dans les 3 dimensions de l'espace afin d'obtenir :
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1 ml-2">
                <li>Une occlusion fonctionnelle stable.</li>
                <li>Un équilibre harmonieux et esthétique du visage.</li>
                <li>Un respect du parodonte et des articulations temporo-mandibulaires.</li>
              </ul>

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

              {/* Video YouTube */}
              <div className="my-8 rounded-2xl overflow-hidden">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/iKTbW3wd3AY?start=7"
                    title="Chirurgie maxillo-faciale"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Rééducation */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Orthophonie et Kinésithérapie
              </h3>
              <p className="text-muted-foreground mb-6">Complément à part entière pour le succès des traitements pour lesquels le comportement de la langue, 
des joues et des lèvres ne sont pas adéquats, ces deux spécialités sont une aide précieuse.



              </p>

              <div className="bg-cta-hover rounded-2xl p-6 md:p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Rééducation linguale</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Correction de la position de la langue</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Respiration nasale</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Traitement de la respiration buccale</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Déglutition</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Correction de la déglutition atypique</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Stabilité du traitement</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Garantit des résultats durables</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </Layout>);
};

export default Complements;