import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="notFound container">
    <div className="notFound__content page-content">
      <h2 className="error__heading">エラー</h2>
      <p>
        Oops, Looks like you've lost your way ! There's nothing to see in this
        corner of the internet unfortunately.{" "}
        <i className="em em-disappointed"></i>
      </p>

      <p>
        How about a ride
        <Link to="/"> back home ?</Link>
      </p>
    </div>
  </main>
);

export default NotFound;
