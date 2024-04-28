import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TouristsSpotCard from "../TouristsSpotCard/TouristsSpotCard";
import { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";

const Home = () => {
    const allTouristsSpots = useLoaderData();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/countries')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCountries(data);
        })
    },[]);

    return (
        <div>
            <Banner></Banner>
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
        </div>
    );
};

export default Home;