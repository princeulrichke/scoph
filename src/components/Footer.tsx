import { useNavigation } from "./NavigationProvider";
import { Copyright } from "lucide-react";
import Link from "next/link";
import { socialLinks, NavItems, contactDetails } from "@/constants";
import Image from "next/image";

export default function Footer() {
    const { isNavigating } = useNavigation();
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="w-full bg-orange-50 border-t border-gray-200 py-4"
                style={{ opacity: isNavigating ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-6">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo1.svg"
                                className="h-16 me-1 w-auto"
                                width={96}
                                height={96}
                                alt="Logo"
                                priority={true}
                            />
                        </Link>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-orange-500">Stand. Commit. Inspire.</span>
                        <p className="text-gray-700 mb-4 text-wrap w-100">Standing Committee on Public Health - Kenyatta University Local Office. Empowering students to make a difference in public health.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-lg text-gray-900 font-bold uppercase">Quick Links</h2>
                            <ul className="text-gray-800 font-medium">
                                {NavItems.map((item) => (
                                    <li key={item.name} className="mb-4">
                                        <Link href={item.path} className="hover:underline">
                                            {item.name} 
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-lg text-gray-900 font-bold uppercase">Contact Us</h2>
                            <ul className="text-gray-800 font-medium">
                                {contactDetails.map((contact) => (
                                    <li key={contact.name} className="mb-2 text-sm">
                                        <Link href={contact.url} className="hover:underline">
                                            <span className="font-bold">{contact.name}:</span> {contact.value}
                                        </Link>
                                    </li>
                                ))}
                                {socialLinks.map((link) => (
                                    <li key={link.name} className="mb-2">
                                        <Link href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-lg text-gray-900 font-bold uppercase">Other Links</h2>
                            <ul className="text-gray-800 font-medium">
                                <li className="mb-4">
                                    <Link href="/terms" className="hover:underline">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/privacy" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="https://github.com/princeulrichke" target="_blank" className="hover:underline">
                                        Developers
                                    </Link> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-2 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-800 sm:text-center">
                        <Copyright className="inline mr-1 w-4 h-4" />{currentYear} <Link href="/" className="hover:underline">SCOPH-KU™</Link>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 mr-4"
                            >
                                <Image
                                    src={link.icon}
                                    alt={link.name}
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                                <span className="sr-only">{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}