import Layout from "@/components/layout/Layout";
import { Leaf, Smartphone, Camera, MessageCircle } from "lucide-react";

const Philosophie = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
              Notre philosophie
            </h1>
          </div>
        </div>
      </section>

      {/* Notre démarche Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">
              Notre démarche
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Le cabinet est entièrement dématérialisé afin de s'inscrire dans une démarche écoresponsable. Nous utilisons un logiciel patient ainsi qu'une application mobile pour faciliter la gestion des dossiers et le suivi orthodontique. Par ailleurs, le cabinet est équipé de technologies de pointe, notamment pour les empreintes numériques et les photographies, garantissant confort, précision et modernité.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-secondary rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Démarche écoresponsable</h3>
                <p className="text-sm text-muted-foreground">
                  Cabinet entièrement dématérialisé pour réduire notre impact environnemental
                </p>
              </div>
              
              <div className="bg-secondary rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Application mobile</h3>
                <p className="text-sm text-muted-foreground">
                  Suivi orthodontique facilité grâce à notre application dédiée
                </p>
              </div>
              
              <div className="bg-secondary rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Empreintes numériques</h3>
                <p className="text-sm text-muted-foreground">
                  Technologies de pointe pour un confort et une précision optimaux
                </p>
              </div>
              
              <div className="bg-secondary rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Logiciel patient</h3>
                <p className="text-sm text-muted-foreground">
                  Gestion simplifiée des dossiers et communication facilitée
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparence Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">
              Transparence et pédagogie
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Chaque traitement vous est expliqué de manière claire et détaillée, afin que vous compreniez pleinement chaque étape de votre prise en charge. Nous prenons le temps d'échanger avec vous, de répondre à toutes vos questions et de vous accompagner avec attention tout au long de votre parcours orthodontique.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Philosophie;
