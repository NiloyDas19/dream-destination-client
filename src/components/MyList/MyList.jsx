import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import swal from "sweetalert";
import DocumentTitle from "../../documentTitle/DocumentTitle";

const MyList = () => {
    DocumentTitle('My List');
    const { loading } = useContext(AuthContext);
    const mySpots = useLoaderData();

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-2 border-brand-200 border-t-brand-700 rounded-full animate-spin" />
                    <p className="text-body-sm text-neutral-400">Loading your spots...</p>
                </div>
            </div>
        );
    }

    const handleDeleteSpot = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this tourist spot!",
            icon: "warning",
            buttons: ["Cancel", "Delete Spot"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://dream-destination-server-side.vercel.app/touristsSpot/${_id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                window.location.reload();
                                swal("Deleted! Your tourist spot has been removed.", {
                                    icon: "success",
                                });
                            } else {
                                swal("Something went wrong, please try again!");
                            }
                        })
                } else {
                    swal("Your tourist spot is safe!");
                }
            });
    }

    return (
        <div className="min-h-screen bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="container-main">
                {/* Header */}
                <div className="section-header">
                    <p className="text-caption font-semibold text-brand-600 uppercase tracking-wider mb-3">Dashboard</p>
                    <h1 className="section-title">My Tourist Spots</h1>
                    <p className="section-subtitle">
                        Manage all the tourist spots you have added.
                    </p>
                </div>

                {/* Table / Empty State */}
                {mySpots.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-7 h-7 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-heading text-neutral-900 mb-2">No spots yet</h3>
                        <p className="text-body-sm text-neutral-500 mb-6">You haven&apos;t added any tourist spots yet.</p>
                        <Link to="/add-tourists-spot" className="btn-primary" id="add-first-spot">
                            Add Your First Spot
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-x-auto">
                        <table className="w-full min-w-[700px]">
                            <thead>
                                <tr className="border-b border-neutral-200 bg-neutral-50">
                                    <th className="text-left py-3 px-4 text-caption font-semibold text-neutral-500 uppercase tracking-wider">#</th>
                                    <th className="text-left py-3 px-4 text-caption font-semibold text-neutral-500 uppercase tracking-wider">Spot Name</th>
                                    <th className="text-left py-3 px-4 text-caption font-semibold text-neutral-500 uppercase tracking-wider">Country</th>
                                    <th className="text-left py-3 px-4 text-caption font-semibold text-neutral-500 uppercase tracking-wider">Location</th>
                                    <th className="text-left py-3 px-4 text-caption font-semibold text-neutral-500 uppercase tracking-wider">Travel Time</th>
                                    <th className="text-right py-3 px-4 text-caption font-semibold text-neutral-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mySpots.map((spot, index) => (
                                    <tr key={spot._id} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                                        <td className="py-3 px-4">
                                            <span className="text-body-sm text-neutral-400 font-medium">{index + 1}</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className="text-body-sm font-medium text-neutral-900">{spot.tourists_spot_name}</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className="badge-neutral">{spot.country_Name}</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className="text-body-sm text-neutral-600">{spot.location}</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className="text-body-sm text-neutral-600">{spot.travel_time}</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    to={`/update-page/${spot._id}`}
                                                    className="btn-ghost btn-sm gap-1"
                                                    id={`edit-${spot._id}`}
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDeleteSpot(spot._id)}
                                                    className="btn-sm inline-flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-md text-caption font-medium text-red-600 hover:bg-red-50 transition-colors"
                                                    id={`delete-${spot._id}`}
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyList;
