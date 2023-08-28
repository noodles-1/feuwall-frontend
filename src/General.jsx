import { useState } from "react";
import Popup from "./components/Popup";
import Notes from "./components/Notes";

const General = () => {
    const [popupItem, setPopupItem] = useState(null)
    
    return (
        <>
            <Notes desc="Confessions submitted by everyone" setItem={setPopupItem} genre="general" />
            <Popup item={popupItem} setItem={setPopupItem} />
        </>
    );
}
 
export default General