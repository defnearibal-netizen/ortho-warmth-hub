import Layout from "@/components/layout/Layout";
import { Lightbulb, UtensilsCrossed, Sparkles, Shield } from "lucide-react";

const Conseils = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Conseils pratiques
            </h1>
            <p className="text-lg text-muted-foreground">
              Tout ce qu'il faut savoir pour bien vivre votre traitement
            </p>
          </div>
        </div>
      </section>

      {/* Alimentation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <UtensilsCrossed className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground font-heading">
                Alimentation
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-destructive">
                  ❌ À éviter
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2" />
                    Aliments durs (pommes entières, carottes crues, noix)
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2" />
                    Aliments collants (caramel, chewing-gum, bonbons)
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2" />
                    Aliments croquants (chips, croûtes de pain)
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2" />
                    Mordre directement dans les aliments durs
                  </li>
                </ul>
              </div>

              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-primary">
                  ✓ Recommandé
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    Couper les aliments en petits morceaux
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    Privilégier les aliments tendres les premiers jours
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    Mâcher avec les dents du fond
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    Boire beaucoup d'eau
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hygiène */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground font-heading">
                Hygiène bucco-dentaire
              </h2>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-soft">
              <p className="text-muted-foreground mb-6">
                Une hygiène irréprochable est essentielle pendant votre traitement orthodontique. 
                Les brackets et fils peuvent retenir les aliments et la plaque dentaire.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Routine quotidienne</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">1</span>
                      Brossez-vous les dents après chaque repas (minimum 3 fois par jour)
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">2</span>
                      Utilisez une brosse à dents orthodontique ou électrique
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">3</span>
                      Passez la brossette interdentaire sous le fil
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">4</span>
                      Terminez par un bain de bouche fluoré
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4">Accessoires recommandés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      Brosse à dents orthodontique en V
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      Brossettes interdentaires de différentes tailles
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      Fil dentaire spécial orthodontie
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      Jet dentaire (hydropulseur)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sport et activités */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground font-heading">
                Sport et activités
              </h2>
            </div>

            <div className="bg-secondary rounded-2xl p-8">
              <p className="text-muted-foreground mb-6">
                Vous pouvez continuer vos activités sportives pendant votre traitement, 
                mais certaines précautions sont recommandées.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Sports de contact</h3>
                  <p className="text-sm text-muted-foreground">
                    Portez un protège-dents adapté pour le rugby, la boxe, le hockey, etc.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Instruments de musique</h3>
                  <p className="text-sm text-muted-foreground">
                    Une période d'adaptation est nécessaire pour les instruments à vent.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Voyages</h3>
                  <p className="text-sm text-muted-foreground">
                    Emportez votre kit d'urgence et suffisamment d'élastiques ou d'aligneurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Conseils;
