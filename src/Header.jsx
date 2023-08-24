const Header = () => {
    return (
        <>
            <div className="flex justify-around my-[50px] text-2xl header-links">
                <a href="#"> General </a>
                <a className="header-link-romantic" href="#"> Romantic </a>
                <a className="header-link-platonic" href="#"> Platonic </a>
                <a className="header-link-sentimental" href="#"> Sentimental </a>
                <a className="header-link-random" href="#"> Random </a>
            </div>
        </>
    );
}
 
export default Header;