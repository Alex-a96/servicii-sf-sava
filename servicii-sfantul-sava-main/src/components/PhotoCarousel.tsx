import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGalleryUpdate } from "@/contexts/GalleryUpdateContext";
import { GALLERY_URL, API_URL } from '@/config';

interface Photo {
  filename: string;
  url: string;
  caption?: string;
  eventType?: string;
  createdAt?: string;
  approved?: boolean;
}

const PhotoCarousel = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { lastUpdate } = useGalleryUpdate();

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(GALLERY_URL);
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error('Eroare la încărcarea fotografiilor:', error);
      }
    };

    fetchPhotos();
  }, [lastUpdate]); // Reîncarcă fotografiile când se actualizează galeria

  useEffect(() => {
    if (photos.length === 0) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % photos.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [photos]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  if (photos.length === 0) return (
    <div className="text-center text-primary/70 py-8">Nu există fotografii încărcate de comunitate.</div>
  );

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <img
          src={`${API_URL}${photos[currentIndex].url}`}
          alt={photos[currentIndex].caption}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-sm font-medium mb-1">{photos[currentIndex].eventType}</p>
            <p className="text-lg font-serif">{photos[currentIndex].caption}</p>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      <div className="flex justify-center mt-4 gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-gold' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel; 