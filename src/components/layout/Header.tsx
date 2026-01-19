import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  const toggleMobileSubmenu = (menu: string) => {
    setOpenMobileMenu(openMobileMenu === menu ? null : menu);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border/50 shadow-soft">
      {/* Top bar with clinic name */}
      <div className="bg-primary py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-primary-foreground">
              <span className="text-xl md:text-2xl font-bold font-heading tracking-wide">
                CLINIQUE DENTAIRE PANORAMA
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:+33123456789"
                className="flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                01 23 45 67 89
              </a>
              <Button variant="secondary" size="sm" asChild>
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
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-0">
              {/* Accueil */}
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={cn(
                    "px-5 py-4 text-sm font-semibold uppercase tracking-wider transition-colors inline-flex items-center border-b-2",
                    location.pathname === "/"
                      ? "text-primary border-primary"
                      : "text-foreground hover:text-primary border-transparent hover:border-primary/50"
                  )}
                >
                  Accueil
                </Link>
              </NavigationMenuItem>

              {/* Le cabinet d'orthodontie */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "px-5 py-4 text-sm font-semibold uppercase tracking-wider transition-colors bg-transparent border-b-2 rounded-none h-auto",
                    isActive("/cabinet")
                      ? "text-primary border-primary"
                      : "text-foreground hover:text-primary border-transparent hover:border-primary/50"
                  )}
                >
                  Le Cabinet
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-1 p-3 bg-background border border-border rounded-lg shadow-lg">
                    {cabinetSubPages.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className={cn(
                              "block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors",
                              "hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary",
                              isActive(item.href) ? "bg-secondary text-primary" : "text-foreground"
                            )}
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Les soins et techniques */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "px-5 py-4 text-sm font-semibold uppercase tracking-wider transition-colors bg-transparent border-b-2 rounded-none h-auto",
                    isActive("/soins")
                      ? "text-primary border-primary"
                      : "text-foreground hover:text-primary border-transparent hover:border-primary/50"
                  )}
                >
                  Soins & Techniques
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] gap-1 p-3 bg-background border border-border rounded-lg shadow-lg">
                    {soinsSubPages.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className={cn(
                              "block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors",
                              "hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary",
                              isActive(item.href) ? "bg-secondary text-primary" : "text-foreground"
                            )}
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Info pratiques */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "px-5 py-4 text-sm font-semibold uppercase tracking-wider transition-colors bg-transparent border-b-2 rounded-none h-auto",
                    isActive("/infos-pratiques")
                      ? "text-primary border-primary"
                      : "text-foreground hover:text-primary border-transparent hover:border-primary/50"
                  )}
                >
                  Infos Pratiques
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-1 p-3 bg-background border border-border rounded-lg shadow-lg">
                    {infosPratiquesSubPages.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className={cn(
                              "block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors",
                              "hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary",
                              isActive(item.href) ? "bg-secondary text-primary" : "text-foreground"
                            )}
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className={cn(
                    "px-5 py-4 text-sm font-semibold uppercase tracking-wider transition-colors inline-flex items-center border-b-2",
                    isActive("/contact")
                      ? "text-primary border-primary"
                      : "text-foreground hover:text-primary border-transparent hover:border-primary/50"
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Empty div for spacing on desktop */}
          <div className="hidden lg:block" />

          {/* Mobile: Logo and menu button */}
          <Link to="/" className="lg:hidden">
            <span className="text-lg font-bold text-primary font-heading">
              Clinique Panorama
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-1">
              {/* Accueil */}
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm transition-colors",
                  location.pathname === "/" ? "text-primary bg-secondary" : "text-foreground hover:bg-muted"
                )}
              >
                Accueil
              </Link>

              {/* Cabinet mobile dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileSubmenu("cabinet")}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm transition-colors flex items-center justify-between",
                    isActive("/cabinet") ? "text-primary bg-secondary" : "text-foreground hover:bg-muted"
                  )}
                >
                  Le Cabinet
                  <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileMenu === "cabinet" && "rotate-180")} />
                </button>
                {openMobileMenu === "cabinet" && (
                  <div className="pl-4 mt-1 space-y-1">
                    {cabinetSubPages.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Soins mobile dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileSubmenu("soins")}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm transition-colors flex items-center justify-between",
                    isActive("/soins") ? "text-primary bg-secondary" : "text-foreground hover:bg-muted"
                  )}
                >
                  Soins & Techniques
                  <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileMenu === "soins" && "rotate-180")} />
                </button>
                {openMobileMenu === "soins" && (
                  <div className="pl-4 mt-1 space-y-1">
                    {soinsSubPages.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Infos pratiques mobile dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileSubmenu("infos")}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm transition-colors flex items-center justify-between",
                    isActive("/infos-pratiques") ? "text-primary bg-secondary" : "text-foreground hover:bg-muted"
                  )}
                >
                  Infos Pratiques
                  <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileMenu === "infos" && "rotate-180")} />
                </button>
                {openMobileMenu === "infos" && (
                  <div className="pl-4 mt-1 space-y-1">
                    {infosPratiquesSubPages.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm transition-colors",
                  isActive("/contact") ? "text-primary bg-secondary" : "text-foreground hover:bg-muted"
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
