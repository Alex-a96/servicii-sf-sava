import React, { useEffect, useState } from 'react';
import { API_URL, GALLERY_URL } from '@/config';

interface Photo {
  filename: string;
  url: string;
  caption?: string;
  eventType?: string;
  createdAt?: string;
  approved?: boolean;
  originalname?: string;
}

const AdminGalerie = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [approving, setApproving] = useState<string | null>(null);

  const fetchUnapproved = () => {
    fetch(`${API_URL}/gallery.json`)
      .then(res => res.json())
      .then(data => {
        setPhotos(data.filter((p: Photo) => !p.approved));
        setLoading(false);
      })
      .catch(error => {
        console.error('Eroare la încărcarea fotografiilor:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUnapproved();
  }, []);

  const approvePhoto = (filename: string) => {
    setApproving(filename);
    fetch(`${GALLERY_URL}/${filename}/approve`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(() => {
        fetchUnapproved();
        setApproving(null);
      })
      .catch(error => {
        console.error('Eroare la aprobarea fotografiei:', error);
        setApproving(null);
      });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold mb-8 text-center">Aprobare fotografii comunitate</h1>
      {loading ? (
        <div className="text-center text-primary/70">Se încarcă...</div>
      ) : photos.length === 0 ? (
        <div className="text-center text-primary/70">Nu există fotografii de aprobat.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map(photo => (
            <div key={photo.filename} className="rounded-lg overflow-hidden shadow-lg border-2 border-gold/20 bg-white flex flex-col">
              <div className="aspect-square bg-cream/10">
                <img
                  src={`${API_URL}${photo.url}`}
                  alt={photo.caption || photo.originalname}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-medium text-primary mb-2">{photo.caption || 'Fără titlu'}</p>
                  <p className="text-sm text-primary/60 mb-2">{photo.eventType === 'cununie' ? 'Taina Cununiei' : 'Taina Botezului'}</p>
                  <p className="text-xs text-primary/40">{photo.createdAt && new Date(photo.createdAt).toLocaleString()}</p>
                </div>
                <button
                  className="mt-4 btn-primary w-full"
                  onClick={() => approvePhoto(photo.filename)}
                  disabled={approving === photo.filename}
                >
                  {approving === photo.filename ? 'Se aprobă...' : 'Aprobă'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminGalerie; 