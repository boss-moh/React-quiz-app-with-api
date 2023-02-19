import { useEffect, useState } from "react";

export const useFetch = (url) => {
  let [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setError(false);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
    console.log(data);
  }, [url]);

  return [loading, error, data];
};

export default useFetch;
