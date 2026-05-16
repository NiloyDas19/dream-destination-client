import { Link, useLoaderData } from 'react-router-dom';
import DocumentTitle from '../../documentTitle/DocumentTitle';

const ViewDetailsPage = () => {
    DocumentTitle('View Details');
    const spot = useLoaderData();

    const {
        image,
        tourists_spot_name,
        total_visitors_per_year,
        travel_time,
        seasonality,
        average_cost,
        location,
        short_description,
        user_name,
        country_Name,
        user_email
    } = spot;

    const details = [
        { label: 'Seasonality', value: seasonality },
        { label: 'Average Cost', value: `$${average_cost}` },
        { label: 'Visitors / Year', value: total_visitors_per_year?.toLocaleString?.() || total_visitors_per_year },
        { label: 'Travel Time', value: travel_time },
    ];

    return (
        <div className="min-h-screen bg-neutral-50 pt-[65px] pb-20">
            {/* Hero Image Header */}
            <div className="w-full h-[50vh] lg:h-[60vh] relative bg-neutral-900">
                <img
                    src={image}
                    alt={tourists_spot_name}
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent" />
                
                {/* Back Button Overlay */}
                <div className="absolute top-6 left-4 sm:left-6 lg:left-8 z-10">
                    <button
                        onClick={() => window.history.back()}
                        className="btn-ghost btn-sm text-white hover:bg-white/20 gap-1.5"
                        id="back-button"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </button>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-16 pt-32">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-brand-500/20 border border-brand-500/30 backdrop-blur-md rounded-full text-brand-100 text-xs font-semibold uppercase tracking-wider">
                                {country_Name}
                            </span>
                        </div>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-4 leading-tight">
                            {tourists_spot_name}
                        </h1>
                        <p className="text-body-lg text-white/80 flex items-center gap-2">
                            <svg className="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {location}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section overlapping the image slightly */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl border border-neutral-200/50 p-6 sm:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Main Description */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h3 className="font-display text-2xl font-bold text-neutral-900 mb-4">About the destination</h3>
                                <p className="text-body-lg text-neutral-600 leading-relaxed">
                                    {short_description}
                                </p>
                            </div>

                            {/* Author Info */}
                            <div className="pt-8 border-t border-neutral-100">
                                <h4 className="text-caption font-semibold text-neutral-400 uppercase tracking-wider mb-4">Added By</h4>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center">
                                        <span className="text-brand-700 font-bold text-lg">
                                            {user_name?.[0]?.toUpperCase() || 'U'}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-body font-semibold text-neutral-900">{user_name}</p>
                                        <p className="text-caption text-neutral-500">{user_email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Stats */}
                        <div>
                            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100 sticky top-24">
                                <h3 className="font-display text-xl font-bold text-neutral-900 mb-6">Trip Details</h3>
                                <div className="space-y-5">
                                    {details.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center pb-4 border-b border-neutral-200 last:border-0 last:pb-0">
                                            <span className="text-body-sm text-neutral-500">{item.label}</span>
                                            <span className="text-body font-semibold text-neutral-900">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-neutral-200">
                                    <Link to="/all-tourists-spot" className="w-full btn-primary justify-center gap-2" id="browse-more">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        Browse More Spots
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsPage;
