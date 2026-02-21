import Layout from "@/components/layout/Layout";
import { CheckCircle } from "lucide-react";
import treatmentAutoligaturantes from "@/assets/treatment-autoligaturantes.jpg";




const Autoligaturantes = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${treatmentAutoligaturantes})` }} />

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
              Nous proposons des appareils multi-attaches autoligaturants métal ou céramique pour être plus discret. 
            


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
                Les avantages des brackets autoligaturants
              </h3>

              <div className="bg-cta-hover rounded-2xl p-6 md:p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Moins de friction</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Mouvements plus fluides</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Rendez-vous plus courts</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Ajustements rapides</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Moins de douleur</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Confort amélioré</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Hygiène facilitée</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Pas d'élastiques</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Durée réduite</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Traitement plus court</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-primary-foreground font-medium uppercase tracking-wide text-sm">Design moderne</span>
                      <p className="text-primary-foreground/70 text-sm mt-1">Apparence discrète</p>
                    </div>
                  </div>
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
    </Layout>);

};

export default Autoligaturantes;