import { Clock, Droplets, Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const steps = [
  {
    number: "01",
    title: "Brossez après chaque repas",
    description: "Attendez 30 minutes après avoir mangé, puis brossez pendant au moins 2 minutes avec une brosse à poils souples.",
    icon: Clock,
  },
  {
    number: "02",
    title: "Utilisez une brossette interdentaire",
    description: "Passez la brossette sous le fil orthodontique et entre chaque bracket pour éliminer les résidus alimentaires.",
    icon: RefreshCw,
  },
  {
    number: "03",
    title: "N'oubliez pas le fil dentaire",
    description: "Utilisez un enfile-fil pour passer le fil dentaire sous l'arc et nettoyer entre chaque dent.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Terminez par un bain de bouche",
    description: "Un bain de bouche fluoré aide à renforcer l'émail et à prévenir les caries.",
    icon: Droplets,
  },
];

const products = [
  {
    category: "Brosses à dents",
    items: [
      "Brosse à dents orthodontique (poils en V)",
      "Brosse électrique avec tête orthodontique",
      "Brosse à dents souple classique",
    ],
  },
  {
    category: "Accessoires indispensables",
    items: [
      "Brossettes interdentaires (plusieurs tailles)",
      "Fil dentaire spécial orthodontie",
      "Enfile-fil dentaire",
      "Hydropulseur (jet dentaire)",
    ],
  },
  {
    category: "Produits d'hygiène",
    items: [
      "Dentifrice fluoré",
      "Bain de bouche sans alcool",
      "Cire orthodontique",
      "Révélateur de plaque dentaire",
    ],
  },
];

const tips = [
  "Évitez les aliments collants (caramels, chewing-gums)",
  "Coupez les aliments durs en petits morceaux",
  "Évitez de mordre dans les pommes ou les carottes",
  "Limitez les boissons sucrées et acides",
  "Portez votre appareil de contention comme prescrit",
  "Respectez vos rendez-vous de suivi",
];

const Brossage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conseils de Brossage
            </h1>
            <p className="text-xl text-white/80">
              Une hygiène impeccable pour un traitement réussi.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              L'hygiène, clé de votre traitement
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Un brossage efficace est essentiel pendant un traitement orthodontique. 
              Les appareils dentaires peuvent retenir plus facilement les débris alimentaires 
              et la plaque dentaire, augmentant le risque de caries et de gingivite. 
              Suivez nos conseils pour maintenir une hygiène parfaite.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Les 4 étapes d'un brossage parfait
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl gradient-hero flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Les produits recommandés
            </h2>
            <p className="text-muted-foreground">
              Équipez-vous des bons outils pour une hygiène optimale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {product.category}
                </h3>
                <ul className="space-y-4">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Conseils supplémentaires
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-soft"
              >
                <span className="w-8 h-8 rounded-full gradient-hero text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <span className="text-foreground">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Des questions sur l'hygiène ?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Notre équipe est là pour vous conseiller et vous montrer les bonnes techniques.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a
              href="https://www.doctolib.fr"
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

export default Brossage;
