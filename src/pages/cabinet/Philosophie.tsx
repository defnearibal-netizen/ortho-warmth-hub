import Layout from "@/components/layout/Layout";
import { Leaf, Smartphone, Camera, MessageCircle } from "lucide-react";
import philosophiePatient from "@/assets/philosophie-patient.jpg";

const Philosophie = () => {
  return (
    <Layout>
      {/* Title Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-center" style={{ fontFamily: "'Tenor Sans', serif" }}>
            Notre philosophie
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
        </div>
      </section>

      {/* Hero Section - Two Column Layout */}
      <section className="min-h-[60vh] grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Dark Chocolate Background with Content */}
        <div className="bg-[hsl(25_45%_30%)] flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg text-center">
            {/* Quote marks */}
            <div className="text-6xl text-white/40 mb-4" style={{ fontFamily: "serif" }}>
              ❝
            </div>
            
            <p className="text-white/90 text-lg leading-relaxed">
              Chaque traitement vous est expliqué de manière claire et détaillée, afin que vous compreniez pleinement chaque étape de votre prise en charge. Nous prenons le temps d'échanger avec vous, de répondre à toutes vos questions et de vous accompagner avec attention tout au long de votre parcours orthodontique.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="h-[50vh] lg:h-auto">
          <img
            src={philosophiePatient}
            alt="Orthodontiste avec patiente"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Démarche Section - Two Column Layout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading text-center">
              Notre démarche
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Text Content */}
              <div className="space-y-8">
                <p className="text-muted-foreground leading-relaxed">
                  Le cabinet est entièrement dématérialisé afin de s'inscrire dans une démarche écoresponsable. Nous utilisons des technologies de pointe pour garantir confort, précision et modernité.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Leaf className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Démarche écoresponsable</h3>
                      <p className="text-sm text-muted-foreground">
                        Cabinet entièrement dématérialisé pour réduire notre impact environnemental
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Application mobile</h3>
                      <p className="text-sm text-muted-foreground">
                        Suivi orthodontique facilité grâce à notre application dédiée
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Camera className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Empreintes numériques</h3>
                      <p className="text-sm text-muted-foreground">
                        Technologies de pointe pour un confort et une précision optimaux
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Logiciel patient</h3>
                      <p className="text-sm text-muted-foreground">
                        Gestion simplifiée des dossiers et communication facilitée
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Image Placeholder */}
              <div className="h-[400px] lg:h-full min-h-[400px] bg-muted rounded-xl flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Image à venir</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Philosophie;
