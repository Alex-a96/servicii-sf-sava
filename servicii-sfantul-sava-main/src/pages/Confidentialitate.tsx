import React from 'react';

const Confidentialitate: React.FC = () => (
  <div className="container mx-auto px-4 py-8 mt-16">
    <h1 className="text-3xl font-bold mb-6">Politica de Confidențialitate</h1>
    <p className="mb-4 text-lg">Aceasta este politica de confidențialitate a Parohiei Sfântul Sava cel Sfințit din Iași, Protopopiatul Iași 1, situată la adresa Costache Negrii, nr. 44. Parohia Sfântul Sava cel Sfințit respectă și protejează confidențialitatea informațiilor personale ale vizitatorilor și utilizatorilor site-ului nostru.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">1. Informații de Contact</h2>
    <ul className="list-disc pl-6 mb-4 text-lg">
      <li>Numele entității: Parohia Sfântul Sava cel Sfințit</li>
      <li>Adresa: Costache Negrii, nr. 44, Iași, Protopopiatul Iași 1</li>
      <li>Email: <a href="mailto:servicii@parohiasfsava.com" className="text-gold underline">servicii@parohiasfsava.com</a></li>
      <li>Număr de telefon: <a href="tel:0750702806" className="text-gold underline">0750702806</a></li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">2. Informații Colectate</h2>
    <p className="mb-4 text-lg">Colectăm următoarele informații furnizate de dumneavoastră:</p>
    <ul className="list-disc pl-6 mb-4 text-lg">
      <li>Numele</li>
      <li>Adresa de email</li>
      <li>Număr de telefon</li>
      <li>Observații suplimentare</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">3. Scopul Colectării</h2>
    <p className="mb-4 text-lg">Aceste informații ne oferă posibilitatea de a confirma programările serviciilor solicitate de dumneavoastră.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">4. Baza Legală pentru Prelucrarea Datelor</h2>
    <ul className="list-disc pl-6 mb-4 text-lg">
      <li><span className="font-semibold">Îndeplinirea unui Contract:</span> Prelucrăm datele personale ale utilizatorilor atunci când este necesar pentru a îndeplini un contract sau pentru a lua măsuri la cererea utilizatorului înainte de a încheia un contract.</li>
      <li><span className="font-semibold">Interese Legitime:</span> Prelucrăm datele personale ale utilizatorilor atunci când este în interesul nostru legitim de a furniza și îmbunătăți serviciile noastre, de a proteja securitatea și integritatea serviciilor noastre și de a comunica cu utilizatorii noștri.</li>
      <li><span className="font-semibold">Obligații Legale:</span> Prelucrăm datele personale ale utilizatorilor atunci când este necesar pentru a ne conforma cu obligațiile legale și reglementările aplicabile.</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">5. Partajarea Datelor cu Terțe Părți</h2>
    <p className="mb-4 text-lg">Ne angajăm să protejăm confidențialitatea și securitatea informațiilor personale ale utilizatorilor noștri. În anumite situații, este posibil să partajăm informațiile dvs. personale cu terțe părți pentru a ne ajuta să furnizăm serviciile noastre sau să îndeplinim anumite scopuri comerciale.</p>
    <ul className="list-disc pl-6 mb-4 text-lg">
      <li><span className="font-semibold">Furnizori de servicii:</span> Colaborăm cu terțe părți care ne furnizează servicii, cum ar fi procesarea plăților, gestionarea bazelor de date și suport tehnic.</li>
      <li><span className="font-semibold">Parteneri de afaceri:</span> În anumite cazuri, partajăm informațiile dvs. personale cu parteneri de afaceri pentru a oferi produse sau servicii comune sau pentru a vă oferi oferte personalizate.</li>
      <li><span className="font-semibold">Cerințe legale:</span> Putem dezvălui informațiile dvs. personale în măsura în care este necesar pentru a ne conforma cu legile și reglementările aplicabile.</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">6. Securitatea Datelor</h2>
    <p className="mb-4 text-lg">Ne angajăm să protejăm informațiile personale ale utilizatorilor noștri și implementăm măsuri adecvate de securitate, inclusiv criptare, acces restricționat și monitorizare și auditare regulată a activităților legate de securitatea datelor.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">7. Drepturile Utilizatorilor</h2>
    <p className="mb-4 text-lg">Respectăm drepturile utilizatorilor în ceea ce privește informațiile personale și punem la dispoziție modalități pentru exercitarea acestor drepturi, inclusiv dreptul de acces, dreptul la rectificare și dreptul la ștergere.</p>
    <p className="mb-4 text-lg">Pentru orice întrebări sau solicitări referitoare la politica noastră de confidențialitate, vă rugăm să ne contactați la adresa de email sau numărul de telefon furnizate mai sus.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">8. Retenția Datelor</h2>
    <p className="mb-4 text-lg">Păstrăm informațiile personale ale utilizatorilor noștri doar pe perioada necesară îndeplinirii scopurilor pentru care au fost colectate sau conform cerințelor legale aplicabile. După expirarea perioadei de retenție, vom șterge sau anonimiza informațiile în mod corespunzător, în conformitate cu politicile noastre interne și cu cerințele legale.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">9. Actualizări ale Politicii de Confidențialitate</h2>
    <p className="mb-4 text-lg">Această politică de confidențialitate poate fi actualizată periodic pentru a reflecta modificările aduse practicilor noastre de colectare și protecție a datelor sau pentru a răspunde la cerințele legale sau reglementările aplicabile. Vom publica orice modificări ale acestei politici pe această pagină și vă încurajăm să verificați periodic această pagină pentru a fi la curent cu orice modificări. Utilizarea continuă a site-ului nostru sau a serviciilor noastre după publicarea modificărilor reprezintă acceptarea acestor modificări.</p>
  </div>
);

export default Confidentialitate; 