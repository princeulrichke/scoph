'use client';

import { Navbar, Footer, PageLoadingTransition } from "@/components";
import { useNavigation } from "@/components/NavigationProvider";

export const dynamic = 'force-dynamic';
export const fetchCache = 'default-no-store';

export default function Layout ({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isNavigating } = useNavigation();
  
  return (
    <>
        <Navbar />
        <PageLoadingTransition isLoading={isNavigating} />
        
        <main className="w-full flex flex-col min-h-screen pt-16 md:pt-20 overflow-x-hidden" 
              style={{ opacity: isNavigating ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
            {children}
        </main>
        
        <Footer />        
    </>
  );
}