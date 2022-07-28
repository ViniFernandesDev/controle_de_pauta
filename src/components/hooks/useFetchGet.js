import { useState, useEffect } from "react";

export const useFetchGet = (url) => {
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer 1|cG2r320AFPSo9zLb3v27JlKk82ZiJV18uk0mhPN5',
            }
        })
        .then(async (response) => {
            const json = await response.json();
            setValue(json);
            console.log(`Chamou ${url}`)
        })
        .catch((error) => {
            setError(error);
        })
    }, [url]);

    return { value, error };
};

