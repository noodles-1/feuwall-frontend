import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [author, setAuthor] = useState('')
    const [course, setCourse] = useState('')
    const [body, setBody] = useState('')
    const [count, setCount] = useState(0)
    const [genre, setGenre] = useState('')
    const [isLoading, setLoading] = useState(false)

    const isComplete = author && course && body && genre;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { author, course, body, genre }
        setLoading(true)

        fetch(`${import.meta.env.VITE_SERVER_URL}/post/`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                setLoading(false)
                navigate('/home')
            })
    }
    
    const handleBody = (e) => {
        let trimmed = e.target.value.trim()
        const wordCount = trimmed === '' ? 0 : trimmed.split(/\s+/).length
        if (wordCount <= 120) {
            setBody(e.target.value)
            setCount(wordCount)
        }
    }

    const handleRadio = (e) => {
        setGenre(e.target.value)
    }

    return (
        <>
            <div className="submit-story">
                <div className="submit-header">
                    <h1 className="text-3xl"> Submit your note </h1>
                    <p> Share a story by filling out the form </p>
                </div>
                <div className="submit-body text-[18px]">
                    <form onSubmit={handleSubmit}>
                        <span> I'd like to be called </span>
                        <input 
                            type="text"
                            required
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="NAME OR ANON"
                            className="text-[16px]"
                        />
                        <span> . I am a </span>
                        <input 
                            type="text"
                            required
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            placeholder="PROGRAM OR COURSE"
                            className="text-[16px]"
                        />
                        <span> student and this note is about: </span>
                        <br />
                        <p 
                            className={`submit-wordcount text-[16px] ${count == 120 ? 'submit-wordcount-max' : ''}`}
                        > ({count} / 120 words) </p>
                        <textarea 
                            required
                            value={body}
                            onChange={handleBody}
                            placeholder="YOUR STORY GOES HERE"
                            className="text-[16px]"
                        />
                        <p className="mt-[20px] font-semibold submit-genre-desc"> Your story falls under: </p>
                        <div className="submit-genre text-[16px] font-semibold">
                            <label 
                                className={`submit-radio ${genre === 'romantic' ? 'romantic' : ''}`}
                                id='romantic'
                            >
                                <input 
                                    type="radio"
                                    value="romantic"
                                    checked={genre === 'romantic'}
                                    onChange={handleRadio}
                                />
                                Romantic
                            </label>
                            <label 
                                className={`submit-radio ${genre === 'platonic' ? 'platonic' : ''}`}
                                id='platonic'
                            >
                                <input 
                                    type="radio"
                                    value="platonic"
                                    checked={genre === 'platonic'}
                                    onChange={handleRadio}
                                />
                                Platonic
                            </label>
                            <label 
                                className={`submit-radio ${genre === 'senti' ? 'senti' : ''}`}
                                id='senti'
                            >
                                <input 
                                    type="radio"
                                    value="senti"
                                    checked={genre === 'senti'}
                                    onChange={handleRadio}
                                />
                                Sentimental
                            </label>
                            <label 
                                className={`submit-radio ${genre === 'random' ? 'random' : ''}`}
                                id='random'
                            >
                                <input 
                                    type="radio"
                                    value="random"
                                    checked={genre === 'random'}
                                    onChange={handleRadio}
                                />
                                Random
                            </label>
                        </div>
                        <div className="flex justify-end mt-[20px]">
                            {!isLoading && 
                                <button 
                                    disabled={!isComplete}
                                    className={`${!isComplete ? 'submit-btn-disabled' : 'submit-btn'}`}
                                > 
                                    Submit 
                                </button>
                            }
                            {isLoading && <span> loading... </span>}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default Create;