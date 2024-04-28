
import { useLoaderData } from 'react-router-dom';

const ViewDetailsPage = () => {
    const spot = useLoaderData();
    console.log(spot);

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
        country_Name

    } = spot;


    return (
        <div className='mt-20 mx-auto w-[95%]'>
            <div className="border-2 border-gray-200 rounded-2xl p-7 space-y-8 flex flex-col">
                <div className="flex justify-center rounded-2xl">
                    <img src={image} className="w-full rounded-2xl" alt="" />
                </div>
                <div className="text-center space-y-2">
                    <h2 className='text-2xl font-bold'>{tourists_spot_name}</h2>
                    <p>{short_description}</p>
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
                    <div className='flex justify-between'>
                        <p>Location: {location}</p>
                        <p>Country Name: {country_Name}</p>
                        <p>Posted By : {user_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsPage;