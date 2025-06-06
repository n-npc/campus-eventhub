
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
  // Facultad de Comunicación e Imagen
  {
    id: '1',
    title: 'Charla: El Futuro de la IA en la Comunicación',
    description: 'Un debate profundo sobre cómo la inteligencia artificial está transformando los medios y la comunicación.',
    date: '2024-09-15',
    time: '17:00',
    facultyId: 'COMUNICACION',
    facultyName: 'Facultad de Comunicación e Imagen',
    location: 'Auditorio Principal, FCEI',
    locationDetails: 'Auditorio Principal',
    organizer: 'Centro de Estudiantes de Comunicación',
    imageUrl: 'https://picsum.photos/seed/comunicacionIA/400/200',
    externalLink: 'https://comunicacion.uchile.cl/eventos/ia-comunicacion',
    categories: ['académico'],
    isFree: true,
    registrationRequired: true
  },
  
  // Facultad de Artes
  {
    id: '2',
    title: 'Concierto de Bandas Emergentes',
    description: 'Disfruta de una tarde de música en vivo con las mejores bandas universitarias.',
    date: '2024-09-20',
    time: '18:30',
    facultyId: 'ARTES',
    facultyName: 'Facultad de Artes',
    location: 'Patio Central, Facultad de Artes',
    locationDetails: 'Patio de Artes',
    organizer: 'Colectivo Musical JGM',
    imageUrl: 'https://picsum.photos/seed/event2/400/200',
    externalLink: 'https://artes.uchile.cl/eventos/concierto-bandas',
    categories: ['cultural'],
    isFree: true
  },
  
  // Facultad de Ciencias
  {
    id: '3',
    title: 'Taller de Programación Creativa',
    description: 'Aprende a crear arte digital y visualizaciones interactivas con código.',
    date: '2024-09-22',
    time: '10:00',
    facultyId: 'CIENCIAS',
    facultyName: 'Facultad de Ciencias',
    location: 'Laboratorio L3, Facultad de Ciencias',
    locationDetails: 'Laboratorio L3',
    organizer: 'Centro de Alumnos de Ciencias de la Computación',
    imageUrl: 'https://picsum.photos/seed/programacion-creativa/400/200',
    categories: ['académico'],
    isFree: true,
    registrationRequired: true
  },
  
  // Facultad de Filosofía y Humanidades
  {
    id: '4',
    title: 'Foro: Desafíos de la Educación Pública',
    description: 'Diálogo abierto sobre los retos actuales de la educación pública en Chile.',
    date: '2024-09-25',
    time: '16:00',
    facultyId: 'FILOSOFIA',
    facultyName: 'Facultad de Filosofía y Humanidades',
    location: 'Sala de Conferencias, Facultad de Filosofía',
    locationDetails: 'Sala de Conferencias',
    organizer: 'Delegación de Estudiantes de Pedagogía',
    imageUrl: 'https://picsum.photos/seed/educacion-publica/400/200',
    categories: ['político-social', 'académico'] as const,
    isFree: true
  },
  
  // Facultad de Ciencias Sociales
  {
    id: '5',
    title: 'Asamblea General de Estudiantes',
    description: 'Asamblea abierta para discutir los próximos pasos del movimiento estudiantil.',
    date: '2024-09-18',
    time: '13:00',
    facultyId: 'CIENCIAS_SOCIALES',
    facultyName: 'Facultad de Ciencias Sociales',
    location: 'Patio de Los Naranjos',
    locationDetails: 'Patio Central',
    organizer: 'Federación de Estudiantes',
    imageUrl: 'https://picsum.photos/seed/asamblea-general/400/200',
    categories: ['político-social'] as const,
    isFree: true
  },
  
  // Aulario A
  {
    id: '6',
    title: 'Taller de Primeros Auxilios',
    description: 'Aprende técnicas básicas de primeros auxilios con instructores certificados.',
    date: '2024-09-28',
    time: '15:30',
    facultyId: 'AULARIO_A',
    facultyName: 'Aulario A',
    location: 'Sala A-12, Aulario A',
    locationDetails: 'Sala A-12',
    organizer: 'Cruz Roja JGM',
    imageUrl: 'https://picsum.photos/seed/primeros-auxilios/400/200',
    categories: ['otro'] as const,
    isFree: false,
    registrationRequired: true
  },
  
  // Aulario B
  {
    id: '7',
    title: 'Clase Abierta de Yoga',
    description: 'Sesión de yoga para principiantes. Trae tu mat y ropa cómoda.',
    date: '2024-09-19',
    time: '09:00',
    facultyId: 'AULARIO_B',
    facultyName: 'Aulario B',
    location: 'Patio Central, Aulario B',
    locationDetails: 'Patio Central',
    organizer: 'Grupo de Bienestar Estudiantil',
    imageUrl: 'https://picsum.photos/seed/yoga-jgm/400/200',
    categories: ['deportivo'],
    isFree: true
  },
  
  // Campo Deportivo
  {
    id: '8',
    title: 'Torneo Interfacultades de Fútbol',
    description: 'Inscríbete con tu equipo para el torneo de fútbol interdisciplinario.',
    date: '2024-10-05',
    time: '11:00',
    facultyId: 'CAMPO_DEPORTIVO',
    facultyName: 'Campo Deportivo',
    location: 'Cancha Principal, Campo Deportivo JGM',
    locationDetails: 'Cancha Principal',
    organizer: 'Departamento de Deportes',
    imageUrl: 'https://picsum.photos/seed/torneo-futbol/400/200',
    categories: ['deportivo'],
    isFree: true,
    registrationRequired: true
  },
  
  // Bachillerato
  {
    id: '9',
    title: 'Feria de Carreras',
    description: 'Conoce las diferentes carreras de la Universidad de Chile y sus planes de estudio.',
    date: '2024-10-10',
    time: '10:00',
    facultyId: 'BACHILLERATO',
    facultyName: 'Programa Académico de Bachillerato',
    location: 'Hall Central, Edificio Bachillerato',
    locationDetails: 'Hall Central',
    organizer: 'Oficina de Orientación',
    imageUrl: 'https://picsum.photos/seed/feria-carreras/400/200',
    externalLink: 'https://bienestar.uchile.cl/feria-carreras',
    categories: ['académico'],
    isFree: true
  },
  
  // Evento adicional en Comunicación
  {
    id: '10',
    title: 'Exposición Fotográfica: Miradas del Campus',
    description: 'Muestra de trabajos de estudiantes de Fotografía Documental.',
    date: '2024-09-27',
    time: '19:00',
    facultyId: 'COMUNICACION',
    facultyName: 'Facultad de Comunicación e Imagen',
    location: 'Galería FCEI',
    locationDetails: 'Primer Piso',
    organizer: 'Escuela de Cine y TV',
    imageUrl: 'https://picsum.photos/seed/expo-fotografica/400/200',
    externalLink: 'https://fotografia.uchile.cl/exposiciones/miradas-del-campus',
    categories: ['cultural'],
    isFree: true
  },
  {
    id: '11',
    title: 'Debate: Ética en el Siglo XXI',
    description: 'Exploración de los dilemas éticos contemporáneos desde diversas perspectivas filosóficas.',
    date: '2024-09-25',
    time: '16:00',
    facultyId: 'FILOSOFIA',
    facultyName: 'Facultad de Filosofía y Humanidades',
    location: 'Sala de Conferencias B, Facultad de Filosofía',
    locationDetails: 'Sala de Conferencias B',
    organizer: 'Sociedad de Filosofía Estudiantil',
    imageUrl: 'https://picsum.photos/seed/philosophydebate/400/200',
    externalLink: 'https://filosofia.uchile.cl/eventos/etica-siglo-xxi',
    categories: ['académico', 'político-social'] as const,
    isFree: true
  },
  {
    id: '12',
    title: 'Torneo de Fútbol Interfacultades',
    description: 'Participa o anima a tu facultad en este emocionante torneo deportivo.',
    date: '2024-09-28',
    time: '09:00',
    facultyId: 'CAMPO_DEPORTIVO',
    facultyName: 'Campo Deportivo JGM',
    location: 'Cancha Principal, Campo Deportivo JGM',
    locationDetails: 'Cancha Principal',
    organizer: 'Dirección de Deportes y Recreación',
    imageUrl: 'https://picsum.photos/seed/torneo-futbol/400/200',
    externalLink: 'https://deportes.uchile.cl/torneos/futbol-interfacultades',
    categories: ['deportivo'],
    isFree: true
  }
];
