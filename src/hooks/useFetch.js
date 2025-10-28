import { useEffect, useState } from "react";

function useFetch(url, method = "GET") {
    // console.log(status);
    let [data, setData] = useState(null);
    let [postData, setPostData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);

    useEffect(() => {

        let abortController = new AbortController();
        let signal = abortController.signal;

        setLoading(true);

        if (method === "POST") {
            if (postData) console.log(postData);
        }

        fetch(url, {
            signal,
            method
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('Something went wrong');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(e => {
                setError(e.message);
                setLoading(false);
            })
            return () => {
                abortController.abort();
            }
            
        }, [url, postData]);
        
    return { setPostData, data , loading, error };

}

export default useFetch;