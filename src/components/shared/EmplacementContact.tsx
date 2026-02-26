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
                    <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`} className="text-foreground hover:text-primary transition-colors duration-200">
                      {PHONE_PRIMARY}
                    </a>
                    <a
                      href="https://wa.me/2250575430000"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contacter sur WhatsApp"
                      className="ml-1 text-[#25D366] hover:text-[#128C7E] transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
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
              <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`} className="flex items-center gap-2">
                {PHONE_PRIMARY}
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-[#25D366] hover:bg-[#128C7E] text-white"
            >
              <a
                href="https://wa.me/2250575430000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
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
