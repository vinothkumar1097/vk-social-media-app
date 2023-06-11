import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/postlayout.css";

const PostLayout = () => {
  return (
    <>
      <div className="postlayout px-3">
        <Link to="/">
        <i className="fa-solid fa-house"></i>&nbsp;&nbsp;Goto Homepage
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default PostLayout;
