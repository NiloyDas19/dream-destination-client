import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
// import navBackground from "../../assets/background.svg";
// import "animate.css";


const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="text-center">
                <span className="loading loading-spinner loading-sm mx-auto"></span>
                <span className="loading loading-spinner loading-md mx-auto"></span>
                <span className="loading loading-spinner loading-lg mx-auto"></span>
            </div>
        );
    }

    const handleLogOut = () => {
        console.log(user);
        logOut()
            .then(() => {
                console.log("Log Out Successful");
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-tourists-spot">All Tourists Spot</NavLink></li>
        <li><NavLink to="/add-tourists-spot">Add Tourists Spot</NavLink></li>
        <li><NavLink to="/my-list">My List</NavLink></li>
    </>
    return (
        // style={{ backgroundImage: `url(${navBackground})` }}
        // 
        <div className="navbar flex-no-wrap bg-white top-0 z-10 fixed ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
                        {
                            user ?
                                <>
                                    <li className="space-y-2 md:hidden">
                                        <div className="avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                                            <div className="w-8 md:w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={user.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="md:hidden"  onClick={handleLogOut}><Link to="/" >Logout</Link></li> 
                                </>
                                :
                                <>
                                    <li className="md:hidden"><Link to="/login">Login</Link></li>
                                    <li className="md:hidden"><Link to="/register">Register</Link></li>
                                </>
                        }
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <h2 className="text-2xl font-bold text-black">DREAM<span className="text-blue-500">DESTINATION</span></h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="space-x-2 navbar-end hidden md:flex">
                {
                    user ?
                        <>
                            <div className="flex items-center space-x-2">
                                <div className="avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <div className="w-8 md:w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                    </div>
                                </div>
                                <Link to="/" ><button className="btn btn-primary" onClick={handleLogOut}>Logout</button></Link>
                            </div>
                        </>
                        :
                        <>
                            <Link to="/login"><button className="btn btn-primary">Login</button></Link>
                            <Link to="/register"><button className="btn btn-primary">Register</button></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;