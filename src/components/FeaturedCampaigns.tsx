'use client'
import { Campaigns } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
export default function FeaturedCampaigns(){
    // Create ref for the featured section
    const featuredRef = useRef<HTMLElement>(null);
    return (
        <>
            <section ref={featuredRef} id='featured' className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl text-center font-bold text-orange-500 mb-8 border-b border-orange-400/20 animate-fade-in">
                        Featured Campaigns
                    </h2>
                    <p className='text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto animate-fade-in'>
                        Explore our latest campaigns and initiatives that aim to make a difference in public health.
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {Campaigns.filter(campaign => campaign.rank === "featured")
                            .slice(0, 3)
                            .map((campaign) => (
                                <div key={campaign.id} className="bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in">
                                    <Image 
                                        src={campaign.image} 
                                        alt={campaign.name} 
                                        className="w-full h-48 object-cover" 
                                        width={400} 
                                        height={200} 
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold text-orange-500 mb-2">{campaign.name}</h3>
                                        <p className="text-gray-600 mb-4">{campaign.overview}</p>
                                        <Link href={`/campaigns/${campaign.id}`} className="bg-orange-500 text-white py-2 px-4 rounded-full inline-block hover:text-gray-700 hover:scale-105 font-medium">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/campaigns" className="text-white bg-orange-500 hover:bg-orange-600 py-2 px-4 rounded-full  inline-block font-medium hover:scale-110 transition-all duration-300">
                            View All Campaigns
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}