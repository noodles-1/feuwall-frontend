import { useEffect, useState } from "react";

const useFetch = (genre) => {
    const [notes, setNotes] = useState([])
    const [next, setNext] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [isNextLoading, setNextLoading] = useState(false)
    const [isConnected, setConnected] = useState(true)
    const [totalRows, setTotalRows] = useState(null)

    const loadMoreNotes = () => {
        setNextLoading(true)

        if (next) {
            const url = new URL(next)
            const params = new URLSearchParams(url.search)
            const page = params.get('page')

            fetch(`${import.meta.env.VITE_SERVER_URL}/get/${genre}/?page=${page}`)
                .then(response => response.json())
                .then(data => {
                    setNotes(prevNotes => [...prevNotes, ...data.results.data])
                    setNext(data.next)
                    setNextLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setNextLoading(true)
                })
        }
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/get/${genre}/`)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                setNotes(data.results.data)
                setNext(data.next)
                setLoading(false)
                setTotalRows(data.results.total_rows)
                setConnected(true)
            })
            .catch(err => {
                console.log(err)
                setLoading(true)
                setConnected(false)
            })
    }, [])

    return { notes, next, isLoading, isNextLoading, isConnected, totalRows, loadMoreNotes };
}
 
export default useFetch;