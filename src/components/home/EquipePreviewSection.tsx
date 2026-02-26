import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import defnePortrait from "@/assets/defne-portrait-cutout.png";

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
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              Le Dr Aribal est votre orthodontiste spécialiste qualifiée. Elle allie une expertise exceptionnelle à une personnalité chaleureuse et un engagement profond pour aider ses patients à obtenir des sourires sains et harmonieux.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg" asChild className="border-2 border-cta-hover text-cta-hover hover:bg-cta-hover hover:text-cta-foreground">
                <Link to="/cabinet/equipe">
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

          {/* Right - Photo with colored block */}
          <div className="relative flex justify-center items-end">
            {/* Chocolate block behind */}
            <div className="w-[80%] h-[85%] absolute bottom-0 right-[10%] rounded-3xl bg-cta-hover" />
            {/* Portrait that overflows above the block */}
            <img
              src={defnePortrait}
              alt="Dr Defné Aribal - Orthodontiste spécialiste"
              className="relative z-10 w-[65%] object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipePreviewSection;
