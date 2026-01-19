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
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold text-primary-foreground">P</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-primary font-heading">
                Clinique Dentaire Panorama
              </span>
              <p className="text-xs text-muted-foreground">Orthodontie & Soins dentaires</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden xl:flex">
            <NavigationMenuList className="gap-1">
              {/* Accueil */}
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center",
                    isActive("/") && location.pathname === "/"
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  Accueil
                </Link>
              </NavigationMenuItem>

              {/* Le cabinet d'orthodontie */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-transparent",
                    isActive("/cabinet")
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  Le cabinet d'orthodontie
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
                              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              isActive(item.href) ? "bg-accent text-accent-foreground" : "text-foreground"
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
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-transparent",
                    isActive("/soins")
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  Les soins et techniques
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
                              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              isActive(item.href) ? "bg-accent text-accent-foreground" : "text-foreground"
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
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-transparent",
                    isActive("/infos-pratiques")
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  Info pratiques
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
                              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              isActive(item.href) ? "bg-accent text-accent-foreground" : "text-foreground"
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
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center",
                    isActive("/contact")
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
              {/* Accueil */}
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium transition-colors",
                  location.pathname === "/" ? "text-primary bg-secondary" : "text-muted-foreground hover:bg-muted"
                )}
              >
                Accueil
              </Link>

              {/* Cabinet mobile dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileSubmenu("cabinet")}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-between",
                    isActive("/cabinet") ? "text-primary bg-secondary" : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  Le cabinet d'orthodontie
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
                    "w-full px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-between",
                    isActive("/soins") ? "text-primary bg-secondary" : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  Les soins et techniques
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
                    "w-full px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-between",
                    isActive("/infos-pratiques") ? "text-primary bg-secondary" : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  Info pratiques
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
                  "px-4 py-3 rounded-lg font-medium transition-colors",
                  isActive("/contact") ? "text-primary bg-secondary" : "text-muted-foreground hover:bg-muted"
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
