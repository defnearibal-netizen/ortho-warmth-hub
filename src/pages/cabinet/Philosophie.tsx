import Layout from "@/components/layout/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import philosophiePatient from "@/assets/philosophie-patient.jpg";
import demarchePhilosophie from "@/assets/demarche-philosophie.jpg";
import demarcheTransparence from "@/assets/demarche-transparence.png";
import valeurEcoute from "@/assets/valeur-ecoute.jpg";
import valeurExigence from "@/assets/valeur-exigence.jpg";
import valeurConfiance from "@/assets/valeur-confiance.jpg";

const demarcheItems = [
  {
    id: "philosophie",
    label: "Notre philosophie",
    title: "Notre philosophie",
    image: demarchePhilosophie,
    description:
      "Le cabinet est entièrement dématérialisé afin de s'inscrire dans une démarche écoresponsable. Nous utilisons un logiciel patient ainsi qu'une application mobile pour faciliter la gestion des dossiers et le suivi orthodontique. Par ailleurs, le cabinet est équipé de technologies de pointe, notamment pour les empreintes numériques et les photographies, garantissant confort, précision et modernité.",
  },
  {
    id: "transparence",
    label: "Transparence et pédagogie",
    title: "Transparence et pédagogie",
    image: demarcheTransparence,
    description:
      "Chaque traitement vous est expliqué de manière claire et détaillée, afin que vous compreniez pleinement chaque étape de votre prise en charge. Nous prenons le temps d'échanger avec vous, de répondre à toutes vos questions et de vous accompagner avec attention tout au long de votre parcours orthodontique.",
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

      {/* Spécialisation Section - Dark background like reference */}
      <section className="py-20 bg-cta-hover">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8 font-heading">
              Une spécialisation en orthodontie
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-4">
              Au cœur de notre pratique se trouve une conviction simple : chaque patient est unique et mérite une prise en charge attentive, personnalisée et respectueuse. Nous prenons le temps de comprendre vos besoins, vos attentes et votre rythme afin de vous proposer des solutions adaptées, efficaces et durables.
            </p>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-16">
              Notre approche repose sur l'écoute, la transparence et la confiance. À chaque étape, nous vous expliquons clairement les traitements proposés, les techniques utilisées et les résultats attendus, afin que vous avanciez sereinement, en toute connaissance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <img src={valeurEcoute} alt="Écoute" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground uppercase tracking-wider mb-3">
                  Écoute
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Chaque patient est accueilli avec attention. Nous prenons le temps d'écouter, de rassurer et d'accompagner, à chaque étape du traitement.
                </p>
              </div>
              <div className="text-center">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <img src={valeurExigence} alt="Exigence" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground uppercase tracking-wider mb-3">
                  Exigence
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Nous accordons une grande importance à la qualité des soins, à la rigueur des diagnostics et à la précision des traitements pour des résultats fiables et durables.
                </p>
              </div>
              <div className="text-center">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <img src={valeurConfiance} alt="Confiance" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground uppercase tracking-wider mb-3">
                  Confiance
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Nous expliquons chaque décision de manière simple et honnête, afin que vous avanciez en toute confiance, sans surprise, dans votre parcours de soins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Two Column Layout */}
      <section className="min-h-[60vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[hsl(25_45%_30%)] flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg text-center">
            <div className="text-6xl text-white/40 mb-4" style={{ fontFamily: "serif" }}>
              ❝
            </div>
            <p className="text-white/90 text-lg leading-relaxed italic">
              "No bracket system will turn a difficult case into an easy one or change the rules of biology, but we can provide a big help in improving the finishing of your cases in a consistent way."
            </p>
            <p className="text-white/70 text-sm mt-6 font-semibold tracking-wide">
              — Dr Stefano Troiani
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

            <Tabs defaultValue="philosophie" className="w-full">
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
                    <div className="h-[350px] rounded-xl overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
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
