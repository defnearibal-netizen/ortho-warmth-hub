import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar, Phone } from "lucide-react";
import { useState } from "react";
import urgenceHero from "@/assets/urgence-hero.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";
const PHONE_NUMBER = "+225 05 75 43 00 00";

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

      {/* Separator before Emplacement */}
      <div className="w-full py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-primary/30" />
            <div className="w-2 h-2 rounded-full bg-primary/40" />
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
        </div>
      </div>

      {/* Emplacement et contact Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
              Emplacement et contact
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Horaires - centered */}
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
                  Horaires d'ouvertures
                </h3>
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  TEL : {PHONE_NUMBER}
                </a>
                <div className="w-12 h-0.5 bg-primary mt-2 mb-8" />
                
                {/* Hours table */}
                <div className="space-y-4 w-full max-w-xs">
                  <div className="flex justify-between border-b border-border/30 pb-3">
                    <span className="text-foreground">Lundi</span>
                    <span className="text-muted-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-3">
                    <span className="text-foreground">Mardi</span>
                    <span className="text-muted-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-3">
                    <span className="text-foreground">Mercredi</span>
                    <span className="text-muted-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-3">
                    <span className="text-foreground">Jeudi</span>
                    <span className="text-muted-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-3">
                    <span className="text-foreground">Vendredi</span>
                    <span className="text-muted-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-3">
                    <span className="text-foreground">Samedi</span>
                    <span className="text-muted-foreground">Fermé</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Dimanche</span>
                    <span className="text-muted-foreground">Fermé</span>
                  </div>
                </div>

                <p className="text-muted-foreground mt-8 text-sm">
                  Boulevard de Marseille, Zone 4 Abidjan
                </p>
              </div>

              {/* Right: Google Maps */}
              <div className="h-[400px] rounded-lg overflow-hidden shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5!2d-3.9883!3d5.2888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTcnMTkuNiJOIDPCsDU5JzE4IlciZg!5e0!3m2!1sfr!2sci!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation du cabinet"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="border-cta-hover text-cta-hover hover:bg-cta-hover hover:text-primary-foreground"
              >
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}>
                  {PHONE_NUMBER}
                </a>
              </Button>
              <Button 
                size="lg" 
                asChild 
                className="bg-cta-hover hover:bg-cta-hover/90 text-primary-foreground"
              >
                <a href={RDV_LINK} target="_blank" rel="noopener noreferrer">
                  PRENDRE RENDEZ-VOUS
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UrgencesPage;
