import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <img 
              src="https://starterhome.pl/wp-content/uploads/2025/12/Logo.png" 
              alt="StarterHome" 
              className="h-8 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
            />
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs font-light">
              Domy z drewna C24. Od marzenia do kluczy w 3 miesiące. Bezpiecznie, terminowo, bez ukrytych kosztów.
            </p>
            <div className="flex space-x-6 pt-2">
              <a href="#" className="text-gray-400 hover:text-dark transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-dark transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-dark uppercase tracking-widest mb-6">Menu</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Strona Główna</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Dostępne domki</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Technologia</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">O nas</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Models */}
          <div>
            <h3 className="text-xs font-bold text-dark uppercase tracking-widest mb-6">Modele</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Haven House</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Balance House</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Vista House</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-dark uppercase tracking-widest mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-xs text-gray-400">Infolinia</span>
                <a href="tel:+48733345573" className="text-dark hover:text-primary transition-colors font-medium">733 345 573</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs text-gray-400">Email</span>
                <a href="mailto:kontakt@starterhome.pl" className="text-dark hover:text-primary transition-colors font-medium">kontakt@starterhome.pl</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs text-gray-400">Lokalizacja</span>
                <span className="text-dark font-medium">Cała Polska</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>Copyright 2025 © Starterhome sp. z o. o.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-dark">Polityka Prywatności</a>
            <a href="#" className="hover:text-dark">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;