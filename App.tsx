import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Header from './components/Header';
import InteractiveMap from './components/InteractiveMap';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import { Event, AppView } from './types';
import { INITIAL_EVENTS_DATA, FACULTIES_DATA } from './constants';
import GlassCard from './components/GlassCard';
import { Info, Mail } from 'react-feather';

// Dynamically import AeroBackground with no SSR to avoid window is not defined errors
const AeroBackground = dynamic(() => import('./components/AeroBackground'), {
  ssr: false,
});


const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(INITIAL_EVENTS_DATA);
  const [selectedFacultyId, setSelectedFacultyId] = useState<string | null>(null);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(INITIAL_EVENTS_DATA);
  const [currentView, setCurrentView] = useState<AppView>(AppView.EVENTS);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
      // Respect user's OS preference if no theme is saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark'; // Default to dark mode for SSR or non-browser environments
  });
  
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    if (selectedFacultyId) {
      setFilteredEvents(events.filter(event => event.facultyId === selectedFacultyId));
    } else {
      setFilteredEvents(events);
    }
  }, [selectedFacultyId, events]);

  const handleFacultySelect = useCallback((facultyId: string | null) => {
    setSelectedFacultyId(facultyId);
  }, []);

  const handleSubmitEvent = useCallback((newEventData: Omit<Event, 'id' | 'imageUrl'>) => {
    const newEvent: Event = {
      ...newEventData,
      id: String(Date.now()), // Simple ID generation
      imageUrl: `https://picsum.photos/seed/${Date.now()}/400/200` // Placeholder image
    };
    setEvents(prevEvents => [newEvent, ...prevEvents]);
    setCurrentView(AppView.EVENTS); // Switch back to event view after submission
    setSelectedFacultyId(null); // Show all events including the new one
  }, []);

  const currentFacultyName = selectedFacultyId 
    ? FACULTIES_DATA.find(f => f.id === selectedFacultyId)?.name 
    : 'Todos los Eventos';

  // Wrap content with AeroBackground in light mode, use regular div in dark mode
  const ContentWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => {
    if (theme === 'light') {
      return (
        <AeroBackground>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
          <div className="relative z-10 min-h-screen flex flex-col">
            {children}
          </div>
        </AeroBackground>
      );
    }

    return (
      <div className="min-h-screen flex flex-col text-neutral-100 bg-black transition-all duration-500">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
        {children}
      </div>
    );
  };

  return (
    <ContentWrapper>
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme}
        currentView={currentView}
        setCurrentView={setCurrentView}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
      <main className="flex-grow container mx-auto p-6 relative z-10 pt-24 transition-all duration-300">
        <div className="w-full">
          {currentView === AppView.ABOUT && (
            <GlassCard className="p-6">
              <h2 className="text-2xl font-bold text-[#E14536] dark:text-[#FD7A03] mb-6 text-center">Acerca de TUCANPUS</h2>
              <div className="prose dark:prose-invert max-w-3xl mx-auto">
                <p className="text-lg mb-4">
                  TUCANPUS es una plataforma diseñada para la comunidad del Campus Juan Gómez Millas de la Universidad de Chile.
                  Nuestro objetivo es centralizar y difundir la información sobre eventos académicos, culturales y deportivos 
                  que ocurren en el campus.
                </p>
                <h3 className="text-xl font-semibold text-[#E14536] dark:text-[#FD7A03] mt-8 mb-4">Características</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Info className="w-5 h-5 text-[#E14536] dark:text-[#FD7A03] mt-0.5 mr-2 flex-shrink-0" />
                    <span>Mapa interactivo del campus con ubicación de facultades y eventos</span>
                  </li>
                  <li className="flex items-start">
                    <Info className="w-5 h-5 text-[#E14536] dark:text-[#FD7A03] mt-0.5 mr-2 flex-shrink-0" />
                    <span>Calendario de eventos actualizado</span>
                  </li>
                  <li className="flex items-start">
                    <Info className="w-5 h-5 text-[#E14536] dark:text-[#FD7A03] mt-0.5 mr-2 flex-shrink-0" />
                    <span>Formulario para enviar nuevos eventos</span>
                  </li>
                </ul>
                <h3 className="text-xl font-semibold text-[#E14536] dark:text-[#FD7A03] mt-8 mb-4">Contacto</h3>
                <p className="mb-4">
                  ¿Tienes preguntas o sugerencias? Escríbenos a:
                </p>
                <a 
                  href="mailto:contacto@tucanpus.cl" 
                  className="inline-flex items-center text-[#E14536] dark:text-[#FD7A03] hover:underline"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  contacto@tucanpus.cl
                </a>
              </div>
            </GlassCard>
          )}
          
          {currentView === AppView.EVENTS && (
            <div className="space-y-8">
              <GlassCard className="p-4 sm:p-6">
                <h2 className="text-2xl font-semibold text-[#E14536] dark:text-[#FD7A03] mb-4 text-center">Mapa Interactivo del Campus</h2>
                <InteractiveMap 
                  onFacultySelect={handleFacultySelect} 
                  selectedFacultyId={selectedFacultyId} 
                />
                {selectedFacultyId && (
                  <button 
                    onClick={() => handleFacultySelect(null)}
                    className="mt-4 mx-auto block px-4 py-2 text-sm font-medium text-[#E14536] dark:text-[#FD7A03] bg-[#11B5C2]/50 dark:bg-[#11B5C2]/30 border border-[#11B5C2] dark:border-[#BBDD30] rounded-md hover:bg-[#BBDD30]/50 dark:hover:bg-[#BBDD30]/40 transition-colors"
                  >
                    Mostrar Todos los Eventos
                  </button>
                )}
              </GlassCard>
              
              <GlassCard className="p-4 sm:p-6">
                <h2 className="text-2xl font-semibold text-[#E14536] dark:text-[#FD7A03] mb-1 text-center">
                  Eventos en: <span className="text-[#BBDD30] dark:text-[#FAE403]">{currentFacultyName}</span>
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center mb-6">
                  {selectedFacultyId ? `Explora los eventos programados para ${currentFacultyName}.` : `Descubre todos los eventos en el campus.`}
                </p>
                <EventList events={filteredEvents} />
              </GlassCard>
            </div>
          )}

          {currentView === AppView.SUBMIT_EVENT && (
            <AeroBackground>
              <EventForm onSubmitEvent={handleSubmitEvent} />
            </AeroBackground>
          )}
        </div>
      </main>
      <footer className="text-center p-4 text-sm text-neutral-700 dark:text-neutral-300 border-t border-[#11B5C2]/30 dark:border-[#BBDD30]/30 bg-white/30 dark:bg-black/20 backdrop-blur-md shadow-lg">
        {new Date().getFullYear()} TUCANPUS JGM. Inspirado en la comunidad estudiantil.
      </footer>
    </ContentWrapper>
  );
};

export default App;