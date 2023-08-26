import { NavLink } from "react-router-dom";
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
                        <NavLink to="home"> All confessions </NavLink>
                        <NavLink to="create"> Submit a confession </NavLink>
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