import React from "react";

const Loading = () => {
  return (
    <React.Fragment>
      <main className="loader container">
        <div className="page-content">
          <span>
            Loading...
            <i className="em-svg em-face_with_monocle"></i>
          </span>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Loading;
