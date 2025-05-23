import { Affiliations as Affiliation } from "@/constants";
import Image from "next/image";
import Link from "next/link";
export default function Affiliations() {
    return(
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-orange-500 mb-2">Our Affiliations</h2>
                <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">We are proud to be affiliated with the following organizations:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {Affiliation.map((affiliation) => (
                        <Link href={affiliation.link} key={affiliation.id} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center">
                            <div key={affiliation.id} className="bg-orange-500/10 rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-102 transition-shadow duration-300">
                                <div className="flex items-center justify-center mb-4">
                                    <Image src={affiliation.logo} alt={affiliation.name} width={100} height={100} className="w-12 h-auto text-orange-500" />
                                </div>
                                
                                <h3 className="text-xl font-semibold text-orange-500 mb-4 text-center">{affiliation.name}</h3>
                                <p className="text-gray-700 text-center">{affiliation.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}