import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
       Google Books
      </a>
      <a className="navbar-brand" href="books/saved">
       Saved Books
      </a>
    </nav>
  );
}

export default Nav;
