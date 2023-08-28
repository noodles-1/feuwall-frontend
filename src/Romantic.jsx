import { useState } from "react";
import Notes from "./components/Notes";
import Popup from "./components/Popup";

const Romantic = () => {
    const [popupItem, setPopupItem] = useState(null)

    return (
        <>
            <Notes desc='Stories that spark the "kilig"' setItem={setPopupItem} genre="romantic" />
            <Popup item={popupItem} setItem={setPopupItem} />
        </>
    );
}
 
export default Romantic;