import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-950 text-neutral-400 border-t border-brand-900">
            <div className="container-main px-4 sm:px-6 lg:px-8 py-8 md:py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">D</span>
                        </div>
                        <span className="font-semibold text-lg text-white tracking-tight">
                            Dream<span className="text-brand-400">Dest</span>
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                        <Link to="/" className="text-body-sm text-neutral-400 hover:text-white transition-colors">Home</Link>
                        <Link to="/all-tourists-spot" className="text-body-sm text-neutral-400 hover:text-white transition-colors">Explore Spots</Link>
                        <Link to="/add-tourists-spot" className="text-body-sm text-neutral-400 hover:text-white transition-colors">Add Spot</Link>
                    </div>

                    {/* Copyright */}
                    <div className="text-caption text-neutral-500">
                        © {currentYear} Dream Destination.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
