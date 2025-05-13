import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Youtube, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Acasă', path: '/' },
  { 
    name: 'Taina Sfintei Cununii', 
    path: '/cununie',
    submenu: [
      { name: 'Informații miri și nași', path: '/cununie/informatii' },
      { name: 'Rezervări și plăți', path: '/cununie/rezervari' }
    ]
  },
  { 
    name: 'Taina Sfântului Botez', 
    path: '/botez',
    submenu: [
      { name: 'Informații părinți și nași', path: '/botez/informatii' },
      { name: 'Rezervări și plăți', path: '/botez/rezervari' }
    ]
  },
  { 
    name: 'Activitate filantropică', 
    path: 'https://filantropiesfsavaiasi.ro/',
    external: true 
  },
  { 
    name: 'Site parohial', 
    path: 'https://sfsava.mmb.ro/',
    external: true 
  },
  { name: 'Instagramabil', path: '/instagramabil' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };
  
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="font-serif text-xl font-medium text-primary flex items-center"
        >
          <img 
            src="/images/logo-sf-sava2.png" 
            alt="Logo Parohia Sfântul Sava" 
            className="h-12 w-auto mr-3"
          />
          <span className="text-gold">Parohia</span>
          <span className="ml-2">„Sfântul Sava cel Sfințit"</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <div key={link.name} className="relative group">
              {link.external ? (
                <a 
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary/80 hover:text-gold transition-colors flex items-center"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  to={link.path}
                  className="text-sm font-medium text-primary/80 hover:text-gold transition-colors flex items-center"
                  onClick={() => link.submenu && toggleSubmenu(link.name)}
                >
                  {link.name}
                  {link.submenu && (
                    <ChevronDown 
                      size={16} 
                      className={cn(
                        "ml-1 transition-transform",
                        openSubmenu === link.name ? "rotate-180" : ""
                      )}
                    />
                  )}
                </Link>
              )}
              {link.submenu && (
                <div 
                  className={cn(
                    "absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 mt-1 transition-all duration-200",
                    openSubmenu === link.name ? "opacity-100 visible" : "opacity-0 invisible"
                  )}
                >
                  {link.submenu.map(subItem => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block px-4 py-2 text-sm text-primary/80 hover:bg-cream hover:text-gold transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center space-x-4 ml-4">
            <a 
              href="https://www.facebook.com/Parohiasfantulsavaiasi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-gold transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com/parohiasfsavacelsfintit.iasi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-gold transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.youtube.com/@parohiasfantulsava" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-gold transition-colors"
            >
              <Youtube size={20} />
            </a>
            <a 
              href="https://www.tiktok.com/@parohiasfsavacelsfintit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-gold transition-colors"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <nav className="flex flex-col py-4">
            {navLinks.map(link => (
              <div key={link.name}>
                <div 
                  className="px-4 py-3 text-primary/80 hover:bg-cream hover:text-gold transition-colors flex items-center justify-between"
                  onClick={() => link.submenu && toggleSubmenu(link.name)}
                >
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="flex-grow"
                      onClick={(e) => {
                        if (!link.submenu) {
                          setIsMenuOpen(false);
                        } else {
                          e.preventDefault();
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                  {link.submenu && (
                    <ChevronDown 
                      size={16} 
                      className={cn(
                        "transition-transform",
                        openSubmenu === link.name ? "rotate-180" : ""
                      )}
                    />
                  )}
                </div>
                {link.submenu && openSubmenu === link.name && (
                  <div className="pl-8">
                    {link.submenu.map(subItem => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-primary/80 hover:bg-cream hover:text-gold transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center justify-center space-x-4 px-4 py-3">
              <a 
                href="https://www.facebook.com/Parohiasfantulsavaiasi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/parohiasfsavacelsfintit.iasi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@parohiasfantulsava" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-gold transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@parohiasfsavacelsfintit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-gold transition-colors"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
