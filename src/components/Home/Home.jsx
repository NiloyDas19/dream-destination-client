import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import TouristsSpotCard from '../TouristsSpotCard/TouristsSpotCard';
import CountryCard from '../CountryCard/CountryCard';
import { AuthContext } from '../../providers/AuthProviders';

const Home = () => {
    const { user } = useContext(AuthContext);
    const [touristSpots, setTouristSpots] = useState([]);
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dream-destination-server-side.vercel.app/addTouristsSpot')
            .then((res) => res.json())
            .then((data) => {
                setTouristSpots(data.slice(0, 6));
                setLoading(false);
            });

        fetch('https://dream-destination-server-side.vercel.app/countries')
            .then((res) => {
                if (!res.ok) throw new Error('Countries not found');
                return res.json();
            })
            .then((data) => setCountries(data))
            .catch(() => {
                setCountries([
                    { country_Name: 'Thailand' },
                    { country_Name: 'Indonesia' },
                    { country_Name: 'Vietnam' },
                    { country_Name: 'Philippines' },
                    { country_Name: 'Malaysia' },
                    { country_Name: 'Singapore' },
                    { country_Name: 'Cambodia' },
                    { country_Name: 'Myanmar' },
                ]);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-2 border-brand-200 border-t-brand-700 rounded-full animate-spin" />
                    <p className="text-body-sm text-neutral-400">Loading destinations...</p>
                </div>
            </div>
        );
    }

    const features = [
        {
            title: 'Curated Spots',
            description: 'Hand-picked destinations ensuring quality and authentic experiences for every traveler.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            title: 'Verified Reviews',
            description: 'Only featuring spots with excellent ratings from real travelers who have been there.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'Community Driven',
            description: 'Join thousands of travelers sharing their experiences and local insights.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            title: 'Easy Planning',
            description: 'Simple tools to plan and organize your perfect trip with all details at hand.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
        },
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Travel Blogger',
            text: 'An absolutely incredible experience! The destinations are breathtaking and the platform made planning seamless.',
        },
        {
            name: 'James Chen',
            role: 'Photographer',
            text: 'Found hidden gems I never knew existed. This platform helped me plan the perfect Southeast Asia adventure.',
        },
        {
            name: 'Maria Garcia',
            role: 'Digital Nomad',
            text: 'The attention to detail and quality of information provided is exceptional. Highly recommended for any traveler.',
        },
    ];

    return (
        <div className="bg-white">
            {/* Hero Banner */}
            <Banner />

            {/* Popular Destinations */}
            <section className="section bg-white" id="destinations">
                <div className="container-main">
                    <div className="section-header">
                        <div className="inline-flex items-center gap-1.5 text-caption font-semibold text-brand-700 uppercase tracking-wider mb-3">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            Featured
                        </div>
                        <h2 className="section-title">Popular Tourist Spots</h2>
                        <p className="section-subtitle">
                            Explore the most sought-after destinations loved by travelers worldwide
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {touristSpots.map((spot) => (
                            <TouristsSpotCard key={spot._id} spot={spot} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/all-tourists-spot" className="btn-secondary gap-2" id="view-all-destinations">
                            View All Destinations
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Countries */}
            {countries.length > 0 && (
                <section className="section bg-gradient-to-b from-brand-50/40 to-white" id="countries">
                    <div className="container-main">
                        <div className="section-header">
                            <div className="inline-flex items-center gap-1.5 text-caption font-semibold text-brand-700 uppercase tracking-wider mb-3">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Regions
                            </div>
                            <h2 className="section-title">Countries We Cover</h2>
                            <p className="section-subtitle">
                                Discover unique destinations across these beautiful Southeast Asian countries
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {countries.map((country) => (
                                <CountryCard key={country._id || country.country_Name} country={country} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Features */}
            <section className="section bg-white" id="features">
                <div className="container-main">
                    <div className="section-header">
                        <div className="inline-flex items-center gap-1.5 text-caption font-semibold text-brand-700 uppercase tracking-wider mb-3">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Why Us
                        </div>
                        <h2 className="section-title">Why Choose Dream Destination</h2>
                        <p className="section-subtitle">
                            We provide the best travel planning experience with these features
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl border border-neutral-200 bg-white hover:border-brand-200 hover:shadow-md transition-all duration-200 group"
                                id={`feature-${index}`}
                            >
                                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4 text-brand-600 group-hover:bg-brand-100 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-body font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                                <p className="text-body-sm text-neutral-500 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section bg-sage-50" id="testimonials">
                <div className="container-main">
                    <div className="section-header">
                        <div className="inline-flex items-center gap-1.5 text-caption font-semibold text-brand-700 uppercase tracking-wider mb-3">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Testimonials
                        </div>
                        <h2 className="section-title">What Travelers Say</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-6 rounded-xl border border-sage-200 bg-white" id={`testimonial-${index}`}>
                                <svg className="w-8 h-8 text-brand-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                                </svg>
                                <p className="text-body text-neutral-600 mb-5 leading-relaxed">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>
                                <div className="pt-4 border-t border-sage-100">
                                    <p className="text-body-sm font-semibold text-neutral-900">{testimonial.name}</p>
                                    <p className="text-caption text-neutral-500">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-brand-800 relative overflow-hidden" id="cta-section">
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="absolute top-0 right-0 w-96 h-96" viewBox="0 0 400 400" fill="none">
                        <circle cx="300" cy="100" r="200" fill="white" />
                    </svg>
                    <svg className="absolute bottom-0 left-0 w-80 h-80" viewBox="0 0 400 400" fill="none">
                        <circle cx="100" cy="300" r="180" fill="white" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="text-display-md text-white mb-4">Ready to explore?</h2>
                    <p className="text-body-lg text-brand-200 mb-8 max-w-xl mx-auto">
                        Join our community of travelers and discover amazing destinations across Southeast Asia.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        {!user && (
                            <Link
                                to="/register"
                                className="btn-lg inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-body font-semibold bg-white text-brand-800 hover:bg-brand-50 transition-colors duration-200"
                                id="cta-register"
                            >
                                Get Started Free
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        )}
                        <Link
                            to="/all-tourists-spot"
                            className="btn-lg inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-body font-semibold text-white border border-brand-600 hover:bg-brand-700 transition-colors duration-200"
                            id="cta-browse"
                        >
                            Browse Spots
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
