import { AlertTriangle, Phone, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const urgencies = [
  {
    title: "Bracket décollé",
    description: "Un bracket s'est détaché de la dent.",
    solution: "Si le bracket est toujours attaché au fil, laissez-le en place. S'il se détache complètement, conservez-le et prenez rendez-vous rapidement. En attendant, vous pouvez appliquer de la cire orthodontique pour éviter les irritations.",
    urgent: false,
  },
  {
    title: "Fil qui dépasse ou pique",
    description: "Le fil de l'appareil irrite la joue ou la gencive.",
    solution: "Utilisez une pince à épiler propre pour replier délicatement le fil vers la dent. Appliquez de la cire orthodontique sur la zone irritante. Si le problème persiste, contactez-nous.",
    urgent: false,
  },
  {
    title: "Douleur intense",
    description: "Douleur aiguë qui ne diminue pas avec les antalgiques.",
    solution: "Contactez-nous immédiatement. En attendant, prenez un antalgique adapté et appliquez une compresse froide sur la zone douloureuse.",
    urgent: true,
  },
  {
    title: "Appareil cassé",
    description: "L'appareil est endommagé ou cassé.",
    solution: "Conservez tous les morceaux et contactez-nous pour un rendez-vous de réparation. N'essayez pas de réparer l'appareil vous-même.",
    urgent: true,
  },
  {
    title: "Ligature détachée",
    description: "L'élastique ou la ligature métallique s'est défait.",
    solution: "Avec une pince à épiler stérilisée, essayez de remettre la ligature en place. Si impossible, utilisez de la cire et prenez rendez-vous.",
    urgent: false,
  },
];

const tips = [
  "Gardez toujours de la cire orthodontique à portée de main",
  "Ne mangez pas d'aliments durs ou collants",
  "Portez un protège-dents lors des activités sportives",
  "Respectez les rendez-vous de suivi",
];

const Urgences = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Urgences Orthodontiques
            </h1>
            <p className="text-xl text-white/80">
              Comment réagir face aux situations d'urgence les plus courantes.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                <Phone className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">En cas d'urgence</p>
                <p className="text-2xl font-bold text-foreground">01 23 45 67 89</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Horaires d'urgence</p>
                <p className="text-lg font-semibold text-foreground">Lun-Ven 9h-19h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgencies List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Situations courantes et solutions
            </h2>

            <div className="space-y-6">
              {urgencies.map((urgency, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 border-2 ${
                    urgency.urgent
                      ? "border-accent bg-accent/5"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        urgency.urgent ? "bg-accent" : "bg-primary"
                      }`}
                    >
                      <AlertTriangle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {urgency.title}
                        </h3>
                        {urgency.urgent && (
                          <span className="px-3 py-1 rounded-full bg-accent text-white text-xs font-medium">
                            Urgent
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {urgency.description}
                      </p>
                      <div className="bg-secondary rounded-xl p-4">
                        <p className="text-sm font-medium text-primary mb-2">
                          💡 Solution
                        </p>
                        <p className="text-foreground">{urgency.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Conseils de prévention
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-card rounded-xl p-6 shadow-soft"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Besoin d'aide ?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            N'hésitez pas à nous contacter pour toute question ou urgence.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a 
              href="https://aribal-portail.orthoadvance.com/#/cabinets/aribal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Prendre rendez-vous
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Urgences;
