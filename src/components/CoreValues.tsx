import { CoreValues as CV } from "@/constants";
export default function CoreValues() {
    return (
        
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">Our Core Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {CV.map((value) => (
                        <div key={value.id} className="bg-orange-500/10 rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-102 transition-shadow duration-300">
                            <div className="flex items-center justify-center mb-4">
                                <value.icon className="w-12 h-12 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-orange-500 mb-4 text-center">{value.title}</h3>
                            <p className="text-gray-700 text-center">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}