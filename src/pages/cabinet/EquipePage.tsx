import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const staff = [
  { name: "Sylvain", role: "Assistant dentaire" },
  { name: "Ange", role: "Assistant dentaire" },
];

const EquipePage = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8" style={{ fontFamily: "'Tenor Sans', serif" }}>
              Notre équipe
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Notre équipe s'engage à créer un environnement accueillant et chaleureux où nous pouvons offrir des soins exceptionnels. Nos patients font partie de notre famille, et nous espérons que vous ressentirez cette attention dès votre première visite.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-10">
              Nous travaillons avec vous pour élaborer un plan de traitement personnalisé, adapté à vos besoins et objectifs. Nous savons qu'il faut beaucoup de confiance pour nous confier votre sourire, et nous sommes honorés de vous accompagner vers le résultat que vous méritez.
            </p>

            <Button 
              size="lg" 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider px-8"
            >
              <a href={RDV_LINK} target="_blank" rel="noopener noreferrer">
                Prendre rendez-vous
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Doctor Section - Two Column Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left: Image */}
        <div className="h-[50vh] lg:h-auto">
          <img
            src={doctorPortrait}
            alt="Dr Defné Aribal - Orthodontiste spécialiste"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Dark Chocolate Background with Content */}
        <div className="bg-[hsl(25_45%_30%)] flex items-center p-8 lg:p-16">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-2" style={{ fontFamily: "'Tenor Sans', serif" }}>
              Dr Defné Aribal
            </h2>
            <p className="text-white/80 text-lg mb-8 uppercase tracking-wider">
              Orthodontiste spécialiste qualifiée
            </p>

            <p className="text-white/90 leading-relaxed mb-6">
              Le Dr Aribal est votre orthodontiste spécialiste qualifiée. Elle allie une expertise exceptionnelle à une personnalité chaleureuse et un engagement profond pour aider ses patients à obtenir des sourires sains et harmonieux.
            </p>
            
            <p className="text-white/90 leading-relaxed mb-8">
              Dédiée à offrir des soins orthodontiques de pointe, le Dr Aribal se tient constamment informée des dernières innovations. Elle est spécialisée dans les traitements par aligneurs transparents et la technique linguale WIN.
            </p>

            <p className="text-white/70 italic leading-relaxed" style={{ fontFamily: "'Tenor Sans', serif" }}>
              "L'orthodontie est une joie pour moi pour de nombreuses raisons, mais ce que je préfère par-dessus tout, ce sont les relations que j'ai l'opportunité de construire avec mes patients."
            </p>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-foreground mb-4 text-center" style={{ fontFamily: "'Tenor Sans', serif" }}>
              Notre équipe de soutien
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
              {staff.map((member, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-xl p-6 text-center shadow-soft"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-semibold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EquipePage;
