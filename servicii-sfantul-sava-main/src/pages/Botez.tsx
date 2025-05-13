import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Botez = () => {
  return (
    <>
      {/* Page Header with Background Image */}
      <div className="relative py-24 mt-16">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/pag-botez.jpg"
            alt="Botez în Biserică" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/30"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="section-title text-white">Taina Sfântului Botez</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            „Deci ne-am îngropat cu El, în moarte, prin botez, pentru ca, precum Hristos a înviat din morți, prin slava Tatălui, așa să umblăm și noi întru înoirea vieții;"
          </p>
          <p className="text-white/90 text-sm mt-2">
            Epistola către Romani a Sfântului Apostol Pavel, cap. 6, vers. 3
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Link to="/botez/informatii" className="btn-primary">
              Informații Taina Botezului
            </Link>
            <Link to="/botez/rezervari" className="btn-primary">
              Rezervări și plăți
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="page-section bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Significance */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Semnificația Tainei</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>
            <p className="text-primary/80 mb-4 leading-relaxed">
              Taina Sfântului Botez este prima dintre cele șapte Sfinte Taine ale Bisericii Ortodoxe. 
              Prin această taină, pruncul devine membru al Bisericii lui Hristos, primind iertarea păcatului strămoșesc 
              și harul Duhului Sfânt pentru o viață nouă în Hristos.
            </p>
            <p className="text-primary/80 mb-4 leading-relaxed">
              Botezul reprezintă nașterea spirituală și începutul vieții creștine, 
              prin care pruncul devine fiu al lui Dumnezeu după har și membru al Bisericii.
            </p>
          </div>

          {/* Preparation Steps */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Pregătiri pentru Botez</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>
            
            <ol className="space-y-4">
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-medium">1</span>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Citiți informațiile pentru Taina Sfântului Botez</h3>
                  <p className="text-primary/70">
                    Atât părinții cât și nașii să citească informațiile necesare pregătirii evenimentului și să adreseze întrebări despre neclarități în urma citirii informațiilor.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-medium">2</span>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Întâlniri de consiliere cu preotul</h3>
                  <p className="text-primary/70">
                    Sunt necesare câteva întâlniri de consiliere cu preotul pentru pregătirea spirituală și organizatorică a botezului.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-medium">3</span>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Spovedanie și Împărtășanie</h3>
                  <p className="text-primary/70">
                    Părinții și nașii trebuie să se pregătească spiritual prin Taina Spovedaniei și să se împărtășească înainte de botez.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-medium">4</span>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Pregătirea documentelor și obiectelor necesare</h3>
                  <p className="text-primary/70">
                    Asigurați-vă că aveți toate documentele și obiectele necesare pentru ceremonie: certificatul de naștere, prosopul pentru botez, lumânările și costumul alb.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Required Documents */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Ce trebuie adus</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-gold mr-3"></div>
                <p>Certificatul de naștere al copilului (original, copie sau format digital)</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-gold mr-3"></div>
                <p>O lumânare din ceară naturală (chiar dacă sunt mai mulți nași este suficientă o singură lumânare)</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-gold mr-3"></div>
                <p>Prosop mare pentru botez și prosop mic pentru șters</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-gold mr-3"></div>
                <p>Cruciuliță pentru noul botezat</p>
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Întrebări frecvente</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Cât durează slujba de botez?</AccordionTrigger>
                <AccordionContent>
                  Slujba Tainei Sfântului Botez durează aproximativ 60 de minute. După finalizarea ceremoniei, aveți la dispoziție încă o oră pentru fotografii și servirea invitaților în curtea Bisericii.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Ce condiții trebuie să îndeplinească nașii?</AccordionTrigger>
                <AccordionContent>
                  Nașii trebuie să fie creștini ortodocși. Nu pot fi nași de botez persoanele de altă confesiune și necreștinii. Cei care nu sunt căsătoriți religios doar unul din ei va avea calitatea de naș.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>La ce vârstă este recomandat botezul?</AccordionTrigger>
                <AccordionContent>
                  În tradiția ortodoxă, botezul se săvârșește în primele luni de viață ale copilului, de obicei între 40 de zile și 6 luni. Totuși, botezul poate fi săvârșit la orice vârstă.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Call to Action */}
          <div className="text-center py-8 space-y-4">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/botez/informatii" className="btn-primary">
                Informații Taina Botezului
              </Link>
              <Link to="/botez/rezervari" className="btn-primary">
                Rezervări și plăți
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Botez;
