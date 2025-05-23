import {Campaigns as CampaignsType} from "@/constants";
import Link from "next/link";
import Image from "next/image";
export default function Campaigns() {
    return(
        <>
            <section className="relative flex items-center justify-center overflow-hidden mx-auto px-4 py-8">
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                        {CampaignsType.map((campaign) => (
                            <div key={campaign.id} className="bg-white rounded-lg shadow-lg p-6">
                                <div className="flex justify-center mb-4">
                                    <Image
                                        src={campaign.image}
                                        alt={campaign.name}
                                        width={150}
                                        height={150}
                                        className="rounded-lg w-100"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{campaign.name}</h3>
                                <p className="text-gray-500 mb-2">{campaign.date}</p>
                                <p className="text-gray-700 mb-4">{campaign.overview}</p>
                                <Link href={`/campaigns/${campaign.id}`} className="text-orange-500 hover:underline">
                                    Learn More
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}