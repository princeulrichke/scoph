import { Campaigns } from "@/components";
export default function page () {
  return (
    <>
        <section className="relative flex items-center justify-center overflow-hidden mx-auto px-4 py-8">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="backdrop-blur-lg bg-orange-500 p-8 md:p-12 rounded-xl w-full shadow-xl border border-orange-400/20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                        Our Public Health Campaigns
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-delay-2">
                        Raising awareness and making a difference in our community.
                    </p>
                </div>
            </div>
        </section>
        <Campaigns />
    </>
  );
}