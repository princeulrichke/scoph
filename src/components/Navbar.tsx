'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";
import { Menu,X } from 'lucide-react';
import { NavItems } from '@/constants';
export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    // Helper function to check if the current path should highlight a nav item
    const isPathActive = (path: string) => {
        // For home path, only match exactly to avoid highlighting home on every page
        if (path === '/') {
            return pathname === '/';
        }
        // For other paths, check if the current pathname starts with this path
        return pathname.startsWith(path);
    };

    return (
        <nav className={clsx("fixed w-full z-20 top-0 start-0 border-b transition-all duration-300 bg-orange-50 border-gray-200", scrolled && "shadow-md")}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image 
                        src="/logo1.svg" 
                        className="h-16 w-auto" 
                        width={32} 
                        height={32} 
                        alt="Logo" 
                    />
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link href="/join" className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                        Join Us
                    </Link>
                    <button type="button" onClick={toggleMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orange-500 rounded-lg md:hidden hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                    >                        <span className="sr-only">Open menu</span>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
                <div className={clsx(
                        "items-center justify-between w-full md:flex md:w-auto md:order-1",
                        isMenuOpen ? "block" : "hidden"
                    )}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 md:border-none rounded-lg bg-gray-50 md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        {NavItems.map((item) => (
                            <li key={item.name}>                                <Link
                                    href={item.path}
                                    className={clsx(
                                        "block py-2 pl-3 pr-4 text-gray-900 font-bold rounded md:bg-transparent md:p-0",
                                        isPathActive(item.path) ? "text-orange-500" : "hover:text-orange-500"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}