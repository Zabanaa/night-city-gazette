import React from "react";

const Error = () => {
  return (
    <main className="error container">
      <div className="error__content page-content">
        <h2 className="error__heading">エラー</h2>
        <p>
          Looks like we are having trouble reaching out to the HN API.
          <i className="em em-thinking_face"></i>
        </p>
        <p>
          It could be your internet connection or perhaps the API is down ...
          Please try again in a few moments.
        </p>
        <p>
          {" "}
          If the problem still persists please{" "}
          <a href="mailto:karim.cheurfi@gmail.com">give us a shout</a> so we can
          investigate and fix the issue.
        </p>
        <p>
          Cheers !<i className="em em-smile"></i>
        </p>
      </div>
    </main>
  );
};

export default Error;
