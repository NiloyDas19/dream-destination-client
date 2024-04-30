import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TouristsSpotCard from "../TouristsSpotCard/TouristsSpotCard";
import { useContext, useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import { AuthContext } from "../../providers/AuthProviders";
import DocumentTitle from "../../documentTitle/DocumentTitle";
import { Fade } from "react-awesome-reveal";


const Home = () => {
    DocumentTitle('Home');
    const allTouristsSpots = useLoaderData();
    const [countries, setCountries] = useState([]);
    const [mostVisitedSpots, setMostVisitedSpots] = useState(allTouristsSpots);
    const { isDark } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://dream-destination-server-side.vercel.app/countries', { credentials: "include" })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCountries(data);
                const sortedSpots = [...mostVisitedSpots].sort((a, b) => {
                    return parseInt(b.total_visitors_per_year) - parseInt(a.total_visitors_per_year);
                });
                setMostVisitedSpots(sortedSpots);
            })
    }, []);

    return (
        <div className="pt-16">
            <Banner></Banner>

            {/* Tourists Spot */}
            <div className="mt-10 space-y-10 w-[95%] mx-auto">
                <div className="text-center space-y-2">
                    <Fade>
                        <h1 className="text-center font-bold text-3xl">Our Tourists Spots</h1>
                    </Fade>
                    <p>
                        Discover the enchanting beauty of Southeast Asia with our curated selection of top tourist spots. From the pristine beaches of Cox's Bazar in Bangladesh to the ancient temples of Borobudur in Indonesia, immerse yourself in the diverse landscapes, rich cultures, and vibrant experiences that await in this captivating region. Explore iconic landmarks, natural wonders, and hidden gems across Bangladesh, Thailand, Indonesia, Malaysia, Vietnam, and Cambodia.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        allTouristsSpots.slice(0, 6).map((spot) => <TouristsSpotCard spot={spot} key={spot._id}></TouristsSpotCard>)
                    }
                </div>
            </div>

            {/* Countries Section */}
            <div className="mt-10 space-y-10 w-[95%] mx-auto">
                <div className="text-center space-y-2">
                    <Fade>
                        <h1 className="text-center font-bold text-3xl">Countries</h1>
                    </Fade>
                    <p>
                        Embark on a journey through Southeast Asia's diverse tapestry of cultures and landscapes. From the lush hills of Bangladesh to the pristine beaches of Thailand, the ancient temples of Indonesia to the modern metropolis of Malaysia, Vietnam's emerald waters to the historic wonders of Cambodia, our countries section invites you to explore the vibrant tapestry of this enchanting region. Discover the unique charm, rich heritage, and breathtaking beauty of each country, and let your wanderlust guide you to unforgettable adventures.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        countries.map((country) => <CountryCard country={country} key={country._id}></CountryCard>)
                    }
                </div>
            </div>

            {/* Most Visited Tourists Spot */}
            <div className="mt-10 space-y-10 w-[95%] mx-auto">
                <div className="text-center space-y-2">
                    <Fade>
                        <h1 className="text-center font-bold text-3xl">Most Visited Tourists Spot</h1>
                    </Fade>
                    <p>
                        Uncover the allure of Southeast Asia's most visited tourist spots, drawing millions of visitors annually to its breathtaking locales. From the majestic temples of Angkor Wat in Cambodia to the pristine beaches of Phuket in Thailand, each destination promises a captivating journey filled with cultural immersion, natural wonders, and unforgettable experiences. Explore these iconic sites and indulge in the region's rich heritage, diverse landscapes, and warm hospitality, creating memories that last a lifetime.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        mostVisitedSpots.slice(0, 5).map((spot) => <TouristsSpotCard spot={spot} key={spot._id}></TouristsSpotCard>)
                    }
                </div>
            </div>

            {/* Stats */}
            <div className="mt-10 space-y-10 w-[95%] mx-auto">
                <div className="text-center space-y-2">
                    <Fade>
                        <h1 className="text-center font-bold text-3xl">Stats</h1>
                    </Fade>
                    <p>
                        Delve into Southeast Asia's tourism landscape with our Stats section, offering insights into the region's total countries, myriad tourist spots, and the pulse of its most visited destinations. Navigate through data-driven metrics, uncovering the region's vast cultural diversity, natural wonders, and popular attractions, guiding travelers towards memorable adventures across this enchanting destination.
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className={`${isDark ? "bg-blue-200" : "bg-white"} stats shadow text-center flex-col md:flex-row`}>

                        <div className="stat">
                            <div className="stat-title">Total Tourists Spots </div>
                            <div className="stat-value">{allTouristsSpots.length}</div>
                        </div>

                        <div className="stat ">
                            <div className="stat-title">Countries</div>
                            <div className="stat-value text-secondary">6</div>
                        </div>

                        <div className="stat">
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