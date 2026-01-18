import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Orthodontie from "./pages/Orthodontie";
import Diplomes from "./pages/orthodontie/Diplomes";
import Techniques from "./pages/orthodontie/Techniques";
import Urgences from "./pages/orthodontie/Urgences";
import Brossage from "./pages/orthodontie/Brossage";
import CabinetDentaire from "./pages/CabinetDentaire";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/orthodontie" element={<Orthodontie />} />
          <Route path="/orthodontie/diplomes" element={<Diplomes />} />
          <Route path="/orthodontie/techniques" element={<Techniques />} />
          <Route path="/orthodontie/urgences" element={<Urgences />} />
          <Route path="/orthodontie/brossage" element={<Brossage />} />
          <Route path="/cabinet-dentaire" element={<CabinetDentaire />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
