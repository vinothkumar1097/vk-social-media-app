import React from "react";
import { Link } from "react-router-dom";
import "../styles/navlinks.css";

const NavLinks = () => {
  return (
    <ul className="navlinks">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
