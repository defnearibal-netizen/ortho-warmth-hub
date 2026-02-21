import { Link } from "react-router-dom";
import { AlertTriangle, Calendar, Route, Siren, BookOpen, FileText } from "lucide-react";
import EmplacementContact from "@/components/shared/EmplacementContact";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import CtaBanner from "@/components/shared/CtaBanner";
import infosPratiquesHero from "@/assets/infos-pratiques-hero.jpg";
import infoParcours from "@/assets/info-parcours.png";
import infoUrgences from "@/assets/info-urgences.png";
import infoConseils from "@/assets/info-conseils.png";
import infoFiches from "@/assets/info-fiches.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const subPages = [
  { name: "Votre parcours", description: "Les étapes de votre traitement orthodontique", href: "/infos-pratiques/parcours", icon: Route, image: infoParcours },
  { name: "Urgences", description: "Que faire en cas d'urgence orthodontique", href: "/infos-pratiques/urgences", icon: Siren, image: infoUrgences },
  { name: "Conseils", description: "Alimentation, hygiène et bons réflexes", href: "/infos-pratiques/conseils", icon: BookOpen, image: infoConseils },
  { name: "Fiches d'information", description: "Documents utiles à télécharger", href: "/infos-pratiques/fiches", icon: FileText, image: infoFiches },
];



const InfosPratiques = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${infosPratiquesHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-transparent" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl ml-4 md:ml-12 lg:ml-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Informations Pratiques
            </h1>
            <p className="text-lg text-white/85">
              Tout ce qu'il faut savoir pour préparer votre visite.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency info + Sub-pages navigation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Emergency banner */}
            <div className="flex items-center gap-4 mb-6">
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

            <div className="bg-accent/20 border border-accent/40 rounded-xl p-6 mb-12">
              <p className="text-foreground">
                <strong>Numéro d'urgence :</strong>{" "}
                <a href="tel:+2250575430000" className="text-primary hover:underline font-semibold">
                  +225 05 75 43 00 00
                </a>
                <br />
                <span className="text-sm text-muted-foreground">
                  Les premiers jours après la pose de l'appareil, une douleur/sensibilité peut s'installer au niveau de l'ensemble des dents. Elle dure en général 3 à 7 jours avant de s'atténuer. Prenez un antalgique en cas de douleurs.
                </span>
              </p>
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subPages.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={page.image}
                    alt={page.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-heading">{page.name}</h3>
                  <p className="text-sm text-muted-foreground">{page.description}</p>
                </div>
              </Link>
            ))}
          </div>
          </div>
        </div>
      </section>


      <EmplacementContact />

      <CtaBanner />
    </Layout>
  );
};

export default InfosPratiques;
