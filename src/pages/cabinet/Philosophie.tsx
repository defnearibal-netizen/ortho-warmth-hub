import Layout from "@/components/layout/Layout";
import { Target, Lightbulb, Shield, Sparkles } from "lucide-react";

const Philosophie = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Notre philosophie
            </h1>
            <p className="text-lg text-muted-foreground">
              Une approche centrée sur le patient pour des résultats durables
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-heading">
                Notre vision de l'orthodontie
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nous croyons que chaque sourire est unique et mérite une attention particulière. 
                Notre approche allie expertise technique et relation humaine pour vous offrir 
                les meilleurs résultats possibles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Précision et personnalisation
                </h3>
                <p className="text-muted-foreground">
                  Chaque plan de traitement est élaboré sur mesure après une analyse approfondie 
                  de votre situation. Nous utilisons les technologies les plus avancées pour 
                  garantir des résultats précis et durables.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Éducation et transparence
                </h3>
                <p className="text-muted-foreground">
                  Nous prenons le temps de vous expliquer chaque étape de votre traitement. 
                  Vous comprenez les objectifs, les techniques utilisées et vous participez 
                  activement à votre parcours de soins.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Confort et sécurité
                </h3>
                <p className="text-muted-foreground">
                  Votre bien-être est notre priorité. Nos locaux sont conçus pour vous mettre 
                  à l'aise et nos protocoles respectent les normes d'hygiène les plus strictes 
                  pour votre sécurité.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Résultats esthétiques et fonctionnels
                </h3>
                <p className="text-muted-foreground">
                  Au-delà de l'esthétique, nous veillons à ce que votre traitement améliore 
                  également la fonction de votre dentition : mastication, élocution et 
                  prévention des problèmes futurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6 font-heading">
              Notre engagement envers vous
            </h2>
            <div className="space-y-4 text-left">
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <p className="text-foreground">
                  ✓ Un diagnostic complet et des explications claires avant tout traitement
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <p className="text-foreground">
                  ✓ Un devis détaillé et transparent, sans surprises
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <p className="text-foreground">
                  ✓ Un suivi régulier et personnalisé tout au long de votre traitement
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <p className="text-foreground">
                  ✓ Une disponibilité en cas d'urgence ou de questions
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <p className="text-foreground">
                  ✓ Des techniques modernes pour un confort optimal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Philosophie;
