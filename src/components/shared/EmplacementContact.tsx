import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";
const PHONE_PRIMARY = "+225 05 75 43 00 00";
const PHONE_SECONDARY = "+225 27 21 59 12 99";
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5!2d-3.9883!3d5.2888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTcnMTkuNiJOIDPCsDU5JzE4IlciZg!5e0!3m2!1sfr!2sci!4v1234567890";

const days = [
  { day: "Lundi", hours: "09h00 - 18h00" },
  { day: "Mardi", hours: "09h00 - 18h00" },
  { day: "Mercredi", hours: "09h00 - 18h00" },
  { day: "Jeudi", hours: "09h00 - 18h00" },
  { day: "Vendredi", hours: "09h00 - 18h00" },
  { day: "Samedi", hours: "Fermé" },
  { day: "Dimanche", hours: "Fermé" },
];

interface EmplacementContactProps {
  /** Optional section id for anchor scrolling */
  id?: string;
  /** Whether to show the divider above the section */
  showDivider?: boolean;
}

const SectionDivider = () => (
  <div className="w-full py-8 bg-background">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center gap-4">
        <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-primary/30" />
        <div className="w-2 h-2 rounded-full bg-primary/40" />
        <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-primary/30" />
      </div>
    </div>
  </div>
);

const EmplacementContact = ({ id = "emplacement", showDivider = false }: EmplacementContactProps) => {
  return (
    <>
      {showDivider && <SectionDivider />}

      <section id={id} className="py-24 bg-background" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary uppercase tracking-wider">
              Accès
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
            {/* Left - Info */}
            <div className="space-y-10 flex flex-col justify-center">
              {/* Horaires - card style */}
              <div className="bg-card rounded-xl shadow-soft overflow-hidden">
                <div className="p-5 bg-primary">
                  <div className="flex items-center gap-3 text-white">
                    <Clock className="h-6 w-6" />
                    <span className="font-semibold">Nos horaires</span>
                  </div>
                </div>
                <div className="divide-y divide-border">
                  {days.map((d) => (
                    <div
                      key={d.day}
                      className={`flex justify-between items-center px-5 py-4 ${
                        d.hours === "Fermé" ? "bg-muted/50" : ""
                      }`}
                    >
                      <span className="font-medium text-foreground">{d.day}</span>
                      <span className={d.hours === "Fermé" ? "text-muted-foreground" : "text-primary font-medium"}>
                        {d.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                  Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    <span className="text-foreground">{PHONE_PRIMARY}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    <span className="text-foreground">{PHONE_SECONDARY}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="text-foreground">Boulevard de Marseille</p>
                      <p className="text-foreground">Zone 4 Abidjan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Google Map */}
            <div className="h-full min-h-[400px] lg:min-h-[450px] rounded-xl overflow-hidden shadow-soft">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du cabinet"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-[#3E2723] text-[#3E2723] hover:bg-[#3E2723] hover:text-white"
            >
              <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}>
                {PHONE_PRIMARY}
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-[#3E2723] hover:bg-[#3E2723]/90 text-white"
            >
              <a href={RDV_LINK} target="_blank" rel="noopener noreferrer">
                PRENDRE RENDEZ-VOUS
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmplacementContact;
