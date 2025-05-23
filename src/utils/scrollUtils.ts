'use client';

/**
 * Utility hook that handles scrolling to elements with IDs when navigating
 * between pages in Next.js (particularly with the App Router)
 */
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Get the element with the ID that matches the hash
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    }
  }, [pathname]); // Re-run when the pathname changes
}

/**
 * Function to scroll to a specific element by ID
 */
export function scrollToElement(id: string) {
  const element = document.getElementById(id);
  
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    return true;
  }
  
  return false;
}
