import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-2xl p-0.5 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(225, 69, 54, 0.2), rgba(253, 122, 3, 0.2), rgba(250, 228, 3, 0.2), rgba(187, 221, 48, 0.2), rgba(17, 181, 194, 0.2))',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      }}
      {...props}
    >
      <div 
        className="w-full h-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur-lg rounded-2xl p-6 transition-all duration-500"
        style={{
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.3)',
        }}
      >
        {children}
      </div>
      <div 
        className="absolute -inset-1 bg-gradient-to-r from-[#E14536] via-[#FD7A03] to-[#BBDD30] opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500 -z-10"
        aria-hidden="true"
      />
    </div>
  );
};

export default GlassCard;