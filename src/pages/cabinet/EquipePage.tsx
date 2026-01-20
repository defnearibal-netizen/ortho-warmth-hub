import Layout from "@/components/layout/Layout";
import { Award, GraduationCap, Heart } from "lucide-react";

const team = [
  {
    name: "Dr. Sophie Martin",
    role: "Orthodontiste spécialiste",
    specialties: ["Orthodontie adulte", "Orthodontie enfant", "Aligneurs invisibles", "Technique linguale"],
  },
];

const staff = [
  { name: "Sophie Laurent", role: "Assistante dentaire qualifiée" },
  { name: "Julie Bernard", role: "Assistante dentaire qualifiée" },
  { name: "Camille Moreau", role: "Secrétaire médicale" },
  { name: "Émilie Petit", role: "Secrétaire médicale" },
];

const EquipePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Notre équipe
            </h1>
            <p className="text-lg text-muted-foreground">
              Des professionnels passionnés au service de votre sourire
            </p>
          </div>
        </div>
      </section>

      {/* Orthodontistes Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-heading">
              Nos orthodontistes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-2xl p-8 text-center shadow-soft"
                >
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
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
