"use client";
import React, { useEffect, useState } from "react";
import "../css/Post.css";
import Image from "next/image";
import dp from "../assets/dp.jpeg";
import { CiImageOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import dotenv from 'dotenv';
dotenv.config()

interface User{
  avatar:string,
}

const Post = ({trigger}:any) => {
  const [text, setText] = useState("");
  const [avatar, setAvatar] = useState("");
  const [user,setUser]=useState<User>({avatar:""});

  const handleInputChange = (event: any) => {
    setText(event.target.value);
  };
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file){
      setAvatar(file);
    }
  };
  const deselectImage = () => {
    setAvatar("");
  };

  const calculateTextareaHeight = (event: any) => {
    const textarea = event.target as HTMLTextAreaElement;
    const lineHeight = 20;
    const minHeight = 60;
    const newHeight = Math.max(minHeight, textarea.scrollHeight - lineHeight);
    textarea.style.height = `${newHeight}px`;
  };
  const handlePost = async (e: any) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata?.append("data", text);
    formdata?.append("image", avatar);
    await fetch(`https://sweep-tweets-server.vercel.app/api/post/add-post`, {
      method: "POST",
      credentials: "include",
      body: formdata,
    });
    setText("");
    setAvatar("");
    trigger(true);
  };
  useEffect(()=>{
    fetch(`https://sweep-tweets-server.vercel.app/api/user/get-user`, {
      method: "GET",
      credentials: "include",
    }).then(res=>res.json())
    .then(newRes=>setUser(newRes.data));
  },[])

  return (
    <div className="post">
      <div className="post-dp">
        <a>
          <Image src={user.avatar} height={50} width={50} style={{ objectFit: 'cover' }} alt="dp" />
        </a>
      </div>
      <div className="post-content">
        <div className="text-area">
          <textarea
            id="postarea"
            onInput={calculateTextareaHeight}
            onChange={(event) => {
              handleInputChange(event);
            }}
            value={text}
            placeholder="Enter you text"
          />
        </div>
        <div className="post-buttons">
          <div className="add-buttons">
            <input
              id="image"
              onChange={(event) => {
                handleImageChange(event);
              }}
              style={{ display: "none" }}
              type="file"
              accept="image/*"
            />
            <label htmlFor="image" title="Add image">
              <CiImageOn />
            </label>
          </div>
          {avatar.length===0?0:1}&ensp;Files
          <div className="deselect-image" onClick={deselectImage}><IoClose/></div>
          <div className="post-button">
            <button onClick={(e) => handlePost(e)}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
