import { Link } from "react-router-dom";
import { ArrowRight, Smile, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import orthodonticEquipment from "@/assets/orthodontic-equipment.jpg";

const subPages = [
  {
    title: "Diplômes & Qualifications",
    description: "Découvrez le parcours académique et les certifications de notre équipe.",
    href: "/orthodontie/diplomes",
    icon: Award,
  },
  {
    title: "Techniques",
    description: "Les différentes méthodes orthodontiques que nous proposons.",
    href: "/orthodontie/techniques",
    icon: Smile,
  },
  {
    title: "Urgences",
    description: "Comment gérer les situations d'urgence orthodontique.",
    href: "/orthodontie/urgences",
    icon: Shield,
  },
  {
    title: "Conseils de brossage",
    description: "Maintenez une hygiène parfaite pendant votre traitement.",
    href: "/orthodontie/brossage",
    icon: Clock,
  },
];

const Orthodontie = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cabinet d'Orthodontie
            </h1>
            <p className="text-xl text-white/80">
              Spécialistes en correction dentaire pour enfants et adultes. 
              Des solutions personnalisées pour chaque sourire.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                L'Orthodontie
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Qu'est-ce que l'orthodontie ?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                L'orthodontie est une spécialité dentaire qui corrige les positions 
                des dents et des mâchoires pour améliorer l'esthétique du sourire 
                et la fonction masticatoire.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Que ce soit pour des raisons esthétiques ou fonctionnelles, 
                un traitement orthodontique peut transformer votre sourire et 
                améliorer votre qualité de vie.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Alignement des dents
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Correction de la mâchoire
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Amélioration de la mastication
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Harmonisation du sourire
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={orthodonticEquipment}
                  alt="Équipement orthodontique"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl gradient-hero opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Sub Pages */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              En savoir plus
            </h2>
            <p className="text-muted-foreground">
              Explorez les différentes facettes de notre pratique orthodontique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subPages.map((page, index) => (
              <Link
                key={index}
                to={page.href}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center shrink-0">
                    <page.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{page.description}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Des questions sur votre traitement ?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous pour une consultation et discutons ensemble de vos besoins.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a
              href="https://www.doctolib.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prendre rendez-vous
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Orthodontie;
