import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="block mb-4">
              <div className="flex flex-col">
                <span className="text-xl font-normal tracking-wide text-foreground" style={{ fontFamily: "'Tenor Sans', serif" }}>
                  Clinique Dentaire Panorama
                </span>
                <span className="text-xs text-muted-foreground font-light tracking-wider">
                  Orthodontie et soins dentaires
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Votre cabinet d'orthodontie et de soins dentaires.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/aribal.orthodontie/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-foreground/70" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 font-heading uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/cabinet/a-propos" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Le Cabinet
                </Link>
              </li>
              <li>
                <Link to="/soins/enfants" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Soins & Techniques
                </Link>
              </li>
              <li>
                <Link to="/infos-pratiques/parcours" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Infos pratiques
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 font-heading uppercase tracking-wider">
              Nos Soins
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/soins/enfants" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Jeunes enfants
                </Link>
              </li>
              <li>
                <Link to="/soins/autoligaturantes" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Attaches autoligaturantes
                </Link>
              </li>
              <li>
                <Link to="/soins/aligneurs" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Aligneurs
                </Link>
              </li>
              <li>
                <Link to="/soins/linguale-win" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Technique linguale
                </Link>
              </li>
              <li>
                <a
                  href={RDV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                >
                  Prendre RDV →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 font-heading uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Boulevard de Marseille<br />Zone 4 Abidjan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <a href="tel:+2250575430000" className="hover:text-primary transition-colors duration-200">
                      +225 05 75 43 00 00
                    </a>
                    <a
                      href="https://wa.me/2250575430000"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contacter sur WhatsApp"
                      className="text-[#25D366] hover:text-[#128C7E] transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                  </div>
                  <a href="tel:+2252721591299" className="hover:text-primary transition-colors duration-200 block">
                    +225 27 21 59 12 99
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:aribalorthodontie.abidjan@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 break-all">
                  aribalorthodontie.abidjan@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Lun - Ven: 9h - 18h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Clinique Dentaire Panorama. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Mentions légales
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
