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

        let options = {
            signal,
            method,
        };

        function fetchData() {
            fetch(url, options)
                .then((res) => {
                    if (!res.ok) {
                        throw Error("Something went wrong");
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setLoading(false);
                })
                .catch((e) => {
                    setError(e.message);
                    setLoading(false);
                });
        }

        // if method is post and postData is actually existed,
        if (method === "POST" && postData) {
            options = {
                ...options,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            };

            fetchData();
        }

        // if method is get, just fetch data
        if (method === "GET") {
            fetchData();
        }

        return () => {
            abortController.abort();
        };
    }, [url, postData]);

    return { setPostData, data, loading, error };
}

export default useFetch;
