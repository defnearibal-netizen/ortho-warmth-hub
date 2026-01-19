import { CheckCircle, Award, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import waitingRoom from "@/assets/waiting-room.jpg";
import equipment from "@/assets/orthodontic-equipment.jpg";

const values = [
  {
    icon: Heart,
    title: "Bienveillance",
    description: "Chaque patient est unique. Nous prenons le temps d'écouter vos besoins et vos inquiétudes.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Nous nous formons continuellement aux dernières techniques pour vous offrir le meilleur.",
  },
  {
    icon: Shield,
    title: "Confiance",
    description: "Transparence sur les traitements, les délais et les tarifs. Aucune mauvaise surprise.",
  },
  {
    icon: CheckCircle,
    title: "Résultats",
    description: "Des milliers de sourires transformés grâce à notre expertise en orthodontie.",
  },
];

const Cabinet = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notre Cabinet d'Orthodontie
            </h1>
            <p className="text-xl text-white/80">
              Découvrez un espace dédié à votre sourire, alliant technologie de pointe et confort.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Notre philosophie
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Une approche centrée sur vous
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                À la Clinique Dentaire Panorama, nous croyons que chaque sourire raconte une histoire. 
                C'est pourquoi nous adoptons une approche personnalisée, en prenant le temps de 
                comprendre vos attentes et vos préoccupations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Notre équipe pluridisciplinaire travaille en synergie pour vous proposer 
                des solutions adaptées à votre situation, que vous soyez enfant, adolescent ou adulte.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous accordons une importance particulière au confort et à la sérénité de nos patients. 
                Notre cabinet a été conçu pour être un espace apaisant où vous vous sentirez en confiance.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={waitingRoom}
                alt="Salle d'attente de la Clinique Dentaire Panorama"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Nos valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Ce qui nous guide au quotidien
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-soft text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary mx-auto flex items-center justify-center mb-5">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-card">
              <img
                src={equipment}
                alt="Équipement moderne de la clinique"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Nos équipements
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Technologie de pointe
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Notre cabinet est équipé des dernières technologies en matière d'orthodontie :
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">Scanner 3D pour une planification précise des traitements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">Radiographie panoramique numérique</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">Système de conception d'aligneurs sur mesure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">Fauteuils ergonomiques pour votre confort</span>
                </li>
              </ul>
              <Button variant="cta" asChild>
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cabinet;
