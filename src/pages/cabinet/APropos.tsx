import Layout from "@/components/layout/Layout";
import { Building2, Award, Heart, Users } from "lucide-react";

const APropos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              À propos de notre cabinet
            </h1>
            <p className="text-lg text-muted-foreground">
              Un cabinet d'orthodontie moderne dédié à votre sourire depuis plus de 20 ans
            </p>
          </div>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 font-heading">
                  Notre histoire
                </h2>
                <p className="text-muted-foreground mb-4">
                  Fondée en 2003, la Clinique Dentaire Panorama s'est imposée comme une référence 
                  en orthodontie dans la région. Notre cabinet a été créé avec une vision claire : 
                  offrir des soins orthodontiques d'excellence dans un environnement chaleureux et moderne.
                </p>
                <p className="text-muted-foreground mb-4">
                  Au fil des années, nous avons accompagné des milliers de patients vers un sourire 
                  harmonieux, en nous adaptant constamment aux évolutions technologiques et aux 
                  nouvelles techniques de traitement.
                </p>
                <p className="text-muted-foreground">
                  Aujourd'hui, notre équipe pluridisciplinaire continue de se former régulièrement 
                  pour vous proposer les traitements les plus innovants et les plus adaptés à vos besoins.
                </p>
              </div>
              <div className="bg-secondary rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">Années d'expérience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-sm text-muted-foreground">Patients traités</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">6</div>
                    <div className="text-sm text-muted-foreground">Spécialistes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-heading">
              Nos valeurs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-background rounded-xl p-6 text-center shadow-soft">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Des soins de haute qualité avec les meilleures techniques
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center shadow-soft">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Bienveillance</h3>
                <p className="text-sm text-muted-foreground">
                  Une approche humaine et attentive à chaque patient
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center shadow-soft">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Équipements modernes et techniques de pointe
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center shadow-soft">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Proximité</h3>
                <p className="text-sm text-muted-foreground">
                  Un accompagnement personnalisé tout au long du traitement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
