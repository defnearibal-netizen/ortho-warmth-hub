import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const cabinetSubPages = [
  { name: "À propos", href: "/cabinet/a-propos" },
  { name: "Notre philosophie", href: "/cabinet/philosophie" },
  { name: "L'équipe", href: "/cabinet/equipe" },
];

const soinsSubPages = [
  { name: "Techniques pour les jeunes enfants", href: "/soins/enfants" },
  { name: "Techniques multi-attaches autoligaturantes", href: "/soins/autoligaturantes" },
  { name: "Techniques par aligneurs", href: "/soins/aligneurs" },
  { name: "Technique linguale WIN", href: "/soins/linguale-win" },
  { name: "Compléments techniques", href: "/soins/complements" },
];

const infosPratiquesSubPages = [
  { name: "Votre parcours", href: "/infos-pratiques/parcours" },
  { name: "Urgences", href: "/infos-pratiques/urgences" },
  { name: "Conseils", href: "/infos-pratiques/conseils" },
  { name: "Fiches d'information", href: "/infos-pratiques/fiches" },
];

interface DropdownMenuProps {
  label: string;
  items: { name: string; href: string }[];
  isActive: boolean;
}

const DropdownMenu = ({ label, items, isActive }: DropdownMenuProps) => {
  return (
    <div className="relative group">
      <button
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap",
          isActive
            ? "text-primary"
            : "text-foreground/80 hover:text-primary"
        )}
      >
        {label}
        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
      </button>
      
      {/* Dropdown */}
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-white rounded-lg shadow-lg border border-border/50 py-2 min-w-[240px]">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  const toggleMobileSubmenu = (menu: string) => {
    setOpenMobileMenu(openMobileMenu === menu ? null : menu);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Left aligned */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-normal tracking-wide text-foreground" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Clinique Dentaire Panorama
              </span>
              <span className="text-xs text-muted-foreground font-light tracking-wider">
                Orthodontie & Soins dentaires
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Right of logo */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Accueil */}
            <Link
              to="/"
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                location.pathname === "/"
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              Accueil
            </Link>

            {/* Le Cabinet d'orthodontie - Dropdown */}
            <DropdownMenu
              label="Le Cabinet d'orthodontie"
              items={cabinetSubPages}
              isActive={isActive("/cabinet")}
            />

            {/* Soins & Techniques - Dropdown */}
            <DropdownMenu
              label="Soins & Techniques"
              items={soinsSubPages}
              isActive={isActive("/soins")}
            />

            {/* Infos Pratiques - Dropdown */}
            <DropdownMenu
              label="Infos Pratiques"
              items={infosPratiquesSubPages}
              isActive={isActive("/infos-pratiques")}
            />

            {/* Soins Dentaires */}
            <Link
              to="/soins-dentaires"
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                isActive("/soins-dentaires")
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              Soins Dentaires
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                isActive("/contact")
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Button variant="cta" size="sm" asChild>
              <a
                href={RDV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                1ère consultation
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border/50 bg-white animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {/* Accueil */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "py-2 text-sm font-medium transition-colors whitespace-nowrap",
                location.pathname === "/" ? "text-primary" : "text-foreground hover:text-primary"
              )}
            >
              Accueil
            </Link>

            {/* Cabinet - simple links */}
            <Link
              to="/cabinet/a-propos"
              onClick={() => setIsOpen(false)}
              className={cn(
                "py-2 text-sm font-medium transition-colors whitespace-nowrap",
                isActive("/cabinet") ? "text-primary" : "text-foreground hover:text-primary"
              )}
            >
              Le Cabinet
            </Link>

            {/* Soins & Techniques */}
            <Link
              to="/soins/enfants"
              onClick={() => setIsOpen(false)}
              className={cn(
                "py-2 text-sm font-medium transition-colors whitespace-nowrap",
                isActive("/soins") ? "text-primary" : "text-foreground hover:text-primary"
              )}
            >
              Soins & Techniques
            </Link>

            {/* Infos Pratiques */}
            <Link
              to="/infos-pratiques/parcours"
              onClick={() => setIsOpen(false)}
              className={cn(
                "py-2 text-sm font-medium transition-colors whitespace-nowrap",
                isActive("/infos-pratiques") ? "text-primary" : "text-foreground hover:text-primary"
              )}
            >
              Infos Pratiques
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(
                "py-2 text-sm font-medium transition-colors whitespace-nowrap",
                isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"
              )}
            >
              Contact
            </Link>

            {/* Soins Dentaires - Dark chocolate block */}
            <Link
              to="/soins-dentaires"
              onClick={() => setIsOpen(false)}
              className="py-2 px-4 rounded-lg text-sm font-medium transition-colors whitespace-nowrap bg-[#3D2314] text-white hover:bg-[#4A2A1A] mt-3 text-center"
            >
              Soins Dentaires
            </Link>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-border/50">
              <Button variant="cta" className="w-full" asChild>
                <a
                  href={RDV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  1ère consultation en orthodontie
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
