import React from "react";

const ProfileNotFound = () => {
  return (
    <main className="profileNotFound container">
      <div className="page-content">
        <h2 className="error__heading">エラー</h2>
        <p>After much digging, we could not find this profile.</p>
        <p>
          Sorry 'bout that. <i className="em em-disappointed"></i>
        </p>
      </div>
    </main>
  );
};

export default ProfileNotFound;
