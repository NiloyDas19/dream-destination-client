import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
    return (
        <Link
            to={`/specific-country/${country.country_Name}`}
            className="group block p-5 bg-white rounded-xl border border-neutral-200 hover:border-brand-300 hover:shadow-card transition-all duration-200"
            id={`country-${country.country_Name}`}
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center group-hover:bg-brand-50 transition-colors duration-200">
                    <svg className="w-5 h-5 text-neutral-400 group-hover:text-brand-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="min-w-0">
                    <h3 className="text-body font-semibold text-neutral-900">{country.country_Name}</h3>
                    <p className="text-caption text-neutral-500">Explore destinations →</p>
                </div>
            </div>
        </Link>
    );
};

export default CountryCard;
