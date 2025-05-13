import React from 'react';

const Informatii: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Informații Parohie</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Program Slujbe</h2>
          <ul className="space-y-2">
            <li>Duminică: 8:00 - Liturghie</li>
            <li>Sâmbătă: 18:00 - Vecernie</li>
            <li>Zile de sărbătoare: 8:00 - Liturghie</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>Adresă: Strada Exemplu, Nr. 123</li>
            <li>Telefon: 0123 456 789</li>
            <li>Email: contact@parohia-sfantul-sava.ro</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Program Secretariat</h2>
          <ul className="space-y-2">
            <li>Luni - Vineri: 9:00 - 17:00</li>
            <li>Sâmbătă: 9:00 - 13:00</li>
            <li>Duminică: Închis</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Activități Parohiale</h2>
          <ul className="space-y-2">
            <li>Școala Duminicală: Duminică, 10:00 - 12:00</li>
            <li>Consiliul Parohial: Prima luni a lunii, 18:00</li>
            <li>Adunare Tineret: Sâmbătă, 16:00 - 18:00</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Informatii; 