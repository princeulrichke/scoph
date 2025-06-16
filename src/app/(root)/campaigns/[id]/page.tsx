import { Campaigns } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  if (!id) {
    redirect('/campaigns');
  }

  const fetchCampaignDetails = (campaignId: string) => {
    if (Array.isArray(Campaigns)) {
      return Campaigns.find(campaign => campaign.id === campaignId) || null;
    } else if (typeof Campaigns === 'object' && Campaigns !== null) {
      return Campaigns[campaignId] || null;
    }
    return null;
  };

  const campaignDetails = await fetchCampaignDetails(id);

  if (!campaignDetails) {
    redirect('/campaigns');
  }

  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">{campaignDetails.name}</h1>
        <div className="relative w-full h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src={campaignDetails.image}
            alt={campaignDetails.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
            {campaignDetails.date}
          </div>
        </div>

        <div className="prose prose-orange max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-6">{campaignDetails.overview}</p>

          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700 mb-6">{campaignDetails.description}</p>

          <h2 className="text-2xl font-semibold mb-4">Collaboration</h2>
          <p className="text-gray-700 mb-6">{campaignDetails.collaboration}</p>

          <h2 className="text-2xl font-semibold mb-4">Activities</h2>
          <p className="text-gray-700 mb-6">{campaignDetails.activities}</p>

          <h2 className="text-2xl font-semibold mb-4">Impact</h2>
          <p className="text-gray-700 mb-6">{campaignDetails.impact}</p>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8">
          <Link
            href="/campaigns"
            className="inline-flex items-center text-orange-500 hover:text-orange-700 transition-colors"
          >
            ← Back to All Campaigns
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
