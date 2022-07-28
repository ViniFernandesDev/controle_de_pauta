import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method);
        };

        if(method === "GET") {
            setConfig({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 1|cG2r320AFPSo9zLb3v27JlKk82ZiJV18uk0mhPN5',
                }
            });

            setMethod(method);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const json = await res.json() 
            setData(json);
        };

        fetchData();
    }, [url, callFetch]); // callFetch -> Sempre que alterar o fetch é chamado novamente.


    useEffect(() => {
        const httpRequest = async () => {
            if(method === "POST") {
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                const json = await res.json()

                setCallFetch(json);   
            }

            if(method === "GET") {
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                const json = await res.json()

                setCallFetch(json);   
            }
        };

        httpRequest();
    }, [config, method, url]); //

    return { data, httpConfig };
};