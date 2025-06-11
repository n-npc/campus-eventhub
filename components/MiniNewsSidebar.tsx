import React from 'react';
import { Mail } from 'react-feather';
import GlassCard from './GlassCard';

// Simple subset of news items (could later be fetched from API)
const miniNews = [
  {
    id: 'n1',
    title: 'Final épica en Budokai Tenkaichi 3',
    imageUrl: 'https://via.placeholder.com/300x150?text=Budokai',
  },
  {
    id: 'n2',
    title: 'Rocky Horror: crónica de la noche de culto',
    imageUrl: 'https://via.placeholder.com/300x150?text=Rocky+Horror',
  },
  {
    id: 'n3',
    title: 'Nuevo rey del Smash Bros Ultimate',
    imageUrl: 'https://via.placeholder.com/300x150?text=Smash+Bros',
  },
];

interface MiniNewsSidebarProps {
  className?: string;
}

const MiniNewsSidebar: React.FC<MiniNewsSidebarProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold text-[#E14536] dark:text-[#FD7A03] mb-2">Historias recientes</h3>
      {miniNews.map((news) => (
        <GlassCard key={news.id} className="p-0">
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-full h-24 object-cover rounded-t-2xl"
          />
          <div className="p-3">
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 line-clamp-2">
              {news.title}
            </p>
          </div>
        </GlassCard>
      ))}
      <a
        href="#" // could link to full news page view
        className="flex items-center justify-center text-sm font-medium text-[#E14536] dark:text-[#FD7A03] hover:underline"
      >
        Ver más noticias <Mail className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
};

export default MiniNewsSidebar;
