import Layout from "@/components/layout/Layout";
import { CheckCircle } from "lucide-react";
import lingualeHero from "@/assets/linguale-win-hero.png";




const LingualeWin = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${lingualeHero})` }} />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/75" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16 h-full min-h-[60vh] md:min-h-[70vh] flex items-center">
          <div className="max-w-xl py-16 md:py-24 ml-4 md:ml-12 lg:ml-20">
            <p className="text-primary-foreground/80 text-lg mb-4 font-medium">
              Orthodontie 100% invisible
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-heading leading-tight">
              Technique linguale WIN
            </h1>
            <div className="w-16 h-1 bg-primary mb-8" />
            <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
              
Cette technique innovante  totalement invisible utilise un appareil fixe collé sur la surface interne des dents.  
 

            
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Les avantages de la technique WIN
              </h3>

              <div className="bg-cta-hover rounded-2xl p-6 md:p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">100% invisible</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Brackets à l'intérieur des dents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Ultra-plats</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Confort optimal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Précision robotique</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Fabriqués sur mesure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Cas complexes</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Adapté aux situations difficiles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Résultats prévisibles</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Précision exceptionnelle</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Travaille 24h/24</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Appareil fixe permanent</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                La précision WIN
              </h3>
              <div className="bg-secondary rounded-2xl p-6 mb-8">
                <p className="text-muted-foreground mb-4">
                  Cet appareil est fixe et individualisé: les attaches, collées sur vos dents, ainsi que les fils qui permettent l'alignement, sont fabriqués pour votre bouche seulement ; c'est donc un appareil unique et propre à vous.
                </p>
                <p className="text-muted-foreground">
                  Cette technique requiert une expertise particulière que nous maîtrisons pour vous garantir des résultats discrets et efficaces.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Durée d'adaptation
              </h3>
              <p className="text-muted-foreground mb-6">La technique linguale WIN est idéale pour les patients qui recherchent l'invisibilité absolue tout en bénéficiant d'un traitement efficace.




              </p>
            </div>
          </div>
        </div>
      </section>



    </Layout>);
};

export default LingualeWin;