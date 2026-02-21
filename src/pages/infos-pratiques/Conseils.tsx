import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import EmplacementContact from "@/components/shared/EmplacementContact";
import { UtensilsCrossed, Sparkles, Shield, X, Check, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import conseilsHero from "@/assets/conseils-hero.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";
const PHONE_NUMBER = "+225 05 75 43 00 00";

const Conseils = () => {
  const [accessoiresOpen, setAccessoiresOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section - Same layout as Enfants.tsx */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${conseilsHero})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/75" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16 h-full min-h-[60vh] md:min-h-[70vh] flex items-center">
          <div className="max-w-xl py-16 md:py-24 ml-4 md:ml-12 lg:ml-20">
            <p className="text-primary-foreground/80 text-lg mb-4 font-medium">
              Infos pratiques
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-heading leading-tight">
              Conseils pratiques et vidéos
            </h1>
            <div className="w-16 h-1 bg-primary mb-8" />
            <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
              Tout ce qu'il faut savoir pour bien vivre votre traitement orthodontique 
              au quotidien : alimentation, hygiène, sport et activités.
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
              {/* À éviter - Chocolat foncé */}
              <div className="bg-cta-hover rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-primary-foreground mb-4 flex items-center gap-2">
                  <X className="h-5 w-5 text-destructive" />
                  À éviter
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-primary-foreground/80">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2" />
                    Aliments durs (pommes entières, carottes crues, noix)
                  </li>
                  <li className="flex items-start gap-3 text-primary-foreground/80">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2" />
                    Aliments collants (caramel, chewing-gum, bonbons)
                  </li>
                  <li className="flex items-start gap-3 text-primary-foreground/80">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2" />
                    Aliments croquants (chips, croûtes de pain)
                  </li>
                  <li className="flex items-start gap-3 text-primary-foreground/80">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2" />
                    Mordre directement dans les aliments durs
                  </li>
                </ul>
              </div>

              {/* Recommandé - Chocolat foncé with green checkmark */}
              <div className="bg-cta-hover rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-primary-foreground mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  Recommandé
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-primary-foreground/80">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                    Couper les aliments en petits morceaux
                  </li>
                  <li className="flex items-start gap-3 text-primary-foreground/80">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                    Privilégier les aliments tendres les premiers jours
                  </li>
                  <li className="flex items-start gap-3 text-primary-foreground/80">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                    Mâcher avec les dents du fond
                  </li>
                  <li className="flex items-start gap-3 text-primary-foreground/80">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                    Boire beaucoup d'eau
                  </li>
                </ul>
              </div>
            </div>

            {/* Video */}
            <div className="mt-10">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/5wX_RCJBR3w"
                  title="Conseils orthodontiques"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
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
                  <h3 className="font-semibold text-foreground mb-6">Routine quotidienne</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4 text-muted-foreground">
                      <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-lg">1</span>
                      <span className="pt-2">Brossez-vous les dents après chaque repas (minimum 3 fois par jour)</span>
                    </li>
                    <li className="flex items-start gap-4 text-muted-foreground">
                      <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-lg">2</span>
                      <span className="pt-2">Utilisez une brosse à dents orthodontique ou électrique</span>
                    </li>
                    <li className="flex items-start gap-4 text-muted-foreground">
                      <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-lg">3</span>
                      <span className="pt-2">Passez la brossette interdentaire sous le fil</span>
                    </li>
                    <li className="flex items-start gap-4 text-muted-foreground">
                      <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-lg">4</span>
                      <span className="pt-2">Terminez par un bain de bouche fluoré</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <Collapsible open={accessoiresOpen} onOpenChange={setAccessoiresOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full bg-secondary rounded-xl p-4 hover:bg-secondary/80 transition-colors">
                      <h3 className="font-semibold text-foreground">Accessoires recommandés</h3>
                      <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${accessoiresOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4 px-2">
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
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Hygiène */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/feyaEbdJgIU"
                title="Hygiène bucco-dentaire"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
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
      <EmplacementContact showDivider />
    </Layout>
  );
};

export default Conseils;
