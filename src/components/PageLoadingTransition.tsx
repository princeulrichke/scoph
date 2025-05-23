'use client';

import { Loader } from '@/components';
import { useEffect, useState } from 'react';

export default function PageLoadingTransition({ isLoading = true }: { isLoading?: boolean }) {
  const [visible, setVisible] = useState(isLoading);
  const [opacity, setOpacity] = useState(isLoading ? 1 : 0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isLoading) {
      setVisible(true);
      // Small delay to ensure the DOM is updated before adding opacity
      timer = setTimeout(() => setOpacity(1), 10);
    } else {
      setOpacity(0);
      // Wait for fade-out animation to complete before removing from DOM
      timer = setTimeout(() => setVisible(false), 500);
    }
    
    return () => clearTimeout(timer);
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-white dark:bg-[#0a0a0a] z-50"
      style={{ 
        opacity, 
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <Loader />
      </div>
    </div>
  );
}
