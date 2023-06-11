import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/editpost.css";
import api from "../api/posts";
import date from "date-and-time";
import DataContext from "../context/DataContext";

const EditPost = () => {
  const { id } = useParams();
  const { posts, setPosts, navigate } = useContext(DataContext);
  const post = posts.find((post) => String(post.id) === id);

  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditDescription(post.description);
    }
  }, [post, setEditTitle, setEditDescription]);

  const handleEditPost = async (id) => {
    if (!editTitle.trim() || !editDescription.trim()) return;
    try {
      const updatedPost = {
        id,
        title: editTitle.trim(),
        description: editDescription.trim(),
        postedAt: date.format(new Date(), "DD MMM YYYY hh:mm:ss A"),
      };
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map((post) => (post.id === id ? response.data : post)));
      setEditTitle("");
      setEditDescription("");
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
    <section className="editpost">
      {post && (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="editTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="editTitle"
              placeholder="Enter Title"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="editDescription" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="editDescription"
              rows="5"
              placeholder="Enter Description"
              maxLength={1000}
              required
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={() => handleEditPost(post.id)}
          >
            Update Post
          </button>
        </form>
      )}
      {!post && <p className="text-center">Sorry! Post not found.</p>}
    </section>
  );
};

export default EditPost;
