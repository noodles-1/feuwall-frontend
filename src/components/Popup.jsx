const Popup = ({item, setItem}) => {
    const closePopup = () => {
        const popup_bg = document.getElementById('popup-bg')
        const popup = document.getElementById('popup')
        setItem(null)
        popup_bg.classList.remove('open-popup-bg')
        popup.classList.remove('open-popup')
    }

    const date = item ? new Date(item.date) : null
    const datetime = date ? date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    }) : null

    return (
        <>
            <div
                className={`popup-bg ${item ? 'open-popup-bg' : ''}`}
                id="popup-bg"
                onClick={closePopup}
            > </div>
            <div
                className={`popup ${item ? `open-popup ${item.genre}` : ''}`}
                id="popup"
            >
                {item && (
                    <>
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h1 className="popup-no text-5xl"> Note no. {item.id} </h1>
                                <div className="popup-desc">
                                    <h1 className="popup-author text-[26px]"> by {item.author} </h1>
                                    <h1 className="popup-genre text-[20px]"> [{item.genre}] </h1>
                                </div>
                                <h1 className="text-[24px] font-semibold mt-[20px]"> the story: </h1>
                                <p> {item.body} </p>
                                <h1 className="text-[24px] font-semibold mt-[20px]"> the course: </h1>
                                <p> {item.course} </p>
                            </div>

                            <p className="popup-date"> <i> submitted on: </i> {datetime} </p>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
 
export default Popup;