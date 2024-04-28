import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

const CountryCard = ({country}) => {
    return (
        <div className="rounded-2xl border-2 shadow-xl border-blue-700  p-5">
            <Link to={`/specific-country/${country.country_Name}`} className="lex flex-col space-y-2">
                <div>
                    <img src={country.image} className="w-full rounded-2xl" alt="" />
                </div>
                <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-center">{country.country_Name}</h2>
                </div>
                <div>
                    <p>{country.country_details}</p>
                </div>
            </Link>
        </div>
    );
};

CountryCard.propTypes = {
    country : PropTypes.object.isRequired,
}

export default CountryCard;