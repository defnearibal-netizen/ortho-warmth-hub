import { MapPin, Phone, Mail, Clock, Car, Train, AlertTriangle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const hours = [
  { day: "Lundi", hours: "9h00 - 19h00" },
  { day: "Mardi", hours: "9h00 - 19h00" },
  { day: "Mercredi", hours: "9h00 - 19h00" },
  { day: "Jeudi", hours: "9h00 - 19h00" },
  { day: "Vendredi", hours: "9h00 - 18h00" },
  { day: "Samedi", hours: "9h00 - 13h00" },
  { day: "Dimanche", hours: "Fermé" },
];

const emergencyTips = [
  {
    title: "Bracket décollé",
    solution: "Conservez le bracket. Appliquez de la cire orthodontique si gêne. Prenez rendez-vous rapidement.",
  },
  {
    title: "Fil qui pique",
    solution: "Appliquez de la cire sur la zone irritante. Appelez-nous pour un rendez-vous.",
  },
  {
    title: "Douleur intense",
    solution: "Prenez un antalgique et contactez-nous immédiatement.",
  },
  {
    title: "Appareil cassé",
    solution: "Ne tentez pas de réparer vous-même. Gardez les morceaux et appelez-nous.",
  },
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

      {/* Contact & Hours */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Nous contacter
              </span>
              <h2 className="text-3xl font-bold text-foreground mt-3 mb-8 font-heading">
                Coordonnées
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 font-heading">Adresse</h3>
                    <p className="text-muted-foreground">
                      123 Avenue du Panorama<br />75008 Paris
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 font-heading">Téléphone</h3>
                    <a href="tel:+33123456789" className="text-primary hover:underline">
                      01 23 45 67 89
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 font-heading">Email</h3>
                    <a href="mailto:contact@panorama-dentaire.fr" className="text-primary hover:underline">
                      contact@panorama-dentaire.fr
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="cta" size="lg" asChild>
                  <a
                    href={RDV_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Prendre rendez-vous en ligne
                  </a>
                </Button>
              </div>
            </div>

            {/* Hours */}
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Horaires d'ouverture
              </span>
              <h2 className="text-3xl font-bold text-foreground mt-3 mb-8 font-heading">
                Quand nous consulter
              </h2>

              <div className="bg-card rounded-xl shadow-soft overflow-hidden">
                <div className="p-5 bg-primary">
                  <div className="flex items-center gap-3 text-white">
                    <Clock className="h-6 w-6" />
                    <span className="font-semibold">Nos horaires</span>
                  </div>
                </div>
                <div className="divide-y divide-border">
                  {hours.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center px-5 py-4 ${
                        item.hours === "Fermé" ? "bg-muted/50" : ""
                      }`}
                    >
                      <span className="font-medium text-foreground">{item.day}</span>
                      <span className={item.hours === "Fermé" ? "text-muted-foreground" : "text-primary font-medium"}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Accès
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 font-heading">
              Comment venir
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Train className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground font-heading">Transports en commun</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Métro : Ligne 1 - Station George V</li>
                <li>• Bus : Lignes 73, 42, 30</li>
                <li>• RER : Ligne A - Charles de Gaulle Étoile</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Car className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground font-heading">En voiture</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Parking public à 50m</li>
                <li>• Places handicapées disponibles</li>
                <li>• Accès facile depuis le périphérique</li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card max-w-4xl mx-auto">
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
