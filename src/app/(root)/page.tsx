'use client';

import { useState, useEffect } from 'react';
import { PageTransition, SocialMediaModal, Hero } from "@/components";
import { getLocalStorageItem, setLocalStorageItem } from '@/utils/localStorage';
import { FeaturedCampaigns, HeroLinks } from '@/components';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    // Check if it's the user's first visit
    const hasVisited = getLocalStorageItem('hasVisitedSCOPH');
    
    if (!hasVisited) {
      // Set a small delay before showing the modal
      const timer = setTimeout(() => {
        setShowModal(true);
        // Set the flag in localStorage
        setLocalStorageItem('hasVisitedSCOPH', 'true');
      }, 2000); // Show modal after 2 seconds
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <PageTransition>
      
        <Hero/>
        <FeaturedCampaigns />
        <HeroLinks />
        
      {/* Social Media Modal */}
      <SocialMediaModal isOpen={showModal} onClose={handleCloseModal} />
    </PageTransition>
  );
}
