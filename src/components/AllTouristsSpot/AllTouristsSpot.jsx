import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "../TouristsSpotCard/TouristsSpotCard";
import DocumentTitle from "../../documentTitle/DocumentTitle";

const AllTouristsSpot = () => {
    DocumentTitle('All Tourists Spot');
    const allTouristsSpots = useLoaderData();
    const [touristsSpot, setTouristsSpot] = useState(allTouristsSpots);
    const [sortOrder, setSortOrder] = useState('');

    const handleSort = (e) => {
        const operation = e.target.value;
        setSortOrder(operation);

        if (operation === "Ascending") {
            const sortedSpots = [...touristsSpot].sort((a, b) => {
                return parseInt(a.average_cost) - parseInt(b.average_cost);
            });
            setTouristsSpot(sortedSpots);
        }
        else if (operation === "Descending") {
            const sortedSpots = [...touristsSpot].sort((a, b) => {
                return parseInt(b.average_cost) - parseInt(a.average_cost);
            });
            setTouristsSpot(sortedSpots);
        }
    }

    return (
        <div className="min-h-screen bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="container-main">
                {/* Header */}
                <div className="section-header">
                    <p className="text-caption font-semibold text-brand-600 uppercase tracking-wider mb-3">Explore</p>
                    <h1 className="section-title">All Tourist Spots</h1>
                    <p className="section-subtitle">
                        Browse all destinations across Southeast Asia. Sort by budget to find your perfect trip.
                    </p>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-100">
                    <div>
                        <p className="text-body-sm text-neutral-500">
                            Showing <span className="font-semibold text-neutral-900">{touristsSpot.length}</span> spots
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <label className="text-body-sm text-neutral-500 font-medium">Sort by cost:</label>
                        <div className="relative">
                            <select
                                onChange={handleSort}
                                value={sortOrder}
                                className="appearance-none bg-white border border-neutral-200 text-neutral-900 text-body-sm font-medium rounded-lg pl-4 pr-10 py-2 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 hover:border-neutral-300 transition-all cursor-pointer shadow-sm"
                                id="sort-select"
                            >
                                <option value="">Default sorting</option>
                                <option value="Ascending">Low to High</option>
                                <option value="Descending">High to Low</option>
                            </select>
                            <svg className="w-4 h-4 text-neutral-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Spots Grid */}
                {touristsSpot.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-7 h-7 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-heading text-neutral-900 mb-2">No spots found</h3>
                        <p className="text-body-sm text-neutral-500">Try adjusting your search criteria.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {touristsSpot.map((spot) => (
                            <TouristsSpotCard key={spot._id} spot={spot} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllTouristsSpot;
