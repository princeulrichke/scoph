import Link from "next/link";
export default function CTA() {
    return (
        <section className="py-8 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg p-8 md:p-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
                    <p className="text-lg text-white mb-8 max-w-3xl mx-auto">Join SCOPH-KU and be part of a community of future healthcare professionals committed to improving public health.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/join" className="px-6 py-3 bg-white text-orange-500 font-medium rounded-full hover:bg-orange-300 hover:text-white transition-all duration-300">
                            JOIN US TODAY
                        </Link>
                        <Link href="/contact" className="px-6 py-3 bg-orange-700 text-white font-medium rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                            CONTACT US
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}