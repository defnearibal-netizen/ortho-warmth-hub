import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBackground from "@/assets/cta-background.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const CtaBanner = () => {
  return (
    <section className="py-24 bg-background" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${ctaBackground})` }}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="py-24 px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Prêt à transformer votre sourire ?
            </h2>
            <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto">
              Prenez rendez-vous dès aujourd'hui pour une première consultation 
              et découvrez comment nous pouvons vous accompagner.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a
                href={RDV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Prendre rendez-vous
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
