import { CircularProgress } from "@mui/material";
import { ThemeProvider } from "styled-components";
import useFetch from "../hooks/useFetch";

const Notes = ({desc, setItem, genre}) => {
    const { notes, next, isLoading, isNextLoading, totalRows, loadMoreNotes } = useFetch(genre)

    return (
        <>
            <div className="notes">
                <h1 className="notes-desc text-5xl"> {desc} </h1>
                {isLoading && 
                    <div className="flex justify-center"> 
                        <CircularProgress color="primary" /> 
                    </div>
                }
                <div className="flex flex-wrap justify-center items-start">
                    {notes.map((note) => (
                        <div className="notes-note" key={note.id}>
                            <div className={`note-number ${note.genre}`}>
                                <div className="text-3xl flex justify-between w-full absolute bottom-[-7px] left-0 px-[10px]">
                                    <span> Note no. </span>
                                    <span> {note.id} </span>
                                </div>
                            </div>
                            <div className="note-body text-[17px]">
                                <h1> {note.author} </h1>
                                <div className="note-story">
                                    {note.body}
                                </div>
                                <span onClick={() => setItem(note)}> read more </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center mt-[100px] notes-show-more">
                    {!isLoading && !isNextLoading && <p> showing {notes.length} items out of {totalRows} </p>}
                    {next && !isNextLoading && <button onClick={loadMoreNotes}> show more </button>}
                    {isNextLoading && <CircularProgress color="primary" />}
                </div>
            </div>
        </>
    );
}
 
export default Notes;