import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar } from "lucide-react";
import enfantsHero from "@/assets/enfants-hero.png";
import momDaughterCta from "@/assets/mom-daughter-cta.png";
import appareilExpansion from "@/assets/appareil-expansion.png";
import appareilFonctionnel from "@/assets/appareil-fonctionnel.png";
import appareilMainteneur from "@/assets/appareil-mainteneur.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const Enfants = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${enfantsHero})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/75" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16 h-full min-h-[60vh] md:min-h-[70vh] flex items-center">
          <div className="max-w-xl py-16 md:py-24 ml-4 md:ml-12 lg:ml-20">
            <p className="text-primary-foreground/80 text-lg mb-4 font-medium">
              Orthodontie pédiatrique
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-heading leading-tight">
              L'orthodontie interceptive
            </h1>
            <div className="w-16 h-1 bg-primary mb-8" />
            <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
              L'orthodontie interceptive, aussi appelée orthodontie précoce, intervient chez les 
              enfants dès l'âge de 4 à 7 ans. Elle permet de corriger les problèmes de croissance 
              des mâchoires et de guider l'éruption des dents définitives pour éviter des 
              traitements plus lourds à l'adolescence.
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
                Quand consulter ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Il est recommandé de faire un premier bilan orthodontique vers l'âge de 6-7 ans, 
                même si tout semble normal. Certains signes doivent vous alerter :
              </p>

              <div className="bg-cta-hover rounded-2xl p-6 md:p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Succion du pouce</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Persistante après 4 ans</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Respiration buccale</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Respire par la bouche</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Difficultés à mastiquer</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Problèmes de mastication</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Chevauchement dentaire</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Dents qui se chevauchent</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Décalage des mâchoires</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Mâchoire en avant ou en retrait</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Perte prématurée</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Perte précoce de dents de lait</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-6">
                Les appareils utilisés
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Appareils d'expansion */}
                <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={appareilExpansion} 
                      alt="Appareil d'expansion" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="font-heading font-semibold text-foreground mb-2">Appareil d'expansion</h4>
                    <p className="text-muted-foreground text-sm">
                      Permettent d'élargir le palais et de créer de l'espace pour les dents définitives.
                    </p>
                  </div>
                </div>

                {/* Appareils fonctionnels */}
                <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={appareilFonctionnel} 
                      alt="Appareil fonctionnel" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="font-heading font-semibold text-foreground mb-2">Appareil fonctionnel</h4>
                    <p className="text-muted-foreground text-sm">
                      Corrigent les décalages entre les mâchoires en stimulant la croissance.
                    </p>
                  </div>
                </div>

                {/* Mainteneurs d'espace */}
                <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={appareilMainteneur} 
                      alt="Mainteneur d'espace" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="font-heading font-semibold text-foreground mb-2">Mainteneur d'espace</h4>
                    <p className="text-muted-foreground text-sm">
                      Préservent l'espace nécessaire après une perte prématurée de dent de lait.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Les avantages d'un traitement précoce
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Prévention</h4>
                  <p className="text-sm text-muted-foreground">
                    Éviter des problèmes plus graves à l'adolescence
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Croissance guidée</h4>
                  <p className="text-sm text-muted-foreground">
                    Profiter de la croissance naturelle pour corriger les anomalies
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Traitement simplifié</h4>
                  <p className="text-sm text-muted-foreground">
                    Réduire la durée et la complexité du traitement futur
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Confiance en soi</h4>
                  <p className="text-sm text-muted-foreground">
                    Améliorer l'estime de soi de l'enfant
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
          style={{ backgroundImage: `url(${momDaughterCta})` }}
        />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16 h-full min-h-[50vh] md:min-h-[60vh] flex items-center py-12">
          <div className="bg-background/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-lg shadow-xl ml-2 md:ml-6 lg:ml-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading">
              Prenez rendez-vous pour un bilan
            </h2>
            <div className="w-12 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground mb-8">
              Un premier bilan permettra d'évaluer si un traitement précoce est nécessaire pour votre enfant.
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

export default Enfants;
