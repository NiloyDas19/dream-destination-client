import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import swal from "sweetalert";

const MyList = () => {
    const {loading } = useContext(AuthContext);
    const mySpots = useLoaderData();

    if(loading || mySpots.length == 0){
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
              fetch(`http://localhost:5000/touristsSpot/${_id}`,{
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
        <div className="mt-20 w-[95%] mx-auto min-h-screen">
            <table className="table table-xs">
                <thead>
                    <tr className="text-center">
                        <th></th>
                        <th>Country Name</th>
                        <th>Location</th>
                        <th>Tourists Spot Name</th>
                        <th>Travel Time</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mySpots.map((spot, index) => <>
                            <tr className="text-center">
                                <th>{index + 1}</th>
                                <td>{spot.country_Name}</td>
                                <td>{spot.location}</td>
                                <td>{spot.tourists_spot_name}</td>
                                <td>{spot.travel_time}</td>
                                <td><Link><button className="btn btn-primary">Update</button></Link></td>
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