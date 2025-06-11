
import { Faculty } from './types';

// Campus JGM Map Image
export const MAP_IMAGE_URL = "https://i.imgur.com/lWZhenQ.png";

export const FACULTIES_DATA: Faculty[] = [
  { 
    id: 'FILOSOFIA', 
    name: "Facultad de Filosofía y Humanidades", 
    style: { top: '35%', left: '15%', width: '20%', height: '15%' },
    mapName: "Filosofía"
  },
  { 
    id: 'BACHILLERATO', 
    name: "Programa Académico de Bachillerato", 
    style: { top: '55%', left: '18%', width: '18%', height: '12%' },
    mapName: "Bachillerato"
  },
  { 
    id: 'COMUNICACION', 
    name: "Facultad de Comunicación e Imagen", 
    mapName: "Comunicación", 
    style: { top: '25%', left: '40%', width: '15%', height: '12%' } 
  },
  { 
    id: 'CIENCIAS_SOCIALES', 
    name: "Facultad de Ciencias Sociales", 
    mapName: "Sociales", 
    style: { top: '15%', left: '60%', width: '15%', height: '12%' } 
  },
  { 
    id: 'CIENCIAS', 
    name: "Facultad de Ciencias", 
    style: { top: '50%', left: '50%', width: '18%', height: '15%' },
    mapName: "Ciencias"
  },
  { 
    id: 'ARTES', 
    name: "Facultad de Artes", 
    style: { top: '30%', left: '75%', width: '15%', height: '14%' },
    mapName: "Artes"
  },
  { 
    id: 'AULARIO_A', 
    name: "Aulario A", 
    style: { top: '50%', left: '35%', width: '12%', height: '10%' },
    mapName: "Aulario A"
  },
  { 
    id: 'AULARIO_B', 
    name: "Aulario B", 
    style: { top: '40%', left: '30%', width: '12%', height: '10%' },
    mapName: "Aulario B"
  },
  { 
    id: 'CAMPO_DEPORTIVO', 
    name: "Campo Deportivo", 
    mapName: "Deportes", 
    style: { top: '15%', left: '75%', width: '20%', height: '15%' } 
  },
];

import { Event } from './types';

