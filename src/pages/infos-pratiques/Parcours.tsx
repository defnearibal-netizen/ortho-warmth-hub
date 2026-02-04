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
const PHONE_NUMBER = "01 23 45 67 89";

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
              Chez <strong className="text-foreground">le Cabinet d'Orthodontie Aribal</strong>, nous comprenons que chaque sourire est unique. C'est pourquoi nous avons mis en place un parcours de soin personnalisé, conçu pour vous accompagner à chaque étape vers un sourire éclatant et en pleine santé.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Image with number overlay */}
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                  {/* Number overlay */}
                  <div className="absolute top-0 left-0 bg-secondary/80 px-6 py-4">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Buttons - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border py-4 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" asChild className="border-2 border-cta-hover text-cta-hover hover:bg-cta-hover hover:text-primary-foreground">
              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                {PHONE_NUMBER}
              </a>
            </Button>
            <Button size="lg" asChild className="bg-cta-hover hover:bg-cta-hover/90 text-primary-foreground">
              <a
                href={RDV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                PRENDRE RENDEZ-VOUS
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24" />
    </Layout>
  );
};

export default Parcours;
