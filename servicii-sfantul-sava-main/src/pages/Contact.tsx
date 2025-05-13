import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle form submission to a backend here
    toast({
      title: "Mesaj trimis",
      description: "Vă mulțumim pentru mesaj. Vă vom contacta în cel mai scurt timp.",
    });
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-cream-dark py-16 md:py-24 mt-16">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center">Contact</h1>
          <p className="text-center text-lg text-primary/80 max-w-3xl mx-auto">
            Suntem aici pentru a vă răspunde la întrebări și pentru a vă ajuta cu programările pentru 
            sfintele taine sau alte nevoi spirituale.
          </p>
        </div>
      </div>

      {/* Preotii Bisericii Section */}
      <section className="page-section bg-white py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-16">Preoții Bisericii</h2>
          <div className="flex flex-col items-center gap-16">
            {/* Preot Paroh */}
            <div className="flex flex-col items-center">
              <div className="w-56 h-56 mb-8">
                <div className="aspect-square bg-cream rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="/images/preot-paroh.jpg" 
                    alt="Preot Paroh" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl mb-2">Preot Paroh Narcis-Constantin Axinte</h3>
                <p className="text-primary/80 mb-2">Consilier asistență socială</p>
                <p className="text-primary/80">Tel: +40 744 390 852</p>
              </div>
            </div>
            
            {/* Preoți Coslujitori */}
            <div className="flex justify-center gap-16 flex-wrap">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 mb-6">
                  <div className="aspect-square bg-cream rounded-full overflow-hidden shadow-lg">
                    <img 
                      src="/images/preot-mihai.jpg" 
                      alt="Preot Coslujitor" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg mb-2">Preot Coslujitor Mihai Prodan</h3>
                  <p className="text-primary/80 text-sm mb-2">Preotul comunității persoanelor cu deficiență de auz și vorbire</p>
                  <p className="text-primary/80">Tel: +40 744 390 852</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 mb-6">
                  <div className="aspect-square bg-cream rounded-full overflow-hidden shadow-lg">
                    <img 
                      src="/images/preot-mihail.jpg" 
                      alt="Preot Coslujitor" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg mb-2">Preot Coslujitor Mihail Siminciuc</h3>
                  <p className="text-primary/80 text-sm mb-2">Responsabil ATOR Iași</p>
                  <p className="text-primary/80">Tel: +40 744 390 852</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corul Bisericii Section */}
      <section className="page-section bg-cream py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-16">Corul Bisericii</h2>
          <div className="flex flex-col items-center gap-16">
            {/* Dirijor */}
            <div className="flex flex-col items-center">
              <div className="w-56 h-56 mb-8">
                <div className="aspect-square bg-white rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="/images/dirijor.jpg" 
                    alt="Dirijorul Corului" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl mb-2">Adrian Sîrbu</h3>
                <p className="text-primary/80">Dirijorul Corului</p>
              </div>
            </div>
            
            {/* Membri cor */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-40 h-40">
                    <div className="aspect-square bg-white rounded-full overflow-hidden shadow-lg">
                      <img 
                        src={`/images/cor-${index}.jpg`}
                        alt={`Membru cor ${index}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="page-section bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl mb-6">Trimite-ne un mesaj</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                  Nume și prenume
                </label>
                <input 
                  type="text" 
                  id="name"
                  className="contact-input" 
                  placeholder="Introduceți numele complet" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="contact-input" 
                  placeholder="exemplu@email.com" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
                  Telefon
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="contact-input" 
                  placeholder="+40 123 456 789" 
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary mb-1">
                  Subiect
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="contact-input" 
                  placeholder="Motivul contactării" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
                  Mesaj
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="contact-input" 
                  placeholder="Scrieți mesajul dumneavoastră aici..." 
                  required 
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Trimite mesajul
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl mb-6">Informații de contact</h2>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <Phone size={32} className="mr-4 text-gold mt-1" />
                  <div>
                    <p className="font-medium text-2xl">Preot Mihai Prodan</p>
                    <p className="text-primary/80 text-2xl">+40 744 390 852</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone size={32} className="mr-4 text-gold mt-1" />
                  <div>
                    <p className="font-medium text-2xl">Responsabil rezervări</p>
                    <p className="text-primary/80 text-2xl">+40 750 702 806</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={32} className="mr-4 text-gold mt-1" />
                  <div>
                    <p className="font-medium text-2xl">Email parohie</p>
                    <p className="text-primary/80 text-2xl">bisericasfsava@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={32} className="mr-4 text-gold mt-1" />
                  <div>
                    <p className="font-medium text-2xl">Email rezervări</p>
                    <p className="text-primary/80 text-2xl">servicii@parohiasfsava.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin size={32} className="mr-4 text-gold mt-1" />
                  <div>
                    <p className="font-medium text-2xl">Adresă</p>
                    <p className="text-primary/80 text-2xl">
                      Str. Costache Negri, nr. 44<br />
                      700073, Iași, România
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
