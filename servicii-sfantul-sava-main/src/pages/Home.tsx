import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Bine ați venit la Parohia Sfântul Sava</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/cununie" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Cununie</h2>
          <p className="text-gray-600">Informații și rezervări pentru cununii</p>
        </Link>
        <Link to="/botez" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Botez</h2>
          <p className="text-gray-600">Informații și rezervări pentru botezuri</p>
        </Link>
        <Link to="/galerie" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Galerie Foto</h2>
          <p className="text-gray-600">Galerie cu evenimente și activități</p>
        </Link>
      </div>
    </div>
  );
};

export default Home; 