import React, { useState, useEffect } from 'react';
import { FACULTIES_DATA, MAP_IMAGE_URL } from '../constants';

interface InteractiveMapProps {
  onFacultySelect: (facultyId: string | null) => void;
  selectedFacultyId: string | null;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ onFacultySelect, selectedFacultyId }) => {
  const [hoveredFaculty, setHoveredFaculty] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Add a slight delay for the animation to play on load and add animation styles
  useEffect(() => {
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-slow {
        0%, 100% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(-10px) translateX(5px); }
      }
      @keyframes float-medium {
        0%, 100% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(5px) translateX(-10px); }
      }
      .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
      .animate-float-medium { animation: float-medium 12s ease-in-out infinite; }
    `;
    document.head.appendChild(style);

    const timer = setTimeout(() => setIsLoaded(true), 300);
    
    return () => {
      clearTimeout(timer);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden aspect-[16/9] transition-all duration-1000">
      {/* Glowing orb background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E14536]/10 via-[#FD7A03]/5 to-[#11B5C2]/10 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.02]"></div>
        <style>{`.faculty-area { display: none !important; }`}</style>
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#E14536]/20 blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-[#BBDD30]/20 blur-3xl animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-[#11B5C2]/20 blur-3xl animate-float-slow"></div>
        
        {/* Map container */}
        <div className={`relative w-full h-full transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          <div className="absolute inset-0 overflow-hidden bg-gray-100 dark:bg-gray-900">
            <img 
              src={MAP_IMAGE_URL} 
              alt="Campus Juan Gómez Millas Map" 
              className="w-full h-full object-contain p-2"
              onLoad={() => setIsLoaded(true)}
              style={{
                filter: 'contrast(1.05) brightness(1.05)'
              }}
            />
          </div>
            
          {/* Temporarily hidden interactive areas for screenshot */}
          <style jsx>{`
            .interactive-area { display: none !important; }
          `}</style>

          {/* Faculty areas */}
          {FACULTIES_DATA.map((faculty) => {
            const isSelected = selectedFacultyId === faculty.id;
            const isHovered = hoveredFaculty === faculty.id;
            
            return (
              <button
                key={faculty.id}
                title={faculty.name}
                onClick={() => onFacultySelect(faculty.id)}
                onMouseEnter={() => setHoveredFaculty(faculty.id)}
                onMouseLeave={() => setHoveredFaculty(null)}
                style={{
                  ...faculty.style,
                  transition: 'all 0.3s ease-in-out, transform 0.2s ease-out',
                  transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                }}
                className={`faculty-area absolute z-10 rounded-xl border-2 backdrop-blur-sm cursor-pointer group transition-all duration-300
                  ${isSelected 
                    ? 'bg-gradient-to-br from-[#FD7A03]/80 to-[#FAE403]/80 border-[#FAE403] shadow-lg shadow-[#FD7A03]/40 scale-105' 
                    : 'bg-gradient-to-br from-[#11B5C2]/50 to-[#BBDD30]/50 border-[#11B5C2]/70 hover:border-[#BBDD30] hover:shadow-md hover:shadow-[#BBDD30]/30 hover:scale-102'}
                  ${isHovered ? 'z-20' : ''}`}
                aria-label={`Ver eventos en ${faculty.name}`}
              >
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  isSelected 
                    ? 'bg-gradient-to-br from-[#FD7A03]/40 to-[#FAE403]/40' 
                    : 'bg-gradient-to-br from-[#11B5C2]/20 to-[#BBDD30]/20 group-hover:from-[#11B5C2]/30 group-hover:to-[#BBDD30]/30'
                }`}></div>
                
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-2 py-1 text-xs font-bold transition-all duration-300 whitespace-nowrap
                  ${isSelected 
                    ? 'bg-[#E14536] text-white' 
                    : 'bg-white/90 text-[#E14536] group-hover:bg-[#E14536] group-hover:text-white'
                  } rounded-full shadow-md`}
                >
                  {faculty.mapName || faculty.name.split(' ').pop()}
                </span>
                
                {/* Glow effect on hover */}
                {isHovered && !isSelected && (
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#11B5C2]/20 to-[#BBDD30]/20 animate-pulse"></div>
                )}
              </button>
            );
          })}
          
          {/* Reset selection button */}
          {selectedFacultyId && (
            <button
              onClick={() => onFacultySelect(null)}
              className="absolute bottom-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm text-[#E14536] font-semibold rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center gap-2 z-30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Limpiar selección
            </button>
          )}
        </div>
      </div>
      
      {/* Animation styles are added via useEffect */}
    </div>
  );
};

export default InteractiveMap;