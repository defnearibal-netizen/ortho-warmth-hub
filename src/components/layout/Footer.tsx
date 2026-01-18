import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-hero">
                <span className="text-xl font-bold text-white">O</span>
              </div>
              <span className="text-lg font-bold">Cabinet Orthodontie</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Votre spécialiste en orthodontie à Paris. Des soins de qualité pour 
              un sourire parfait, dans un environnement moderne et accueillant.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/70 hover:text-background transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/orthodontie" className="text-background/70 hover:text-background transition-colors">
                  Orthodontie
                </Link>
              </li>
              <li>
                <Link to="/cabinet-dentaire" className="text-background/70 hover:text-background transition-colors">
                  Cabinet Dentaire
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/orthodontie/techniques" className="text-background/70 hover:text-background transition-colors">
                  Appareils dentaires
                </Link>
              </li>
              <li>
                <Link to="/orthodontie/techniques" className="text-background/70 hover:text-background transition-colors">
                  Aligneurs invisibles
                </Link>
              </li>
              <li>
                <Link to="/orthodontie/urgences" className="text-background/70 hover:text-background transition-colors">
                  Urgences orthodontiques
                </Link>
              </li>
              <li>
                <Link to="/orthodontie/brossage" className="text-background/70 hover:text-background transition-colors">
                  Conseils de brossage
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-background/70 text-sm">
                  123 Avenue des Champs-Élysées<br />75008 Paris
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+33123456789" className="text-background/70 hover:text-background text-sm">
                  01 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:contact@cabinet-orthodontie.fr" className="text-background/70 hover:text-background text-sm">
                  contact@cabinet-orthodontie.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-background/70 text-sm">
                  Lun - Ven: 9h - 19h<br />Sam: 9h - 13h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Cabinet Orthodontie. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/50 hover:text-background transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-background/50 hover:text-background transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
