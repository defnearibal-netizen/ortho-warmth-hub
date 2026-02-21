import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import EmplacementContact from "@/components/shared/EmplacementContact";
import { Calendar, Phone, ClipboardList, Pencil, FileText, Stethoscope, RefreshCw, Smile } from "lucide-react";
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
      description: "Lors de la consultation, un examen clinique complet est réalisé (visage, dents, langue), suivi de la présentation du devis et du traitement proposé.\n\nLe déroulement du traitement est expliqué et toutes vos questions sont abordées, notamment sur la durée et les techniques innovantes.",
    },
    {
      number: 2,
      title: "Constitution du dossier (bilan)",
      image: orthodonticEquipment,
      description: "La consultation comprend la réalisation de photographies du visage et des dents, des radiographies numériques (panoramique et téléradiographie de profil) accompagnées d'une analyse céphalométrique, ainsi que des empreintes numériques.",
    },
    {
      number: 3,
      title: "Plan de traitement",
      image: cabinetInterior,
      description: "Le diagnostic est expliqué en détail, les différentes options et moyens de traitement sont présentés, puis le consentement éclairé est validé par signature électronique.",
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

          {/* Timeline Chart */}
          <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {/* Step 1 */}
              <div className="text-center flex flex-col items-center">
                <div className="inline-block px-4 py-2 rounded-full bg-cta-hover text-primary-foreground font-semibold text-sm mb-4 whitespace-nowrap">
                  1ère consultation
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[60px] flex items-start">
                  Entretien et examen clinique pour cibler vos attentes
                </p>
                <div className="w-px h-6 bg-border mt-auto" />
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mt-2">
                  <ClipboardList className="w-7 h-7 text-cta-hover" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center flex flex-col items-center">
                <div className="inline-block px-4 py-2 rounded-full bg-[#6B7B8C] text-primary-foreground font-semibold text-sm mb-4 whitespace-nowrap">
                  Bilan
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[60px] flex items-start">
                  Photos, radios et empreintes numériques 3D
                </p>
                <div className="w-px h-6 bg-border mt-auto" />
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mt-2">
                  <Pencil className="w-7 h-7 text-[#6B7B8C]" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center flex flex-col items-center">
                <div className="inline-block px-4 py-2 rounded-full bg-[#A8A090] text-primary-foreground font-semibold text-sm mb-4 whitespace-nowrap">
                  Plan de traitement
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[60px] flex items-start">
                  Diagnostic, options et consentement éclairé
                </p>
                <div className="w-px h-6 bg-border mt-auto" />
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mt-2">
                  <FileText className="w-7 h-7 text-[#A8A090]" />
                </div>
              </div>

              {/* Step 4 */}
              <div className="text-center flex flex-col items-center">
                <div className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm mb-4 whitespace-nowrap">
                  Pose
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[60px] flex items-start">
                  Installation de l'appareil et conseils de brossage
                </p>
                <div className="w-px h-6 bg-border mt-auto" />
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mt-2">
                  <Stethoscope className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Step 5 */}
              <div className="text-center flex flex-col items-center">
                <div className="inline-block px-4 py-2 rounded-full bg-[#C4956A] text-primary-foreground font-semibold text-sm mb-4 whitespace-nowrap">
                  Suivi
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[60px] flex items-start">
                  RDV d'activation toutes les 4 à 5 semaines
                </p>
                <div className="w-px h-6 bg-border mt-auto" />
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mt-2">
                  <RefreshCw className="w-7 h-7 text-[#C4956A]" />
                </div>
              </div>

              {/* Step 6 */}
              <div className="text-center flex flex-col items-center">
                <div className="inline-block px-4 py-2 rounded-full bg-[#8B6F5C] text-primary-foreground font-semibold text-sm mb-4 whitespace-nowrap">
                  Contention
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[60px] flex items-start">
                  Dépose et maintien des résultats
                </p>
                <div className="w-px h-6 bg-border mt-auto" />
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mt-2">
                  <Smile className="w-7 h-7 text-[#8B6F5C]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={step.number}>
                {/* Separator line - full width, except for first item */}
                {index > 0 && (
                  <div className="h-px w-full bg-cta-hover my-8" />
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-8">
                  {/* Image with number overlay */}
                  <div className="relative">
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
                    <div className="text-muted-foreground leading-relaxed space-y-3">
                      {step.description.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmplacementContact showDivider />
    </Layout>
  );
};

export default Parcours;
