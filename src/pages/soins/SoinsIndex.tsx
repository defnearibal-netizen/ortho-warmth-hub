import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Baby, Sparkles, SmilePlus, Eye, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import CtaBanner from "@/components/shared/CtaBanner";

import soinsHeroBg from "@/assets/soins-hero-bg.png";
import treatmentEnfant from "@/assets/treatment-enfant-new.png";
import treatmentAutoligaturantes from "@/assets/treatment-autoligaturantes.jpg";
import treatmentAligneursNew from "@/assets/treatment-aligneurs-v2.png";
import treatmentLinguale from "@/assets/treatment-linguale-new.png";
import treatmentComplements from "@/assets/treatment-complements.png";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const techniques = [
{
  title: "Techniques pour les jeunes enfants",
  description: "Une première consultation est recommandée à l'âge de 5/6 ans. Elle aura pour but de prévenir, intercepter ou traitement une dysfonction, par une éducation fonctionnelle.",
  icon: Baby,
  image: treatmentEnfant,
  href: "/soins/enfants",
  features: ["Interception précoce", "Appareils amovibles", "Éducation fonctionnelle"]
},
{
  title: "Multi-attaches autoligaturantes",
  description: "Nous proposons des appareils multi-attaches autoligaturants métal ou céramique pour être plus discret.",
  icon: Sparkles,
  image: treatmentAutoligaturantes,
  href: "/soins/autoligaturantes",
  features: ["Moins de rendez-vous", "Confort amélioré", "Résultats précis"]
},
{
  title: "Techniques par aligneurs",
  description: "Les traitements par aligneurs (gouttières transparentes, presque qu'invisible) permettent d'améliorer le sourire en toute discrétion avec un minimum de contrainte.",
  icon: SmilePlus,
  image: treatmentAligneursNew,
  href: "/soins/aligneurs",
  features: ["Quasiment invisibles", "Amovibles", "Hygiène facilitée"]
},
{
  title: "Technique linguale WIN",
  description: "Bagues placées à l'intérieur des dents pour une discrétion totale. Idéal pour les adultes exigeants.",
  icon: Eye,
  image: treatmentLinguale,
  href: "/soins/linguale-win",
  features: ["100% invisible", "Sur mesure", "Haute précision"]
},
{
  title: "Compléments techniques",
  description: "Techniques complémentaires comme les mini-vis, la chirurgie orthognatique et les traitements combinés.",
  icon: Wrench,
  image: treatmentComplements,
  href: "/soins/complements",
  features: ["Mini-vis d'ancrage", "Chirurgie orthognatique", "Traitements combinés"]
}];


const SoinsIndex = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${soinsHeroBg})`, transform: 'scaleX(-1)' }} />

        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-transparent" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl ml-4 md:ml-12 lg:ml-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Soins & Techniques Orthodontiques
            </h1>
            <p className="text-lg text-white/85 mb-8">En fonction de l'âge du patient, de sa denture et des objectifs thérapeutiques à accomplir, nous utilisons différents types
de traitements orthodontiques.
            </p>
          </div>
        </div>
      </section>

      {/* Techniques Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {techniques.map((technique, index) => {
                const Icon = technique.icon;
                return (
                  <Link
                    key={index}
                    to={technique.href}
                    className="group block">

                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300`}>
                      {/* Image */}
                      <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                        {technique.image ?
                        <img
                          src={technique.image}
                          alt={technique.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> :


                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                            <Icon className="h-20 w-20 text-primary/40" />
                          </div>
                        }
                      </div>
                      
                      {/* Content */}
                      <div className="md:w-3/5 p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {technique.title}
                          </h2>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {technique.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {technique.features.map((feature, idx) =>
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary text-sm text-foreground/80 rounded-full">

                              {feature}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                          En savoir plus
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>);

              })}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </Layout>);

};

export default SoinsIndex;