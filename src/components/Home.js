import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Loader from "./Loader";
import DataContext from "../context/DataContext";

const Home = () => {
  const {
    searchResults: posts,
    postFetchError: fetchError,
    postIsLoading: isLoading,
  } = useContext(DataContext);
  const MAX_DESC_LENGTH = 50;
  return (
    <section className="home px-3">
      {isLoading && <Loader text="Loading Posts..." />}
      {!isLoading && fetchError && <p className="text-danger">{fetchError}</p>}
      {!isLoading &&
        !fetchError &&
        (posts && posts.length ? (
          <ul>
            {posts.map((item) => (
              <li key={item.id}>
                <Link to={`/posts/${item.id}`}>
                  <span className="title">{item.title}</span>
                </Link>
                <span className="description">
                  {item.description.length > MAX_DESC_LENGTH
                    ? item.description.slice(0, MAX_DESC_LENGTH).concat("...")
                    : item.description}
                </span>
                <span className="time">{item.postedAt}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center">
            <p>Sorry! No Posts Found.</p>
            <p>
              <Link to="/posts">Add Post now</Link>
            </p>
          </div>
        ))}
    </section>
  );
};

export default Home;
