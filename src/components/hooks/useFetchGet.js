import { useState, useEffect } from "react";

export const useFetchGet = (url) => {
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer 1|IJFQxgiW1FjB3853dBxy5WDxKVMzHAcNGy7kPk7S',
            }
        })
        .then(async (response) => {
            const json = await response.json();
            setValue(json);
        })
        .catch((error) => {
            setError(error);
        })
    }, [url]);

    return { value, error };
};

