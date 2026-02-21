import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import EmplacementContact from "@/components/shared/EmplacementContact";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import CtaBanner from "@/components/shared/CtaBanner";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "Boulevard de Marseille\nZone 4 Abidjan",
    link: "https://maps.google.com/?q=Boulevard+de+Marseille+Zone+4+Abidjan",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+225 05 75 43 00 00\n+225 27 21 59 12 99",
    link: "tel:+2250575430000",
  },
  {
    icon: Mail,
    title: "Email",
    content: "aribalorthodontie.abidjan@gmail.com",
    link: "mailto:aribalorthodontie.abidjan@gmail.com",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lundi - Vendredi\n9h - 18h",
    link: null,
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Contactez-nous
            </h1>
            <p className="text-lg text-muted-foreground">
              Nous sommes là pour répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Nos Coordonnées
              </span>
              <h2 className="text-3xl font-bold text-foreground mt-3 font-heading">
                Comment nous joindre
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-xl p-6 text-center shadow-soft"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line text-sm"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground whitespace-pre-line text-sm">
                      {info.content}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-primary-foreground mb-3 font-heading">
                Comment prendre rendez-vous en orthodontie ?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                Inscription en ligne sur la plateforme, des créneaux de rendez-vous vous seront ensuite proposés.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <a
                  href={RDV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Prendre rendez-vous
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <EmplacementContact />

      <CtaBanner />
    </Layout>
  );
};

export default Contact;
