import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar } from "lucide-react";
import treatmentAutoligaturantes from "@/assets/treatment-autoligaturantes.jpg";
import ctaBackground from "@/assets/cta-background.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const Autoligaturantes = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${treatmentAutoligaturantes})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/75" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16 h-full min-h-[60vh] md:min-h-[70vh] flex items-center">
          <div className="max-w-xl py-16 md:py-24 ml-4 md:ml-12 lg:ml-20">
            <p className="text-primary-foreground/80 text-lg mb-4 font-medium">
              Technologie avancée
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-heading leading-tight">
              Techniques multi-attaches autoligaturantes
            </h1>
            <div className="w-16 h-1 bg-primary mb-8" />
            <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
              Les brackets autoligaturants représentent une évolution majeure dans le domaine de 
              l'orthodontie. Contrairement aux brackets traditionnels qui utilisent des élastiques 
              pour maintenir le fil, les brackets autoligaturants possèdent un système de clip 
              intégré qui maintient le fil en place.
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
                Les avantages des brackets autoligaturants
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Moins de friction, mouvements plus fluides</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Rendez-vous plus courts</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Moins de douleur après les ajustements</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Hygiène facilitée (pas d'élastiques)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Durée de traitement souvent réduite</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Design discret et moderne</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Comment ça fonctionne ?
              </h3>
              <div className="bg-secondary rounded-2xl p-6 mb-8">
                <p className="text-muted-foreground mb-4">
                  Le système autoligaturant utilise des forces légères et continues pour déplacer 
                  les dents. Le clip intégré maintient le fil orthodontique en place tout en 
                  permettant un mouvement libre, ce qui réduit la friction et accélère le traitement.
                </p>
                <p className="text-muted-foreground">
                  Cette technologie permet également de réduire le nombre de rendez-vous nécessaires 
                  car les ajustements sont plus simples et plus rapides à effectuer.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Pour qui ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Les brackets autoligaturants sont adaptés à la plupart des cas orthodontiques, 
                que ce soit pour les enfants, les adolescents ou les adultes. Ils sont 
                particulièrement recommandés pour :
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Les professionnels actifs</h4>
                  <p className="text-sm text-muted-foreground">
                    Moins de rendez-vous à planifier
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Les patients sensibles</h4>
                  <p className="text-sm text-muted-foreground">
                    Moins de douleur et d'inconfort
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Ceux qui recherchent la discrétion</h4>
                  <p className="text-sm text-muted-foreground">
                    Design compact et esthétique
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Les cas complexes</h4>
                  <p className="text-sm text-muted-foreground">
                    Efficacité prouvée pour les traitements difficiles
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
              Découvrez si cette technique est faite pour vous
            </h2>
            <div className="w-12 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground mb-8">
              Prenez rendez-vous pour une consultation et découvrez les options de traitement adaptées à votre situation.
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

export default Autoligaturantes;
