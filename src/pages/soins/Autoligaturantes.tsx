import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Zap, CheckCircle, Calendar } from "lucide-react";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const Autoligaturantes = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Techniques multi-attaches autoligaturantes
            </h1>
            <p className="text-lg text-muted-foreground">
              Une technologie avancée pour des traitements plus rapides et confortables
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
                Qu'est-ce qu'un appareil autoligaturant ?
              </h2>
              <p className="text-muted-foreground mb-6">
                Les brackets autoligaturants représentent une évolution majeure dans le domaine de 
                l'orthodontie. Contrairement aux brackets traditionnels qui utilisent des élastiques 
                pour maintenir le fil, les brackets autoligaturants possèdent un système de clip 
                intégré qui maintient le fil en place.
              </p>

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
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 font-heading">
            Découvrez si cette technique est faite pour vous
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous pour une consultation et découvrez les options de traitement adaptées à votre situation.
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

export default Autoligaturantes;
