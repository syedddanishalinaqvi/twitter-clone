import React, { useState } from "react";
import "../css/PostItem.css";
import Image from "next/image";
import dp from "../assets/dp.jpeg";
// import { FaRegHeart } from "react-icons/fa";
// import { FaRegComment } from "react-icons/fa";
// import { FaRegBookmark } from "react-icons/fa";
import Link from "next/link";

// const items = [
//   {
//     name: "Like",
//     icon: FaRegHeart,
//     onclick: "",
//     count:null,
//   },
//   {
//     name: "Comment",
//     icon: FaRegComment,
//     onclick: "",
//     count:0,
//   },
//   {
//     name: "Bookmark",
//     icon: FaRegBookmark,
//     onclick: "",
//     count:0,
//   },
// ];
interface User {
  _id: string;
  username: string;
  name: string;
  avatar: string;
}

interface PostItemProps {
  Post: {
    _id: string;
    data: string;
    likes: number;
    image: string;
    commentsCount: number;
    user: User;
  };
}

const PostItem = ({ Post }: PostItemProps) => {
  return (
    <Link href="/">
      <div className="postitem">
        <div className="postitem-contents">
          <div className="postitem-content">
            <div className="postitem-dp">
              <Image
                src={Post.user.avatar}
                height={40}
                width={40}
                alt="dp"
              ></Image>
            </div>
            <div className="postitem-data">
              <div className="name-account">
                <p>
                  <b>{Post.user.name}</b>
                </p>
                <p>@{Post.user.username}</p>
              </div>
              <div className="data">
                <p>{Post.data}</p>
                <br/>
                {Post.image&&<Image src={Post.image} height={300} width={300} alt="dp" style={{ objectFit: 'cover' }}/>}
              </div>
            </div>
          </div>
          {/* <div className="postitem-buttons">
            {items.map((element) => {
              return (
                <div key={element.name} title={element.name}>
                  <element.icon />{element.count=Post.likes}
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
