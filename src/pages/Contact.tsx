import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "123 Avenue du Panorama\n75008 Paris",
    link: "https://maps.google.com/?q=123+Avenue+du+Panorama+75008+Paris",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "01 23 45 67 89",
    link: "tel:+33123456789",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@panorama-dentaire.fr",
    link: "mailto:contact@panorama-dentaire.fr",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun - Ven: 9h - 19h\nSamedi: 9h - 13h",
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
                Prenez rendez-vous en ligne
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                Réservez votre consultation directement sur notre plateforme de prise de rendez-vous.
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

      {/* Map */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">
              Nous trouver
            </h2>
            <p className="text-muted-foreground">
              Notre cabinet est situé au cœur de Paris, facilement accessible en transport.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-soft max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2157707855694!2d2.304955776975677!3d48.870502000274665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4e8f8ee69%3A0x109c73d6e0ce0e47!2sAv.%20des%20Champs-%C3%89lys%C3%A9es%2C%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1705600000000!5m2!1sen!2sfr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du cabinet"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
