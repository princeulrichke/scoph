'use client';

import { PortfolioCategories, PortfolioItems } from "@/constants";
import { useState, useEffect, useMemo, Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Portfolio item type (adjust as needed)
interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    date: string;
    description: string;
    outcomes: string[];
    images: any[]; // Allow both string URLs and imported StaticImageData
}

// Loading skeleton for Suspense fallback
function PortfolioLoading() {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="px-4 py-2 rounded-lg bg-gray-200 animate-pulse h-10 w-20"></div>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PortfolioContent() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentPage = parseInt(searchParams.get('page') || '1', 10);
    const [activeFilter, setActiveFilter] = useState(searchParams.get('category') || "all");
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Helper for image src
    const getItemImage = (item: PortfolioItem) => {
        if (Array.isArray(item.images) && item.images.length > 0) {
            const img = item.images[0];
            // Support for StaticImageData or string
            if (typeof img === "string") return img;
            if (img?.src) return img.src;
        }
        return "/og-default.png";
    };

    // Handle URL params (category, id)
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam) setActiveFilter(categoryParam);

        const itemId = searchParams.get('id');
        if (itemId && !isModalOpen) {
            const id = Number(itemId);
            const item = PortfolioItems.find(
                (portfolioItem: any) => portfolioItem.id === id
            );
            if (item) {
                setSelectedItem(item);
                setIsModalOpen(true);
                document.body.style.overflow = 'hidden';
                // Remove ID from URL for clean state
                if (typeof window !== 'undefined') {
                    const currentUrl = new URL(window.location.href);
                    currentUrl.searchParams.delete('id');
                    window.history.replaceState({}, '', currentUrl);
                }
            }
        }
        // eslint-disable-next-line
    }, [searchParams, isModalOpen]);

    const ITEMS_PER_PAGE = 6;

    const filteredItems = useMemo(() => {
        return PortfolioItems.filter(
            (item: any) => activeFilter === "all" || item.category === activeFilter
        );
    }, [activeFilter]);

    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const currentItems = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [currentPage, filteredItems]);

    const filterPortfolioItems = (category: string) => {
        updateUrlParams(category, 1);
        setActiveFilter(category);
    };

    const updateUrlParams = (category = activeFilter, page = currentPage) => {
        const params = new URLSearchParams();
        if (category !== "all") params.set('category', category);
        if (page > 1) params.set('page', page.toString());
        const newUrl = pathname + (params.toString() ? `?${params.toString()}` : '');
        router.push(newUrl, { scroll: false });
    };

    // Share link generator
    const sharePortfolioItem = (item: PortfolioItem) => {
        const baseUrl = typeof window !== 'undefined'
            ? window.location.origin
            : 'https://scoph.vercel.app';
        return `${baseUrl}/portfolio?id=${item.id}`;
    };

    // Modal open/close
    const openModal = (index: number) => {
        const itemIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
        const item = filteredItems[itemIndex];
        setSelectedItem(item);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
        document.body.style.overflow = 'auto';
        if (typeof window !== 'undefined' && searchParams.get('id')) {
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.delete('id');
            window.history.replaceState({}, '', currentUrl);
        }
    };

    return (
        <>
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
                        {PortfolioCategories.map((category: any) => (
                            <button
                                key={category.name}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 cursor-pointer ${
                                    activeFilter.toLowerCase() === category.name.toLowerCase()
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white'
                                }`}
                                onClick={() =>
                                    filterPortfolioItems(
                                        category.name.toLowerCase() === "all"
                                            ? "all"
                                            : category.name
                                    )
                                }
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {totalItems === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No items found in this category.</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {currentItems.map((item: any, index: number) => (
                                    <div
                                        key={item.id}
                                        className="relative group cursor-pointer"
                                        onClick={() => openModal(index)}
                                        tabIndex={0}
                                        aria-label={`View details for ${item.title}`}
                                    >
                                        <Image
                                            src={getItemImage(item)}
                                            alt={item.title}
                                            width={500}
                                            height={300}
                                            className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
                                            priority={index === 0}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="text-center p-4">
                                                <h3 className="text-white text-lg font-semibold mb-1">{item.title}</h3>
                                                <p className="text-white text-sm">{item.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {totalPages > 1 && (
                                <div className="flex justify-center items-center space-x-2 mt-12">
                                    <button
                                        onClick={() =>
                                            updateUrlParams(activeFilter, Math.max(1, currentPage - 1))
                                        }
                                        disabled={currentPage <= 1}
                                        className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                                            currentPage <= 1
                                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                                : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                                        }`}
                                        aria-label="Previous page"
                                    >
                                        <ChevronLeft size={18} />
                                        <span className="ml-1 hidden sm:inline">Previous</span>
                                    </button>

                                    <div className="flex items-center space-x-1">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <button
                                                key={page}
                                                onClick={() => updateUrlParams(activeFilter, page)}
                                                className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                                                    currentPage === page
                                                        ? 'bg-orange-500 text-white'
                                                        : 'bg-gray-100 text-gray-600 hover:bg-orange-100'
                                                }`}
                                                aria-label={`Page ${page}`}
                                                aria-current={currentPage === page ? 'page' : undefined}
                                            >
                                                {page}
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() =>
                                            updateUrlParams(activeFilter, Math.min(totalPages, currentPage + 1))
                                        }
                                        disabled={currentPage >= totalPages}
                                        className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                                            currentPage >= totalPages
                                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                                : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                                        }`}
                                        aria-label="Next page"
                                    >
                                        <span className="mr-1 hidden sm:inline">Next</span>
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {isModalOpen && selectedItem && (
                <div
                    className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black/75"
                    onClick={closeModal}
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        className="bg-white rounded-lg max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-white p-6 pb-4 border-b border-gray-100 z-10 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 pt-4">
                            <div className="relative w-full h-80 mb-6 rounded-xl overflow-hidden shadow-md">
                                <Image
                                    src={getItemImage(selectedItem)}
                                    alt={selectedItem.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                                    {selectedItem.category}
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="inline-flex items-center bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {selectedItem.date}
                                </span>
                                <span className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                    </svg>
                                    {selectedItem.category}
                                </span>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-3">Description</h3>
                                <p className="text-gray-700 leading-relaxed">{selectedItem.description}</p>
                            </div>

                            {selectedItem.outcomes && selectedItem.outcomes.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-3">Outcomes</h3>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {selectedItem.outcomes.map((outcome: string, i: number) => (
                                            <li key={i} className="text-gray-700">{outcome}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {Array.isArray(selectedItem.images) && selectedItem.images.length > 1 && (
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-3">Gallery</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {selectedItem.images.slice(1).map((image: any, index: number) => (
                                            <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                                                <Image
                                                    src={typeof image === "string" ? image : image?.src || "/og-default.png"}
                                                    alt={`${selectedItem.title} image ${index + 2}`}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold mb-3">Share this item</h3>
                                <div className="flex flex-wrap gap-3">
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(sharePortfolioItem(selectedItem));
                                            alert('Link copied to clipboard!');
                                        }}
                                        className="flex items-center px-3 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors"
                                        aria-label="Copy link to clipboard"
                                    >
                                        {/* ... (SVG unchanged) */}
                                        Copy Link
                                    </button>
                                    <button
                                        onClick={() => {
                                            window.open(
                                                `https://twitter.com/intent/tweet?url=${encodeURIComponent(sharePortfolioItem(selectedItem))}&text=${encodeURIComponent(`Check out this ${selectedItem.title}`)}`,
                                                '_blank'
                                            );
                                        }}
                                        className="flex items-center px-3 py-2 bg-[#1DA1F2] text-white rounded-md hover:bg-opacity-90 transition-colors"
                                        aria-label="Share on Twitter"
                                    >
                                        {/* ... (SVG unchanged) */}
                                        Twitter
                                    </button>
                                    <button
                                        onClick={() => {
                                            window.open(
                                                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(sharePortfolioItem(selectedItem))}`,
                                                '_blank'
                                            );
                                        }}
                                        className="flex items-center px-3 py-2 bg-[#1877F2] text-white rounded-md hover:bg-opacity-90 transition-colors"
                                        aria-label="Share on Facebook"
                                    >
                                        {/* ... (SVG unchanged) */}
                                        Facebook
                                    </button>
                                    <button
                                        onClick={() => {
                                            window.open(
                                                `https://wa.me/?text=${encodeURIComponent(`Check out this ${selectedItem.title}: ${sharePortfolioItem(selectedItem)}`)}`,
                                                '_blank'
                                            );
                                        }}
                                        className="flex items-center px-3 py-2 bg-[#25D366] text-white rounded-md hover:bg-opacity-90 transition-colors"
                                        aria-label="Share on WhatsApp"
                                    >
                                        {/* ... (SVG unchanged) */}
                                        WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default function Portfolio() {
    return (
        <Suspense fallback={<PortfolioLoading />}>
            <PortfolioContent />
        </Suspense>
    );
}
