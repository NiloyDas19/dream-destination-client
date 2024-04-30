import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../providers/AuthProviders";
import DocumentTitle from './../../documentTitle/DocumentTitle';

const AddTouristsSpot = () => {
    DocumentTitle('Add Tourists Spot');
    const { user, isDark } = useContext(AuthContext);


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

        console.log(newTouristsSpot);

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





    return (
        <div className={`space-y-10 w-[90%] mx-auto pt-20`}>
            <div className={`${isDark === 'dark' ? "bg-[#28185d]" : "bg-slate-50"} shadow-2xl space-y-10 rounded-2xl`}>
                <div className="text-center space-y-2 pt-10 px-2">
                    <h4 className="font-bold text-3xl text-purple-500">Add Tourist Spot</h4>
                    <p>
                        Elevate your travel experience by contributing to our collection of extraordinary tourist spots across Southeast Asia.
                    </p>
                </div>

                <form className="space-y-2 flex justify-center" onSubmit={handleAddTouristsSpot}>
                    <div className="w-[90%]">
                        <div className=" md:flex gap-10">
                            <div className="w-full">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="font-bold">User Email
                                        </span>
                                    </div>
                                    <input type="email" name="user_email" placeholder={user?.email} className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue" : "bg-slate-50"} input input-bordered w-full`} required readOnly />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="font-bold">User Name</span>
                                    </div>
                                    <input type="text" name="user_name" placeholder={user?.displayName} className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required readOnly />
                                </label>
                            </div>
                        </div>
                        <div className=" md:flex gap-10">
                            <div className="w-full">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="font-bold">Tourists Spot Name
                                        </span>
                                    </div>
                                    <input type="text" name="tourists_spot_name" placeholder="Enter Tourists Spot Name" className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="font-bold">Country Name</span>
                                    </div>
                                    <select name="country_Name" className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required>
                                        <option selected>Select the country name</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Cambodia">Cambodia</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="md:flex gap-10">
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="font-bold">Total Visitors Per Year</span>
                                    </div>
                                    <input type="number" name="total_visitors_per_year" placeholder="Example : 1000, 10000 etc." className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="font-bold">Location</span>
                                    </div>
                                    <input type="text" name="location" placeholder="Enter Location" className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                                </label>
                            </div>
                        </div>
                        <div className=" md:flex gap-10">
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="font-bold">Short Description</span>
                                    </div>
                                    <input type="text" name="short_description" placeholder="Enter Short Description" className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="font-bold">Average Cost</span>
                                    </div>
                                    <input type="number" name="average_cost" placeholder="Enter Average Cost" className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                                </label>
                            </div>
                        </div>

                        <div className="md:flex gap-10">
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="font-bold">Seasonality</span>
                                    </div>
                                    <input type="text" name="seasonality" placeholder="Example : summer, winter" className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="font-bold">Travel Time</span>
                                    </div>
                                    <input type="text" name="travel_time" placeholder="Example : 7 days" className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <label className="w-full">
                                <div className="label">
                                    <span className="font-bold">Image</span>
                                </div>
                                <input type="text" name="image" placeholder="Enter Image URL" className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                            </label>
                            <div className="mb-10">
                                <input type="submit" value="Add Tourist Spot" className={`${isDark === 'dark' ? "bg-blue-800 border-blue hover:border-black" : "bg-pink-500"} btn input input-bordered w-full`} />
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTouristsSpot;