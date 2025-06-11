import React from 'react';
import { NewsArticle } from '../types';
import NewsItem from './NewsItem';

// Sample news data - replace with actual data fetching later
const sampleNews: NewsArticle[] = [
  {
    id: '1',
    title: '¡Final Épica en Torneo Budokai Tenkaichi 3!',
    summary: 'Revive los momentos más intensos y las mejores jugadas del reñido torneo de Budokai Tenkaichi 3 que coronó a un nuevo campeón del campus.',
    content: 'Crónica completa del torneo, entrevistas con los finalistas y análisis de las estrategias...',
    author: 'El Rincón Gamer JGM',
    publicationDate: '2025-06-05T19:00:00Z',
    imageUrl: 'https://via.placeholder.com/400x200?text=Budokai+Tournament',
  },
  {
    id: '2',
    title: 'Noche de Culto: The Rocky Horror Picture Show en el Auditorio',
    summary: 'Una crónica de la vibrante proyección de The Rocky Horror Picture Show, donde la participación del público fue la verdadera estrella.',
    content: 'Detalles de la proyección, mejores disfraces y la experiencia interactiva...',
    author: 'Cinefilia Universitaria',
    publicationDate: '2025-06-02T22:00:00Z',
    // No image for this one to test layout
  },
  {
    id: '3',
    title: 'Estudiantes de FACSO Lanzan Nueva Edición de Revista Sociológica',
    summary: 'Un vistazo al último número de la revista de sociología "Perspectivas Críticas", editada por estudiantes, y su simposio de presentación.',
    content: 'Temas destacados de la revista, perfiles de los autores y resumen del simposio...',
    author: 'Comunicaciones FACSO Estudiantil',
    publicationDate: '2025-05-28T16:00:00Z',
    imageUrl: 'https://via.placeholder.com/400x200?text=Revista+Sociologia',
  },
  {
    id: '4',
    title: 'Smash Bros Ultimate: ¡Tenemos un Nuevo Rey del Campus!',
    summary: 'Cobertura especial del torneo de Smash Bros Ultimate, con los enfrentamientos más destacados y una entrevista al ganador.',
    content: 'Resultados del bracket, análisis de personajes y la emoción de la final...',
    author: 'Arena Digital JGM',
    publicationDate: '2025-05-25T18:00:00Z',
    imageUrl: 'https://via.placeholder.com/400x200?text=Smash+Bros+Tournament',
  },
];

const NewsSection: React.FC = () => {
  // In a real app, you would fetch news articles here, e.g., using useEffect and an API call
  const articles = sampleNews;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Latest News & Coverage</h1>
      {articles.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map(article => (
            <NewsItem key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No news articles available at the moment.</p>
      )}
    </div>
  );
};

export default NewsSection;