export const INITIAL_EVENTS_DATA: Event[] = [
  // Eventos Mantenidos
  {
    id: '1',
    title: 'Concierto de Bandas Emergentes',
    description: 'Disfruta de una tarde de música en vivo con las mejores bandas universitarias.',
    date: '2025-06-10',
    time: '18:30',
    facultyId: 'ARTES',
    facultyName: 'Facultad de Artes',
    location: 'Patio Central, Facultad de Artes',
    locationDetails: 'Patio de Artes',
    organizer: 'Colectivo Musical JGM',
    imageUrl: 'https://picsum.photos/seed/conciertoJGM/400/200',
    categories: ['cultural'],
    isFree: true
  },
  {
    id: '2',
    title: 'Taller de Programación Creativa con p5.js',
    description: 'Aprende a crear arte digital y visualizaciones interactivas con código en este taller introductorio a p5.js.',
    date: '2025-06-12',
    time: '10:00',
    facultyId: 'CIENCIAS',
    facultyName: 'Facultad de Ciencias',
    location: 'Laboratorio L3, Facultad de Ciencias',
    locationDetails: 'Laboratorio L3',
    organizer: 'Grupo de Código Creativo JGM',
    imageUrl: 'https://picsum.photos/seed/p5jsWorkshop/400/200',
    categories: ['académico', 'cultural'],
    isFree: true,
    registrationRequired: true
  },
  {
    id: '3',
    title: 'Clase Abierta de Yoga y Meditación',
    description: 'Sesión de yoga multinivel y meditación guiada para combatir el estrés. Trae tu mat y ropa cómoda.',
    date: '2025-06-14',
    time: '09:00',
    facultyId: 'AULARIO_B',
    facultyName: 'Aulario B',
    location: 'Patio Central, Aulario B',
    locationDetails: 'Cerca del árbol grande',
    organizer: 'Bienestar Estudiantil JGM',
    imageUrl: 'https://picsum.photos/seed/yogaMeditacionJGM/400/200',
    categories: ['deportivo', 'otro'],
    isFree: true
  },
  {
    id: '4',
    title: 'Exposición Fotográfica: "Rincones de JGM"',
    description: 'Muestra de trabajos de estudiantes explorando la estética y vida cotidiana del campus Juan Gómez Millas.',
    date: '2025-06-17',
    time: '19:00',
    facultyId: 'COMUNICACION',
    facultyName: 'Facultad de Comunicación e Imagen',
    location: 'Galería FCEI',
    locationDetails: 'Primer Piso, Hall Principal',
    organizer: 'Taller de Fotografía JGM',
    imageUrl: 'https://picsum.photos/seed/expoFotoJGM/400/200',
    categories: ['cultural'],
    isFree: true
  },
  {
    id: '5',
    title: 'Torneo de Fútbol Tenis Mixto',
    description: '¡Arma tu dupla y participa en el primer torneo de fútbol tenis mixto del semestre! Premios para los ganadores.',
    date: '2025-06-21',
    time: '11:00',
    facultyId: 'CAMPO_DEPORTIVO',
    facultyName: 'Campo Deportivo',
    location: 'Canchas chicas, Campo Deportivo JGM',
    locationDetails: 'Al lado de la pista atlética',
    organizer: 'Deportes JGM Autogestionado',
    imageUrl: 'https://picsum.photos/seed/futbolTenisJGM/400/200',
    categories: ['deportivo'],
    isFree: true,
    registrationRequired: true
  },

  // Nuevos Eventos Ludicos y Academicos Estudiantiles
  {
    id: '6',
    title: '¡Gran Torneo Budokai Tenkaichi 3!',
    description: 'Demuestra quién es el guerrero Z más fuerte del campus. Inscripciones abiertas, cupos limitados. ¡Habrá premios!',
    date: '2025-06-20',
    time: '15:00',
    facultyId: 'AULARIO_A',
    facultyName: 'Aulario A',
    location: 'Sala A-5, Aulario A',
    locationDetails: 'Llevar control propio (opcional)',
    organizer: 'Comunidad Gamer JGM',
    imageUrl: 'https://picsum.photos/seed/bt3JGM/400/200',
    categories: ['otro', 'cultural'],
    isFree: true,
    registrationRequired: true
  },
  {
    id: '7',
    title: 'Noche de Culto: Proyección Rocky Horror Picture Show',
    description: '¡Prepárate para una noche de transgresión y diversión! Se anima a venir disfrazado y participar. Kit de participación a la venta.',
    date: '2025-06-22',
    time: '20:00',
    facultyId: 'ARTES',
    facultyName: 'Facultad de Artes',
    location: 'Auditorio Facultad de Artes',
    locationDetails: 'Entrada por Las Encinas',
    organizer: 'Cine Club "El Otro Rollo"',
    imageUrl: 'https://picsum.photos/seed/rockyHorrorJGM/400/200',
    categories: ['cultural'],
    isFree: false, // Assuming a small fee for kits or rights
    registrationRequired: false
  },
  {
    id: '8',
    title: 'Simposio Estudiantil: "Nuevas Voces en Sociología"',
    description: 'Presentación de investigaciones y ponencias por estudiantes de FACSO. Evento abierto a toda la comunidad universitaria.',
    date: '2025-06-25',
    time: '16:00',
    facultyId: 'CIENCIAS_SOCIALES',
    facultyName: 'Facultad de Ciencias Sociales',
    location: 'Auditorio FACSO',
    locationDetails: 'Edificio principal, segundo piso',
    organizer: 'Revista Estudiantil "Perspectivas Críticas"',
    imageUrl: 'https://picsum.photos/seed/simposioFACSO/400/200',
    categories: ['académico'],
    isFree: true
  },
  {
    id: '9',
    title: 'Campeonato Smash Bros Ultimate JGM',
    description: '¿Listo para el Duelo Final? Torneo abierto de Smash Bros Ultimate. ¡Trae tu control y que gane el mejor!',
    date: '2025-06-28',
    time: '14:00',
    facultyId: 'AULARIO_B',
    facultyName: 'Aulario B',
    location: 'Sala B-10, Aulario B',
    locationDetails: 'Consolas y pantallas disponibles',
    organizer: 'Club de Peleas JGM',
    imageUrl: 'https://picsum.photos/seed/smashJGM/400/200',
    categories: ['otro', 'cultural'],
    isFree: true,
    registrationRequired: true
  },
  {
    id: '10',
    title: 'Ciclo Anti-Cine: Proyección de "The Room"',
    description: 'Experimenta la "mejor peor película jamás hecha". ¡Trae tus cucharas de plástico y prepárate para citar los diálogos!',
    date: '2025-07-01',
    time: '19:00',
    facultyId: 'COMUNICACION',
    facultyName: 'Facultad de Comunicación e Imagen',
    location: 'Sala Audiovisual FCEI',
    locationDetails: 'Subterráneo, al lado de la biblioteca',
    organizer: 'Colectivo "Malas Películas, Buenas Risas"',
    imageUrl: 'https://picsum.photos/seed/theRoomJGM/400/200',
    categories: ['cultural', 'otro'],
    isFree: true
  },
  {
    id: '11',
    title: 'Junta Semanal de Juegos de Mesa',
    description: '¿Te gustan los juegos de mesa? Únete a nuestra junta semanal. Trae tus juegos o aprende unos nuevos. Para todos los niveles.',
    date: '2025-06-19', // Example: recurring, showing next date
    time: '17:00',
    facultyId: 'BACHILLERATO',
    facultyName: 'Programa Académico de Bachillerato',
    location: 'Sala Común Bachillerato',
    locationDetails: 'Mesas al fondo',
    organizer: 'Club de Rol y Estrategia JGM',
    imageUrl: 'https://picsum.photos/seed/juegosMesaJGM/400/200',
    categories: ['otro', 'cultural'],
    isFree: true
  },
  {
    id: '12',
    title: 'Taller de Creación de Fanzines',
    description: 'Aprende a crear y autoeditar tu propio fanzine. Materiales básicos incluidos. ¡Expresa tus ideas!',
    date: '2025-07-05',
    time: '11:00',
    facultyId: 'FILOSOFIA',
    facultyName: 'Facultad de Filosofía y Humanidades',
    location: 'Patio de Filosofía',
    locationDetails: 'Sector mesitas de colores',
    organizer: 'Colectivo Autogestión Gráfica',
    imageUrl: 'https://picsum.photos/seed/fanzineJGM/400/200',
    categories: ['cultural', 'académico'],
    isFree: true,
    registrationRequired: true
  }
];
