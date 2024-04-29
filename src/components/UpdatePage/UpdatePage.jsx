import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../providers/AuthProviders";

const UpdatePage = () => {
    const {user, isDark} = useContext(AuthContext);
    const navigate = useNavigate();
    const spot = useLoaderData();

    const handleUpdateTouristsSpot = event => {
        event.preventDefault();
        const form = event.target;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.elements.country_Name.value;
        const total_visitors_per_year = form.total_visitors_per_year.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const image = form.image.value;

        const newTouristsSpot = {tourists_spot_name, country_Name, total_visitors_per_year, location, short_description, average_cost, seasonality, travel_time, image };

        console.log(newTouristsSpot);

        fetch(`http://localhost:5000/touristsSpot/${spot._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTouristsSpot)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal({
                        title: "Good job!",
                        text: "Tourists Spot Updated Successfully",
                        icon: "success",
                        button: "ok!",
                    });
                    navigate(`/my-list/${user.email}`);
                }
            })
    }

    return (
        <div className={`space-y-10 w-[90%] mx-auto pt-20`}>
            <div className={`${isDark === 'dark' ? "bg-[#28185d]" : "bg-slate-50"} shadow-2xl space-y-10 rounded-2xl`}>
                <div className="text-center space-y-2 pt-10 px-2">
                    <h4 className="font-bold text-3xl text-purple-500">Update Tourist Spot</h4>
                </div>

                <form className="space-y-2 flex justify-center" onSubmit={handleUpdateTouristsSpot}>
                    <div className="w-[90%]">
                        <div className=" md:flex gap-10">
                            <div className="w-full">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="font-bold">Tourists Spot Name
                                        </span>
                                    </div>
                                    <input type="text" name="tourists_spot_name" placeholder="Enter Tourists Spot Name" defaultValue={spot.tourists_spot_name} className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="font-bold">Country Name</span>
                                    </div>
                                    <select name="country_Name" className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required>
                                        <option selected>{spot.country_Name}</option>
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
                                    <input type="number" name="total_visitors_per_year" placeholder="Example : 1000, 10000 etc." defaultValue={spot.total_visitors_per_year} className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="font-bold">Location</span>
                                    </div>
                                    <input type="text" name="location" placeholder="Enter Location" defaultValue={spot.location} className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                                </label>
                            </div>
                        </div>
                        <div className=" md:flex gap-10">
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="font-bold">Short Description</span>
                                    </div>
                                    <input type="text" name="short_description" placeholder="Enter Short Description" defaultValue={spot.short_description} className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="font-bold">Average Cost</span>
                                    </div>
                                    <input type="number" name="average_cost" placeholder="Enter Average Cost" defaultValue={spot.average_cost} className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                                </label>
                            </div>
                        </div>

                        <div className="md:flex gap-10">
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className=" font-bold">Seasonality</span>
                                    </div>
                                    <input type="text" name="seasonality" placeholder="Example : summer, winter" defaultValue={spot.seasonality} className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="font-bold">Travel Time</span>
                                    </div>
                                    <input type="text" name="travel_time" placeholder="Example : 7 days" defaultValue={spot.travel_time} className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <label className="w-full">
                                <div className="label">
                                    <span className="font-bold">Image</span>
                                </div>
                                <input type="text" name="image" placeholder="Enter Image URL" defaultValue={spot.image} className={`${isDark === 'dark' ? "bg-[#351f7e] border-blue hover:border-black" : "bg-slate-50"} input input-bordered w-full`} required />
                            </label>
                            <div className="mb-10">
                                <input type="submit" value="Update Tourist Spot" className={`${isDark === 'dark' ? "bg-blue-800 border-blue hover:border-black" : "bg-pink-500"} btn input input-bordered w-full`} />
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePage;