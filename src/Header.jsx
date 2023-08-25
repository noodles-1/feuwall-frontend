import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="flex justify-around my-[50px] text-2xl header-links">
                <Link to="/general"> General </Link>
                <Link className="header-link-romantic" to="/romantic"> Romantic </Link>
                <Link className="header-link-platonic" to="/platonic"> Platonic </Link>
                <a className="header-link-sentimental" href="#"> Sentimental </a>
                <a className="header-link-random" href="#"> Random </a>
            </div>
        </>
    );
}
 
export default Header;