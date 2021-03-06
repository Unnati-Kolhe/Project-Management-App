import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks"

export const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Unnati Kolhe
        </Link>
        <SignedInLinks />
      </div>
    </nav>
  );
};

export default Navbar;