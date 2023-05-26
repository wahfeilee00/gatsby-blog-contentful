import React from "react";

export const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} <span>SimplyRecipes</span> Built with{" "}
        <a href="https://www.gatsbyjs.com/">GatsbyJS</a>
      </p>
    </footer>
  );
};
