
export type EventCategory = 'político-social' | 'cultural' | 'deportivo' | 'académico' | 'otro';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string; 
  time: string;
  facultyId: string;
  facultyName: string;
  location: string;
  locationDetails?: string; 
  organizer: string;
  imageUrl?: string;
  externalLink?: string;
  categories: EventCategory[];
  isFree?: boolean;
  registrationRequired?: boolean;
}

export interface Faculty {
  id: string;
  name: string;
  mapName?: string;
  style: React.CSSProperties; // For absolute positioning and size on the map
}

export enum AppView {
  EVENTS = 'events',
  SUBMIT_EVENT = 'submit_event',
  ABOUT = 'about',
}
