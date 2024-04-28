import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TouristsSpotCard = ({spot}) => {

    const {
        image,
        tourists_spot_name,
        total_visitors_per_year,
        travel_time,
        seasonality,
        average_cost,
        _id,
        } = spot;

    return (
        <div className="border-2 border-gray-200 rounded-2xl p-7 space-y-8 flex flex-col">
            <div className="flex justify-center rounded-2xl">
                <img src={image}  className="w-full rounded-2xl" alt="" />
            </div>
            <div className="flex justify-around font-semibold">
                <h2 className='text-2xl font-bold'>{tourists_spot_name}</h2>
            </div>
            <div className="flex-grow space-y-2">
                <div className='flex justify-between'>
                    <h2 className="">Seasonality : {seasonality}</h2>
                    <p>Average Cost : {average_cost}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Total Visitors Per Year : {total_visitors_per_year}</p>
                    <p>Travel Time : {travel_time}</p>
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

TouristsSpotCard.propTypes = {
    spot : PropTypes.object.isRequired,
}

export default TouristsSpotCard;