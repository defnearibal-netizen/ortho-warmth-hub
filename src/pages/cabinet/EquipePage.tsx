import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Users } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import logoOrthospe from "@/assets/logo-orthospe.png";
import logoCode36 from "@/assets/logo-code36.png";
import angePhoto from "@/assets/ange.png";
import sylvainPhoto from "@/assets/sylvain.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const diplomes = [
  "Diplôme de Docteur en Chirurgie-dentaire (Université de Paris)",
  "Diplôme d'études spécialisées en Orthopédie dento-faciale (Université de Paris)",
  "Ancienne Interne des Hôpitaux de Paris : Hôpital Rothschild AP-HP (Centre de référence des maladies rares), Hôpital Universitaire Pitié-Salpêtrière",
];

const certifications = [
  "Certification en technique linguale : WIN Lingual Systems",
  "Certification en technique par aligneurs : Invisalign, Spark, Angel",
  "Diplôme Universitaire Clinique des traitements odonto-stomatologiques du syndrome d'apnées obstructives du sommeil – Paris",
];

const memberships = [
  "Membre de la Société Française d'Orthopédie Dento-Faciale (SFODF)",
  "Membre de la Société Bioprogressive de Ricketts (SBR)",
];

const staff = [
  { name: "Sylvain", role: "Assistant dentaire", image: sylvainPhoto },
  { name: "Ange", role: "Assistant dentaire", image: angePhoto },
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
      <section className="grid grid-cols-1 lg:grid-cols-2 max-h-[50vh]">
        {/* Left: Image */}
        <div className="h-[40vh] lg:h-auto overflow-hidden">
          <img
            src={doctorPortrait}
            alt="Dr Defné Aribal - Orthodontiste spécialiste"
            className="w-full h-full object-cover object-[center_15%] scale-110"
          />
        </div>

        {/* Right: Dark Chocolate Background with Content */}
        <div className="bg-[hsl(25_45%_30%)] flex items-center p-6 lg:p-10">
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

          </div>
        </div>
      </section>

      {/* Formations & Certifications Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-12">
              <img 
                src={logoOrthospe} 
                alt="Orthospé - Label de qualité en orthodontie" 
                className="h-16 object-contain"
              />
              <img 
                src={logoCode36} 
                alt="Code 36 - Spécialiste qualifié en orthodontie" 
                className="h-16 object-contain"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Diplômes */}
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Formation</h3>
                </div>
                <ul className="space-y-3">
                  {diplomes.map((diplome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{diplome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
                </div>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Affiliations */}
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Affiliations</h3>
                </div>
                <ul className="space-y-3">
                  {memberships.map((membership, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{membership}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
                  {member.image ? (
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-semibold text-primary">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  )}
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
