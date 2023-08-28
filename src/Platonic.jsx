import { useState } from "react";
import Notes from "./components/Notes";
import Popup from "./components/Popup";

const Platonic = () => {
    const [popupItem, setPopupItem] = useState(null)

    return (
        <>
            <Notes desc='For the friendships that last' setItem={setPopupItem} genre="platonic" />
            <Popup item={popupItem} setItem={setPopupItem} />
        </>
    );
}
 
export default Platonic;