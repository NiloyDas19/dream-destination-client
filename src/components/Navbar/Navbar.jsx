import { useContext, useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const FallbackAvatar = ({ name, size = 'w-7 h-7', textSize = 'text-caption' }) => (
    <div className={`${size} rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0`}>
        <span className={`text-brand-700 font-medium ${textSize}`}>
            {name?.[0]?.toUpperCase() || 'U'}
        </span>
    </div>
);

const ProfileImage = ({ src, alt, size = 'w-7 h-7', fallbackName }) => {
    const [imgError, setImgError] = useState(false);

    if (!src || imgError) {
        return <FallbackAvatar name={fallbackName} size={size} />;
    }

    return (
        <img
            src={src}
            alt={alt || 'User'}
            className={`${size} rounded-full object-cover ring-1 ring-neutral-200 flex-shrink-0`}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
        />
    );
};

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const profileRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'All Spots', path: '/all-tourists-spot' },
        ...(user ? [
            { name: 'Add Spot', path: '/add-tourists-spot' },
            { name: 'My List', path: `/my-list/${user.email}` },
        ] : []),
    ];

    const handleLogOut = () => {
        logOut().catch(() => {});
        setIsProfileOpen(false);
    };

    const linkClass = ({ isActive }) =>
        `px-3 py-2 rounded-lg text-body-sm font-medium transition-colors duration-200 ${
            isActive
                ? 'text-brand-800 bg-brand-50'
                : 'text-neutral-500 hover:text-brand-800 hover:bg-brand-50/50'
        }`;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-neutral-200/80 ${
                scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-xs'
                    : 'bg-white/80 backdrop-blur-sm'
            }`}
        >
            <div className="container-main px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 group" id="logo-link">
                        <div className="w-8 h-8 bg-brand-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">D</span>
                        </div>
                        <span className="font-semibold text-lg text-neutral-900 tracking-tight">
                            Dream<span className="text-brand-600">Dest</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={linkClass}
                                end={link.path === '/'}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* User Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        {user ? (
                            <div className="relative" ref={profileRef}>
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg hover:bg-neutral-50 transition-colors duration-200"
                                    id="profile-toggle"
                                >
                                    <ProfileImage
                                        src={user.photoURL}
                                        alt={user.displayName}
                                        size="w-7 h-7"
                                        fallbackName={user.displayName || user.email}
                                    />
                                    <span className="text-body-sm font-medium text-neutral-700">
                                        {user.displayName || user.email?.split('@')[0]}
                                    </span>
                                    <svg
                                        className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${
                                            isProfileOpen ? 'rotate-180' : ''
                                        }`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl border border-neutral-200 shadow-elevated animate-slide-down">
                                        <div className="p-3 border-b border-neutral-100">
                                            <p className="text-body-sm font-medium text-neutral-900 truncate">{user.displayName || 'User'}</p>
                                            <p className="text-caption text-neutral-500 truncate">{user.email}</p>
                                        </div>
                                        <div className="p-1.5">
                                            <Link
                                                to="/add-tourists-spot"
                                                onClick={() => setIsProfileOpen(false)}
                                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-body-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                                            >
                                                Add Tourist Spot
                                            </Link>
                                            <Link
                                                to={`/my-list/${user.email}`}
                                                onClick={() => setIsProfileOpen(false)}
                                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-body-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                                            >
                                                My List
                                            </Link>
                                        </div>
                                        <div className="p-1.5 border-t border-neutral-100">
                                            <button
                                                onClick={handleLogOut}
                                                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-body-sm text-red-600 hover:bg-red-50 transition-colors"
                                                id="logout-button"
                                            >
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link to="/login" className="btn-ghost btn-sm" id="login-link">
                                    Sign In
                                </Link>
                                <Link to="/register" className="btn-primary btn-sm" id="register-link">
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-50 transition-colors"
                        id="mobile-menu-toggle"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-neutral-100 bg-white animate-slide-down">
                    <div className="px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2.5 rounded-lg text-body-sm font-medium transition-colors ${
                                        isActive
                                            ? 'text-brand-800 bg-brand-50'
                                            : 'text-neutral-500 hover:text-brand-800 hover:bg-brand-50/50'
                                    }`
                                }
                                end={link.path === '/'}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <div className="pt-3 mt-3 border-t border-neutral-100">
                            {user ? (
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 px-3 py-2">
                                        <ProfileImage
                                            src={user.photoURL}
                                            alt={user.displayName}
                                            size="w-8 h-8"
                                            fallbackName={user.displayName || user.email}
                                        />
                                        <div className="min-w-0">
                                            <p className="text-body-sm font-medium text-neutral-900 truncate">{user.displayName || 'User'}</p>
                                            <p className="text-caption text-neutral-500 truncate">{user.email}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleLogOut}
                                        className="w-full px-3 py-2.5 rounded-lg text-body-sm text-red-600 hover:bg-red-50 transition-colors text-left"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block w-full btn-secondary text-center">
                                        Sign In
                                    </Link>
                                    <Link to="/register" onClick={() => setIsMenuOpen(false)} className="block w-full btn-primary text-center">
                                        Get Started
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
