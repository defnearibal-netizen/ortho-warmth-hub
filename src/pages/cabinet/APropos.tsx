import Layout from "@/components/layout/Layout";
import { Quote } from "lucide-react";

const APropos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
              Notre cabinet d'orthodontie
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un traitement orthodontique consiste à détecter, prévenir et, si nécessaire, traiter les malocclusions dentaires et/ou des mâchoires chez l'enfant, l'adolescent et l'adulte. Il doit être personnalisé, entrepris et suivi par un spécialiste en orthodontie.
            </p>
          </div>
        </div>
      </section>

      {/* Spécialiste Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">
              Qu'est-ce qu'un spécialiste en orthodontie ?
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Tous les orthodontistes sont initialement chirurgiens-dentistes. La reconnaissance du titre de spécialiste nécessite toutefois trois années d'études hospitalo-universitaires supplémentaires, accessibles après un concours national.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cette spécialisation nous permet de maîtriser les technologies les plus avancées et d'entreprendre le traitement avec précision, rigueur et sécurité.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophie Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">
              Notre démarche
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Le cabinet est entièrement dématérialisé afin de s'inscrire dans une démarche écoresponsable. Nous utilisons un logiciel patient ainsi qu'une application mobile pour faciliter la gestion des dossiers et le suivi orthodontique. Par ailleurs, le cabinet est équipé de technologies de pointe, notamment pour les empreintes numériques et les photographies, garantissant confort, précision et modernité.
            </p>
          </div>
        </div>
      </section>

      {/* Transparence Section */}
      <section className="py-12 bg-background">
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

      {/* Citation Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-10 w-10 text-primary mx-auto mb-6 opacity-50" />
            <blockquote className="text-lg md:text-xl italic text-foreground mb-6 leading-relaxed">
              "No bracket system will turn a difficult case into an easy one or change the rules of biology, but we can provide a big help in improving the finishing of your cases in a consistent way."
            </blockquote>
            <cite className="text-muted-foreground font-semibold not-italic">
              Dr Stefano Troiani
            </cite>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
