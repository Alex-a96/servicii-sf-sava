import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Heart, Church, Images, Upload, Loader2 } from 'lucide-react';
import PhotoCarousel from '@/components/PhotoCarousel';
import { useGalleryUpdate } from "@/contexts/GalleryUpdateContext";
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
      for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
      }

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

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
        <img  src="/images/biserica-sf-sava.JPG" 
          alt="Biserica Sfântul Sava cel Sfințit" 
          className="hero-bg"
        />
        <div className="relative z-10 max-w-3xl mx-auto animate-fade-in">
          <h1 className="section-title text-5xl md:text-5xl">Parohia ,,Sfântul Sava cel Sfințit”</h1>
          <p className="section-subtitle mt-4 mb-8">
            Arhiepicopia Iașilor, Protopopiatul Iași 1
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/cununie" className="btn-primary">
              Taina Sfintei Cununii
            </Link>
            <Link to="/botez" className="btn-primary">
              Taina Sfântului Botez
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="page-section bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Bine ați venit</h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-primary/80 mb-8 leading-relaxed">
            Biserica "Sfântul Sava cel Sfințit" –
            construcţie monumentală unică în Moldova, în care se îmbină elemente arhitecturale bizantine, orientale, gotice moldoveneşti şi munteneşti –
            se înscrie ca una dintre cele mai impresionante şi mai vechi biserici.
          </p>
          <h3 className="text-xl font-semibold text-gold mb-2">Scurt istoric</h3>
          <p className="text-primary/80 mb-8 leading-relaxed">
            Biserica "Sfântul Sava cel Sfințit" –
            construcţie monumentală unică în Moldova, în care se îmbină elemente arhitecturale bizantine, orientale, gotice moldoveneşti şi munteneşti –
            se înscrie ca una dintre cele mai impresionante şi mai vechi biserici.
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
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
      <section className="page-section bg-cream">
        <h2 className="section-title text-center">Serviciile noastre</h2>
        <div className="h-1 w-24 bg-gold mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-40 bg-gold/20 flex items-center justify-center">
              <img src="/images/servicii-taina-cununiei.png" alt="Taina Sfintei Cununii" style={{height: 64}} />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-medium mb-3">Taina Sfintei Cununii</h3>
              <p className="text-primary/70 mb-4">
                Unirea a doi oameni în fața lui Dumnezeu, într-un legământ sfânt de iubire.
              </p>
              <Link to="/cununie" className="text-gold hover:underline font-medium">
                Detalii →
              </Link>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-40 bg-gold/20 flex items-center justify-center">
              <img src="/images/servicii-taina-botezului.png" alt="Taina Sfântului Botez" style={{height: 64}} />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-medium mb-3">Taina Sfântului Botez</h3>
              <p className="text-primary/70 mb-4">
                Intrarea în comunitatea creștină și începutul vieții în Hristos.
              </p>
              <Link to="/botez" className="text-gold hover:underline font-medium">
                Detalii →
              </Link>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-40 bg-gold/20 flex items-center justify-center">
              <img src="/images/servicii-activitate-filantropica.png" alt="Activitate filantropică" style={{height: 64}} />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-medium mb-3">Activitate filantropică</h3>
              <p className="text-primary/70 mb-4">
                Ajutăm comunitatea prin activități caritabile și sprijin pentru cei nevoiași.
              </p>
              <a
                href="https://filantropiesfsavaiasi.ro/"
                className="text-gold hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Detalii →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Priest Section */}
      <section className="page-section bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="aspect-square bg-cream rounded-full overflow-hidden">
              <img 
                src="/images/preoti-sf-sava.jpg" 
                alt="Preot Paroh" 
                className="w-full h-full object-cover object-[center_5%]"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="section-title">Despre preoții slujitori</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>
            <p className="text-primary/80 mb-6 leading-relaxed">
               În cadrul Bisericii "Sf. Sava cel Sfințit", veți regăsi trei preoți slujitori.
               <div className="space-y-2 mt-4">
                 <div>Preotul Paroh Narcis-Constantin Axinte,{' '}
                   <a 
                     href="https://mmb.ro/biroul-de-asistenta-sociala-al-centrului-eparhial-iasi" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-gold hover:underline"
                   >
                     consilier asistență socială
                   </a>
                 </div>
                 <div>Preotul Coslujitor Mihai Prodan,{' '}
                   <a 
                     href="https://www.facebook.com/comunitateaortdoxaasurzilordiniasi" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-gold hover:underline"
                   >
                     preotul comunității personoanelor cu deficiență de auz și vorbire
                   </a>
                 </div>
                 <div>Preotul Coslujitor Mihail Siminciuc, responsabil{' '}
                   <a 
                     href="https://www.facebook.com/iasi.ator" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-gold hover:underline"
                   >
                     ATOR Iași
                   </a>
                 </div>
               </div>
            </p>
            
            <Link to="/contact" className="btn-secondary">
              Contactează preotul
            </Link>
          </div>
        </div>
      </section>

      {/* About Choir Section */}
      <section className="page-section bg-cream">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3 order-2 md:order-1">
            <h2 className="section-title">Despre corul Bisericii</h2>
            <div className="h-1 w-24 bg-gold mb-6"></div>
            <p className="text-primary/80 mb-6 leading-relaxed">
              Corul Bisericii „Sfântul Sava cel Sfințit” este format din membri dedicați care contribuie la frumusețea slujbelor religioase prin cântările lor. Sub conducerea dirijorului nostru, corul participă activ la toate slujbele Bisericii noastre.
            </p>
            <p className="text-primary/80 mb-6 leading-relaxed">
              Dacă sunteți pasionat de muzică bisericească și doriți să vă alăturați corului, vă stăm la dispoziție pentru mai multe informații.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-secondary">
                Contactează dirijorul
              </Link>
              <a
                href="https://www.youtube.com/@parohiasfantulsava"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Audiază corul
              </a>
            </div>
          </div>
          <div className="md:w-1/3 order-1 md:order-2">
            <div className="aspect-square bg-white rounded-full overflow-hidden shadow-lg flex items-center justify-center">
              <img 
                src="/images/cor-sf-sava.jpg" 
                alt="Corul Bisericii Sfântul Sava" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Secțiune citate */}
      <section className="page-section bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-8 flex flex-col items-center">
            <span className="inline-flex items-center gap-2 text-gold text-4xl mb-2">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-8 h-8'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2M12 15v2m0 0v2m0-2h2m-2 0H8' /></svg>
              Gânduri
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-center text-gold text-xl font-semibold mb-4">Despre Taina Sfintei Cununii</h3>
              <div className="flex flex-col gap-8">
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center min-h-[420px] justify-center flex-grow">
                  <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-gold bg-white shadow-lg flex items-center justify-center">
                    <img src="/images/citate-hrisostom.png" alt="Citat Cununie" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-primary/80 italic mb-2 text-center">„Nu vorbi cu supla ta neclintită, cu bunătate, cu cinste, cu dragoste. Cinstește-ți și nu avea nevoie de cinstirea altora. Nu va avea nevoie de slavă de la alții, dacă slava va curge de la iubire, căci atunci va fi plină de bunătate.”</p>
                  <p className="text-primary/80 italic mb-2 text-center">„Să o cinstești mai mult decât pe prietenii tăi, mai mult chiar și decât pe copiii voștri, să o aperi, să te îngrijești de ea, să o iubești. Să o aduci la locul cel mai de cinste al inimii tale, să o respecți și să nu-i arăți niciodată vreo mânie.”</p>
                  <span className="text-gold font-semibold">Sfântul Ioan Gură de Aur</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-center text-gold text-xl font-semibold mb-4">Despre Taina Sfântului Botez</h3>
              <div className="flex flex-col gap-8">
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center min-h-[420px] justify-center flex-grow">
                  <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-gold bg-white shadow-lg flex items-center justify-center">
                    <img src="/images/citate-popovici.png" alt="Citat Botez" className="w-full h-full object-cover object-top" />
                  </div>
                  <p className="text-primary/80 italic mb-2 text-center">„În Botez și în Mirungere, omul se naște cu adevărat, nu atunci când îl naște mama sa ci atunci când se naște într-o viață nouă întru Hristos Iisus pentru viața cea nemuritoare; Ievirea lui Hristos este mama noastră a tuturor.”</p>
                  <p className="text-primary/80 italic mb-2 text-center">„Omul se naște cu adevărat atunci când se naște din nou întru Hristos iar părinții lui adevărați sunt Hristos și mama noastră a tuturor.”</p>
                  <span className="text-gold font-semibold">Sfântul Iustin Popovici</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
