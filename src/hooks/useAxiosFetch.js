import { useEffect, useState } from "react";
import axios from "axios";

const useAxiosFetch = (dataURL) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // mount
    const controller = new AbortController();
    let isMounted = true;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(dataURL, {
          timeout: 5000,
          timeoutErrorMessage:
            "Taking too long than usual. Please reload the app.",
          signal: controller.signal, // handle network failure from client
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (error) {
        if (isMounted) {
          setFetchError(error.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    fetchData();

    const cleanup = () => {
      // unmount
      if (isMounted) {
        // console.log("cleanup");
        isMounted = false;
        controller.abort();
      }
    };
    return cleanup;
  }, [dataURL]);
  return [data, fetchError, isLoading];
};
export default useAxiosFetch;
