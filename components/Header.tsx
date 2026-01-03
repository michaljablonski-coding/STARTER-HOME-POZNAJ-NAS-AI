import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://starterhome.pl/wp-content/uploads/2025/12/Logo.png" 
              alt="StarterHome" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-12 items-center">
            <a href="#" className="text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-dark transition-colors">Modele</a>
            <a href="#" className="text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-dark transition-colors">Technologia</a>
            <a href="#" className="text-sm font-bold uppercase tracking-wider text-dark transition-colors">O nas</a>
            <a href="#" className="text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-dark transition-colors">Kontakt</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="tel:733345573" className="flex items-center gap-2 text-dark font-bold hover:text-primary tracking-tight text-sm uppercase">
              <Phone size={16} />
              733 345 573
            </a>
            <button className="bg-primary hover:bg-primaryHover text-white px-8 py-4 font-bold transition-all text-xs uppercase tracking-widest">
              Konfigurator
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark hover:text-primary p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen">
          <div className="px-6 pt-8 pb-6 space-y-4">
            <a href="#" className="block py-4 text-lg font-bold uppercase tracking-wider text-dark border-b border-gray-50">Strona Główna</a>
            <a href="#" className="block py-4 text-lg font-bold uppercase tracking-wider text-dark border-b border-gray-50">Dostępne modele</a>
            <a href="#" className="block py-4 text-lg font-bold uppercase tracking-wider text-dark border-b border-gray-50">Technologia</a>
            <a href="#" className="block py-4 text-lg font-bold uppercase tracking-wider text-primary border-b border-gray-50">O nas</a>
            <a href="#" className="block py-4 text-lg font-bold uppercase tracking-wider text-dark border-b border-gray-50">Kontakt</a>
            <div className="pt-8 mt-4">
               <a href="tel:733345573" className="flex items-center gap-3 py-4 text-dark font-bold text-xl">
                <Phone size={24} />
                733 345 573
              </a>
              <button className="w-full mt-4 bg-primary text-white py-5 font-bold tracking-widest text-sm uppercase">
                Konfigurator Online
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;