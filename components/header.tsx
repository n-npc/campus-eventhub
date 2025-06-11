import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Mail, Info, Calendar, FileText } from 'react-feather';
import { AppView } from '../types';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  theme, 
  toggleTheme, 
  currentView,
  setCurrentView,
  toggleMenu,
  isMenuOpen
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'events', label: 'Eventos', icon: Calendar, view: AppView.EVENTS },
    { id: 'submit', label: 'Enviar Evento', icon: Mail, view: AppView.SUBMIT_EVENT },
    { id: 'about', label: 'Acerca de', icon: Info, view: AppView.ABOUT },
    { id: 'news', label: 'Noticias', icon: FileText, view: AppView.NEWS },
  ];

  return (
    <header 
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-[#E14536]/95 via-[#FD7A03]/95 to-[#BBDD30]/95 backdrop-blur-md shadow-2xl py-2' 
          : 'bg-gradient-to-r from-[#E14536] via-[#FD7A03] to-[#BBDD30] py-3'
      }`}
    >
      <div className="w-full px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            <button 
              onClick={toggleMenu}
              className="md:hidden text-white p-2 -ml-2 mr-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <div className="flex items-center">
              <img 
                src="https://i.imgur.com/L5FX70r.png" 
                alt="Tucanpus Logo" 
                className="h-12 md:h-14 mr-3"
              />
              <div className="hidden sm:block border-l-2 border-white/30 pl-3">
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">TUCANPUS</h1>
                <p className="text-xs text-white/90 font-medium">Juan Gómez Millas</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.view)}
                className={`px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors ${
                  currentView === item.view
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 ml-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </nav>

          {/* Mobile Theme Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#E14536] to-[#BBDD30] shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.view);
                  toggleMenu();
                }}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center space-x-3 transition-colors ${
                  currentView === item.view
                    ? 'bg-white/20 text-white'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;