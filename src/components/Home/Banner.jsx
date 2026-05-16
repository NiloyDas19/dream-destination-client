import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop&q=80',
        title: 'Bali, Indonesia',
        subtitle: 'Rice terraces & temples',
    },
    {
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop&q=80',
        title: 'Phuket, Thailand',
        subtitle: 'Crystal clear waters',
    },
    {
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&h=600&fit=crop&q=80',
        title: 'Ha Long Bay, Vietnam',
        subtitle: 'Limestone karsts',
    },
    {
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80',
        title: 'Angkor Wat, Cambodia',
        subtitle: 'Ancient wonders',
    },
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [exitIndex, setExitIndex] = useState(null);
    const timerRef = useRef(null);

    const getCardPosition = useCallback((cardIndex) => {
        if (cardIndex === exitIndex) return 'exit';

        const len = slides.length;
        const diff = (cardIndex - currentIndex + len) % len;

        if (diff === 0) return 'front';
        if (diff === 1 || (exitIndex !== null && diff === 1)) return 'back-1';
        if (diff === 2) return 'back-2';
        return 'hidden';
    }, [currentIndex, exitIndex]);

    const advanceSlide = useCallback(() => {
        setExitIndex(currentIndex);

        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
            setExitIndex(null);
        }, 600);
    }, [currentIndex]);

    useEffect(() => {
        timerRef.current = setInterval(advanceSlide, 4500);
        return () => clearInterval(timerRef.current);
    }, [advanceSlide]);

    const handleIndicatorClick = (index) => {
        if (index === currentIndex) return;
        clearInterval(timerRef.current);
        setExitIndex(currentIndex);
        setTimeout(() => {
            setCurrentIndex(index);
            setExitIndex(null);
        }, 600);
    };

    return (
        <section className="hero-section">
            {/* Background */}
            <div className="hero-bg-pattern" />
            <div className="hero-blob hero-blob-1" />
            <div className="hero-blob hero-blob-2" />
            <div className="hero-blob hero-blob-3" />

            {/* Floating leaf SVGs */}
            <svg className="hero-leaf hero-leaf-1" viewBox="0 0 100 120" fill="none">
                <path d="M50 0C50 0 90 30 90 70C90 90 72 110 50 120C28 110 10 90 10 70C10 30 50 0 50 0Z" fill="#22c55e" />
                <path d="M50 20C50 20 50 120 50 120" stroke="#15803d" strokeWidth="2" />
            </svg>
            <svg className="hero-leaf hero-leaf-2" viewBox="0 0 100 120" fill="none">
                <path d="M50 0C50 0 90 30 90 70C90 90 72 110 50 120C28 110 10 90 10 70C10 30 50 0 50 0Z" fill="#86efac" />
                <path d="M50 20C50 20 50 120 50 120" stroke="#22c55e" strokeWidth="2" />
            </svg>

            <div className="hero-content-wrapper">
                {/* Left Side — Text */}
                <div className="hero-text">
                    <div className="hero-eyebrow">
                        <span className="hero-eyebrow-dot" />
                        Explore Southeast Asia
                    </div>

                    <h1 className="hero-title">
                        Find your next<br />
                        <span className="hero-title-accent">dream destination</span>
                    </h1>

                    <p className="hero-subtitle">
                        Discover breathtaking tourist spots, plan unforgettable trips,
                        and share your adventures with travelers worldwide.
                    </p>

                    <div className="hero-cta">
                        <Link to="/all-tourists-spot" className="hero-btn-primary">
                            Explore Destinations
                        </Link>
                        <Link to="/add-tourists-spot" className="hero-btn-secondary">
                            Contribute
                        </Link>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="hero-stat-number">500+</div>
                            <div className="hero-stat-label">Destinations</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">8</div>
                            <div className="hero-stat-label">Countries</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">10K+</div>
                            <div className="hero-stat-label">Travelers</div>
                        </div>
                    </div>
                </div>

                {/* Right Side — Stacked Image Cards */}
                <div className="hero-stack">
                    {/* Decorative elements */}
                    <div className="hero-stack-decor-1" />
                    <div className="hero-stack-decor-2" />
                    <div className="hero-stack-decor-3" />

                    {/* Stacked cards */}
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="hero-stack-card"
                            data-pos={getCardPosition(index)}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                loading={index === 0 ? 'eager' : 'lazy'}
                            />
                            <div className="hero-stack-label">
                                <h4>{slide.title}</h4>
                                <p>{slide.subtitle}</p>
                            </div>
                        </div>
                    ))}

                    {/* Location badge */}
                    <div className="hero-stack-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {slides[currentIndex].title}
                    </div>

                    {/* Indicators */}
                    <div className="hero-indicators">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`hero-indicator ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => handleIndicatorClick(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
