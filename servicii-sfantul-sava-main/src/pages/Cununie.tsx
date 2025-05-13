import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Cununie = () => {
  return (
    <>
      {/* Page Header with Background Image */}
      <div className="relative py-24 mt-16">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/pag-taina-cununiei.jpg"
            alt="Cununie în Biserică" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/30"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="section-title text-white">Taina Sfintei Cununii</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            „De aceea, va lăsa omul pe tatăl său și pe mama sa și se va alipi de femeia sa și vor fi amândoi un trup. Taina aceasta mare este; iar eu zic în Hristos și în Biserică. Astfel și voi, fiecare așa să-și iubească femeia ca pe sine însuși;”
          </p>
          <p className="text-white/90 text-sm mt-2">
            Epistola către Efeseni a Sfântului Apostol Pavel, cap. 5, vers. 28-32
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Link to="/cununie/informatii" className="btn-primary">
              Informații Taina Cununiei
            </Link>
            <Link to="/cununie/rezervari" className="btn-primary">
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
              Taina Sfintei Cununii este una dintre cele șapte Sfinte Taine ale Bisericii Ortodoxe. 
              Prin această taină, mirele și mireasa sunt uniți spiritual pentru toată viața, 
              primind binecuvântarea lui Dumnezeu pentru a crește împreună în credință și dragoste.
            </p>
            <p className="text-primary/80 mb-4 leading-relaxed">
              Cununia ortodoxă simbolizează unirea lui Hristos cu Biserica Sa, 
              reflectând astfel sacrificiul, devotamentul și iubirea eternă care 
              trebuie să caracterizeze relația dintre soț și soție.
            </p>
          </div>

          {/* Preparation Steps */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Pregătiri pentru Cununie</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>
            
            <ol className="space-y-4">
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-medium">1</span>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Citiți informațiile pentru Taina Sfintei Cununii</h3>
                  <p className="text-primary/70">
                    Atât mirii cât și nașii să citească informațiile necesare pregătirii evenimentului și să adreseze întrebări despre neclarități în urma citirii informațiilor.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-medium">2</span>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Întâlniri de consiliere cu preotul</h3>
                  <p className="text-primary/70">
                    Sunt necesare câteva întâlniri de consiliere cu preotul pentru pregătirea spirituală și organizatorică a cununiei.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-medium">3</span>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Spovedanie și Împărtășanie</h3>
                  <p className="text-primary/70">
                    Mirii și nașii trebuie să se pregătească spiritual prin Taina Spovedaniei și să se împărtășească înainte de cununie.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-medium">4</span>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Pregătirea documentelor și obiectelor necesare</h3>
                  <p className="text-primary/70">
                    Asigurați-vă că aveți toate documentele și obiectele necesare pentru ceremonie: certificatul de căsătorie civilă, verighetele, lumânările și vinul.
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
                <p>Certificatul de căsătorie civilă (original, copie sau format digital)</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-gold mr-3"></div>
                <p>Verighete</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-gold mr-3"></div>
                <p>Lumânări de cununie din ceară naturală</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-gold mr-3"></div>
                <p>Vin roșu pentru slujbă</p>
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Întrebări frecvente</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Cât durează slujba de cununie?</AccordionTrigger>
                <AccordionContent>
                  Slujba Tainei Sfintei Cununii durează aproximativ 60 de minute. După finalizarea ceremoniei, aveți la dispoziție încă o oră pentru fotografii și servirea invitaților în curtea Bisericii.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Ce condiții trebuie să îndeplinească nașii?</AccordionTrigger>
                <AccordionContent>
                  Nașii trebuie să fie creștini ortodocși practicanți, să fie cununați religios și să fie pregătiți spiritual prin Taina Spovedaniei. Nu pot fi nași persoanele de altă confesiune sau necreștinii.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Ce fel de lumânări sunt acceptate la cununie?</AccordionTrigger>
                <AccordionContent>
                  Se acceptă doar lumânări din ceară naturală pentru protejarea picturii bisericii. Acestea pot fi achiziționate de la pangarul bisericii sau de la Librăriile Doxologia.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Este necesară căsătoria civilă înainte de cununie?</AccordionTrigger>
                <AccordionContent>
                  Da, căsătoria civilă este obligatorie înainte de cununie. Va trebui să prezentați certificatul de căsătorie civilă în original sau copie la momentul cununiei.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Call to Action */}
          <div className="text-center py-8 space-y-4">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/cununie/informatii" className="btn-primary">
                Informații Taina Cununiei
              </Link>
              <Link to="/cununie/rezervari" className="btn-primary">
                Rezervări și plăți
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cununie;
