import React from 'react';

const Termeni: React.FC = () => (
  <div className="container mx-auto px-4 py-8 mt-16">
    <h1 className="text-3xl font-bold mb-6">Termeni și condiții</h1>
    <p className="mb-4 text-lg">Bun venit la Parohia Sfântul Sava cel Sfințit!</p>
    <p className="mb-4 text-lg">Acești termeni și condiții stabilesc regulile și condițiile de utilizare a site-ului nostru web. Prin accesarea și utilizarea acestui site, sunteți de acord să fiți obligat de acești termeni și condiții. Dacă nu sunteți de acord cu oricare dintre acești termeni, vă rugăm să nu utilizați site-ul nostru.</p>
    <h2 className="text-2xl font-semibold mt-8 mb-2">1. Utilizarea Site-ului</h2>
    <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
      <li>Accesul la site-ul nostru și utilizarea acestuia sunt permise numai pentru scopuri legale și conforme cu acești termeni și condiții.</li>
      <li>Nu sunteți autorizat să utilizați site-ul nostru în scopuri care ar încălca drepturile de proprietate intelectuală ale altor persoane sau care ar încălca legea în alt fel.</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-2">2. Informații Personale</h2>
    <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
      <li>Colectăm informații personale în conformitate cu politica noastră de confidențialitate. Prin utilizarea site-ului nostru, sunteți de acord cu colectarea, utilizarea și divulgarea informațiilor personale conform acestei politici.</li>
      <li>Sunteți responsabil de furnizarea de informații personale corecte și actualizate și vă angajați să ne notificați în mod prompt cu privire la orice modificări ale acestor informații.</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-2">3. Proprietatea Intelectuală</h2>
    <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
      <li>Toate drepturile de proprietate intelectuală asupra conținutului și materialelor de pe site-ul nostru sunt deținute de noi sau de licențiatorii noștri.</li>
      <li>Aveți permisiunea de a accesa și de a utiliza conținutul și materialele de pe site-ul nostru numai în scopuri personale și non-comerciale.</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-2">4. Modificări ale Termenilor și Condițiilor</h2>
    <p className="mb-4 text-lg">Ne rezervăm dreptul de a modifica sau actualiza acești termeni și condiții în orice moment, fără notificare prealabilă. Orice modificări vor intra în vigoare imediat ce vor fi publicate pe site-ul nostru. Este responsabilitatea dvs. să verificați periodic această pagină pentru a fi la curent cu orice modificări.</p>
    <h2 className="text-2xl font-semibold mt-8 mb-2">5. Contact</h2>
    <p className="mb-4 text-lg">Dacă aveți întrebări sau nelămuriri cu privire la acești termeni și condiții, vă rugăm să ne contactați la adresa de email <a href="mailto:servicii@parohiasfsava.com" className="text-gold underline">servicii@parohiasfsava.com</a> sau la numărul de telefon <a href="tel:0750702806" className="text-gold underline">0750702806</a>.</p>
    <p className="text-sm text-primary/60 mt-8">Acești termeni și condiții au fost actualizați ultima dată pe 01.05.2025.</p>
  </div>
);

export default Termeni; 