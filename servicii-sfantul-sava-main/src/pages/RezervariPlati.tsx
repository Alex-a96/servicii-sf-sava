import React from 'react';
import { useLocation } from 'react-router-dom';

const RezervariPlati = () => {
  const location = useLocation();
  const isWedding = location.pathname.includes('cununie');
  const isBaptism = location.pathname.includes('botez');

  const pageTitle = isWedding ? 'Rezervări și plăți pentru Cununie' : 'Rezervări și plăți pentru Botez';
  const serviceCost = isWedding ? '900' : '775';
  const choirCost = isWedding ? '525' : '175';
  const choirFullCost = isWedding ? '1575' : '525';
  const serviceType = isWedding ? 'Cununie' : 'Botez';

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-serif mb-8">{pageTitle}</h1>

      {/* Informații despre plăți */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif mb-6">Informații despre plăți</h2>
        <div className="space-y-4">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">♥</span>
              <p className="text-primary/80">
                Cheltuielile administrative în valoare de {serviceCost} de lei - cu chitanță. Achitarea contribuției se va face în intervalul de 14 zile de la rezervarea inițială a evenimentului, care reprezintă și confirmarea evenimentului.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">♥</span>
              <p className="text-primary/80">
                Asigurarea cântării la strană se face de către 1 persoană, pentru care se achită {choirCost} de lei, cu chitanță (cost purtător de taxe salariale aproximativ 43%) sau de către cor 3 persoane pentru care se va achita suma de {choirFullCost} de lei (3 persoane) cost purtător de taxe salariale aproximativ 43%.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Informații despre plata prin virament bancar */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif mb-6">Plata prin virament bancar</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium mb-4">Pentru cheltuieli administrative:</h3>
            <ul className="space-y-2">
              <li>Beneficiar: Parohia "Sf. Sava" Iași</li>
              <li>Adresa: str. Costache Negri, nr. 44</li>
              <li>CIF: 5268218</li>
              <li>Banca Transilvania</li>
              <li>IBAN: RO54BTRLRONCRT0041620609</li>
              <li className="mt-4">Menționați în detaliile plății: {serviceType}, data și ora de desfășurare a evenimentului și numele de familie</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium mb-4">Pentru plata stranei:</h3>
            <ul className="space-y-2">
              <li>Beneficiar: Parohia "Sf. Sava" Iași</li>
              <li>Adresa: str. Costache Negri, nr. 44</li>
              <li>CIF: 5268218</li>
              <li>Banca Transilvania</li>
              <li>IBAN: RO92BTRLRONCRT0041620604</li>
              <li className="mt-4">Menționați în detaliile plății: Strană {serviceType}, data și ora de desfășurare a evenimentului și numele de familie</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Informații suplimentare */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif mb-6">Informații suplimentare</h2>
        <div className="space-y-4">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-gold mr-2">♥</span>
              <p className="text-primary/80">
                Persoanele/familiile membri ai Parohiei "Sf. Sava cel Sfințit" (participanți la viața bisericii și cu domiciliul în proximitatea Bisericii), care solicită servicii, sunt scutite de achitarea contribuției pentru cheltuieli administrative.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2">♥</span>
              <p className="text-primary/80">
                Persoanele/familiile defavorizate sunt scutite de achitarea contribuției pentru cheltuieli administrative, în baza unui evaluări sociale a asistentului social al parohiei.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2">♥</span>
              <p className="text-primary/80">
                Pentru situațiile în care evenimentul se anulează, din motive ce nu țin de Biserica noastră, cheltuielile administrative se restituie parțial.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RezervariPlati; 