import Layout from "@/components/layout/Layout";
import { Quote } from "lucide-react";
import cabinetBackground from "@/assets/cabinet-background.jpg";

const APropos = () => {
  return (
    <Layout>
      {/* Full Page Background */}
      <div className="relative min-h-screen">
        {/* Background Image with Muted Colors - Full Page */}
        <div 
          className="fixed inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: `url(${cabinetBackground})` }}
        />
        {/* Overlay to mute colors - reduced opacity for more clarity */}
        <div className="fixed inset-0 bg-background/60 -z-10" />

        {/* Hero Section */}
        <section className="relative py-16">
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
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">
                <a 
                  href="https://www.lesodf.fr/vie-au-cabinet/usurpation-de-titre/code-36/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Qu'est-ce qu'un spécialiste en orthodontie ?
                </a>
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

        {/* Citation Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-card/80 backdrop-blur-sm rounded-2xl p-8">
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
      </div>
    </Layout>
  );
};

export default APropos;
