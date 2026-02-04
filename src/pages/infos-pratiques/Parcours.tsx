import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import dentistPatient from "@/assets/dentist-patient.jpg";
import dentistPatient2 from "@/assets/dentist-patient-2.jpg";
import orthodonticEquipment from "@/assets/orthodontic-equipment.jpg";
import cabinetInterior from "@/assets/cabinet-interior.png";
import waitingRoom from "@/assets/waiting-room.jpg";
import toothMirror from "@/assets/tooth-mirror.jpg";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";
const PHONE_NUMBER = "+225 05 75 43 00 00";

const Parcours = () => {
  const steps = [
    {
      number: 1,
      title: "Première consultation",
      image: dentistPatient,
      description: "Lors de la 1ère consultation, un entretien ainsi qu'un examen clinique sont réalisés. Ce 1er rendez-vous vise à cibler vos attentes, déterminer si un traitement est nécessaire et si oui quel est le meilleur moment pour le débuter.",
    },
    {
      number: 2,
      title: "Constitution du dossier (bilan)",
      image: orthodonticEquipment,
      description: "Création du dossier orthodontique : photographies du visage et des dents, radiographies numériques (panoramique, téléradiographie de profil) et empreintes numériques 3D. Ces examens permettent d'établir un diagnostic précis.",
    },
    {
      number: 3,
      title: "Plan de traitement",
      image: cabinetInterior,
      description: "Explication du diagnostic et exposition des différentes options et moyens de traitement. Signature électronique du consentement éclairé après avoir répondu à toutes vos questions.",
    },
    {
      number: 4,
      title: "La pose de l'appareil",
      image: dentistPatient2,
      description: "C'est le jour J ! Il est conseillé d'arriver à l'heure et les dents parfaitement brossées. Vous recevrez les explications des techniques de brossage avec un appareil ainsi que les conseils alimentaires.",
    },
    {
      number: 5,
      title: "Suivi orthodontique",
      image: waitingRoom,
      description: "RDV d'activation de l'appareil toutes les 4 à 5 semaines. Contrôle de l'hygiène dentaire et des gencives, réalisation des radiographies de contrôle et vérification du respect des consignes.",
    },
    {
      number: 6,
      title: "Dépose et contention",
      image: toothMirror,
      description: "Bravo ! C'est la fin du traitement actif. Dépose des appareils, nettoyage complet des dents et mise en place de la contention pour maintenir les dents dans leur nouvelle position.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Le Parcours de soin
            </h1>
            <p className="text-lg text-muted-foreground">
              Chez <strong className="text-foreground">la Clinique Dentaire Panorama</strong>, nous comprenons que chaque sourire est unique. C'est pourquoi nous avons mis en place un parcours de soin personnalisé, conçu pour vous accompagner à chaque étape vers un sourire éclatant et en pleine santé.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={step.number}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-8">
                  {/* Image with number overlay and top separator line */}
                  <div className="relative">
                    {/* Separator line at top of image */}
                    {index > 0 && (
                      <div className="absolute -top-8 left-0 right-0 h-px bg-cta-hover" />
                    )}
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 md:h-80 object-cover rounded-lg"
                    />
                    {/* Number overlay */}
                    <div className="absolute top-0 left-0 bg-muted/90 px-6 py-4">
                      <span className="text-4xl md:text-5xl font-light text-muted-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading">
                      {step.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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

export default Parcours;
