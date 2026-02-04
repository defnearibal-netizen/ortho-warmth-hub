import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar } from "lucide-react";
import { useState } from "react";
import urgenceHero from "@/assets/urgence-hero.png";
import momDaughterCta from "@/assets/mom-daughter-cta.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const UrgencesPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const urgences = [
    {
      title: "Fil ou bague blessant",
      solution: "Utilisez de la cire orthodontique pour couvrir le fil ou la bague qui vous blesse. Si la douleur persiste, contactez-nous pour couper ou ajuster le fil.",
    },
    {
      title: "Bague décollée",
      solution: "Conservez le bracket si possible. S'il gêne, appliquez de la cire orthodontique. Contactez-nous rapidement pour un rendez-vous de recollage.",
    },
    {
      title: "Gouttière cassée ou perdue",
      solution: "Portez l'aligneur précédent en attendant. Contactez-nous pour commander un nouvel aligneur. Ne restez pas sans appareil.",
    },
    {
      title: "Dents sensibles",
      solution: "Prenez un antalgique (paracétamol). Si la douleur persiste au-delà de 48h après un ajustement, contactez-nous.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      {/* Hero Section - Style Enfants */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${urgenceHero})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/75" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16 h-full min-h-[60vh] md:min-h-[70vh] flex items-center">
          <div className="max-w-xl py-16 md:py-24 ml-4 md:ml-12 lg:ml-20">
            <p className="text-primary-foreground/80 text-lg mb-4 font-medium">
              Infos pratiques
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-heading leading-tight">
              Urgences orthodontiques
            </h1>
            <div className="w-16 h-1 bg-primary mb-8" />
            <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
              Comment réagir en cas de problème avec votre appareil ? Nous répondons à toutes vos questions pour des soins sereins et adaptés.
            </p>
          </div>
        </div>
      </section>

      {/* Urgences Accordion Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
              Une Urgence ?
            </h2>
            <p className="text-muted-foreground text-lg">
              Nous répondons à toutes vos questions pour des soins sereins et adaptés.
            </p>
          </div>

          {/* Accordion Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {urgences.map((urgence, index) => (
                <div key={index} className="bg-background rounded-xl overflow-hidden border border-border">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium text-foreground">{urgence.title}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-48' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 pt-0 text-muted-foreground text-sm leading-relaxed">
                      {urgence.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-10">
              <Button variant="cta" size="lg" asChild>
                <a
                  href={RDV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nous contacter
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${momDaughterCta})` }}
        />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16 h-full min-h-[50vh] md:min-h-[60vh] flex items-center py-12">
          <div className="bg-background/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-lg shadow-xl ml-2 md:ml-6 lg:ml-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading">
              Besoin d'aide ?
            </h2>
            <div className="w-12 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground mb-8">
              N'hésitez pas à nous contacter pour toute question ou urgence. Notre équipe est là pour vous accompagner.
            </p>
            <Button variant="cta" size="lg" asChild>
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
      </section>
    </Layout>
  );
};

export default UrgencesPage;
