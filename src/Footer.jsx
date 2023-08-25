import { Link } from "react-router-dom";
import Switcher from "./components/Switcher";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-elements">
                    <div className="footer-logo">
                        <h1 className="text-left text-5xl font-semibold"> [feu-wall] </h1>
                    </div>
                    <div className="footer-middle">
                        <Link to="/"> All confessions </Link>
                        <Link to="/create"> Submit a confession </Link>
                    </div>
                    <div className="flex justify-end items-center">
                        <Switcher />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Footer;