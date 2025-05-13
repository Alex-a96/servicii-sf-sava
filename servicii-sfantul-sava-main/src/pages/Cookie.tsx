import React from 'react';

const Cookie: React.FC = () => (
  <div className="container mx-auto px-4 py-8 mt-16">
    <h1 className="text-3xl font-bold mb-6">Politica de Cookie-uri</h1>
    <p className="mb-4 text-lg">Acest site utilizează cookie-uri pentru a vă oferi cea mai bună experiență posibilă. Cookie-urile sunt fișiere text mici plasate pe dispozitivul dvs. atunci când vizitați un site web și sunt folosite de către majoritatea site-urilor web pentru a personaliza experiența utilizatorului.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">Ce sunt Cookie-urile?</h2>
    <p className="mb-4 text-lg">Cookie-urile sunt fișiere text care sunt stocate pe computerul dvs. atunci când vizitați anumite site-uri web. Ele sunt folosite pentru a colecta informații despre utilizator și pentru a îmbunătăți experiența de navigare pe site-ul respectiv.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">Cum Folosim Cookie-urile?</h2>
    <ul className="list-disc pl-6 mb-4 text-lg">
      <li><span className="font-semibold">Cookie-uri de Performanță:</span> Aceste cookie-uri ne permit să contorizăm vizitele și sursele de trafic, astfel încât să putem măsura și îmbunătăți performanța site-ului nostru. Ele ne ajută să înțelegem ce pagini sunt cele mai populare și cele mai puțin populare și să vedem modul în care vizitatorii navighează pe site.</li>
      <li><span className="font-semibold">Cookie-uri de Funcționalitate:</span> Aceste cookie-uri permit site-ului web să rețină alegerile pe care le faceți (cum ar fi numele dvs. de utilizator, limba sau regiunea în care vă aflați) și să vă ofere funcționalități îmbunătățite și personalizate.</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">Cum Pot Controla Cookie-urile?</h2>
    <p className="mb-4 text-lg">Puteți controla și/sau șterge cookie-urile după cum doriți – pentru detalii, consultați <a href="https://aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-gold underline">aboutcookies.org</a>. Puteți șterge toate cookie-urile care sunt deja pe computerul dvs. și puteți seta majoritatea browserelor să împiedice plasarea lor. Dacă faceți acest lucru, însă, este posibil să trebuiască să ajustați manual unele preferințe de fiecare dată când vizitați un site și unele servicii și funcții pot să nu funcționeze.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
    <p className="mb-4 text-lg">Dacă aveți întrebări sau nelămuriri cu privire la politica noastră de cookie-uri, vă rugăm să ne contactați la adresa de email <a href="mailto:servicii@parohiasfsava.com" className="text-gold underline">servicii@parohiasfsava.com</a> sau la numărul de telefon <a href="tel:0750702806" className="text-gold underline">0750702806</a>.</p>

    <p className="text-sm text-primary/60 mt-8">Această politică de cookie-uri a fost actualizată ultima dată pe 01.04.2023.</p>
  </div>
);

export default Cookie; 