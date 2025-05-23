'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Create a context for navigation state
const NavigationContext = createContext({
  isNavigating: false,
  previousPathname: '',
  scrollToHash: (hash: string) => {},
});

export const useNavigation = () => useContext(NavigationContext);

export default function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(true);
  const [previousPathname, setPreviousPathname] = useState('');

  // Function to scroll to a hash target
  const scrollToHash = (hash: string) => {
    const id = hash.startsWith('#') ? hash.substring(1) : hash;
    const element = document.getElementById(id);
    
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  };

  useEffect(() => {
    // When the app first loads or route changes
    setIsNavigating(true);
    
    // Save previous path for transitions
    if (pathname !== previousPathname) {
      setPreviousPathname(pathname);
    }
    
    const timer = setTimeout(() => {
      setIsNavigating(false);
      
      // Check for hash in URL after navigation is complete
      if (window.location.hash) {
        const hash = window.location.hash;
        scrollToHash(hash);
      }
    }, 3000); // 3 seconds delay
    
    return () => clearTimeout(timer);
  }, [pathname, searchParams, previousPathname]);
  return (
    <NavigationContext.Provider value={{ isNavigating, previousPathname, scrollToHash }}>
      {children}
    </NavigationContext.Provider>
  );
}
