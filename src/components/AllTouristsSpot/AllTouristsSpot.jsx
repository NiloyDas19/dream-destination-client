import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "../TouristsSpotCard/TouristsSpotCard";
import DocumentTitle from "../../documentTitle/DocumentTitle";

const AllTouristsSpot = () => {
    DocumentTitle('All Tourists Spot');
    const allTouristsSpots = useLoaderData();
    console.log(allTouristsSpots);
    const [touristsSpot, setTouristsSpot] = useState(allTouristsSpots);


    const handleSort = (e) => {
        console.log(e.target.value);
        const operation = e.target.value;
        if (operation === "Ascending") {
            const sortedSpots = [...touristsSpot].sort((a, b) => {
                return a.average_cost.localeCompare(b.average_cost);
            });
            setTouristsSpot(sortedSpots);
        }
        else if (operation === "Descending") {
            const sortedSpots = [...touristsSpot].sort((a, b) => {
                return b.average_cost.localeCompare(a.average_cost);
            });
            setTouristsSpot(sortedSpots);
        }
    }

    return (
            <div className="pt-20 space-y-10 mx-auto w-[95%]">
                <form className="text-center" onChange={handleSort}>
                    <select className="select select-primary w-full max-w-xs bg-blue-500">
                        <option disabled selected>Sort By Average Cost</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                </form>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        touristsSpot.map((spot) => <TouristsSpotCard spot={spot} key={spot._id}></TouristsSpotCard>)
                    }
                </div>
            </div>
    );
};

export default AllTouristsSpot;