
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
        
        } = spot;


    return (
        <div className='mt-20'>
            
        </div>
    );
};

export default ViewDetailsPage;