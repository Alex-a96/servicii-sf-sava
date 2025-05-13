import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, X } from 'lucide-react';

const BotezRezervariPlati = () => {
  const [positions, setPositions] = useState({
    iframe1: 0,
    iframe2: 0,
    iframe3: 0
  });

  const [showInfo, setShowInfo] = useState(false);

  const moveIframe = (iframeId: string, direction: 'left' | 'right') => {
    setPositions(prev => ({
      ...prev,
      [iframeId]: prev[iframeId] + (direction === 'left' ? -10 : 10)
    }));
  };

  return (
    <>
      {/* Modal pentru informații */}
      {showInfo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowInfo(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h4 className="font-medium text-xl mb-4">Informații importante despre Taina Sfântului Botez</h4>
            <div className="whitespace-pre-line text-primary/80">
              Taina Sfântului Botez nu este condiționată de o zi de post sau o zi a săptămânii.
            </div>
          </div>
        </div>
      )}

      {/* Page Header with Background Image */}
      <div className="relative py-24 mt-16">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/pag-rezervari-plati.png"
            alt="Rezervări și plăți" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/30"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="section-title text-white">Rezervări și plăți</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            Informații despre rezervări și modalități de plată pentru Taina Sfântului Botez
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Link 
              to="/botez" 
              className="btn-primary bg-gold hover:bg-gold/90 text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2 shadow transition-all text-base"
            >
              Taina Sfântului Botez
            </Link>
            <Link 
              to="/botez/informatii" 
              className="btn-primary bg-white text-gold border-2 border-gold hover:bg-gold hover:text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2 shadow transition-all text-base"
            >
              Informații Taina Botezului
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="page-section bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Secțiunea Rezervări */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Rezervări</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>
            <div className="bg-cream p-6 rounded-lg mb-6">
              <h3 className="font-medium text-xl mb-4">Informații despre rezervări</h3>
              <p className="text-primary/80 mb-4">
                Taina Sfântului Botez nu este condiționată de o zi de post sau o zi a săptămânii.
              </p>
              <p className="text-primary/80 mb-4">
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-red-700">
                       ați parcurs cu atenție informațiile integrale de pe site (informații administrative, organizatorice etc.).
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-primary/80">
                Considerăm o rezervare fermă, abia după achitarea contribuției administrative.
              </p>
            </div>
            {/* Secțiunea Calendare comună */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl mb-6">Calendare rezervări</h2>
              <div className="h-1 w-24 bg-gold mb-6"></div>
              <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
                <iframe
                  src="https://outlook.office.com/book/Calendar2025ParohiaSfntulSavacelSfinit@parohiasfsava.com/"
                  width="100%"
                  height="2635"
                  style={{ border: 'none', minWidth: 320, maxWidth: 800, flex: 1 }}
                  scrolling="no"
                  title="Calendar rezervări 2025"
                ></iframe>
                <iframe
                  src="https://outlook.office.com/book/Calendar2026ParohiaSfntulSavacelSfinit@parohiasfsava.com/"
                  width="100%"
                  height="2635"
                  style={{ border: 'none', minWidth: 320, maxWidth: 800, flex: 1 }}
                  scrolling="no"
                  title="Calendar rezervări 2026"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Secțiunea Plăți */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Plăți</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>
            <div className="bg-cream p-8 rounded-lg mb-6 mt-8">
              <h3 className="font-medium text-xl mb-4 text-center">Informații despre plăți</h3>
              <p className="text-primary/80 mb-8 text-center">
                Pentru a finaliza rezervarea, vă rugăm să achitați contribuția administrativă în termen de 14 zile de la data rezervării.<br />
                Contribuția pentru cor trebuie achitată în termen de 30 de zile.
              </p>
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                  <iframe
                    srcDoc={`<script async src='https://js.stripe.com/v3/buy-button.js'></script><stripe-buy-button buy-button-id='buy_btn_1OrdDGHBym8GNnjpLDZRBUMW' publishable-key='pk_live_51NTN8DHBym8GNnjpDPcPZWSbb6GbTHBDSqGDMXCsTyK4FY7Pr3KPAZ1zWOsO4HAq0jom0kygbB7YIaRE9bTlpuaS00uFQjcYdH'></stripe-buy-button>`}
                    width="320"
                    height="400"
                    style={{ border: 'none', background: 'transparent' }}
                    scrolling="no"
                    frameBorder="0"
                    title="Stripe Buy Button Stanga"
                  ></iframe>
                  <iframe
                    srcDoc={`<script async src='https://js.stripe.com/v3/buy-button.js'></script><stripe-buy-button buy-button-id='buy_btn_1OrdwLBLHb5XtOJtd13oJJTb' publishable-key='pk_live_51OXMCnBLHb5XtOJtbT6HVATatQdtTlj7rq3PuNZFG1qQj82JDF8hCvgkrORQEV7i6RNgXwiaDevrssBBaPTzaLfe00QdyO9prL'></stripe-buy-button>`}
                    width="320"
                    height="400"
                    style={{ border: 'none', background: 'transparent' }}
                    scrolling="no"
                    frameBorder="0"
                    title="Stripe Buy Button Mijloc"
                  ></iframe>
                  <iframe
                    srcDoc={`<script async src='https://js.stripe.com/v3/buy-button.js'></script><stripe-buy-button buy-button-id='buy_btn_1OrdBXHBym8GNnjpyU6at5CH' publishable-key='pk_live_51NTN8DHBym8GNnjpDPcPZWSbb6GbTHBDSqGDMXCsTyK4FY7Pr3KPAZ1zWOsO4HAq0jom0kygbB7YIaRE9bTlpuaS00uFQjcYdH'></stripe-buy-button>`}
                    width="320"
                    height="400"
                    style={{ border: 'none', background: 'transparent' }}
                    scrolling="no"
                    frameBorder="0"
                    title="Stripe Buy Button Dreapta"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-8 space-y-4">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/botez" 
                className="btn-primary"
              >
                Taina Sfântului Botez
              </Link>
              <Link 
                to="/botez/informatii" 
                className="btn-primary"
              >
                Informații Botez
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BotezRezervariPlati; 