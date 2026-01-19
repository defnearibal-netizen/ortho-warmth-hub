import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Cabinet pages
import APropos from "./pages/cabinet/APropos";
import Philosophie from "./pages/cabinet/Philosophie";
import EquipePage from "./pages/cabinet/EquipePage";

// Soins pages
import Enfants from "./pages/soins/Enfants";
import Autoligaturantes from "./pages/soins/Autoligaturantes";
import Aligneurs from "./pages/soins/Aligneurs";
import LingualeWin from "./pages/soins/LingualeWin";
import Complements from "./pages/soins/Complements";

// Infos pratiques pages
import Parcours from "./pages/infos-pratiques/Parcours";
import UrgencesPage from "./pages/infos-pratiques/UrgencesPage";
import Conseils from "./pages/infos-pratiques/Conseils";
import Fiches from "./pages/infos-pratiques/Fiches";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Cabinet routes */}
          <Route path="/cabinet/a-propos" element={<APropos />} />
          <Route path="/cabinet/philosophie" element={<Philosophie />} />
          <Route path="/cabinet/equipe" element={<EquipePage />} />
          
          {/* Soins routes */}
          <Route path="/soins/enfants" element={<Enfants />} />
          <Route path="/soins/autoligaturantes" element={<Autoligaturantes />} />
          <Route path="/soins/aligneurs" element={<Aligneurs />} />
          <Route path="/soins/linguale-win" element={<LingualeWin />} />
          <Route path="/soins/complements" element={<Complements />} />
          
          {/* Infos pratiques routes */}
          <Route path="/infos-pratiques/parcours" element={<Parcours />} />
          <Route path="/infos-pratiques/urgences" element={<UrgencesPage />} />
          <Route path="/infos-pratiques/conseils" element={<Conseils />} />
          <Route path="/infos-pratiques/fiches" element={<Fiches />} />
          
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
