"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "../css/Post.css";
import Image from "next/image";
import dp from "../assets/dp.jpeg";
import { CiImageOn } from "react-icons/ci";
import { PiSmileySticker } from "react-icons/pi";
import Link from "next/link";

const items=[
    {
        name:"Add image",
        icon:CiImageOn,
        onClick:"onclick",
    },
    {
        name:"Sticker",
        icon:PiSmileySticker,
        onClick:"onclick",
    },
]

const Post = () => {
  const [text, setText] = useState("");

  const handleInputChange = (event: any) => {
    setText(event.target.value);
  };

  const calculateTextareaHeight = (event: any) => {
    const textarea = event.target as HTMLTextAreaElement;
    const lineHeight = 20;
    const minHeight = 60;
    const newHeight = Math.max(minHeight, textarea.scrollHeight - lineHeight);
    textarea.style.height = `${newHeight}px`;
  };
const handlePost =async(e:any)=>{
  e.preventDefault();
  await fetch('http://localhost:4000/api/post/add-post',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    credentials:'include',
    body:JSON.stringify({data:text})
  })
  setText("");
}

  return (
    <div className="post">
      <div className="post-dp">
        <Link href="/"><Image src={dp} height={50} width={50} alt="dp" /></Link>
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
            {
                items.map((element)=>{
                    return(<div  key={element.name} title={element.name}><element.icon/></div>)
                })
            }
          </div>
          <div className="post-button">
            <button onClick={(e)=>handlePost(e)}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
