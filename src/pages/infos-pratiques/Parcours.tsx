import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import EmplacementContact from "@/components/shared/EmplacementContact";
import { Calendar, Phone, ClipboardList, Pencil, FileText, Stethoscope, RefreshCw, Smile } from "lucide-react";
import parcours1 from "@/assets/parcours-1.png";
import parcours2 from "@/assets/parcours-2.jpg";
import parcours3 from "@/assets/parcours-3.png";
import parcours4 from "@/assets/parcours-4.png";
import parcours5 from "@/assets/parcours-5.png";
import parcours6 from "@/assets/parcours-6.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";
const PHONE_NUMBER = "+225 05 75 43 00 00";

const Parcours = () => {
  const steps = [
    {
      number: 1,
      title: "Première consultation",
      image: parcours1,
      description: "Lors de la consultation, un examen clinique complet est réalisé (visage, dents, langue), suivi de la présentation du devis et du traitement proposé.\n\nLe déroulement du traitement est expliqué et toutes vos questions sont abordées, notamment sur la durée et les techniques innovantes.",
    },
    {
      number: 2,
      title: "Constitution du dossier (bilan)",
      image: parcours2,
      description: "La consultation comprend la réalisation de photographies du visage et des dents, des radiographies numériques (panoramique et téléradiographie de profil) accompagnées d'une analyse céphalométrique, ainsi que des empreintes numériques.",
    },
    {
      number: 3,
      title: "Plan de traitement",
      image: parcours3,
      description: "Le diagnostic est expliqué en détail, les différentes options et moyens de traitement sont présentés, puis le consentement éclairé est validé par signature électronique.",
    },
    {
      number: 4,
      title: "La pose de l'appareil",
      image: parcours4,
      description: "Le jour J, il est conseillé d'arriver à l'heure avec des dents parfaitement brossées, d'écouter attentivement les explications sur les techniques de brossage avec un appareil ainsi que les conseils alimentaires, et de se préparer à son premier selfie avec l'appareil.\n\nLe suivi orthodontique comprend des rendez-vous d'activation toutes les 4 à 5 semaines, le contrôle de l'hygiène dentaire et des gencives, la réalisation de radiographies de contrôle et la vérification du respect des consignes, notamment le port des élastiques.",
    },
    {
      number: 5,
      title: "Suivi orthodontique",
      image: parcours5,
      description: "Le suivi orthodontique comprend des rendez-vous d'activation de l'appareil toutes les 4 à 5 semaines, le contrôle de l'hygiène dentaire et des gencives, la réalisation de radiographies de contrôle ainsi que la vérification du respect des consignes, notamment le port des élastiques.",
    },
    {
      number: 6,
      title: "Dépose et contention",
      image: parcours6,
      description: "Bravo, le traitement actif est terminé. Les appareils sont déposés, un nettoyage complet des dents est réalisé et une contention est mise en place afin de maintenir les dents dans leur nouvelle position.\n\nDes rendez-vous de contrôle de la contention sont ensuite programmés tous les 3 à 4 mois pendant un an.",
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
