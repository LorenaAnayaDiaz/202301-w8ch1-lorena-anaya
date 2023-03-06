import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="page-error">
      <h1 className="title">Error 404</h1>
      <p className="text">Looks like you got lost on the dark side</p>
      <img
        className="image"
        src="/assets/images/not-found.png"
        alt="page error 404"
      />
      <Link className="text" data-testid="link" to={"/"}>
        Go home
      </Link>{" "}
    </div>
  );
};

export default NotFound;
