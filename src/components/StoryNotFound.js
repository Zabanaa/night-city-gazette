import React from "react";

const ProfileNotFound = () => {
  return (
    <main className="profileNotFound container">
      <div className="page-content">
        <h2 className="error__heading">エラー</h2>
        <p>
          The story you're looking for either does not exist or has been
          removed.
        </p>
        <p>
          Perhaps you copied the link wrong ? (Doesn't hurt to double check)
          <i style={{ marginLeft: "8px" }} className="em-svg em-wink"></i>
        </p>
      </div>
    </main>
  );
};

export default ProfileNotFound;
