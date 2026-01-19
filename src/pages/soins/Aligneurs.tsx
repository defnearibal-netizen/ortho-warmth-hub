import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle, Calendar } from "lucide-react";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const Aligneurs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Techniques par aligneurs
            </h1>
            <p className="text-lg text-muted-foreground">
              L'orthodontie invisible pour un sourire parfait en toute discrétion
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
                Qu'est-ce que l'orthodontie par aligneurs ?
              </h2>
              <p className="text-muted-foreground mb-6">
                Les aligneurs sont des gouttières transparentes sur mesure qui déplacent 
                progressivement vos dents vers leur position idéale. Quasi invisibles, ils 
                offrent une alternative esthétique aux appareils traditionnels tout en garantissant 
                des résultats excellents.
              </p>

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
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 font-heading">
            Découvrez l'orthodontie invisible
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous pour une consultation et découvrez si les aligneurs sont adaptés à votre cas.
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

export default Aligneurs;
