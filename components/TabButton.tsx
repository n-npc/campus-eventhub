import React from 'react';

interface TabButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ children, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 overflow-hidden group
        ${isActive 
          ? 'text-white' 
          : 'text-[#E14536] hover:text-[#E14536] dark:text-[#FD7A03] dark:hover:text-[#FAE403]'
        }`}
    >
      {/* Animated background */}
      <span className={`absolute inset-0 rounded-full transition-all duration-300 z-0
        ${isActive 
          ? 'bg-gradient-to-r from-[#E14536] via-[#FD7A03] to-[#FAE403] shadow-lg shadow-[#FD7A03]/40' 
          : 'bg-white/80 dark:bg-neutral-800/80 group-hover:bg-white/90 dark:group-hover:bg-neutral-700/90 shadow-md backdrop-blur-sm'
        }`}>
      </span>
      
      {/* Glow effect on hover */}
      <span className={`absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0
        ${isActive 
          ? 'bg-gradient-to-r from-[#E14536]/30 via-[#FD7A03]/30 to-[#FAE403]/30' 
          : 'bg-gradient-to-r from-[#11B5C2]/20 to-[#BBDD30]/20'
        }`}>
      </span>
      
      {/* Text */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Bottom indicator */}
      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-1/2 rounded-full transition-all duration-300
        ${isActive 
          ? 'bg-white w-3/4' 
          : 'bg-transparent group-hover:bg-[#E14536]/30 dark:group-hover:bg-[#FD7A03]/30 w-1/3'
        }`}>
      </span>
    </button>
  );
};

export default TabButton;