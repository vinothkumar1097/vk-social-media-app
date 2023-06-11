import React, { useContext, useState } from "react";
import "../styles/newpost.css";
import api from "../api/posts";
import date from "date-and-time";
import uuid from "uuid-random";
import DataContext from "../context/DataContext";

const NewPost = () => {
  const { posts, setPosts, navigate } = useContext(DataContext);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const handleNewPost = async () => {
    if (!postTitle.trim() || !postDescription.trim()) return;
    try {
      const id = uuid();
      const newPost = {
        id,
        title: postTitle.trim(),
        description: postDescription.trim(),
        postedAt: date.format(new Date(), "DD MMM YYYY hh:mm:ss A"),
      };
      const response = await api.post("/posts", newPost);
      setPosts([...posts, response.data]);
      setPostTitle("");
      setPostDescription("");
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
    <section className="newpost">
      <form className="mx-2 mx-0" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="postTitle"
            placeholder="Enter Title"
            maxLength={250}
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="postDescription"
            rows="5"
            placeholder="Enter Description"
            maxLength={1000}
            required
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={handleNewPost}
        >
          Post
        </button>
      </form>
    </section>
  );
};

export default NewPost;
