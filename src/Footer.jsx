import Switcher from "./components/Switcher";

const Footer = () => {
    return (
        <>
            <div className="footer-elements">
                <div className="footer-logo">
                    <h1 className="text-left text-5xl font-semibold"> feu-wall </h1>
                </div>
                <div className="footer-middle">
                    <a href="#"> All confessions </a>
                    <a href="#"> Submit a confession </a>
                </div>
                <div className="flex justify-end items-center">
                    <Switcher />
                </div>
            </div>
        </>
    );
}
 
export default Footer;