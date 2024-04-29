import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TouristsSpotCard from "../TouristsSpotCard/TouristsSpotCard";
import { useContext, useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import { AuthContext } from "../../providers/AuthProviders";

const Home = () => {
    const allTouristsSpots = useLoaderData();
    const [countries, setCountries] = useState([]);
    const [mostVisitedSpots, setMostVisitedSpots] = useState(allTouristsSpots);
    const {isDark} = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCountries(data);
                const sortedSpots = [...mostVisitedSpots].sort((a, b) => {
                    return b.total_visitors_per_year.localeCompare(a.total_visitors_per_year);
                });
                setMostVisitedSpots(sortedSpots);
            })
    }, []);

    return (
        <div>
            <Banner></Banner>

            {/* Tourists Spot */}
            <div className="mt-10 space-y-10 w-[95%] mx-auto">
                <div>
                    <h1 className="text-center font-bold text-3xl">Tourists Spot</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        allTouristsSpots.slice(0, 6).map((spot) => <TouristsSpotCard spot={spot} key={spot._id}></TouristsSpotCard>)
                    }
                </div>
            </div>

            {/* Countries Section */}
            <div className="mt-10 space-y-10 w-[95%] mx-auto">
                <div>
                    <h1 className="text-center font-bold text-3xl">Countries Section</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        countries.map((country) => <CountryCard country={country} key={country._id}></CountryCard>)
                    }
                </div>
            </div>

            {/* Most Visited Tourists Spot */}
            <div className="mt-10 space-y-10 w-[95%] mx-auto">
                <div>
                    <h1 className="text-center font-bold text-3xl">Most Visited Tourists Spot</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        mostVisitedSpots.slice(0, 5).map((spot) => <TouristsSpotCard spot={spot} key={spot._id}></TouristsSpotCard>)
                    }
                </div>
            </div>

            {/* Stats */}
            <div className="mt-10 space-y-10 w-[95%] mx-auto">
                <div>
                    <h1 className="text-center font-bold text-3xl">Stats</h1>
                </div>
                <div className="flex justify-center">
                    <div className={`${isDark ? "bg-blue-200" : "bg-white"} stats shadow`}>

                        <div className="stat place-items-center">
                            <div className="stat-title">Total Tourists Spots </div>
                            <div className="stat-value">{allTouristsSpots.length}</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Countries</div>
                            <div className="stat-value text-secondary">6</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Most Visited Spot</div>
                            <div className="stat-value">{mostVisitedSpots[0].tourists_spot_name}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;