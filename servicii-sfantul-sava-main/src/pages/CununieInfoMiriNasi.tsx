import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const CununieInfoMiriNasi = () => {
  return (
    <>
      {/* Page Header with Background Image */}
      <div className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center py-28 mt-16">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/info-taina-cununiei.jpg"
            alt="Informații miri și nași" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/30"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="section-title text-white">Informații miri și nași</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Informații importante pentru miri și nași despre Taina Sfintei Cununii
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Link to="/cununie" className="btn-primary">
              Taina Sfintei Cununii
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
          {/* Secțiunea Miri */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Informații pentru Miri</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>
            <p className="italic text-primary/70 mb-4">Aprobate de consiliul parohial în data de 19.12.2021</p>

            <div className="bg-cream p-6 rounded-lg mb-6">
              <h3 className="font-medium text-xl mb-4">Informații organizatorice</h3>
              <p className="italic text-primary/70 mb-4">Aprobate de consiliul parohial în data de 19.12.2021</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Nașii să fie creștini ortodocși practicanți</span>, pregătiți pentru cununia finilor prin Taina Sfintei Spovedaniei la preotul duhovnic personal
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Nu pot fi nași la Taina Sfintei Cununii: necreștinii, creștinii de altă confesiune și nici cei care nu sunt cununați</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Slujba Tainei Sfintei Cununii durează 60 de minute</span>, după finalizarea ceremoniei aveți la dispoziție încă o oră pentru a folosi curtea Bisericii pentru fotografii și servirea invitaților
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Servirea invitaților cu: suc, prăjituri, șampanie etc. se poate face numai în spațiul special amenajat</span>, în partea laterală a Bisericii lângă spațiul de joacă
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Pentru ceremonia din interiorul Bisericii nu se vor permite: înlocuirea scaunelor, așezarea de covoare suplimentare sau ornarea cu aranjamente de plastic</span>: copaci, arcade, felinare, lumânări electrice etc.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Vă îndemnăm călduros ca la oficierea Tainei Sfintei Cununii să invitați: preoți duhovnici, preoți parohi sau preoți apropiați familiei dumneavoastră</span>. Din partea Bisericii "Sfântul Sava cel Sfințit", va participa doar unul din cei trei preoți slujitori
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Să aduceți în ziua evenimentului vin roșu (minimum 250 ml)</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Parcarea mașinilor este gratuită în curtea Bisericii cât și în parcarea din fața Casei "Diaconia" din vecinătate (doar în zilele de weekend)</span>, orice solicitare de taxe pentru parcare, tradiții nuntă/botez (udatul miresei, udatul nou-născutului etc.), nu vin din partea Bisericii "Sfântul Sava" și nu trebuie încurajate, vă rugăm să atenționați personalul angajat al Bisericii
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">În săptămâna premergătoare evenimentului este necesar să prezentați o adeverință scrisă sau confirmare telefonică de la preotul duhovnic/paroh</span>, a faptului că mirii au primit Taina Spovedaniei, pregătitoare pentru Taina Cununiei
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">În ziua evenimentului este necesar să aduceți: verighetele și originalul/copie certificatului de căsătorie</span> care va fi returnat la finalul evenimentului
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">La 8 zile de la Taina Cununiei</span> (sau când au posibilitatea) mirii vor veni la Biserică cu lumânările de cununie, pentru rugăciunea de îmbisericire
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
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Persoanele/familiile (părinți copii și miri) membri ai Parohiei "Sf. Sava cel Sfințit" sunt scutite de achitarea contribuției pentru cheltuieli administrative</span> (participanți la viața bisericii și cu domiciliul în proximitatea Bisericii "Sf. Sava cel Sfințit")
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-primary/80 underline">Achitarea cheltuielilor administrative și cor/strană sunt acoperite următoarele servicii: către Biserică, către preotul slujitor din partea Bisericii, către administrator (paraclisier) și cântarea la strană</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    Prin completarea chestionarului și plasarea rezervării, vă exprimați acordul că vă însușiți informațiile administrative și organizatorice prezentate pe site
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Cheltuielile administrative în valoare de 900 de lei - cu chitanță</span>, (reprezentând parțial: 
                    <span className="text-primary/80 underline">
                      întreținere monument istoric, întreținerea și utilitățile bisericii, organizarea ședinței foto în interiorul și exteriorul Bisericii, oferirea spațiului pentru servirea invitaților în aer liber sau în casa de prăznuire după eveniment, susținerea activităților social-filantropice ale parohiei, îngrijirea parcului și a florilor din incinta bisericii, retribuirea preotului slujitor și a administratorului (cost purtător de taxe salariale aproximativ 43%), parcare și impozite
                    </span>)
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Achitarea contribuției se va face în intervalul de 14 zile de la rezervarea inițială a evenimentului</span>, care reprezintă și confirmarea evenimentului
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Asigurarea cântării la strană: 5 persoane - 875 lei sau 3 persoane - 525 lei</span> (cost purtător de taxe salariale aproximativ 43%)
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Achitarea contribuției pentru cor se va face în intervalul de 30 zile</span> de la rezervarea inițială a evenimentului
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    Contravaloarea contribuției pentru cheltuielile administrative și cor se poate achita și prin virament bancar. Beneficiar: Parohia "Sf. Sava" Iași, str. Costache Negri, nr. 44, CIF - 5268218, Banca Transilvania IBAN: RO54BTRLRONCRT0041620609 (cheltuieli administrative) sau RO92BTRLRONCRT0041620604 (cor), cu menționarea următoarelor informații: Cununie/Cor Cununie, data și ora de desfășurare a evenimentului și numele de familie al mirilor
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    Persoanele/familiile defavorizate, care solicită servicii (cununii și botezuri), sunt scutite de achitarea contribuției pentru cheltuieli administrative, în baza unui evaluări sociale a asistentului social al parohiei
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    Pentru situațiile în care evenimentul se anulează, din motive ce nu țin de Biserica noastră, cheltuielile administrative se restituie, în cuantum de 475 lei
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">♥</span>
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
                  <span className="text-red-500 mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Nașii să fie creștini ortodocși practicanți</span>, pregătiți pentru cununia finilor prin Taina Sfintei Spovedaniei la preotul duhovnic personal
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Nu pot fi nași la Taina Sfintei Cununii: necreștinii, creștinii de altă confesiune și nici cei care nu sunt cununați</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Nașii să se informeze despre îndatoririle lor ca părinți spirituali</span> prin lecturarea unor cărți duhovnicești sau prin convorbiri cu preoți apropiați (duhovnic, paroh etc.)
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Vă îndemnăm călduros ca la oficierea Tainei Sfintei Cununii să invitați: preoți duhovnici, preoți parohi sau preoți apropiați familiei dumneavoastră</span>. Din partea Bisericii "Sfântul Sava cel Sfințit", va participa doar unul din cei trei preoți ai Bisericii
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">După slujba Cununiei, dacă nașul dorește, poate aduce în Sfântul Altar al Bisericii o donație benevolă</span>. Pomelnicul familiei va fi pomenit timp de 1 an la Altarul Bisericii
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">Este obligatoriu ca lumânările de cununie să fie din ceară curată/naturală pentru protejarea picturii</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-red-500 font-semibold">În cazul în care nu se va respecta cerința menționată anterior, vom fi nevoiți să atașăm lumânări de ceară naturală</span>, la lumânările care nu îndeplinesc condițiile menționate mai sus
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">Lumina lumânărilor simbolizează atât pe Mântuitorul Iisus Hristos, numit în Sfânta Liturghie "Lumina lumii"</span>, cât și învățătura Sa, care este bucurie, dragoste și adevăr. Lumânarea simbolizează jertfa de sine, transfigurarea totală a omului în lumină. De aceea, se cade ca lumânările din Biserică să fie confecționate numai din ceară naturală de albine cu fitil din bumbac. Ceara de albine este materia cea mai curată, cea mai pură a naturii – orice firmă/florărie se poate conforma acestor exigențe, dacă le solicitați, ca beneficiari ai serviciilor lor
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">
                    <span className="text-gold font-semibold">La 8 zile de la Cununie</span> (sau când au posibilitatea) mirii vor merge la Biserică cu lumânările de cununie, pentru rugăciunea de îmbisericire
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-cream p-6 rounded-lg mb-6">
              <h3 className="font-medium text-xl mb-4">Rolul nașului la Taina Cununiei</h3>
              <p className="text-primary/80 mb-4">
                Nașii de cununie sunt alături de finii lor la Logodnă și la Taina Sfintei Cununii, fiind martori ai însoțirii celor doi soți.
              </p>
              <p className="text-primary/80 mb-4">
                Ei devin părinții duhovnicești ai celor pe care i-au adus la Sfântul Altar. După învățătura Sfântului Simeon, arhiepiscopul Tesalonicului, nașii sau nunii sunt învățători ai unirii într-un gând și ai însoțirii celor doi miri.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-lg mb-6">
              <h3 className="font-medium text-xl mb-4">Cine poate fi naș de Cununie?</h3>
              <p className="text-primary/80 mb-4">
                La Cununie se recomandă o singură pereche de nași, care să îndeplinească următoarele condiții:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">Să fie creștini-ortodocși și să cunoască bine Învățătura de Credință a Bisericii</p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">Să fie cununați și să aibă o viață morală</p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">Nași pot fi și rudele apropiate: frați, surorile, verii, cumnații</p>
                </li>
              </ul>
              <p className="text-primary/80 mt-4">
                Nașii să fie oameni de bună credință, cu o minimă experiență în viața de familie, cu o conduită morală exemplară, pentru a putea fi de folos, prin experiența vieții lor, viitoarei familii.
              </p>
              <p className="text-primary/80 mt-4">
                Nășia nu este un act simbolic, doar de văzul lumii, ci este o înrudire duhovnicească plină de dăruire și responsabilitate reciprocă.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-4">Responsabilitățile Nașilor</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">Nașii trebuie să-și asume responsabilitatea de a le purta de grijă și de a-i învăța pe finii lor frica de Dumnezeu</p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">Să-i cheme la Biserică, la spovedanie, la săvârșirea faptelor bune</p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">♥</span>
                  <p className="text-primary/80">Să-i îndrume la nevoie, pentru că nașii sunt garanții finilor înaintea lui Dumnezeu și a oamenilor</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-8 space-y-4">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/cununie" className="btn-primary">
                Taina Sfintei Cununii
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

export default CununieInfoMiriNasi; 