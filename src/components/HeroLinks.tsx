import Image from "next/image";
import Link from "next/link";
import { About, Join, Portfolio, Team } from "@/assets";
export default function HeroLinks() {

    const links = [
        {
            title: "About Us",
            description: "Learn more about our mission and vision.",
            image: About,
            href: "/about"
        },
        {
            title: "Our Team",
            description: "Meet the dedicated individuals behind SCOPH-KU.",
            image: Team,
            href: "/team"
        },
        {
            title: "Our Portfolio",
            description: "Explore our past and ongoing projects.",
            image: Portfolio,
            href: "/portfolio"
        },
        {
            title: "Join Us",
            description: "Become a part of our community and make a difference.",
            image: Join,
            href: "/join"
        }
    ]

    return (
        <section className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-center font-bold text-orange-500 mb-8 border-b border-orange-400/20 animate-fade-in">
                    Explore SCOPH-KU
                </h2>
                <p className='text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto animate-fade-in'>
                    Here are some useful links to help you navigate through our resources and initiatives.
                </p>
                <div className="grid grid-cols-1 animate-fade-in md:grid-cols-4 gap-6">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <Image 
                                src={link.image} 
                                alt={link.title} 
                                className="w-full h-48 object-cover" 
                                width={400} 
                                height={200} 
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-orange-500 mb-2">{link.title}</h3>
                                <p className="text-gray-600 mb-4">{link.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}