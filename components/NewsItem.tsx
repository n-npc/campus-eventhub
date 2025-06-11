import React from 'react';
import { NewsArticle } from '../types';

interface NewsItemProps {
  article: NewsArticle;
}

const NewsItem: React.FC<NewsItemProps> = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      {article.imageUrl && (
        <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      )}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-4">{article.summary}</p>
      <div className="text-sm text-gray-500">
        <span>By {article.author}</span> | <span>{new Date(article.publicationDate).toLocaleDateString()}</span>
      </div>
      {/* Optionally, add a link to the full article page if you plan to have one */}
      {/* <a href={`/news/${article.id}`} className="text-blue-500 hover:underline mt-4 inline-block">Read more</a> */}
    </div>
  );
};

export default NewsItem;
