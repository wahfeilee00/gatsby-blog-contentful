import { Link } from "gatsby";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-bar">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/tags">tags</Link>
        <Link to="/recipes">recipes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
