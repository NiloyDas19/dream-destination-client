import { useLoaderData, useParams } from "react-router-dom";
import DocumentTitle from "../../documentTitle/DocumentTitle";
import CountrySpot from "../CountrySpot/CountrySpot";

const ViewPageForSpecficCountry = () => {
    const spots = useLoaderData();
    const params = useParams().country_Name;
    DocumentTitle(`${params}`);
    return (
        <div className="pt-20 w-[95%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    spots.map((spot) => <CountrySpot spot = {spot} key={spot._id}></CountrySpot>)
                }
            </div>
        </div>
    );
};

export default ViewPageForSpecficCountry;