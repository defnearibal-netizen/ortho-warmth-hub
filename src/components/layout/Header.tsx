import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const allPages = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/cabinet/a-propos" },
  { name: "Philosophie", href: "/cabinet/philosophie" },
  { name: "Équipe", href: "/cabinet/equipe" },
  { name: "Enfants", href: "/soins/enfants" },
  { name: "Multi-attaches", href: "/soins/autoligaturantes" },
  { name: "Aligneurs", href: "/soins/aligneurs" },
  { name: "Lingual WIN", href: "/soins/linguale-win" },
  { name: "Compléments", href: "/soins/complements" },
  { name: "Parcours", href: "/infos-pratiques/parcours" },
  { name: "Urgences", href: "/infos-pratiques/urgences" },
  { name: "Conseils", href: "/infos-pratiques/conseils" },
  { name: "Fiches", href: "/infos-pratiques/fiches" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Left aligned */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-light font-heading tracking-wide text-foreground">
                Clinique Dentaire Panorama
              </span>
              <span className="text-xs text-muted-foreground font-light tracking-wider">
                Orthodontie et soins dentaires
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+33123456789"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span>01 23 45 67 89</span>
            </a>
            <Button variant="cta" size="sm" asChild>
              <a
                href={RDV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Prendre RDV
              </a>
            </Button>
          </div>
        </div>

        {/* Desktop Navigation - Horizontal under logo */}
        <nav className="hidden lg:flex items-center justify-center gap-1 pb-3 flex-wrap">
          {allPages.map((page) => (
            <Link
              key={page.href}
              to={page.href}
              className={cn(
                "px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-lg",
                isActive(page.href)
                  ? "text-primary bg-secondary/50"
                  : "text-foreground/80 hover:text-primary hover:bg-secondary/30"
              )}
            >
              {page.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border/50 bg-white animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {allPages.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive(page.href) ? "text-primary bg-secondary/50" : "text-foreground hover:bg-muted"
                )}
              >
                {page.name}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-border/50 flex flex-col gap-3">
              <a
                href="tel:+33123456789"
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm text-muted-foreground hover:text-primary rounded-lg border border-border transition-colors"
              >
                <Phone className="h-4 w-4" />
                01 23 45 67 89
              </a>
              <Button variant="cta" className="w-full" asChild>
                <a
                  href={RDV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  Prendre RDV
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
