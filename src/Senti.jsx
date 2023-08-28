import { useState } from "react";
import Notes from "./components/Notes";
import Popup from "./components/Popup";

const Senti = () => {
    const [popupItem, setPopupItem] = useState(null)

    return (
        <>
            <Notes desc='Nostalgic and emotional moments' setItem={setPopupItem} genre="senti" />
            <Popup item={popupItem} setItem={setPopupItem} />
        </>
    );
}
 
export default Senti;