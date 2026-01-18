import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const orthodontieSubItems = [
  { name: "Diplômes & Qualifications", href: "/orthodontie/diplomes" },
  { name: "Techniques", href: "/orthodontie/techniques" },
  { name: "Urgences", href: "/orthodontie/urgences" },
  { name: "Conseils de brossage", href: "/orthodontie/brossage" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isOrthodontieActive = location.pathname.startsWith("/orthodontie");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-hero">
              <span className="text-2xl font-bold text-white">O</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-foreground">
                Cabinet Orthodontie
              </span>
              <p className="text-xs text-muted-foreground">Dr. Martin & Associés</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive("/")
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              Accueil
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors outline-none",
                  isOrthodontieActive
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                Orthodontie
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/orthodontie" className="w-full cursor-pointer">
                    Vue d'ensemble
                  </Link>
                </DropdownMenuItem>
                {orthodontieSubItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href} className="w-full cursor-pointer">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/cabinet-dentaire"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive("/cabinet-dentaire")
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              Cabinet Dentaire
            </Link>

            <Link
              to="/contact"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive("/contact")
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+33123456789" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                01 23 45 67 89
              </a>
            </Button>
            <Button variant="cta" size="default" asChild>
              <a
                href="https://www.doctolib.fr"
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
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium transition-colors",
                  isActive("/")
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                Accueil
              </Link>

              <div className="px-4 py-2">
                <span className="text-sm font-semibold text-foreground">
                  Orthodontie
                </span>
                <div className="mt-2 ml-4 flex flex-col gap-1">
                  <Link
                    to="/orthodontie"
                    onClick={() => setIsOpen(false)}
                    className="py-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Vue d'ensemble
                  </Link>
                  {orthodontieSubItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="py-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/cabinet-dentaire"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium transition-colors",
                  isActive("/cabinet-dentaire")
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                Cabinet Dentaire
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium transition-colors",
                  isActive("/contact")
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                Contact
              </Link>

              <div className="mt-4 px-4 flex flex-col gap-3">
                <Button variant="outline" asChild>
                  <a href="tel:+33123456789" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    01 23 45 67 89
                  </a>
                </Button>
                <Button variant="cta" asChild>
                  <a
                    href="https://www.doctolib.fr"
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
