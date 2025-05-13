import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Baby } from 'lucide-react';

const BotezInfoParintiNasi = () => {
  return (
    <>
      {/* Page Header with Background Image */}
      <div className="relative py-24 mt-16">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/info-taina-botez.jpg"
            alt="Informații părinți și nași" 
            className="w-full h-full object-cover object-bottom opacity-20"
          />
          <div className="absolute inset-0 bg-primary/30"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="section-title text-white">Informații pentru părinți și nași</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Informații importante despre cerințe, responsabilități și aspecte organizatorice pentru Taina Sfântului Botez
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link 
              to="/botez" 
              className="btn-primary"
            >
              Taina Sfântului Botez
            </Link>
            <Link 
              to="/botez/rezervari" 
              className="btn-primary"
            >
              Rezervări și plăți
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="page-section bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Secțiunea Părinți */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Informații pentru Părinți</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>
            <p className="italic text-primary/70 mb-4">Aprobate de consiliul parohial în data de 19.12.2021</p>

            <div className="bg-cream p-6 rounded-lg mb-6">
              <h3 className="font-medium text-xl mb-4">Informații organizatorice</h3>
              <p className="italic text-primary/70 mb-4">Aprobate de consiliul parohial în data de 19.12.2021</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Slujba Tainei Sfântului Botez durează 60 de minute</span>, după finalizarea ceremoniei aveți la dispoziție încă o oră pentru a folosi curtea Bisericii pentru fotografii și servirea invitaților
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Servirea invitaților se face doar în spațiul special amenajat</span>, în partea laterală a Bisericii lângă spațiul de joacă
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-red-500 flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Pentru ceremonia din interiorul Bisericii nu se vor permite: înlocuirea scaunelor, așezarea de covoare suplimentare sau ornarea cu aranjamente de plastic</span>: copaci, arcade, felinare, lumânări electrice etc.
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Vă îndemnăm călduros ca la oficierea Tainei Sfântului Botez să invitați: preoți duhovnici, preoți parohi sau preoți apropiați familiei dumneavoastră</span>. Din partea Bisericii "Sfântul Sava cel Sfințit", va participa doar unul din cei trei preoți slujitori
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Este necesară o sticlă de ulei de măsline/floarea soarelui pentru sfințire</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Parcarea mașinilor este gratuită în curtea Bisericii cât și în parcarea din fața Casei "Diaconia" din vecinătate (doar în zilele de weekend)</span>, orice solicitare de taxe pentru parcare, tradiții nuntă/botez (udatul miresei, udatul nou-născutului etc.), nu vin din partea Bisericii "Sfântul Sava" și nu trebuie încurajate, vă rugăm să atenționați personalul angajat al Bisericii
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-red-500 flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">În ziua evenimentului este necesar certificatul de naștere original sau copie</span> care va fi returnat la finalul evenimentului
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">La 40 zile de la nașterea pruncului</span> (chiar dacă nu este botezat) mamei și copilul trebuie să li se facă rugăciunea de dezlegare și îmbisericire
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-cream p-6 rounded-lg mb-6">
              <h3 className="font-medium text-xl mb-4">Lumânări pentru ceremonie</h3>
              <p className="text-primary/80 mb-4">
                Având în vedere că Biserica "Sfântul Sava cel Sfințit" este monument istoric, avem responsabilitatea de a o păstra în cele mai bune condiții. Experiența ultimilor ani, deși am rugat și explicat necesitatea folosirii în biserică, la toate slujbele, a lumânărilor din ceară naturală, arată că în proporție de 90% nu s-a ținut cont de această rugăminte. Majoritatea lumanarilor din comert nu corespund calitativ, iar in timpul slujbelor provoaca disconfort (curg abundent si pateaza cu lichidul rezultat in urma arderii, fumega toxic cu risc inflamabil) nasilor si bisericii.
              </p>
              <p className="text-primary/80 mb-4">
                <span className="text-red-500 font-semibold">Acest fapt ne obligă ca, începând cu data de 01.03.2025, să acceptăm la slujbele religioase doar acest model de "lumânări speciale de cult din ceară naturală", produse de Fabrica de lumânări a Arhiepiscopiei Iașilor</span>. Aceste lumânări pot fi achiziționate de la Librăriile Doxologia, precum și de la pangarul Bisericii "Sfântul Sava cel Sfințit".
              </p>
              <p className="text-primary/80 mb-6">
                Vă rugăm din suflet să țineți cont de această solicitare, absolut necesară pentru conservarea patrimoniului Bisericii si buna desfasurare a ceremoniei religioase. Nerespectarea rugăminții noastre ne rezervă dreptul de a nu permite folosirea altor tipuri de lumânări, neconforme, la serviciile noastre religioase. Aceste lumânări pot fi achizitionate din timp si împodobite cu flori, dacă se dorește.
              </p>
              {/* Galerie foto pentru lumânări */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center border-2 border-green-400">
                  <h4 className="text-lg font-semibold text-green-700 mb-4">Așa da</h4>
                  <div className="w-full h-56 bg-gray-100 border-2 border-dashed border-green-300 rounded flex items-center justify-center text-gray-400">
                    (Galerie foto - poze cu lumânări conforme)
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center border-2 border-red-400">
                  <h4 className="text-lg font-semibold text-red-700 mb-4">Așa nu</h4>
                  <div className="w-full h-56 bg-gray-100 border-2 border-dashed border-red-300 rounded flex items-center justify-center text-gray-400">
                    (Galerie foto - poze cu lumânări neconforme)
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cream p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-4">Informații administrative</h3>
              <p className="italic text-primary/70 mb-4">Aprobate de consiliul parohial în data de 19.12.2021, actualizate 10.02.2025</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Persoanele/familiile (părinți copii și miri) membri ai Parohiei "Sf. Sava cel Sfințit" sunt scutite de achitarea contribuției pentru cheltuieli administrative</span> (participanți la viața bisericii și cu domiciliul în proximitatea Bisericii "Sf. Sava cel Sfințit")
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-primary/80 underline">Achitarea cheltuielilor administrative și cor/strană sunt acoperite următoarele servicii: către Biserică, către preotul slujitor din partea Bisericii, către administrator (paraclisier) și cântarea la strană</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    Prin completarea chestionarului și plasarea rezervării, vă exprimați acordul că vă însușiți informațiile administrative și organizatorice prezentate pe site
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-red-500 flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Cheltuielile administrative în valoare de 775 de lei - cu chitanță</span>, (reprezentând parțial: 
                    <span className="text-primary/80 underline">
                      întreținere monument istoric, întreținerea și utilitățile bisericii, organizarea ședinței foto în interiorul și exteriorul Bisericii, oferirea spațiului pentru servirea invitaților în aer liber sau în casa de prăznuire după eveniment, susținerea activităților social-filantropice ale parohiei, îngrijirea parcului și a florilor din incinta bisericii, retribuirea preotului slujitor și a administratorului (cost purtător de taxe salariale aproximativ 43%), parcare și impozite
                    </span>)
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-red-500 flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Achitarea contribuției se va face în intervalul de 14 zile de la rezervarea inițială a evenimentului</span>, care reprezintă și confirmarea evenimentului
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-red-500 flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Asigurarea cântării la strană: 1 persoană - 175 lei sau cor 3 persoane - 525 lei</span> (cost purtător de taxe salariale aproximativ 43%)
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-red-500 flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Achitarea contribuției pentru cor se va face în intervalul de 30 zile</span> de la rezervarea inițială a evenimentului
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    Contravaloarea contribuției pentru cheltuielile administrative și cor se poate achita și prin virament bancar. Beneficiar: Parohia "Sf. Sava" Iași, str. Costache Negri, nr. 44, CIF - 5268218, Banca Transilvania IBAN: RO54BTRLRONCRT0041620609 (cheltuieli administrative) sau RO92BTRLRONCRT0041620604 (cor), cu menționarea următoarelor informații: Botez/Cor Botez, data și ora de desfășurare a evenimentului și numele de familie al părinților
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    Persoanele/familiile defavorizate, care solicită servicii (cununii și botezuri), sunt scutite de achitarea contribuției pentru cheltuieli administrative, în baza unui evaluări sociale a asistentului social al parohiei
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    Pentru situațiile în care evenimentul se anulează, din motive ce nu țin de Biserica noastră, cheltuielile administrative se restituie, în cuantum de 375 lei
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-red-500 flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Fumatul și îmbrăcămintea indecentă în curtea bisericii sunt strict interzise!</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Secțiunea Nași */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Informații pentru Nași</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>

            <div className="bg-cream p-6 rounded-lg mb-6">
              <h3 className="font-medium text-xl mb-4">Informații organizatorice</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-red-500 flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Nașii trebuie să fie creștini-ortodocși practicanți</span>, pregătiți pentru încreștinarea pruncului prin Taina Sfintei Spovedaniei la preotul duhovnic personal
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-red-500 flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Nu pot fi nași la Taina Sfântului Botez: necreștinii, creștinii de altă confesiune</span>. Cei care formează un cuplu și doresc să se căsătorească, nu pot boteza împreună (doar unul dintre ei poate fi naș)
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Nașii să se informeze despre îndatoririle lor ca părinți spirituali</span> prin lecturarea unor cărți duhovnicești sau prin convorbiri cu preoți apropiați (duhovnic, paroh etc.)
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Vă îndemnăm călduros ca la oficierea Tainei Sfântului Botez să invitați: preoți duhovnici, preoți parohi sau preoți apropiați familiei dumneavoastră</span>. Din partea Bisericii "Sfântul Sava cel Sfințit", va participa doar unul din cei trei preoți ai Bisericii
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-gold flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">După slujba Botezului, dacă nașul dorește, poate aduce în Sfântul Altar al Bisericii o donație benevolă</span>. Pomelnicul familiei va fi pomenit timp de 1 an la Altarul Bisericii
                  </p>
                </li>
                <li className="flex items-start">
                  <Baby size={16} className="mr-2 text-red-500 flex-shrink-0" />
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Este obligatoriu ca lumânările să fie din ceară curată/naturală pentru protejarea picturii</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-8 space-y-4">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/botez" className="btn-primary">
                Taina Sfântului Botez
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

export default BotezInfoParintiNasi; 