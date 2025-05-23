'use client';

import { useNavigation } from '@/components/NavigationProvider';

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

/**
 * A component for smoothly scrolling to anchor targets within the same page
 */
export default function ScrollLink({ href, children, className, ariaLabel }: ScrollLinkProps) {
  const { scrollToHash } = useNavigation();

  // Handle click on the link
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      // Internal link with hash
      scrollToHash(href);
      
      // Update the URL without refreshing the page
      history.pushState(null, '', href);
    }
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
