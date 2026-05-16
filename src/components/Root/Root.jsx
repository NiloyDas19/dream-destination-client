import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    const location = useLocation();
    const isAuthRoute = location.pathname === '/login' || location.pathname === '/register';

    return (
        <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
            {!isAuthRoute && <Navbar />}
            <main className="flex-1">
                <Outlet />
            </main>
            {!isAuthRoute && <Footer />}
        </div>
    );
};

export default Root;