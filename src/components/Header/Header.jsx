import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav className="nav-link">
      <Link to="/">Home</Link>
      <Link to="/friends">Friends</Link>
      <Link to="posts">Posts</Link>

      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Header;
