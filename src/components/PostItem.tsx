import React from "react";

const PostItem = () => {
  return (
    <div className="postitem">
      <div className="postitem-content">
        <div className="postitem-dp"></div>
        <div className="postitem-data">
          <div className="name-account">
            <p>Name</p>
            <p>@account</p>
          </div>
          <div className="data"></div>
          <div className="postitem-buttons"></div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
