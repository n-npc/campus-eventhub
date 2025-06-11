import React, { useState, useEffect } from 'react';
import { Event, EventCategory } from '../types';
import { Clock, MapPin, Calendar, ArrowRight, Tag, UserCheck } from 'react-feather';

const categoryStyles: Record<EventCategory, string> = {
  'político-social': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  'cultural': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  'deportivo': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'académico': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  'otro': 'bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-300',
};

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [gradientAngle, setGradientAngle] = useState(0);

  // Animate gradient on hover
  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setGradientAngle(prev => (prev + 1) % 360);
      }, 50);
      return () => clearInterval(interval);
    } else {
      setGradientAngle(0);
    }
  }, [isHovered]);

  return (
    <div 
      className="relative rounded-2xl overflow-hidden transition-all duration-500 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing border effect */}
      <div 
        className="absolute inset-0 rounded-2xl p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
          background: `linear-gradient(${gradientAngle}deg, #E14536, #FD7A03, #FAE403, #BBDD30, #11B5C2, #E14536)`,
          backgroundSize: '200% 200%'
        }}
      />
      
      <div className="relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-xl h-full overflow-hidden transition-all duration-300 group-hover:bg-white/90 dark:group-hover:bg-neutral-800/90">
        {/* Image with gradient overlay */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.imageUrl || 'https://via.placeholder.com/400x200?text=Event+Image'}
            alt={event.title}
            className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/400x200?text=Event+Image';
            }}
          />
          
          {/* Tags container - moved to top; reserve space for faculty badge (right) */}
          <div className="absolute top-3 left-3 pr-24 max-w-[70%] flex flex-wrap gap-2 z-20">
            {event.categories.map((category, index) => (
              <span 
                key={index}
                className={`text-xs px-2 py-1 rounded-full flex items-center shadow-md backdrop-blur-sm bg-white/80 dark:bg-black/60 ${categoryStyles[category]}`}
              >
                <Tag className="w-3 h-3 mr-1" />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            ))}
            {event.isFree && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center shadow-md backdrop-blur-sm bg-white/80 dark:bg-black/60 dark:bg-green-900/80 dark:text-green-100">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                Gratis
              </span>
            )}
            {event.registrationRequired && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center shadow-md backdrop-blur-sm bg-white/80 dark:bg-black/60 dark:bg-blue-900/80 dark:text-blue-100">
                <UserCheck className="w-3 h-3 mr-1" />
                Inscripción
              </span>
            )}
          </div>
          
          {/* Faculty badge */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-[#E14536] to-[#FD7A03] text-white text-xs font-bold shadow-lg z-20">
            {event.facultyName}
          </div>
          
          {/* Title and organizer overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-10 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-xl font-bold text-white drop-shadow-md line-clamp-1">{event.title}</h3>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 rounded-full bg-[#BBDD30] mr-2 flex-shrink-0"></div>
              <p className="text-xs text-neutral-200">{event.organizer}</p>
            </div>
          </div>
        </div>
        
        {/* Event details */}
        <div className="p-5">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4 line-clamp-2 min-h-[2.5rem] group-hover:text-neutral-800 dark:group-hover:text-white transition-colors">
            {event.description}
          </p>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E14536]/10 to-[#FD7A03]/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-[#E14536] dark:text-[#FD7A03]" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Fecha</p>
                <p className="text-neutral-700 dark:text-neutral-200 font-medium">
                  {new Date(event.date).toLocaleDateString('es-CL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E14536]/10 to-[#FD7A03]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-[#E14536] dark:text-[#FD7A03]" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Hora</p>
                <p className="text-neutral-700 dark:text-neutral-200 font-medium">{event.time}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E14536]/10 to-[#FD7A03]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-[#E14536] dark:text-[#FD7A03]" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Ubicación</p>
                <p className="text-neutral-700 dark:text-neutral-200 font-medium line-clamp-2">
                  {event.location}
                </p>
              </div>
            </div>
          </div>
          
          {/* Action button */}
          {event.externalLink && (
            <a
              href={event.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center px-4 py-2.5 rounded-full bg-gradient-to-r from-[#11B5C2] to-[#BBDD30] text-white text-sm font-medium shadow-md hover:shadow-lg hover:shadow-[#11B5C2]/30 transition-all duration-300 group-hover:translate-x-1"
            >
              Más información
              <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;