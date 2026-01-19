import { GraduationCap, Award, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import doctorImage from "@/assets/doctor-portrait.jpg";

const team = [
  {
    name: "Dr. Sophie Martin",
    role: "Orthodontiste - Directrice",
    image: doctorImage,
    bio: "Diplômée de la Faculté de Chirurgie Dentaire de Paris, le Dr. Martin exerce l'orthodontie exclusive depuis plus de 15 ans. Passionnée par son métier, elle se forme régulièrement aux dernières techniques.",
    specialties: ["Orthodontie invisible", "Cas complexes adultes"],
  },
  {
    name: "Dr. Thomas Durand",
    role: "Orthodontiste",
    image: doctorImage,
    bio: "Spécialisé en orthodontie pédiatrique, le Dr. Durand accompagne les enfants et adolescents avec patience et bienveillance. Son approche ludique met les plus jeunes en confiance.",
    specialties: ["Orthodontie pédiatrique", "Traitement interceptif"],
  },
  {
    name: "Dr. Émilie Bernard",
    role: "Orthodontiste",
    image: doctorImage,
    bio: "Expert en aligneurs invisibles, le Dr. Bernard propose des solutions discrètes pour les patients soucieux de leur apparence pendant le traitement.",
    specialties: ["Aligneurs Invisalign", "Orthodontie linguale"],
  },
];

const staff = [
  {
    name: "Marie Lefebvre",
    role: "Assistante dentaire",
    description: "Accueil chaleureux et accompagnement des patients",
  },
  {
    name: "Julie Petit",
    role: "Assistante dentaire",
    description: "Préparation des soins et stérilisation",
  },
  {
    name: "Camille Moreau",
    role: "Secrétaire médicale",
    description: "Gestion des rendez-vous et dossiers patients",
  },
];

const Equipe = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notre Équipe
            </h1>
            <p className="text-xl text-white/80">
              Des professionnels passionnés au service de votre sourire.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Nos praticiens
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Des orthodontistes expérimentés
            </h2>
            <p className="text-muted-foreground">
              Notre équipe de spécialistes vous accompagne avec expertise et bienveillance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
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
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center mb-5">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Formation continue
              </h3>
              <p className="text-muted-foreground text-sm">
                Nos praticiens se forment régulièrement aux dernières avancées en orthodontie.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center mb-5">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Expertise reconnue
              </h3>
              <p className="text-muted-foreground text-sm">
                Des diplômes universitaires et des certifications attestant de notre savoir-faire.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center mb-5">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Passion du métier
              </h3>
              <p className="text-muted-foreground text-sm">
                Une équipe soudée et motivée par l'amélioration du bien-être de chaque patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Notre équipe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Le personnel du cabinet
            </h2>
            <p className="text-muted-foreground">
              Une équipe dévouée pour vous accueillir et vous accompagner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {staff.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-soft text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.description}
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
