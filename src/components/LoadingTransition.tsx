'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Loader } from '@/components';

interface LoadingTransitionProps {
  children: React.ReactNode;
}

export default function LoadingTransition({ children }: LoadingTransitionProps) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Show loader when the component mounts or route changes
    setLoading(true);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-[#0a0a0a] z-50">
          <Loader />
        </div>
      ) : (
        children
      )}
    </>
  );
}
