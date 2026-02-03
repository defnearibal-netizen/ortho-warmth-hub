import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar } from "lucide-react";
import aligneursHero from "@/assets/aligneurs-hero.png";
import ctaBackground from "@/assets/cta-background.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const Aligneurs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aligneursHero})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/75" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16 h-full min-h-[60vh] md:min-h-[70vh] flex items-center">
          <div className="max-w-xl py-16 md:py-24 ml-4 md:ml-12 lg:ml-20">
            <p className="text-primary-foreground/80 text-lg mb-4 font-medium">
              Orthodontie invisible
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-heading leading-tight">
              Techniques par aligneurs
            </h1>
            <div className="w-16 h-1 bg-primary mb-8" />
            <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
              Les aligneurs sont des gouttières transparentes sur mesure qui déplacent 
              progressivement vos dents vers leur position idéale. Quasi invisibles, ils 
              offrent une alternative esthétique aux appareils traditionnels tout en garantissant 
              des résultats excellents.
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
                Les avantages des aligneurs
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Quasi invisibles au quotidien</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Amovibles pour manger et se brosser les dents</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Confortables, sans irritation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Hygiène bucco-dentaire facilitée</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Visualisation du résultat final avant traitement</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Moins de rendez-vous au cabinet</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Comment ça fonctionne ?
              </h3>
              <div className="bg-secondary rounded-2xl p-6 mb-8">
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">1</span>
                    <div>
                      <strong className="text-foreground">Consultation et scan 3D</strong>
                      <p className="text-muted-foreground text-sm mt-1">
                        Nous réalisons une empreinte numérique de vos dents pour créer un plan de traitement personnalisé.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">2</span>
                    <div>
                      <strong className="text-foreground">Fabrication sur mesure</strong>
                      <p className="text-muted-foreground text-sm mt-1">
                        Vos aligneurs sont fabriqués sur mesure grâce à la technologie 3D.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">3</span>
                    <div>
                      <strong className="text-foreground">Port quotidien</strong>
                      <p className="text-muted-foreground text-sm mt-1">
                        Vous portez vos aligneurs 20 à 22 heures par jour, en les changeant toutes les 1 à 2 semaines.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">4</span>
                    <div>
                      <strong className="text-foreground">Suivi régulier</strong>
                      <p className="text-muted-foreground text-sm mt-1">
                        Des rendez-vous de contrôle espacés permettent de suivre l'évolution du traitement.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Pour qui ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Les aligneurs sont particulièrement adaptés aux adultes et adolescents qui 
                souhaitent un traitement discret. Ils peuvent traiter de nombreux cas :
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-muted rounded-xl p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">Encombrement</h4>
                  <p className="text-sm text-muted-foreground">
                    Dents qui se chevauchent
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">Espacement</h4>
                  <p className="text-sm text-muted-foreground">
                    Dents écartées (diastèmes)
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">Malocclusion</h4>
                  <p className="text-sm text-muted-foreground">
                    Problèmes d'occlusion légère à modérée
                  </p>
                </div>
              </div>
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
              Découvrez l'orthodontie invisible
            </h2>
            <div className="w-12 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground mb-8">
              Prenez rendez-vous pour une consultation et découvrez si les aligneurs sont adaptés à votre cas.
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

export default Aligneurs;
