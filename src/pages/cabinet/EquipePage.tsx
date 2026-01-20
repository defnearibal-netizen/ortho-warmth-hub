import Layout from "@/components/layout/Layout";
import { Award, GraduationCap, Heart, BookOpen, Building2, Users } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import logoOrthospe from "@/assets/logo-orthospe.png";
import logoCode36 from "@/assets/logo-code36.png";

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
  { name: "Sylvain", role: "Assistant dentaire" },
  { name: "Ange", role: "Assistant dentaire" },
];

const EquipePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading">
              Notre équipe
            </h1>
          </div>
        </div>
      </section>

      {/* Dr Defné Aribal Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Photo à gauche */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative">
                  <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-elegant">
                    <img
                      src={doctorPortrait}
                      alt="Dr Defné Aribal - Orthodontiste spécialiste"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-8 text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-foreground font-heading">
                    Dr Defné Aribal
                  </h2>
                  <p className="text-primary font-medium text-lg mt-2">
                    Orthodontiste spécialiste qualifiée
                  </p>
                  <div className="flex items-center gap-6 mt-4">
                    <img 
                      src={logoOrthospe} 
                      alt="Orthospé - Label de qualité en orthodontie" 
                      className="h-20 object-contain"
                    />
                    <img 
                      src={logoCode36} 
                      alt="Code 36 - Spécialiste qualifié en orthodontie" 
                      className="h-20 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Diplômes et certifications à droite */}
              <div className="space-y-8">
                {/* Diplômes */}
                <div className="bg-secondary rounded-2xl p-6 shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Formation</h3>
                  </div>
                  <ul className="space-y-3">
                    {diplomes.map((diplome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{diplome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certifications */}
                <div className="bg-secondary rounded-2xl p-6 shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
                  </div>
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Affiliations */}
                <div className="bg-secondary rounded-2xl p-6 shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Affiliations professionnelles</h3>
                  </div>
                  <ul className="space-y-3">
                    {memberships.map((membership, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{membership}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs de l'équipe */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-heading">
              Nos engagements
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6 text-center shadow-soft">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Formation continue</h3>
                <p className="text-sm text-muted-foreground">
                  Notre équipe se forme régulièrement aux dernières avancées
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center shadow-soft">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Expertise reconnue</h3>
                <p className="text-sm text-muted-foreground">
                  Des praticiens qualifiés et expérimentés
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center shadow-soft">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Passion du métier</h3>
                <p className="text-sm text-muted-foreground">
                  Un dévouement total pour votre bien-être
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-heading">
              Notre équipe de soutien
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {staff.map((member, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-xl p-6 text-center"
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
