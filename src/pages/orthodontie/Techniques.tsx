import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const techniques = [
  {
    title: "Appareils dentaires classiques",
    description: "Les bagues métalliques traditionnelles restent une solution efficace et éprouvée pour tous types de corrections orthodontiques.",
    advantages: [
      "Très efficaces pour les cas complexes",
      "Coût accessible",
      "Durabilité exceptionnelle",
      "Ajustements précis possibles",
    ],
    ideal: "Enfants, adolescents et adultes",
  },
  {
    title: "Bagues en céramique",
    description: "Une alternative esthétique aux bagues métalliques, avec des brackets de couleur proche de l'émail dentaire.",
    advantages: [
      "Discrétion optimale",
      "Même efficacité que les bagues métalliques",
      "Confort amélioré",
      "Résistant aux taches",
    ],
    ideal: "Adultes et adolescents soucieux de l'esthétique",
  },
  {
    title: "Aligneurs invisibles (Invisalign)",
    description: "Des gouttières transparentes et amovibles pour un traitement quasi-invisible, idéal pour les adultes actifs.",
    advantages: [
      "Quasiment invisibles",
      "Amovibles pour manger",
      "Hygiène dentaire facilitée",
      "Confort optimal",
    ],
    ideal: "Adultes et adolescents motivés",
  },
  {
    title: "Orthodontie linguale",
    description: "Les bagues sont placées à l'intérieur des dents, les rendant totalement invisibles de l'extérieur.",
    advantages: [
      "100% invisible de l'extérieur",
      "Efficace pour tous types de cas",
      "Sur mesure pour chaque patient",
      "Résultats excellents",
    ],
    ideal: "Adultes souhaitant une discrétion totale",
  },
];

const Techniques = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos Techniques
            </h1>
            <p className="text-xl text-white/80">
              Des solutions adaptées à chaque patient pour un sourire parfait.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Des technologies modernes pour tous les besoins
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nous proposons une gamme complète de traitements orthodontiques, 
              des appareils traditionnels aux solutions les plus innovantes. 
              Chaque traitement est personnalisé selon vos besoins et votre mode de vie.
            </p>
          </div>
        </div>
      </section>

      {/* Techniques List */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {techniques.map((technique, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 md:p-10 shadow-card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {technique.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {technique.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {technique.advantages.map((advantage, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-foreground">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full bg-secondary rounded-xl p-6">
                      <span className="text-sm text-muted-foreground uppercase tracking-wider">
                        Idéal pour
                      </span>
                      <p className="text-lg font-semibold text-foreground mt-2">
                        {technique.ideal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Quelle technique vous convient ?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous pour une évaluation personnalisée et découvrez 
            le traitement le plus adapté à vos besoins.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a
              href="https://aribal-portail.orthoadvance.com/#/cabinets/aribal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prendre rendez-vous
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Techniques;
