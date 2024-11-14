import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Import custom styles for 404 page

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-code">404</h1>
      <p className="not-found-text">Page Not Found</p>
      <Link to="/" className="not-found-home-button">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
