import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ElevadoresEscadas from "./pages/ElevadoresEscadas.tsx";
import ElevadoresEscadasPrecos from "./pages/ElevadoresEscadasPrecos.tsx";
import PedirOrcamento from "./pages/PedirOrcamento.tsx";
import Teste from "./pages/Teste.tsx";
import Home from "./pages/Home.tsx";
import ComoAjudamos from "./pages/ComoAjudamos.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/elevadores-de-escadas" element={<ElevadoresEscadas />} />
          <Route path="/elevadores-de-escadas/precos" element={<ElevadoresEscadasPrecos />} />
          <Route path="/pedir-orcamento" element={<PedirOrcamento />} />
          <Route path="/teste" element={<Teste />} />
          <Route path="/como-ajudamos" element={<ComoAjudamos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
