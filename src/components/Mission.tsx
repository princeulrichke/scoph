import { MissionVision } from "@/constants";
import Image from "next/image";
export default function Mission() {
    return (
        <section className="py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="absolute top-0 left-0 w-full h-10 bg-orange-50" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}></div>
                <div className="absolute bottom-0 right-0 w-full h-10 bg-orange-50" style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {MissionVision.map((mission, index) => (
                        <div key={index} className="backdrop-blur-lg bg-white/70 p-4 rounded-xl shadow-lg border border-white/50 hover:shadow-xl hover:scale-102 transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center mb-0">
                                <div className="md:w-1/2 md:mr-16">
                                    <h2 className="text-3xl md:text-4xl font-bold text-orange-500 uppercase mb-2">{mission.title}</h2>
                                    <p className="text-gray-700 mb-6 leading-relaxed">{mission.description}</p>
                                </div>
                                <div className="md:w-1/2 ">
                                    <Image src={mission.image} alt={mission.title} width={500} height={500} className="w-35 h-auto" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}