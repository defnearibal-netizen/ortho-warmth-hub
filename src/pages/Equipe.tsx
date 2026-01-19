import { GraduationCap, Award, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import doctorImage from "@/assets/doctor-portrait.jpg";

const team = [
  {
    name: "Dr. Sophie Martin",
    role: "Orthodontiste - Directrice",
    image: doctorImage,
    specialties: ["Orthodontie invisible", "Cas complexes adultes"],
  },
  {
    name: "Dr. Thomas Durand",
    role: "Orthodontiste",
    image: doctorImage,
    specialties: ["Orthodontie pédiatrique", "Traitement interceptif"],
  },
  {
    name: "Dr. Émilie Bernard",
    role: "Orthodontiste",
    image: doctorImage,
    specialties: ["Aligneurs Invisalign", "Orthodontie linguale"],
  },
];

const staff = [
  {
    name: "Marie Lefebvre",
    role: "Assistante dentaire",
  },
  {
    name: "Julie Petit",
    role: "Assistante dentaire",
  },
  {
    name: "Camille Moreau",
    role: "Secrétaire médicale",
  },
];

const Equipe = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
              Notre Équipe
            </h1>
            <p className="text-lg text-muted-foreground">
              Des professionnels passionnés au service de votre sourire.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nos praticiens
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 font-heading">
              Des orthodontistes expérimentés
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 text-center"
              >
                <div className="w-32 h-32 mx-auto mt-8 rounded-full overflow-hidden border-4 border-accent/30">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1 font-heading">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-4">
                    {member.role}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-heading">
                Formation continue
              </h3>
              <p className="text-muted-foreground text-sm">
                Nos praticiens se forment régulièrement aux dernières avancées.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-heading">
                Expertise reconnue
              </h3>
              <p className="text-muted-foreground text-sm">
                Des diplômes et certifications attestant de notre savoir-faire.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-heading">
                Passion du métier
              </h3>
              <p className="text-muted-foreground text-sm">
                Une équipe motivée par le bien-être de chaque patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Notre équipe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 font-heading">
              Le personnel du cabinet
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {staff.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft text-center min-w-[200px]"
              >
                <div className="w-14 h-14 rounded-full bg-accent/30 mx-auto flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-1 font-heading">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Equipe;
