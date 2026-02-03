import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar } from "lucide-react";
import lingualeHero from "@/assets/linguale-win-hero.png";
import ctaBackground from "@/assets/cta-background.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const LingualeWin = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${lingualeHero})` }}
        />
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
              La technique linguale WIN est une méthode d'orthodontie où les brackets sont 
              collés sur la face interne des dents, les rendant totalement invisibles de 
              l'extérieur. Développée en Allemagne, cette technique de pointe offre une 
              précision exceptionnelle grâce à des brackets fabriqués sur mesure pour chaque patient.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Les avantages de la technique WIN
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">100% invisible de l'extérieur</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Brackets ultra-plats et confortables</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Fabriqués sur mesure avec précision robotique</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Adapté aux cas complexes</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Résultats prévisibles et précis</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Fixe, donc travaille 24h/24</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                La précision WIN
              </h3>
              <div className="bg-secondary rounded-2xl p-6 mb-8">
                <p className="text-muted-foreground mb-4">
                  Le système WIN se distingue par sa fabrication entièrement personnalisée. 
                  Chaque bracket est conçu individuellement pour s'adapter parfaitement à 
                  l'anatomie de chaque dent du patient.
                </p>
                <p className="text-muted-foreground mb-4">
                  Cette personnalisation extrême permet :
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Une adaptation parfaite à la face interne de chaque dent</li>
                  <li>• Un confort optimal grâce à des brackets ultra-fins</li>
                  <li>• Des mouvements dentaires précis et contrôlés</li>
                  <li>• Une réduction du temps de traitement</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Pour qui ?
              </h3>
              <p className="text-muted-foreground mb-6">
                La technique linguale WIN est idéale pour les patients qui recherchent 
                l'invisibilité absolue tout en bénéficiant d'un traitement efficace :
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Professionnels en vue</h4>
                  <p className="text-sm text-muted-foreground">
                    Pour ceux dont l'image est primordiale au quotidien
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Occasions spéciales</h4>
                  <p className="text-sm text-muted-foreground">
                    Mariages, événements importants pendant le traitement
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Cas complexes</h4>
                  <p className="text-sm text-muted-foreground">
                    Quand les aligneurs ne sont pas adaptés
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Exigence de résultat</h4>
                  <p className="text-sm text-muted-foreground">
                    Pour ceux qui veulent un contrôle maximal
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Durée d'adaptation
              </h3>
              <p className="text-muted-foreground mb-6">
                Comme pour tout appareil lingual, une période d'adaptation de 2 à 3 semaines 
                est nécessaire. Pendant cette période, vous pouvez ressentir une gêne au niveau 
                de la langue et une légère modification de l'élocution. Ces désagréments 
                disparaissent rapidement à mesure que votre langue s'habitue aux brackets.
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
              Découvrez l'orthodontie totalement invisible
            </h2>
            <div className="w-12 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground mb-8">
              Prenez rendez-vous pour une consultation et découvrez si la technique WIN est adaptée à votre cas.
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

export default LingualeWin;
