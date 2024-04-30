import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import errorBg from "../../assets/404.gif"
import DocumentTitle from './../../documentTitle/DocumentTitle';



const ErrorPage = () => {
    DocumentTitle('Error Page');
    return (
        <div>
            <div className="mt-5">
                <Link to="/" ><i className="text-purple-800 font-semibold flex items-center justify-center gap-1"> <FaArrowLeft /> Back to home</i></Link>
            </div>
            <div className="flex items-center justify-center">
                <img src={errorBg} alt=""  className="bg-no-repeat bg-cover bg-center"/>
            </div>
        </div>
    );
};

export default ErrorPage;