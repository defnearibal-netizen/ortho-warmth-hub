import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Notre cabinet", href: "/cabinet" },
  { name: "Services", href: "/services" },
  { name: "Équipe", href: "/equipe" },
  { name: "Infos pratiques", href: "/infos-pratiques" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold text-white">P</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-primary font-heading">
                Clinique Dentaire Panorama
              </span>
              <p className="text-xs text-muted-foreground">Orthodontie & Soins dentaires</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-primary hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+33123456789"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">01 23 45 67 89</span>
            </a>
            <Button variant="cta" size="default" asChild>
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

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="xl:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg font-medium transition-colors",
                    isActive(item.href)
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-4 px-4 flex flex-col gap-3">
                <Button variant="outline" asChild>
                  <a href="tel:+33123456789" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    01 23 45 67 89
                  </a>
                </Button>
                <Button variant="cta" asChild>
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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
