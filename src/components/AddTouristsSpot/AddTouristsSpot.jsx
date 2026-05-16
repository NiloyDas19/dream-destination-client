import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../providers/AuthProviders";
import DocumentTitle from './../../documentTitle/DocumentTitle';

const AddTouristsSpot = () => {
    DocumentTitle('Add Tourists Spot');
    const { user } = useContext(AuthContext);

    const handleAddTouristsSpot = event => {
        event.preventDefault();
        const form = event.target;
        const user_email = user?.email;
        const user_name = user?.displayName;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.elements.country_Name.value;
        const total_visitors_per_year = form.total_visitors_per_year.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const image = form.image.value;

        const newTouristsSpot = { user_email, user_name, tourists_spot_name, country_Name, total_visitors_per_year, location, short_description, average_cost, seasonality, travel_time, image };



        fetch('https://dream-destination-server-side.vercel.app/addTouristsSpot', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTouristsSpot)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "Tourists Spot Added Successfully",
                        icon: "success",
                        button: "ok!",
                    });
                    form.reset();
                }
            })
    }

    const labelClass = "block text-body-sm font-medium text-neutral-600 mb-2";
    const inputClass = "input-field py-3";
    const selectClass = "input-field py-3";

    return (
        <div className="min-h-screen bg-gradient-to-b from-brand-50/40 via-white to-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 rounded-full border border-brand-100 mb-5">
                        <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        <span className="text-caption font-semibold text-brand-700 uppercase tracking-wider">Contribute</span>
                    </div>
                    <h1 className="font-display text-4xl sm:text-[2.75rem] font-bold text-neutral-900 mb-3 leading-tight tracking-tight">
                        Add a <span className="italic text-brand-700">new destination</span>
                    </h1>
                    <p className="text-body text-neutral-500 max-w-lg mx-auto">
                        Share a beautiful tourist spot with our community of travelers around the world.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl border border-neutral-200/80 shadow-lg overflow-hidden">
                    {/* User Info Bar */}
                    <div className="bg-sage-50 border-b border-sage-100 px-7 py-4 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-brand-700 font-semibold text-body-sm">
                                {(user?.displayName?.[0] || user?.email?.[0] || 'U').toUpperCase()}
                            </span>
                        </div>
                        <div className="min-w-0">
                            <p className="text-body-sm font-medium text-neutral-900 truncate">{user?.displayName || 'Traveler'}</p>
                            <p className="text-caption text-neutral-500 truncate">{user?.email}</p>
                        </div>
                    </div>

                    {/* Form Body */}
                    <form onSubmit={handleAddTouristsSpot} className="p-7 sm:p-8 space-y-6">
                        {/* Section: Basic Info */}
                        <div>
                            <h3 className="text-body font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-caption font-bold">1</span>
                                Basic Information
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className={labelClass}>Tourist Spot Name</label>
                                    <input type="text" name="tourists_spot_name" placeholder="e.g. Cox's Bazar Beach" required className={inputClass} id="add-spot-name" />
                                </div>
                                <div>
                                    <label className={labelClass}>Country</label>
                                    <select name="country_Name" required className={selectClass} id="add-country">
                                        <option value="">Select a country</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Cambodia">Cambodia</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}>Location</label>
                                    <input type="text" name="location" placeholder="City, Region" required className={inputClass} id="add-location" />
                                </div>
                                <div>
                                    <label className={labelClass}>Image URL</label>
                                    <input type="text" name="image" placeholder="https://example.com/photo.jpg" required className={inputClass} id="add-image" />
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-neutral-100" />

                        {/* Section: Trip Details */}
                        <div>
                            <h3 className="text-body font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-caption font-bold">2</span>
                                Trip Details
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                <div>
                                    <label className={labelClass}>Average Cost ($)</label>
                                    <input type="number" name="average_cost" placeholder="e.g. 500" required className={inputClass} id="add-cost" />
                                </div>
                                <div>
                                    <label className={labelClass}>Seasonality</label>
                                    <select name="seasonality" required className={selectClass} id="add-season">
                                        <option value="">Select season</option>
                                        <option value="Summer">Summer</option>
                                        <option value="Winter">Winter</option>
                                        <option value="Monsoon">Monsoon</option>
                                        <option value="All Seasons">All Seasons</option>
                                        <option value="Spring">Spring</option>
                                        <option value="Autumn">Autumn</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}>Travel Time</label>
                                    <input type="text" name="travel_time" placeholder="e.g. 5 days" required className={inputClass} id="add-travel-time" />
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-neutral-100" />

                        {/* Section: Description */}
                        <div>
                            <h3 className="text-body font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-caption font-bold">3</span>
                                Description
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="sm:col-span-2">
                                    <label className={labelClass}>Visitors Per Year</label>
                                    <input type="number" name="total_visitors_per_year" placeholder="e.g. 10000" required className={inputClass} id="add-visitors" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <label className={labelClass}>Short Description</label>
                                <textarea
                                    name="short_description"
                                    rows="4"
                                    placeholder="Describe what makes this destination special. Talk about the scenery, activities, local culture..."
                                    required
                                    className="input-field py-3 resize-none"
                                    id="add-description"
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                            <button type="submit" className="w-full btn-primary justify-center py-3.5 text-body rounded-xl gap-2" id="add-submit">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Add Tourist Spot
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTouristsSpot;
