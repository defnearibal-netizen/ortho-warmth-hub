import { Link } from "react-router-dom";
import { AlertTriangle, Route, Siren, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import CtaBanner from "@/components/shared/CtaBanner";
import infosPratiquesHero from "@/assets/infos-pratiques-hero.jpg";
import infoParcours from "@/assets/info-parcours.png";
import infoUrgences from "@/assets/info-urgences.png";
import infoConseils from "@/assets/info-conseils.png";

const subPages = [
  { name: "Votre parcours", description: "Les étapes de votre traitement orthodontique", href: "/infos-pratiques/parcours", icon: Route, image: infoParcours },
  { name: "Urgences", description: "Que faire en cas d'urgence orthodontique", href: "/infos-pratiques/urgences", icon: Siren, image: infoUrgences },
  { name: "Conseils", description: "Alimentation, hygiène et bons réflexes", href: "/infos-pratiques/conseils", icon: BookOpen, image: infoConseils },
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

      {/* Intro + Emergency + Sub-pages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <p className="text-xl md:text-2xl text-foreground leading-relaxed text-center mb-12 max-w-3xl mx-auto" style={{ fontFamily: "'Tenor Sans', serif" }}>
              Une bonne hygiène bucco-dentaire est essentielle pour préserver la santé et l'esthétique de votre sourire et est indispensable pour l'avancée de votre traitement orthodontique.
            </p>

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
                <a
                  href="https://wa.me/2250575430000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contacter sur WhatsApp"
                  className="inline-flex items-center ml-2 text-[#25D366] hover:text-[#128C7E] transition-colors duration-200 align-middle"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <br />
                <span className="text-sm text-muted-foreground whitespace-pre-line">
                  {"Les premiers jours après la pose de l'appareil, une douleur/sensibilité peut s'installer au niveau de l'ensemble des dents. \nElle dure en général 3 à 7 jours avant de s'atténuer. Prenez un antalgique en cas de douleurs."}
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

      <CtaBanner />
    </Layout>
  );
};

export default InfosPratiques;
