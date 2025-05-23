'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Confetti } from '@/components';
import { socialLinks as socialMediaLinks  } from '@/constants';

interface SocialMediaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SocialMediaModal({ isOpen, onClose }: SocialMediaModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [modalAnimation, setModalAnimation] = useState('scale-0');
  
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setModalAnimation('scale-100');
      }, 100);
    } else {
      setModalAnimation('scale-0');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowConfetti(true);
    
    // Reset confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    
    // Here you would add your code to submit the email to your newsletter service
    console.log('Email submitted:', email);
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="relative inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div 
          className={`bg-orange-500/70 rounded-2xl shadow-xl max-w-lg w-full relative p-6 transform transition-transform duration-500 ${modalAnimation} overflow-hidden`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Modal content */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-4 animate-pulse">
              <Image 
                src="/logo.png" 
                alt="SCOPH-KU Logo" 
                width={60} 
                height={60} 
                className="object-contain"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-1 text-center">
              Join the SCOPH-KU Community!
            </h2>
            <p className="text-gray-600 dark:text-gray-100 mb-6 text-center">
              Follow our social media and subscribe to our newsletter for updates
            </p>
            
            {/* Social media buttons */}
            <div className="grid grid-cols-5 gap-3 w-full mb-8 max-w-md">
              {socialMediaLinks.map((social, index) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center group"
                  style={{
                    animation: `fadeIn 0.5s ease-out ${0.1 * index}s both`
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-1 transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                  >
                    <Image 
                      src={social.icon} 
                      alt={social.name} 
                      width={30} 
                      height={30} 
                      className={social.name === 'Instagram' ? 'invert' : ''}
                    />
                  </div>
                  <span className="text-xs text-gray-100">{social.name}</span>
                </a>
              ))}
            </div>
            
            {/* Newsletter subscription */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center">
                  Subscribe to our newsletter
                </h3>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-500 text-white font-medium rounded-r-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            ) : (
              <div className="w-full max-w-md text-center p-4 bg-green-100 dark:bg-green-900 rounded-lg animate-fadeIn">
                <svg className="w-8 h-8 text-green-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-medium text-green-800 dark:text-green-200">Thanks for subscribing!</h3>
                <p className="text-green-700 dark:text-green-300">We'll keep you updated with the latest news and events.</p>
              </div>
            )}
            
            <button 
              onClick={onClose} 
              className="mt-6 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors underline"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
      
      {/* Confetti effect when subscribed */}
      <Confetti active={showConfetti} />
      
      {/* Global animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}