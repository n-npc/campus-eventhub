
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

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string; // Could be markdown or plain text
  author: string;
  publicationDate: string; // ISO date string
  imageUrl?: string;
  // Optional: tags or categories for news articles
  // tags?: string[]; 
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
  NEWS = 'news',
}
