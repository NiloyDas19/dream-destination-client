import { useLoaderData, useParams } from "react-router-dom";
import DocumentTitle from "../../documentTitle/DocumentTitle";
import CountrySpot from "../CountrySpot/CountrySpot";

const ViewPageForSpecficCountry = () => {
    const spots = useLoaderData();
    const params = useParams().country_Name;
    DocumentTitle(`${params}`);

    return (
        <div className="min-h-screen bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="container-main">
                {/* Header */}
                <div className="section-header">
                    <p className="text-caption font-semibold text-brand-600 uppercase tracking-wider mb-3">Country</p>
                    <h1 className="section-title">{params}</h1>
                    <p className="section-subtitle">
                        Explore all tourist destinations in {params}
                    </p>
                </div>

                {spots.length === 0 ? (
                    <div className="text-center py-20">
                        <h3 className="text-heading text-neutral-900 mb-2">No spots found</h3>
                        <p className="text-body-sm text-neutral-500">No tourist spots available for this country yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {spots.map((spot) => <CountrySpot spot={spot} key={spot._id} />)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewPageForSpecficCountry;