import { GraduationCap, Award, BookOpen, Building } from "lucide-react";
import Layout from "@/components/layout/Layout";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const qualifications = [
  {
    year: "2008",
    title: "Doctorat en Chirurgie Dentaire",
    institution: "Université Paris Descartes",
    icon: GraduationCap,
  },
  {
    year: "2011",
    title: "Spécialisation en Orthodontie",
    institution: "Faculté de Médecine de Paris",
    icon: Award,
  },
  {
    year: "2013",
    title: "Certification Invisalign",
    institution: "Align Technology",
    icon: BookOpen,
  },
  {
    year: "2015",
    title: "Formation continue en orthodontie linguale",
    institution: "European Society of Lingual Orthodontics",
    icon: Building,
  },
];

const memberships = [
  "Ordre National des Chirurgiens-Dentistes",
  "Société Française d'Orthodontie",
  "European Orthodontic Society",
  "World Federation of Orthodontists",
];

const Diplomes = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Diplômes & Qualifications
            </h1>
            <p className="text-xl text-white/80">
              Une formation d'excellence au service de votre sourire.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={doctorPortrait}
                  alt="Dr. Sophie Martin"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl gradient-hero opacity-20" />
            </div>

            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Votre Orthodontiste
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Dr. Sophie Martin
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Passionnée par l'orthodontie depuis plus de 15 ans, le Dr. Sophie Martin 
                a dédié sa carrière à l'amélioration des sourires de ses patients. 
                Son approche combine expertise technique et attention personnalisée.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Elle se forme continuellement aux dernières avancées technologiques 
                pour offrir à ses patients les traitements les plus modernes et efficaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Parcours Académique
            </h2>
            <p className="text-muted-foreground">
              Une formation rigoureuse et continue pour des soins de qualité.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {qualifications.map((qual, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center shrink-0">
                    <qual.icon className="h-7 w-7 text-white" />
                  </div>
                  {index < qualifications.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/20 mt-4" />
                  )}
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-soft flex-1">
                  <span className="text-primary font-semibold">{qual.year}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                    {qual.title}
                  </h3>
                  <p className="text-muted-foreground">{qual.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Affiliations Professionnelles
            </h2>
            <p className="text-muted-foreground">
              Membre actif des principales organisations professionnelles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {memberships.map((membership, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-card rounded-xl p-6 shadow-soft"
              >
                <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                <span className="text-foreground font-medium">{membership}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Diplomes;
