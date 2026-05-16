import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountrySpot = ({ spot }) => {
    const {
        image,
        tourists_spot_name,
        country_Name,
        location,
        short_description,
        seasonality,
        average_cost,
        _id,
    } = spot;

    return (
        <div className="card card-hover group overflow-hidden">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={tourists_spot_name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                    <span className="badge bg-white/90 backdrop-blur-sm text-neutral-700 border border-neutral-200/50">
                        {country_Name}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                    <span className="badge-neutral">{seasonality}</span>
                </div>

                <h3 className="text-heading text-neutral-900 mb-1.5 group-hover:text-brand-600 transition-colors">
                    {tourists_spot_name}
                </h3>

                <p className="text-caption text-neutral-500 mb-1 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {location}
                </p>

                <p className="text-body-sm text-neutral-500 mb-4 line-clamp-2">
                    {short_description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <div>
                        <p className="text-caption text-neutral-400">From</p>
                        <p className="text-heading text-neutral-900">${average_cost}</p>
                    </div>
                    <Link
                        to={`/view-details/${_id}`}
                        className="btn-primary btn-sm gap-1.5"
                    >
                        View Details
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

CountrySpot.propTypes = {
    spot: PropTypes.object.isRequired,
}

export default CountrySpot;