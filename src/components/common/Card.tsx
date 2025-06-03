import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export default function Card({ children, className = '', onClick, hover = false }: CardProps) {
  const hoverClasses = hover 
    ? 'hover:shadow-md hover:-translate-y-1 cursor-pointer'
    : '';
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm p-6 transition-all duration-200 ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}