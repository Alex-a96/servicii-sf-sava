import React, { useState, useRef } from 'react';
import { Upload, Loader2, Camera, X } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useGalleryUpdate } from "@/contexts/GalleryUpdateContext";

type EventType = 'cununie' | 'botez';

interface LocalPhoto {
  id: string;
  file: File;
  url: string;
  caption: string;
  eventType: EventType;
}

const Instagramabil = () => {
  const [localPhotos, setLocalPhotos] = useState<LocalPhoto[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { triggerUpdate } = useGalleryUpdate();

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    const newPhotos: LocalPhoto[] = Array.from(files).map(file => ({
      id: Math.random().toString(36).substring(2, 9),
      file,
      url: URL.createObjectURL(file),
      caption: '',
      eventType: 'cununie',
    }));
    setLocalPhotos(prev => [...prev, ...newPhotos]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files);
    }
  };

  const updatePhoto = (id: string, data: Partial<Pick<LocalPhoto, 'caption' | 'eventType'>>) => {
    setLocalPhotos(prev => prev.map(photo => photo.id === id ? { ...photo, ...data } : photo));
  };

  const removePhoto = (id: string) => {
    setLocalPhotos(prev => prev.filter(photo => photo.id !== id));
  };

  const handleUpload = async () => {
    setIsUploading(true);
    let successCount = 0;
    for (const photo of localPhotos) {
      const formData = new FormData();
      formData.append('photo', photo.file);
      formData.append('caption', photo.caption);
      formData.append('eventType', photo.eventType);
      try {
        const response = await fetch('http://localhost:3001/api/upload', {
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          successCount++;
          if (triggerUpdate) {
            triggerUpdate();
          }
        }
      } catch (err) {
        console.error('Eroare la încărcarea fotografiei:', err);
        toast.error('Eroare la încărcarea fotografiei. Încercați din nou.');
      }
    }
    setIsUploading(false);
    setUploadSuccess(true);
    setLocalPhotos([]);
    if (successCount > 0) {
      toast.success(`${successCount} fotografie${successCount === 1 ? '' : 'i'} încărcat${successCount === 1 ? 'ă' : 'e'} cu succes!`);
    }
  };

  const handleFinalize = () => {
    setUploadSuccess(false);
    toast('Încărcarea a fost finalizată!');
  };

  return (
    <>
      <div className="relative py-24 mt-16">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/biserica-sf-sava.JPG" 
            alt="Biserica Sfântul Sava" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/30"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-white mb-4">Galerie de fotografii</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Împărtășiți momentele speciale ale ceremoniilor dvs. cu comunitatea noastră
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-primary/80 mb-8 leading-relaxed">
            Puteți adăuga mai multe fotografii, completa descrierea și tipul evenimentului pentru fiecare, apoi apasă "Trimite fotografiile".<br/>
            Fotografiile vor fi afișate pe pagina principală după aprobarea preotului.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-2 border-gold/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary">Încarcă fotografiile tale</CardTitle>
              <CardDescription className="text-primary/70">
                Poți adăuga mai multe fotografii și edita detaliile înainte de trimitere.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="border-2 border-dashed border-gold/20 rounded-lg p-8 text-center bg-cream/10 cursor-pointer mb-6"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <Camera className="h-12 w-12 mx-auto text-gold mb-4" />
                <p className="text-primary/80 mb-4">
                  Trageți fișierele aici sau faceți click pentru a selecta
                </p>
                <input
                  type="file"
                  id="file-upload"
                  multiple
                  className="hidden"
                  ref={fileInputRef}
                  onChange={e => handleFileSelect(e.target.files)}
                  accept="image/*"
                />
                <Button 
                  variant="outline"
                  className="bg-white hover:bg-cream border-2 border-gold/20 hover:border-gold text-primary mt-2"
                  disabled={isUploading}
                  onClick={e => { e.stopPropagation(); fileInputRef.current?.click(); }}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Selectează fotografii
                </Button>
              </div>
              {localPhotos.length > 0 && (
                <div className="space-y-6">
                  {localPhotos.map(photo => (
                    <div key={photo.id} className="flex items-center gap-4 border rounded-lg p-3 bg-white shadow">
                      <img src={photo.url} alt="preview" className="w-20 h-20 object-cover rounded" />
                      <div className="flex-1">
                        <Input
                          type="text"
                          placeholder="Descriere (ex: Cununie Familia Popescu)"
                          value={photo.caption}
                          onChange={e => updatePhoto(photo.id, { caption: e.target.value })}
                          className="mb-2"
                        />
                        <select
                          className="w-full p-2 border rounded"
                          value={photo.eventType}
                          onChange={e => updatePhoto(photo.id, { eventType: e.target.value as EventType })}
                        >
                          <option value="cununie">Taina Cununiei</option>
                          <option value="botez">Taina Botezului</option>
                        </select>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removePhoto(photo.id)} title="Șterge">
                        <X className="w-5 h-5 text-red-500" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-4 border-t-2 border-gold/20 pt-4">
              <p className="text-xs text-primary/60">Format: JPG, PNG sau GIF</p>
              {localPhotos.length > 0 && (
                <Button
                  variant="default"
                  className="bg-gold text-white hover:bg-gold/90 px-8 py-3 text-lg font-serif rounded shadow"
                  disabled={isUploading}
                  onClick={handleUpload}
                >
                  {isUploading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Se încarcă...</> : 'Trimite fotografiile'}
                </Button>
              )}
              {uploadSuccess && (
                <Button
                  variant="outline"
                  className="border-gold text-gold mt-2"
                  onClick={handleFinalize}
                >
                  Finalizează încărcarea
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Instagramabil;