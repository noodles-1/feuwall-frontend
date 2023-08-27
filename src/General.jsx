const General = () => {
    return (
        <>
            <div className="notes">
                <h1 className="notes-desc text-5xl"> Confessions submitted by everyone </h1>
                <div className="flex flex-wrap justify-center items-start">
                    <div className="notes-note">
                        <div className="note-number romantic">
                            <div className="text-3xl flex justify-between w-full absolute bottom-[-7px] left-0 px-[10px]">
                                <span> Note no. </span>
                                <span> 1 </span>
                            </div>
                        </div>
                    </div>
                    <div className="notes-note">
                        <div className="note-number platonic">
                            <div className="text-3xl flex justify-between w-full absolute bottom-[-7px] left-0 px-[10px]">
                                <span> Note no. </span>
                                <span> 1 </span>
                            </div>
                        </div>
                    </div>
                    <div className="notes-note">
                        <div className="note-number senti">
                            <div className="text-3xl flex justify-between w-full absolute bottom-[-7px] left-0 px-[10px]">
                                <span> Note no. </span>
                                <span> 1 </span>
                            </div>
                        </div>
                    </div>
                    <div className="notes-note">
                        <div className="note-number random">
                            <div className="text-3xl flex justify-between w-full absolute bottom-[-7px] left-0 px-[10px]">
                                <span> Note no. </span>
                                <span> 1 </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
 
export default General