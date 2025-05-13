import React, { useState } from 'react';

const GalerieFoto: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Exemplu de imagini - în practică, acestea ar trebui să vină dintr-o bază de date sau API
  const images = [
    { id: 1, url: '/images/galerie/1.jpg', title: 'Cununie' },
    { id: 2, url: '/images/galerie/2.jpg', title: 'Botez' },
    { id: 3, url: '/images/galerie/3.jpg', title: 'Slujbă' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Galerie Foto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative cursor-pointer"
            onClick={() => setSelectedImage(image.url)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover rounded-lg"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
              {image.title}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Imagine mărită"
            className="max-w-4xl max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default GalerieFoto; 