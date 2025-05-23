'use client'
import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { TeamMembers } from "@/constants";
import { X } from "lucide-react";
import { CTA } from "@/components";

export default function TeamPage() {
    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Improved modal handling
    const openModal = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
        // Prevent background scrolling when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Restore scrolling when modal is closed
        document.body.style.overflow = 'auto';
    };
    
    // Close modal on escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen]);
    return (
        <>
            <section className="relative flex items-center justify-center overflow-hidden mx-auto px-4 py-8">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="backdrop-blur-lg bg-orange-500 p-8 md:p-12 rounded-xl w-full shadow-xl border border-orange-400/20">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                            Meet Our Team
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-delay-2">
                            Dedicated individuals working together to improve public health in our community.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16">                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Committee Members</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {TeamMembers.map((member, index) => (
                            <div key={index} className="team-member group flex">
                                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col w-full">
                                    <div className="p-4 flex justify-center">
                                        <div className="relative w-48 h-48 sm:w-40 sm:h-40 md:w-44 md:h-44 overflow-hidden p-2 rounded-lg">
                                            <Image
                                              src={member.image}
                                              alt={member.name}
                                              className="object-cover object-top group-hover:scale-102 transition-transform duration-300"
                                              fill
                                              sizes="(max-width: 640px) 192px, (max-width: 768px) 160px, 176px"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-4 sm:p-5 flex flex-col flex-grow">
                                        <h3 className="text-2xl text-center sm:text-xl font-bold text-orange-500">{member.name}</h3>
                                        <p className="text-orange-600 text-center font-medium mb-3">{member.role || 'Committee Member'}</p>
                                        <div className="mt-auto">                                            
                                            <button 
                                              onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                openModal(member);
                                              }}
                                              className="view-bio-btn cursor-pointer px-3 py-2 bg-orange-500 text-white rounded-full text-base font-medium hover:bg-orange-600 transition-colors duration-300 w-full z-10 relative"
                                              aria-label={`View bio for ${member.name}`}
                                              type="button"
                                            >
                                              View Bio
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>            
            {isModalOpen && selectedMember && (
                <div 
                    className="fixed inset-0 bg-gray-900/50 z-50 flex items-center justify-center backdrop-blur-sm p-4" 
                    onClick={(e) => { 
                        if (e.target === e.currentTarget) closeModal(); 
                    }}
                >
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl animate-fade-in" onClick={e => e.stopPropagation()}>
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-4 text-orange-500 hover:text-white bg-orange-100 hover:bg-orange-500 rounded-full p-2 transition-colors duration-300"
                            aria-label="Close modal"
                        >
                            <X className="h-6 w-6" />
                        </button>
                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 border-4 border-orange-100">
                                <Image 
                                    src={selectedMember.image} 
                                    alt={selectedMember.name} 
                                    width={200} 
                                    height={200} 
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-orange-500 mb-1 text-center sm:text-left">{selectedMember.name}</h3>
                                <p className="text-orange-600 font-medium mb-4 text-center sm:text-left">{selectedMember.role || 'Committee Member'}</p>
                                <p className="text-gray-700 text-center sm:text-left">{selectedMember.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}            
            <CTA />
        </>
    );
}