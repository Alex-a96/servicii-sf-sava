import React, { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GalleryUpdateProvider } from "@/contexts/GalleryUpdateContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LoadingSpinner from './components/LoadingSpinner';

const Index = lazy(() => import('./pages/Index'));
const Cununie = lazy(() => import('./pages/Cununie'));
const CununieInfoMiriNasi = lazy(() => import('./pages/CununieInfoMiriNasi'));
const CununieRezervariPlati = lazy(() => import('./pages/CununieRezervariPlati'));
const Botez = lazy(() => import('./pages/Botez'));
const BotezInfoParintiNasi = lazy(() => import('./pages/BotezInfoParintiNasi'));
const BotezRezervariPlati = lazy(() => import('./pages/BotezRezervariPlati'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Instagramabil = lazy(() => import('./pages/Instagramabil'));
const Termeni = lazy(() => import('./pages/Termeni'));
const Confidentialitate = lazy(() => import('./pages/Confidentialitate'));
const Returnare = lazy(() => import('./pages/Returnare'));
const Cookie = lazy(() => import('./pages/Cookie'));
const AdminGalerie = lazy(() => import('./pages/AdminGalerie'));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <GalleryUpdateProvider>
        <Toaster />
        <Sonner />
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/cununie" element={<Cununie />} />
                  <Route path="/cununie/informatii" element={<CununieInfoMiriNasi />} />
                  <Route path="/cununie/rezervari" element={<CununieRezervariPlati />} />
                  <Route path="/botez" element={<Botez />} />
                  <Route path="/botez/informatii" element={<BotezInfoParintiNasi />} />
                  <Route path="/botez/rezervari" element={<BotezRezervariPlati />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/instagramabil" element={<Instagramabil />} />
                  <Route path="/admin-galerie" element={<AdminGalerie />} />
                  <Route path="/termeni" element={<Termeni />} />
                  <Route path="/confidentialitate" element={<Confidentialitate />} />
                  <Route path="/returnare" element={<Returnare />} />
                  <Route path="/cookie" element={<Cookie />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </GalleryUpdateProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
