import { useEffect, useRef, useState } from "react";

function useFetch(url,_options) {
  let [data, setData] = useState(null);

  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);   

  let options = useRef(_options).current;

  useEffect(() => {
    console.log(options) // object
    let abortController = new AbortController();
    let signal = abortController.signal;


    setLoading(true);
    fetch(url, { signal })
      .then((res) => {
        //throw error
        if (!res.ok) {
          throw Error("something went wrong!");
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setError("");
        setLoading(false);
        setData(data);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
        setError(e.message);
      });

    //clean up function
    return () => {
        console.log("clean up function ");
        abortController.abort()
    };
  }, [url,options]);
  return { data, loading, error };
}
export default useFetch;
