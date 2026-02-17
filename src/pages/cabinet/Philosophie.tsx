import Layout from "@/components/layout/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import philosophiePatient from "@/assets/philosophie-patient.jpg";

const demarcheItems = [
  {
    id: "ecoresponsable",
    label: "Démarche écoresponsable",
    title: "Démarche écoresponsable",
    description:
      "Cabinet entièrement dématérialisé pour réduire notre impact environnemental. Nous nous inscrivons dans une démarche écoresponsable en limitant au maximum l'utilisation de papier et en privilégiant les outils numériques pour la gestion des dossiers, la communication et le suivi des patients.",
  },
  {
    id: "application",
    label: "Application mobile",
    title: "Application mobile",
    description:
      "Suivi orthodontique facilité grâce à notre application dédiée. Vous pouvez suivre l'évolution de votre traitement, recevoir des rappels de rendez-vous et communiquer directement avec notre équipe depuis votre smartphone.",
  },
  {
    id: "empreintes",
    label: "Empreintes numériques",
    title: "Empreintes numériques",
    description:
      "Le cabinet est équipé pour votre plus grand confort d'une caméra permettant la prise d'empreintes numériques 3D. Cette technologie permet d'enregistrer numériquement vos arcades dentaires. Il s'agit d'un processus rapide et très confortable pour le patient, remplaçant les traditionnelles pâtes à empreinte.",
  },
  {
    id: "logiciel",
    label: "Logiciel patient",
    title: "Logiciel patient",
    description:
      "Gestion simplifiée des dossiers et communication facilitée. Notre logiciel permet un suivi précis de chaque patient, une planification optimale des rendez-vous et une communication fluide entre l'équipe soignante et les patients.",
  },
];

const Philosophie = () => {
  return (
    <Layout>
      {/* Title Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-center" style={{ fontFamily: "'Tenor Sans', serif" }}>
            Notre philosophie
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
        </div>
      </section>

      {/* Hero Section - Two Column Layout */}
      <section className="min-h-[60vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[hsl(25_45%_30%)] flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg text-center">
            <div className="text-6xl text-white/40 mb-4" style={{ fontFamily: "serif" }}>
              ❝
            </div>
            <p className="text-white/90 text-lg leading-relaxed">
              Chaque traitement vous est expliqué de manière claire et détaillée, afin que vous compreniez pleinement chaque étape de votre prise en charge. Nous prenons le temps d'échanger avec vous, de répondre à toutes vos questions et de vous accompagner avec attention tout au long de votre parcours orthodontique.
            </p>
          </div>
        </div>
        <div className="h-[50vh] lg:h-auto">
          <img
            src={philosophiePatient}
            alt="Orthodontiste avec patiente"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Démarche Section - Tabs Layout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading">
              Notre démarche
            </h2>
            <div className="w-16 h-0.5 bg-primary mb-10" />

            <Tabs defaultValue="ecoresponsable" className="w-full">
              <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none h-auto p-0 gap-0">
                {demarcheItems.map((item) => (
                  <TabsTrigger
                    key={item.id}
                    value={item.id}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none bg-transparent px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {demarcheItems.map((item) => (
                <TabsContent key={item.id} value={item.id} className="mt-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Text */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    {/* Right: Image Placeholder */}
                    <div className="h-[350px] bg-muted rounded-xl flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">Image à venir</p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Philosophie;
