import React from "react";
import "../css/PostItem.css";
import Image from "next/image";
import dp from "../assets/dp.jpeg";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import Link from "next/link";

const items = [
  {
    name: "Like",
    icon: FaRegHeart,
    onclick: "",
  },
  {
    name: "Comment",
    icon: FaRegComment,
    onclick: "",
  },
  {
    name: "Bookmark",
    icon: FaRegBookmark,
    onclick: "",
  },
];

const PostItem = () => {
  return (
    <Link href="/">
      <div className="postitem">
        <div className="postitem-contents">
          <div className="postitem-content">
            <div className="postitem-dp">
              <Image src={dp} height={40} width={40} alt="dp"></Image>
            </div>
            <div className="postitem-data">
              <div className="name-account">
                <p>
                  <b>Name</b>
                </p>
                <p>@account</p>
              </div>
              <div className="data">
                <p>
                  I think this app looks amazing i should start working more on
                  this app. Still it looks like it willl not work
                </p>
              </div>
            </div>
          </div>
          <div className="postitem-buttons">
              {items.map((element) => {
                return (
                  <div key={element.name} title={element.name}>
                    <element.icon />
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
