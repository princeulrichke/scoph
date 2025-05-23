'use client'

import { PortfolioCategories, PortfolioItems } from "@/constants";
import { useState, useEffect, useMemo } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Portfolio() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    
    // Get the current page from URL or default to 1
    const currentPage = parseInt(searchParams.get('page') || '1', 10);
    const [activeFilter, setActiveFilter] = useState(searchParams.get('category') || "all");
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Helper function to get item image 
    const getItemImage = (item) => {
        if (Array.isArray(item.images) && item.images.length > 0) {
            return item.images[0];
        }
        return item.image || '';
    };
    
    // Parse URL parameters on component mount and navigation
    useEffect(() => {
        // Get category from URL or use default
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            setActiveFilter(categoryParam);
        }
        
        // Handle direct item view via ID param
        const itemId = searchParams.get('id');
        if (itemId && !isModalOpen) {
            // Find the item in the portfolio items
            const id = isNaN(Number(itemId)) ? itemId : Number(itemId);
            const item = PortfolioItems.find(item => item.id === id);
            
            if (item) {
                // Open the modal with this item
                setSelectedItem(item);
                setIsModalOpen(true);
                document.body.style.overflow = 'hidden';
                
                // Remove the ID from the URL to prevent redirection
                if (typeof window !== 'undefined') {
                    const currentUrl = new URL(window.location.href);
                    currentUrl.searchParams.delete('id');
                    window.history.replaceState({}, '', currentUrl);
                }
            }
        }
    }, [searchParams, isModalOpen]);
    
    const ITEMS_PER_PAGE = 6;

    // Filter items based on active category
    const filteredItems = useMemo(() => {
        return PortfolioItems.filter(item => 
            activeFilter === "all" || item.category === activeFilter
        );
    }, [activeFilter]);
    
    // Calculate pagination values
    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    
    // Get current page items
    const currentItems = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [currentPage, filteredItems]);
    
    // Handle category filter change
    const filterPortfolioItems = (category) => {
        // Reset to page 1 when changing filters
        updateUrlParams(category, 1);
        setActiveFilter(category);
    };
    
    // Handle URL parameter updates
    const updateUrlParams = (category = activeFilter, page = currentPage) => {
        const params = new URLSearchParams();
        
        // Only add parameters if they have non-default values
        if (category !== "all") params.set('category', category);
        if (page > 1) params.set('page', page.toString());
        
        // We don't add the item ID to the URL anymore to prevent page navigation
        
        const newUrl = pathname + (params.toString() ? `?${params.toString()}` : '');
        router.push(newUrl, { scroll: false }); // Avoid scrolling to top on parameter change
    };
    
    // Utility function for sharing a specific item
    const sharePortfolioItem = (item) => {
        // Generate a shareable link that includes the item ID
        const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
        return `${baseUrl}/portfolio?id=${item.id}`;
    };
    
    // Modal functions
    const openModal = (index) => {
        const itemIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
        const item = filteredItems[itemIndex];
        setSelectedItem(item);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
        
        // Remove the ID from URL if it exists
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
                        {PortfolioCategories.map((category) => (
                            <button
                                key={category.name}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 cursor-pointer ${
                                    activeFilter.toLowerCase() === category.name.toLowerCase() 
                                    ? 'bg-orange-500 text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white'
                                }`}
                                onClick={() => filterPortfolioItems(category.name.toLowerCase() === "all" ? "all" : category.name)}
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
                                {currentItems.map((item, index) => (
                                    <div key={item.id} className="relative group cursor-pointer" onClick={() => openModal(index)}>
                                        <Image
                                            src={getItemImage(item)}
                                            alt={item.title}
                                            width={500}
                                            height={300}
                                            className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
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
                                        onClick={() => updateUrlParams(activeFilter, Math.max(1, currentPage - 1))}
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
                                        onClick={() => updateUrlParams(activeFilter, Math.min(totalPages, currentPage + 1))}
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
                <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black/75" onClick={closeModal}>
                    <div className="bg-white rounded-lg max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
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
                                        {selectedItem.outcomes.map((outcome, i) => (
                                            <li key={i} className="text-gray-700">{outcome}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            
                            {Array.isArray(selectedItem.images) && selectedItem.images.length > 1 && (
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-3">Gallery</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {selectedItem.images.slice(1).map((image, index) => (
                                            <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                                                <Image 
                                                    src={image} 
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
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                        </svg>
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
                                    >
                                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
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
                                    >
                                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
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
                                    >
                                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
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
