import { useState } from "react";
import Notes from "./components/Notes";
import Popup from "./components/Popup";

const Random = () => {
    const [popupItem, setPopupItem] = useState(null)

    return (
        <>
            <Notes desc='Random but interesting stories' setItem={setPopupItem} genre="random" />
            <Popup item={popupItem} setItem={setPopupItem} />
        </>
    );
}
 
export default Random;