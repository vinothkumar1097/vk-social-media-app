import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/post.css";
import api from "../api/posts";
import DataContext from "../context/DataContext";

const Post = () => {
  const { id } = useParams();
  const { posts, setPosts, navigate } = useContext(DataContext);
  const post = posts.find((post) => String(post.id) === id);
  const handleDeletePost = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
      navigate("/");
    } catch (error) {
      if (error.response) {
        const { status, headers, data } = error.response;
        console.log(status);
        console.log(headers);
        console.log(data);
      } else {
        console.log(`Error: ${error.message}`);
      }
    }
  };
  return (
    <section className="post px-3 flex-column">
      {post && (
        <>
          <span className="mb-0 h5 title">{post.title}</span>
          <small className="time">{post.postedAt}</small>
          <p className="mt-4 description">{post.description}</p>
          <div>
            <Link to={`/posts/edit/${id}`}>
              <button className="btn btn-primary me-2">Edit Post</button>
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => handleDeletePost(post.id)}
            >
              Delete Post
            </button>
          </div>
        </>
      )}
      {!post && <p className="text-center">Sorry! Post not found.</p>}
    </section>
  );
};

export default Post;
