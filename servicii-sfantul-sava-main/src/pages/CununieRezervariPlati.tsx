import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, X } from 'lucide-react';
import StripeScriptLoader from '@/components/StripeScriptLoader';

const CununieRezervariPlati = () => {
  const [positions, setPositions] = useState({
    iframe1: 0,
    iframe2: 0,
    iframe3: 0
  });

  const [showInfo2025, setShowInfo2025] = useState(false);
  const [showInfo2026, setShowInfo2026] = useState(false);

  const info2025 = `în toate zilele de post și în posturile de peste an;
în toate miercurile și vinerile;
de luni după Lăsatul secului de carne pentru Postul Sfintelor Paști până la Duminica Sfântului Apostol Toma inclusiv (24 Februarie – 27 Aprilie);
în postul Sfinților Apostoli Petru și Pavel (16 Iunie – 28 Iunie);
în Postul Adormirii Maicii Domnului (01 August – 14 August);
la Praznicul Tăierii Capului Sf. Ioan Botezătorul (29 August);
în Postul Nașterii Domnului (14 Noiembrie – 24 Decembrie);
în ajunul și zilele Praznicelor Împărătești (1-2 Febraruarie, 28-29 Mai, 07-09 Iunie, 15 August, 13-14 Septembrie);
de la Praznicul Nașterii Domnului până la Praznicul Botezului Domnului (25 Decembrie – 06 Ianuarie).`;

  const info2026 = `în toate zilele de post și în posturile de peste an;
în toate miercurile și vinerile;
de luni după Lăsatul secului de carne pentru Postul Sfintelor Paști până la Duminica Sfântului Apostol Toma inclusiv (16 Februarie – 19 Aprilie);
în postul Sfinților Apostoli Petru și Pavel (08 Iunie – 28 Iunie);
în Postul Adormirii Maicii Domnului (31 Iulie – 14 August);
la Praznicul Tăierii Capului Sf. Ioan Botezătorul (29 August);
în Postul Nașterii Domnului (15 Noiembrie – 24 Decembrie);
în ajunul și zilele Praznicelor Împărătești (1-2 Febraruarie, 20-21 Mai, 30 Mai-01 Iunie, 15 August, 13-14 Septembrie);
de la Praznicul Nașterii Domnului până la Praznicul Botezului Domnului (25 Decembrie – 06 Ianuarie).`;

  const moveIframe = (iframeId: string, direction: 'left' | 'right') => {
    setPositions(prev => ({
      ...prev,
      [iframeId]: prev[iframeId] + (direction === 'left' ? -10 : 10)
    }));
  };

  return (
    <>
      <StripeScriptLoader />
      {/* Modal pentru 2025 */}
      {showInfo2025 && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowInfo2025(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h4 className="font-medium text-xl mb-4">Când nu se fac nunți în 2025?</h4>
            <div className="whitespace-pre-line text-primary/80">
              {info2025}
            </div>
          </div>
        </div>
      )}

      {/* Modal pentru 2026 */}
      {showInfo2026 && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowInfo2026(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h4 className="font-medium text-xl mb-4">Când nu se fac nunți în 2026?</h4>
            <div className="whitespace-pre-line text-primary/80">
              {info2026}
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
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-primary/30"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="section-title text-white">Rezervări și plăți</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            Informații despre rezervări și modalități de plată pentru Taina Sfintei Cununii
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/cununie" 
              className="btn-primary"
            >
              Taina Sfintei Cununii
            </Link>
            <Link 
              to="/cununie/informatii" 
              className="btn-primary"
            >
              Informații Taina Cununiei
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
                
              </p>
              <p className="text-primary/80 mb-4">
                Nu facem Taina Sfintei Cununii în zile de post (Miercurea, Vinerea etc.) 
                După plasarea rezervării, vă rugăm să confirmați rezervarea telefonic cu un reprezentant al parohiei..
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
                      Vă rugăm să plasați rezervarea evenimentului dumneavoastră, abia după ce ați parcurs cu atenție informațiile integrale de pe site (informații administrative, organizatorice etc.).
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-6">
                <button
                  onClick={() => setShowInfo2025(true)}
                  className="btn-primary px-6 py-2 rounded-lg bg-gold text-white font-semibold shadow hover:bg-gold/90 transition-all"
                >
                  Când nu se fac nunți în 2025?
                </button>
                <button
                  onClick={() => setShowInfo2026(true)}
                  className="btn-primary px-6 py-2 rounded-lg bg-gold text-white font-semibold shadow hover:bg-gold/90 transition-all"
                >
                  Când nu se fac nunți în 2026?
                </button>
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
                    srcDoc={`<script async src="https://js.stripe.com/v3/buy-button.js"></script><stripe-buy-button buy-button-id="buy_btn_1NTfKtHBym8GNnjpC2zSTXSp" publishable-key="pk_live_51NTN8DHBym8GNnjpDPcPZWSbb6GbTHBDSqGDMXCsTyK4FY7Pr3KPAZ1zWOsO4HAq0jom0kygbB7YIaRE9bTlpuaS00uFQjcYdH"></stripe-buy-button>`}
                    width="320"
                    height="400"
                    style={{ border: 'none', background: 'transparent' }}
                    scrolling="no"
                    frameBorder="0"
                    title="Stripe Buy Button Stanga"
                  ></iframe>
                  <iframe
                    srcDoc={`<script async src='https://js.stripe.com/v3/buy-button.js'></script><stripe-buy-button buy-button-id='buy_btn_1OrctnBLHb5XtOJtxHQAhUey' publishable-key='pk_live_51OXMCnBLHb5XtOJtbT6HVATatQdtTlj7rq3PuNZFG1qQj82JDF8hCvgkrORQEV7i6RNgXwiaDevrssBBaPTzaLfe00QdyO9prL'></stripe-buy-button>`}
                    width="320"
                    height="400"
                    style={{ border: 'none', background: 'transparent' }}
                    scrolling="no"
                    frameBorder="0"
                    title="Stripe Buy Button Mijloc"
                  ></iframe>
                  <iframe
                    srcDoc={`<script async src="https://js.stripe.com/v3/buy-button.js"></script><stripe-buy-button buy-button-id="buy_btn_1OrdAzHBym8GNnjp3CMBc0zU" publishable-key="pk_live_51NTN8DHBym8GNnjpDPcPZWSbb6GbTHBDSqGDMXCsTyK4FY7Pr3KPAZ1zWOsO4HAq0jom0kygbB7YIaRE9bTlpuaS00uFQjcYdH"></stripe-buy-button>`}
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
              <Link to="/cununie" className="btn-primary">
                Taina Sfintei Cununii
              </Link>
              <Link to="/cununie/informatii" className="btn-primary">
                Informații Taina Cununiei
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CununieRezervariPlati; 