import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className, hoverable = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-gray-200 rounded-lg p-6 shadow-sm',
        hoverable && 'hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
