import Layout from "@/components/layout/Layout";
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

      {/* Démarche Section - Reference Layout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading text-center">
              Notre démarche
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: List like schedule layout */}
              <div>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Le cabinet est entièrement dématérialisé afin de s'inscrire dans une démarche écoresponsable. Nous utilisons des technologies de pointe pour garantir confort, précision et modernité.
                </p>

                <div className="divide-y divide-border">
                  <div className="flex justify-between items-baseline py-4">
                    <span className="font-medium text-foreground">Démarche écoresponsable</span>
                    <span className="text-sm text-muted-foreground text-right ml-4">Cabinet dématérialisé</span>
                  </div>
                  <div className="flex justify-between items-baseline py-4">
                    <span className="font-medium text-foreground">Application mobile</span>
                    <span className="text-sm text-muted-foreground text-right ml-4">Suivi orthodontique facilité</span>
                  </div>
                  <div className="flex justify-between items-baseline py-4">
                    <span className="font-medium text-foreground">Empreintes numériques</span>
                    <span className="text-sm text-muted-foreground text-right ml-4">Confort et précision</span>
                  </div>
                  <div className="flex justify-between items-baseline py-4">
                    <span className="font-medium text-foreground">Logiciel patient</span>
                    <span className="text-sm text-muted-foreground text-right ml-4">Gestion simplifiée</span>
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
