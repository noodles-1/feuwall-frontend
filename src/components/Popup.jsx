const Popup = ({item, setItem}) => {
    const closePopup = () => {
        const popup_bg = document.getElementById('popup-bg')
        const popup = document.getElementById('popup')
        setItem(null)
        popup_bg.classList.remove('open-popup-bg')
        popup.classList.remove('open-popup')
    }

    return (
        <>
            <div
                className={`popup-bg ${item ? 'open-popup-bg' : ''}`}
                id="popup-bg"
                onClick={closePopup}
            > </div>
            <div
                className={`popup ${item ? 'open-popup' : ''}`}
                id="popup"
            >
                <h1> hello world </h1>
            </div>
        </>
    );
}
 
export default Popup;