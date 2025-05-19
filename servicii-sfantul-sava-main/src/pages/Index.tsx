import React from 'react';
import { Link } from 'react-router-dom';
import { Images } from 'lucide-react';
import PhotoCarousel from '@/components/PhotoCarousel';
import { useGalleryUpdate } from '@/contexts/GalleryUpdateContext';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { triggerUpdate } = useGalleryUpdate();
  const [isUploading, setIsUploading] = React.useState(false);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      Array.from(files).forEach(file => formData.append('images', file));

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      triggerUpdate();
    } catch (error) {
      console.error('Error uploading images:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="/images/biserica-sf-sava.JPG"
          alt="Biserica Sfântul Sava cel Sfințit"
          className="hero-bg"
        />
        <div className="relative z-10 max-w-3xl mx-auto animate-fade-in text-center">
          <h1 className="section-title text-5xl">Parohia „Sfântul Sava cel Sfințit”</h1>
          <p className="section-subtitle mt-4 mb-8">
            Arhiepiscopia Iașilor, Protopopiatul Iași 1
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/cununie" className="btn-primary">Taina Sfintei Cununii</Link>
            <Link to="/botez" className="btn-primary">Taina Sfântului Botez</Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="page-section bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">Bine ați venit</h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-primary/80 mb-8 leading-relaxed">
            Biserica "Sfântul Sava cel Sfințit” – construcţie monumentală unică în Moldova, în care se îmbină elemente arhitecturale bizantine, orientale, gotice moldoveneşti şi munteneşti – se înscrie ca una dintre cele mai impresionante şi mai vechi biserici.
          </p>
          <h3 className="text-xl font-semibold text-gold mb-2">Scurt istoric</h3>
          <p className="text-primary/80 mb-8 leading-relaxed">
            Aceeași descriere poate fi continuată aici sau completată cu alte detalii istorice.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="page-section bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Images className="text-gold h-6 w-6" />
            <h2 className="section-title text-center">Galeria comunității</h2>
          </div>
          <div className="h-1 w-24 bg-gold mx-auto mb-8"></div>
          <PhotoCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section className="page-section bg-cream text-center">
        <h2 className="section-title">Serviciile noastre</h2>
        <div className="h-1 w-24 bg-gold mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Cards */}
          {[
            {
              title: "Taina Sfintei Cununii",
              img: "/images/servicii-taina-cununiei.png",
              description: "Unirea a doi oameni în fața lui Dumnezeu, într-un legământ sfânt de iubire.",
              link: "/cununie"
            },
            {
              title: "Taina Sfântului Botez",
              img: "/images/servicii-taina-botezului.png",
              description: "Intrarea în comunitatea creștină și începutul vieții în Hristos.",
              link: "/botez"
            },
            {
              title: "Activitate filantropică",
              img: "/images/servicii-activitate-filantropica.png",
              description: "Ajutăm comunitatea prin activități caritabile și sprijin pentru cei nevoiași.",
              externalLink: "https://filantropiesfsavaiasi.ro/"
            }
          ].map(({ title, img, description, link, externalLink }) => (
            <div key={title} className="bg-white rounded-lg shadow-md hover:scale-105 transition-transform overflow-hidden">
              <div className="h-40 bg-gold/20 flex items-center justify-center">
                <img src={img} alt={title} style={{ height: 64 }} loading="lazy" />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-serif text-xl font-medium mb-3">{title}</h3>
                <p className="text-primary/70 mb-4">{description}</p>
                {link ? (
                  <Link to={link} className="text-gold hover:underline font-medium">Detalii →</Link>
                ) : (
                  <a
                    href={externalLink}
                    className="text-gold hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Detalii despre ${title}`}
                  >
                    Detalii →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Preoți */}
      <section className="page-section bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="aspect-square bg-cream rounded-full overflow-hidden">
              <img
                src="/images/preoti-sf-sava.jpg"
                alt="Preot Paroh"
                className="w-full h-full object-cover object-[center_5%]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="section-title">Despre preoții slujitori</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>
            <p className="text-primary/80 leading-relaxed mb-6">
              În cadrul Bisericii „Sf. Sava cel Sfințit”, veți regăsi trei preoți slujitori:
            </p>
            <ul className="space-y-2 text-primary/80 mb-6">
              <li>
                Preotul Paroh Narcis-Constantin Axinte —{" "}
                <a href="https://mmb.ro/biroul-de-asistenta-sociala-al-centrului-eparhial-iasi" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                  consilier asistență socială
                </a>
              </li>
              <li>
                Preotul Coslujitor Mihai Prodan —{" "}
                <a href="https://www.facebook.com/comunitateaortdoxaasurzilordiniasi" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                  slujitor al comunității cu deficiențe de auz și vorbire
                </a>
              </li>
              <li>
                Preotul Coslujitor Mihail Siminciuc —{" "}
                <a href="https://www.facebook.com/iasi.ator" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                  responsabil ATOR Iași
                </a>
              </li>
            </ul>
            <Link to="/contact" className="btn-secondary">Contactează preotul</Link>
          </div>
        </div>
      </section>

      {/* Corul bisericii */}
      <section className="page-section bg-cream">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3 order-2 md:order-1">
            <h2 className="section-title">Despre corul Bisericii</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>
            <p className="text-primary/80 mb-6 leading-relaxed">
              Corul Bisericii „Sfântul Sava cel Sfințit” contribuie la frumusețea slujbelor prin cântările sale. Dirijorul coordonează activ participarea la toate evenimentele liturgice.
            </p>
            <p className="text-primary/80 mb-6 leading-relaxed">
              Dacă sunteți pasionat de muzică bisericească, vă puteți alătura!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-secondary">Contactează dirijorul</Link>
              <a
                href="https://www.youtube.com/@parohiasfantulsava"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ascultă corul pe YouTube"
              >
                Audiază corul
              </a>
            </div>
          </div>
          <div className="md:w-1/3 order-1 md:order-2">
            <div className="aspect-square bg-white rounded-full overflow-hidden shadow-lg">
              <img
                src="/images/cor-sf-sava.jpg"
                alt="Corul Bisericii Sfântul Sava"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Secțiunea citate se poate refactoriza separat pentru componentă reutilizabilă */}
    </>
  );
};

export default Index;
