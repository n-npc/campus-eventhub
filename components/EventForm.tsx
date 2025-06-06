import React, { useState, useEffect } from 'react';
import { Event, EventCategory } from '../types';
import { FACULTIES_DATA } from '../constants';
import GlassCard from './GlassCard';
import { Calendar, Clock, MapPin, Send } from 'react-feather';

interface EventFormProps {
  onSubmitEvent: (event: Omit<Event, 'id' | 'imageUrl'>) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmitEvent }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [facultyId, setFacultyId] = useState(FACULTIES_DATA[0]?.id || '');
  const [locationDetails, setLocationDetails] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [categories, setCategories] = useState<EventCategory[]>(['académico']);
  const [isFree, setIsFree] = useState(true);
  const [registrationRequired, setRegistrationRequired] = useState(false);
  const [gradientAngle, setGradientAngle] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCategoryChange = (category: EventCategory) => {
    setCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const inputClass = "w-full p-4 bg-white/90 dark:bg-neutral-800/90 border-2 border-transparent rounded-xl focus:border-[#FD7A03] outline-none transition-all duration-300 text-neutral-800 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-500 backdrop-blur-sm focus:ring-2 focus:ring-[#FD7A03]/30 focus:shadow-lg";
  const labelClass = "block text-sm font-semibold text-[#E14536] dark:text-[#FD7A03] mb-2 ml-1 flex items-center gap-2";
  const sectionClass = "bg-white/50 dark:bg-neutral-800/50 p-6 rounded-2xl backdrop-blur-sm border border-white/30 dark:border-neutral-700/50 shadow-lg";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !date || !time || !facultyId || !organizer) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const faculty = FACULTIES_DATA.find(f => f.id === facultyId) || { name: 'Campus General' };
      
      onSubmitEvent({
        title,
        description,
        date,
        time,
        facultyId,
        facultyName: faculty.name,
        location: locationDetails ? `${locationDetails}, ${faculty.name}` : faculty.name,
        locationDetails,
        organizer,
        categories,
        isFree,
        registrationRequired,
      });
      
      // Reset form
      setTitle('');
      setDescription('');
      setDate('');
      setTime('');
      setFacultyId(FACULTIES_DATA[0]?.id || '');
      setLocationDetails('');
      setOrganizer('');
      setCategories(['académico']);
      setIsFree(true);
      setRegistrationRequired(false);
      
      // Show success message
      alert('¡Evento enviado para revisión!');
    } catch (error) {
      console.error('Error submitting event:', error);
      alert('Ocurrió un error al enviar el evento. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animate gradient on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientAngle(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-2xl mx-auto relative">
      {/* Animated background orbs */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#E14536]/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#11B5C2]/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#BBDD30]/5 blur-3xl"></div>
      </div>
      
      <GlassCard className="overflow-hidden">
        {/* Glowing header */}
        <div className="relative p-6 bg-gradient-to-r from-[#E14536] via-[#FD7A03] to-[#FAE403] text-white">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-center relative z-10">
            Enviar un Nuevo Evento
          </h2>
          <p className="text-center text-white/90 mt-2 text-sm relative z-10">
            Comparte tu evento con la comunidad del Campus JGM
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          <div className={sectionClass}>
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className={labelClass}>
                  <span className="bg-[#E14536] text-white p-1 rounded-full w-5 h-5 flex items-center justify-center text-xs">1</span>
                  Título del Evento <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="title" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  className={inputClass} 
                  placeholder="Ej: Taller de Programación Creativa"
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="description" className={labelClass}>
                  <span className="bg-[#FD7A03] text-white p-1 rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span>
                  Descripción <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="description" 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  rows={4} 
                  className={inputClass} 
                  placeholder="Proporciona detalles sobre el evento, actividades, requisitos, etc."
                  required 
                />
              </div>
            </div>
          </div>
          
          <div className={sectionClass}>
            <h3 className="text-lg font-semibold text-[#E14536] dark:text-[#FD7A03] mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Fecha y Hora
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className={`${labelClass} ml-0`}>
                  Fecha <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    type="date" 
                    id="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    className={`${inputClass} pl-10`} 
                    required 
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#E14536] dark:text-[#FD7A03]" />
                </div>
              </div>
              <div>
                <label htmlFor="time" className={`${labelClass} ml-0`}>
                  Hora <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    type="time" 
                    id="time" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                    className={`${inputClass} pl-10`} 
                    required 
                  />
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#E14536] dark:text-[#FD7A03]" />
                </div>
              </div>
            </div>
          </div>
          
          <div className={sectionClass}>
            <h3 className="text-lg font-semibold text-[#E14536] dark:text-[#FD7A03] mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Ubicación
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="faculty" className={`${labelClass} ml-0`}>
                  Facultad/Unidad <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="faculty"
                    value={facultyId}
                    onChange={(e) => setFacultyId(e.target.value)}
                    className={`${inputClass} appearance-none`}
                    required
                  >
                    {FACULTIES_DATA.map((faculty) => (
                      <option key={faculty.id} value={faculty.id}>
                        {faculty.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-[#E14536] dark:text-[#FD7A03]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="locationDetails" className={`${labelClass} ml-0`}>
                  Detalles de la ubicación (opcional)
                </label>
                <input
                  type="text"
                  id="locationDetails"
                  value={locationDetails}
                  onChange={(e) => setLocationDetails(e.target.value)}
                  className={inputClass}
                  placeholder="Ej: Sala de Conferencias, 3er piso"
                />
              </div>
            </div>
          </div>
          
          <div className={sectionClass}>
            <h3 className="text-lg font-semibold text-[#E14536] dark:text-[#FD7A03] mb-4">
              Categorías
            </h3>
            <div className="flex flex-wrap gap-2">
              {(['académico', 'cultural', 'deportivo', 'político-social', 'otro'] as EventCategory[]).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    categories.includes(category)
                      ? 'bg-[#E14536] text-white'
                      : 'bg-white/50 dark:bg-neutral-700/50 text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-600/50'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className={sectionClass}>
            <h3 className="text-lg font-semibold text-[#E14536] dark:text-[#FD7A03] mb-4">
              Detalles Adicionales
            </h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isFree}
                    onChange={(e) => setIsFree(e.target.checked)}
                  />
                  <div className={`w-10 h-6 rounded-full transition-colors ${
                    isFree ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <div className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform transform ${
                      isFree ? 'translate-x-4' : ''
                    }`}></div>
                  </div>
                </div>
                <span className="text-neutral-800 dark:text-neutral-200">Evento gratuito</span>
              </label>
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={registrationRequired}
                    onChange={(e) => setRegistrationRequired(e.target.checked)}
                  />
                  <div className={`w-10 h-6 rounded-full transition-colors ${
                    registrationRequired ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <div className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform transform ${
                      registrationRequired ? 'translate-x-4' : ''
                    }`}></div>
                  </div>
                </div>
                <span className="text-neutral-800 dark:text-neutral-200">Requiere registro previo</span>
              </label>
            </div>
          </div>
          
          <div className={sectionClass}>
            <div className="space-y-6">
              <div>
                <label htmlFor="organizer" className={labelClass}>
                  <span className="bg-[#11B5C2] text-white p-1 rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
                  Organizador <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="organizer"
                  value={organizer}
                  onChange={(e) => setOrganizer(e.target.value)}
                  className={inputClass}
                  placeholder="¿Quién organiza este evento?"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#E14536] to-[#FD7A03] hover:opacity-90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Enviar Evento</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </GlassCard>
    </div>
  );
};

export default EventForm;
