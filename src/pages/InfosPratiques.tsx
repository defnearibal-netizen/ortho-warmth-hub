import { Link } from "react-router-dom";
import { AlertTriangle, Calendar, Route, Siren, BookOpen, FileText } from "lucide-react";
import EmplacementContact from "@/components/shared/EmplacementContact";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const subPages = [
  { name: "Votre parcours", description: "Les étapes de votre traitement orthodontique", href: "/infos-pratiques/parcours", icon: Route },
  { name: "Urgences", description: "Que faire en cas d'urgence orthodontique", href: "/infos-pratiques/urgences", icon: Siren },
  { name: "Conseils", description: "Alimentation, hygiène et bons réflexes", href: "/infos-pratiques/conseils", icon: BookOpen },
  { name: "Fiches d'information", description: "Documents utiles à télécharger", href: "/infos-pratiques/fiches", icon: FileText },
];


const emergencyTips = [
  { title: "Bracket décollé", solution: "Conservez le bracket. Appliquez de la cire orthodontique si gêne. Prenez rendez-vous rapidement." },
  { title: "Fil qui pique", solution: "Appliquez de la cire sur la zone irritante. Appelez-nous pour un rendez-vous." },
  { title: "Douleur intense", solution: "Prenez un antalgique et contactez-nous immédiatement." },
  { title: "Appareil cassé", solution: "Ne tentez pas de réparer vous-même. Gardez les morceaux et appelez-nous." },
];

const InfosPratiques = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
              Informations Pratiques
            </h1>
            <p className="text-lg text-muted-foreground">
              Tout ce qu'il faut savoir pour préparer votre visite.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-pages navigation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {subPages.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <page.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-heading">{page.name}</h3>
                <p className="text-sm text-muted-foreground">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EmplacementContact />

      {/* Emergency */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-accent/30 flex items-center justify-center">
                <AlertTriangle className="h-7 w-7 text-primary" />
              </div>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Urgences
                </span>
                <h2 className="text-2xl font-bold text-foreground font-heading">
                  En cas d'urgence orthodontique
                </h2>
              </div>
            </div>

            <div className="bg-accent/20 border border-accent/40 rounded-xl p-6 mb-8">
              <p className="text-foreground">
                <strong>Numéro d'urgence :</strong>{" "}
                <a href="tel:+33123456789" className="text-primary hover:underline font-semibold">
                  01 23 45 67 89
                </a>
                <br />
                <span className="text-sm text-muted-foreground">
                  Du lundi au vendredi, de 9h à 19h. En dehors de ces horaires, laissez un message.
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyTips.map((tip, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                  <h3 className="font-semibold text-foreground mb-2 font-heading">{tip.title}</h3>
                  <p className="text-muted-foreground text-sm">{tip.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InfosPratiques;
