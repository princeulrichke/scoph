'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useNavigation } from './NavigationProvider';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const { isNavigating } = useNavigation();
  const prevPathRef = useRef<string>('');
  
  useEffect(() => {
    prevPathRef.current = pathname;
  }, [pathname]);

  return (
    <div 
      className="w-full min-h-screen" 
      style={{ 
        opacity: isNavigating ? 0 : 1, 
        transform: isNavigating ? 'translateY(10px)' : 'translateY(0)',
        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
      }}
    >
      {children}
    </div>
  );
}
