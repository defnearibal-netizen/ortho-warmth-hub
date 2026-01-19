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
                <span className="text-xl font-light font-heading tracking-wide text-foreground">
                  Clinique Dentaire Panorama
                </span>
                <span className="text-xs text-muted-foreground font-light tracking-wider">
                  Orthodontie et soins dentaires
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Votre cabinet d'orthodontie et de soins dentaires. 
              Un sourire radieux pour toute la famille.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
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
                  <a href="tel:+2250575430000" className="hover:text-primary transition-colors duration-200 block">
                    +225 05 75 43 00 00
                  </a>
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
