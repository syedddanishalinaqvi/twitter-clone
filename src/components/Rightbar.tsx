import React from "react";
import FollowItem from "./FollowItem";
import "../css/RightBar.css";
import Link from "next/link";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="follow-block">
        <p>Who to follow</p>
        <div className="follow">
          <FollowItem />
        </div>
        <Link href="/">Show More</Link>
      </div>
    </div>
  );
};

export default Rightbar;
