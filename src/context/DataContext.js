import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useScreenSize from "../hooks/useScreenSize";
import useAxiosFetch from "../hooks/useAxiosFetch";

// initialize context
const DataContext = createContext({});

// wrapper for context provider
export const DataProvider = ({ children }) => {
  const BASE_URL = `http://localhost:3500`;
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { width } = useScreenSize();
  const [postData, postFetchError, postIsLoading] = useAxiosFetch(
    BASE_URL.concat("/posts")
  );

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get("/posts");
  //       setPosts(response.data);
  //     } catch (error) {
  //       if (error.response) {
  //         const { status, headers, data } = error.response;
  //         console.log(status);
  //         console.log(headers);
  //         console.log(data);
  //       } else {
  //         console.log(`Error: ${error.message}`);
  //       }
  //     }
  //   };
  //   fetchPosts();
  //   return () => {
  //     console.log("cleanup");
  //   };
  // }, []);

  useEffect(() => {
    setPosts(postData);
  }, [postData]);
  useEffect(() => {
    if (posts.length) {
      const filteredPosts = posts.filter(
        ({ title, description }) =>
          title.toLowerCase().includes(searchInput.trim()) ||
          description.toLowerCase().includes(searchInput.trim())
      );
      setSearchResults(filteredPosts.sort((a,b) => new Date(b.postedAt) - new Date(a.postedAt)));
    }
  }, [posts, searchInput]);

  return (
    <DataContext.Provider
      value={{
        searchInput,
        setSearchInput,
        searchResults,
        postFetchError,
        postIsLoading,
        posts,
        setPosts,
        width,
        navigate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
