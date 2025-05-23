import Image from "next/image";

export default function Loader() {
    return (
        <>
            <div className="flex-col gap-6 w-full flex items-center justify-center">
                <div className="w-32 h-32 border-8 text-orange-400 text-4xl animate-spin border-orange-50 flex items-center justify-center border-t-orange-400 rounded-full">
                    <Image
                        src="/logo.png"
                        className="h-24 w-24 animate-pulse"
                        width={96}
                        height={96}
                        alt="Logo"
                        priority={true}
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-orange-500 tracking-wide">SCOPH-KU</h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Stand. Commit. Inspire.</p>
                </div>
            </div>
        </>
    );
}