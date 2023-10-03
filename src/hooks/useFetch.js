import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {

            setIsLoading(true)

            try {
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const json = await response.json()
                
                setIsLoading(false)

                setData(json)
                setError(null)
            } catch (err) {
                setIsLoading(false)
                setError(err.message)
            }
        }

        fetchData()
    }, [url])

    return {data, isLoading, error}
}