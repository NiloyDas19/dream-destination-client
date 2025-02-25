import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import swal from "sweetalert";
import DocumentTitle from "../../documentTitle/DocumentTitle";

const MyList = () => {
    DocumentTitle('My List');
    const {loading } = useContext(AuthContext);
    const mySpots = useLoaderData();

    if(loading){
        return (
            <div className="text-center">
                <span className="loading loading-spinner loading-sm mx-auto"></span>
                <span className="loading loading-spinner loading-md mx-auto"></span>
                <span className="loading loading-spinner loading-lg mx-auto"></span>
            </div>
        );
    }

    const handleDeleteSpot = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              fetch(`https://dream-destination-server-side.vercel.app/touristsSpot/${_id}`,{
                method: "DELETE",
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    window.location.reload();
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                }
                else{
                    swal("Something wrong try again!");
                }
                console.log(data);
              })
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }


    return (
        <div className="pt-20 w-[95%] mx-auto min-h-screen overflow-x-auto">
            <table className="table table-auto">
                <tbody>
                    <tr className="text-center">
                        <th></th>
                        <th>Country Name</th>
                        <th>Location</th>
                        <th>Tourists Spot Name</th>
                        <th>Travel Time</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    {
                        mySpots.map((spot, index) => <>
                            <tr className="text-center">
                                <th>{index + 1}</th>
                                <td>{spot.country_Name}</td>
                                <td>{spot.location}</td>
                                <td>{spot.tourists_spot_name}</td>
                                <td>{spot.travel_time}</td>
                                <td><Link to={`/update-page/${spot._id}`}><button className="btn btn-primary">Update</button></Link></td>
                                <td><button className="btn btn-warning" onClick={() => handleDeleteSpot(spot._id)}>Delete</button></td>
                            </tr>
                        </>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyList;