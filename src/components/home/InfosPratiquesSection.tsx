import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, AlertTriangle, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const practicalInfos = [
  {
    id: "parcours",
    icon: MapPin,
    title: "Votre parcours",
    shortTitle: "Votre Parcours",
    description: "De la consultation à la fin du traitement, nous vous accompagnons à chaque étape de votre parcours orthodontique.",
    details: "De la première consultation au suivi post-traitement, notre équipe vous guide tout au long de votre parcours. Nous prenons le temps de vous expliquer chaque étape : bilan initial, plan de traitement personnalisé, pose de l'appareil, visites de contrôle régulières et phase de contention pour des résultats durables.",
    link: "/infos-pratiques/parcours",
  },
  {
    id: "urgences",
    icon: AlertTriangle,
    title: "Urgences",
    shortTitle: "Urgences",
    description: "Bracket décollé, fil qui pique ? Nous sommes là pour vous aider rapidement.",
    details: "Un bracket décollé, un fil qui pique ou une gêne inhabituelle ? Pas de panique ! Notre équipe est disponible pour vous guider et vous recevoir en urgence si nécessaire. Nous vous expliquons les gestes de premiers secours et vous accueillons rapidement au cabinet.",
    link: "/infos-pratiques/urgences",
  },
  {
    id: "conseils",
    icon: FileText,
    title: "Conseils",
    shortTitle: "Conseils",
    description: "Recommandations pour bien vivre votre traitement au quotidien.",
    details: "Pour que votre traitement se déroule dans les meilleures conditions, nous vous donnons tous les conseils pratiques : alimentation à privilégier, hygiène bucco-dentaire adaptée, activités sportives, et astuces pour gérer les petits désagréments. Suivez nos recommandations pour un sourire parfait !",
    link: "/infos-pratiques/conseils",
  },
];

const InfosPratiquesSection = () => {
  const [activeTab, setActiveTab] = useState("parcours");
  
  const activeInfo = practicalInfos.find(info => info.id === activeTab) || practicalInfos[0];

  return (
    <section className="py-24 bg-background" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Tout ce qu'il faut savoir
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Préparez votre visite et vivez votre traitement sereinement.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-border mb-12">
          <nav className="flex justify-center gap-12 md:gap-20 lg:gap-28">
            {practicalInfos.map((info) => (
              <button
                key={info.id}
                onClick={() => setActiveTab(info.id)}
                className={cn(
                  "pb-4 text-base md:text-lg font-medium transition-colors relative",
                  activeTab === info.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {info.shortTitle}
                {activeTab === info.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto mb-10">
          {/* Text Content - Centered */}
          <div className="animate-fade-in text-center" key={activeTab}>
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              {activeInfo.title}
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {activeInfo.details}
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to={activeInfo.link} className="inline-flex items-center gap-2">
                En savoir plus
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Link to all infos */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/infos-pratiques" className="flex items-center gap-2">
              Toutes les infos pratiques
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InfosPratiquesSection;
