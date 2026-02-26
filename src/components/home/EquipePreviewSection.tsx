import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import defnePortrait from "@/assets/defne-portrait-home.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const EquipePreviewSection = () => {
  return (
    <section className="py-24 bg-background" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Text */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-normal text-foreground mb-6 leading-tight"
              style={{ fontFamily: "'Tenor Sans', serif" }}
            >
              Une équipe à votre écoute
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Notre équipe s'engage à créer un environnement accueillant et chaleureux où nous pouvons offrir des soins exceptionnels.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Le Dr Aribal est votre orthodontiste spécialiste qualifiée. Elle allie une expertise exceptionnelle à une personnalité chaleureuse et un engagement profond pour aider ses patients à obtenir des sourires sains et harmonieux.
            </p>

            <Link
              to="/cabinet/equipe"
              className="inline-flex items-center gap-1 text-foreground font-medium hover:text-primary transition-colors mb-8"
            >
              En savoir plus <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">15+</span>
                </div>
                <span className="text-muted-foreground text-sm">Années d'expérience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">5000+</span>
                </div>
                <span className="text-muted-foreground text-sm">Patients traités</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">4</span>
                </div>
                <span className="text-muted-foreground text-sm">Praticiens & assistants</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">6+</span>
                </div>
                <span className="text-muted-foreground text-sm">Types de traitements</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg" asChild className="border-2 border-cta-hover text-cta-hover hover:bg-cta-hover hover:text-cta-foreground">
                <Link to="/cabinet/equipe" className="flex items-center gap-2">
                  Notre équipe
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-cta-hover text-cta-foreground hover:bg-cta-hover/90">
                <a
                  href={RDV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Prendre RDV
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Photo with colored background */}
          <div className="relative flex justify-center">
            {/* Colored block behind image */}
            <div className="absolute top-6 right-0 w-[85%] h-[95%] rounded-3xl bg-cta-hover/15" />
            <img
              src={defnePortrait}
              alt="Dr Defné Aribal - Orthodontiste spécialiste"
              className="relative z-10 w-[75%] md:w-[70%] rounded-3xl object-cover shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipePreviewSection;
