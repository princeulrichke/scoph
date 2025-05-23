'use client'
import Link from 'next/link';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Campaigns } from '@/constants';
import { ScrollLink } from '@/components';
import Image from 'next/image';

export default function Hero() {
    
    return (
        <>
            <section className="relative flex items-center justify-center overflow-hidden mx-auto px-4 py-8">
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="backdrop-blur-lg bg-orange-500 p-8 md:p-12 rounded-xl shadow-xl border border-orange-400/20">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                            Standing Committee on Public Health
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-light text-white mb-6 animate-fade-in-delay-1">
                            Kenyatta University Local Office
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-delay-2">
                            Inspiring and equipping medical students to become proactive advocates for public health by nurturing their knowledge, skills, and passion.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-3">
                            <Link href="/about" className='px-6 py-3 bg-white text-deep-orange font-medium rounded-full hover:bg-orange-300 hover:text-white transition-all duration-300'>
                                ABOUT US
                            </Link>
                            <Link href="/join" className="px-6 py-3 bg-orange-700 text-white font-medium rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                                JOIN US
                            </Link>
                        </div>
                    </div>
                </div>                <div className='absolute bottom-0 left-0 right-0 flex justify-center animate-bounce'>
                    <ScrollLink 
                        href="#featured"
                        ariaLabel="Scroll to featured campaigns"
                        className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-full p-1"
                    >
                        <ChevronDown className='w-6 h-6 text-orange-500'/>
                    </ScrollLink>
                </div>
            </section>
        </>    
        
    );
}