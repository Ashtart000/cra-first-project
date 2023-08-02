import { useState, useEffect } from "react";


export function useData(loadData) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadData()
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return {data, isLoading, error}

}