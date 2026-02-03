import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar } from "lucide-react";
import enfantsHero from "@/assets/enfants-hero.png";

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
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 h-full min-h-[60vh] md:min-h-[70vh] flex items-center">
          <div className="max-w-xl py-16 md:py-24">
            <p className="text-primary-foreground/80 text-lg mb-4 font-medium">
              Orthodontie pédiatrique
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-heading leading-tight">
              Techniques pour les jeunes enfants
            </h1>
            <div className="w-16 h-1 bg-primary mb-8" />
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href={RDV_LINK} target="_blank" rel="noopener noreferrer">
                <Calendar className="h-5 w-5 mr-2" />
                Prendre rendez-vous
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">
                L'orthodontie interceptive
              </h2>
              <p className="text-muted-foreground mb-6">
                L'orthodontie interceptive, aussi appelée orthodontie précoce, intervient chez les 
                enfants dès l'âge de 4 à 7 ans. Elle permet de corriger les problèmes de croissance 
                des mâchoires et de guider l'éruption des dents définitives pour éviter des 
                traitements plus lourds à l'adolescence.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Quand consulter ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Il est recommandé de faire un premier bilan orthodontique vers l'âge de 6-7 ans, 
                même si tout semble normal. Certains signes doivent vous alerter :
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Succion du pouce persistante</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Respiration par la bouche</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Difficultés à mastiquer</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Dents qui se chevauchent</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Mâchoire en avant ou en retrait</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Perte prématurée de dents de lait</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Les appareils utilisés
              </h3>
              <div className="bg-secondary rounded-2xl p-6 mb-8">
                <ul className="space-y-4">
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Appareils d'expansion :</strong> Permettent 
                    d'élargir le palais et de créer de l'espace pour les dents définitives.
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Appareils fonctionnels :</strong> Corrigent 
                    les décalages entre les mâchoires en stimulant la croissance.
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Mainteneurs d'espace :</strong> Préservent 
                    l'espace nécessaire après une perte prématurée de dent de lait.
                  </li>
                </ul>
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
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 font-heading">
            Prenez rendez-vous pour un bilan
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Un premier bilan permettra d'évaluer si un traitement précoce est nécessaire pour votre enfant.
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

export default Enfants;
