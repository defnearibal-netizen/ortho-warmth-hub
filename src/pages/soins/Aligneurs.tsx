import Layout from "@/components/layout/Layout";
import { CheckCircle } from "lucide-react";
import aligneursHero from "@/assets/aligneurs-hero.png";




const Aligneurs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aligneursHero})` }} />

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
              Les traitements par aligneurs (gouttières transparentes, presque qu’invisible) permettent d’améliorer le sourire en toute discrétion avec un minimum de contrainte.

            

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
                Les avantages des aligneurs
              </h3>

              <p className="text-muted-foreground mb-4">
                L'alignement dentaire se fait grâce à des gouttières successives conçues sur mesure, qui se retirent lors des repas.
              </p>
              <p className="text-muted-foreground mb-8">
                Le traitement dépend donc entièrement de vous, et de votre motivation à porter les aligneurs.
              </p>

              <div className="bg-cta-hover rounded-2xl p-6 md:p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Quasi invisibles</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Discrétion au quotidien</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Amovibles</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Retirez-les pour manger</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Confort optimal</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Pas d'irritation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Hygiène facilitée</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Brossage sans obstacle</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Visualisation 3D</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Résultat visible avant traitement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Moins de rendez-vous</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Consultations espacées</p>
                    </div>
                  </div>
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



    </Layout>);

};

export default Aligneurs;