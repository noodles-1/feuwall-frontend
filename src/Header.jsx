import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="flex justify-around my-[50px] text-2xl header-links">
                <NavLink to="home"> General </NavLink>
                <NavLink className="header-link-romantic" to="romantic"> Romantic </NavLink>
                <NavLink className="header-link-platonic" to="platonic"> Platonic </NavLink>
                <NavLink className="header-link-sentimental" to="senti"> Sentimental </NavLink>
                <NavLink className="header-link-random" to="random"> Random </NavLink>
            </div>

            <Outlet />
        </>
    );
}
 
export default Header;