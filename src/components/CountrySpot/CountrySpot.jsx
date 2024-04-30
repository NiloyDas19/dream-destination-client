import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountrySpot = ({spot}) => {

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
        <div className="border-2 border-gray-200 rounded-2xl p-7 space-y-8 flex flex-col">
            <div className="flex justify-center rounded-2xl">
                <img src={image}  className="w-full rounded-2xl" alt="" />
            </div>
            <div className="text-center font-semibold space-y-2">
                <h2 className='text-2xl font-bold'>{tourists_spot_name}</h2>
                <p>{short_description}</p>
            </div>
            <div className="flex-grow space-y-2">
                <div className='flex justify-between'>
                    <h2 className="">Seasonality : {seasonality}</h2>
                    <p>Average Cost : {average_cost}$</p>
                </div>
                <div className='flex justify-between'>
                    <p>location : {location}</p>
                    <p>Country name : {country_Name}</p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="border-dashed border-t-2">
                </div>
                <div className="text-center">
                   <Link to={`/view-details/${_id}`}><button className='btn btn-primary'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

CountrySpot.propTypes = {
    spot : PropTypes.object.isRequired,
}

export default CountrySpot;