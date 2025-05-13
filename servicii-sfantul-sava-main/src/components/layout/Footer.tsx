import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cream-dark text-primary pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo & About */}
          <div>
            <Link to="/" className="font-serif text-xl font-medium flex items-center">
              <img 
                src="/images/logo-sf-sava2.png" 
                alt="Logo Parohia Sfântul Sava" 
                className="h-12 w-auto mr-3"
              />
              <div>
                <span className="text-gold">Parohia</span>
                <span className="ml-2">„Sfântul Sava cel Sfințit”</span>
              </div>
            </Link>
            <p className="mt-4 text-primary/80 text-sm">
              Arhiepicopia Iașilor, Protopopiatul Iași 1
            </p>
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://www.facebook.com/Parohiasfantulsavaiasi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-gold transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/parohiasfsavacelsfintit.iasi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-gold transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.youtube.com/@parohiasfantulsava" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-gold transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="https://www.tiktok.com/@parohiasfsavacelsfintit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-gold transition-colors"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Linkuri rapide</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary/80 hover:text-gold text-sm transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/cununie" className="text-primary/80 hover:text-gold text-sm transition-colors">
                  Taina Sfintei Cununii
                </Link>
              </li>
              <li>
                <Link to="/botez" className="text-primary/80 hover:text-gold text-sm transition-colors">
                  Taina Sfântului Botez
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary/80 hover:text-gold text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-serif text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm">
                <Phone size={16} className="mr-2 text-gold" />
                <div>
                  <span className="font-medium">Preot Mihai Prodan:</span>
                  <span className="ml-2">+40 744 390 852</span>
                </div>
              </li>
              <li className="flex items-center text-sm">
                <Phone size={16} className="mr-2 text-gold" />
                <div>
                  <span className="font-medium">Responsabil rezervări:</span>
                  <span className="ml-2">+40 750 702 806</span>
                </div>
              </li>
              <li className="flex items-center text-sm">
                <Mail size={16} className="mr-2 text-gold" />
                <div>
                  <span className="font-medium">Email parohie:</span>
                  <span className="ml-2">bisericasfsava@gmail.com</span>
                </div>
              </li>
              <li className="flex items-center text-sm">
                <Mail size={16} className="mr-2 text-gold" />
                <div>
                  <span className="font-medium">Email rezervări:</span>
                  <span className="ml-2">servicii@parohiasfsava.com</span>
                </div>
              </li>
              <li className="flex items-start text-sm">
                <MapPin size={16} className="mr-2 mt-1 text-gold" />
                <span>Str. Costache Negri, nr. 44, 700073, Iași, România</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-primary/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-primary/60 mb-4 md:mb-0">
            &copy; {currentYear} Parohia „Sfântul Sava cel Sfințit”. Toate drepturile rezervate. Site dezvoltat de Kipomoni.
          </p>
          <div className="flex space-x-4">
            <Link to="/termeni" className="text-xs text-primary/60 hover:text-gold transition-colors">
              Termeni și condiții
            </Link>
            <Link to="/confidentialitate" className="text-xs text-primary/60 hover:text-gold transition-colors">
              Politica de confidențialitate
            </Link>
            <Link to="/returnare" className="text-xs text-primary/60 hover:text-gold transition-colors">
              Politica de Returnare și Rambursare
            </Link>
            <Link to="/cookie" className="text-xs text-primary/60 hover:text-gold transition-colors">
              Politica de Cookie-uri
            </Link>
          </div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;
