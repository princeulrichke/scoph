import { About1 as AboutImage } from "@/assets";
import Image from "next/image";
export default function About(){
    return(
        <>
            <section className="relative flex items-center justify-center overflow-hidden mx-auto px-4 py-8">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="backdrop-blur-lg bg-orange-500 p-8 md:p-12 rounded-xl w-full shadow-xl border border-orange-400/20">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                            About SCOPH-KU
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-delay-2">
                            Learn about our mission, vision, and how we're making a difference in public health.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 animate-fade-in">
                            <h2 className="text-3xl font-bold text-orange-500 mb-6">
                                Who are we?
                            </h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                The Standing Committee on Public Health (SCOPH) at Kenyatta University is a dynamic chapter of the International Federation of Medical Students' Associations (IFMSA), dedicated to empowering medical students to become advocates for public health.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                We work closely with the Medical Students' Association of Kenya (MSAKE) to provide a platform for medical students to engage in public health initiatives, learn about global health challenges, and develop skills to address community health needs.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Our activities range from awareness campaigns and community outreach programs to educational workshops and collaborative projects with other local and international organizations.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 animate-fade-in-delay-1">
                            <div className="relative">
                                <div className="absolute -top-6 -right-6 w-64 h-64 bg-orange-500 rounded-full opacity-20"></div>
                                <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-orange-600 rounded-full opacity-20"></div>
                                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                                    <Image width={1000} height={1000} src={AboutImage} alt="About SCOPH-KU" className="md:h-96 sm:h-75 w-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}