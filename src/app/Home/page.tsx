'use client'
import Image from "next/image";
import styles from "../page.module.css";
import Post from "@/components/Post";
import PostItem from "@/components/PostItem";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();

export default function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const newPost=async()=>await fetch('http://localhost:4000/api/post/all-posts',{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      },
      credentials: 'include'
    })
      .then((response) => response.json())
      .then(res=>setPost(res.data));

      const intervalId = setInterval(newPost, 5000); 
      
      return () => clearInterval(intervalId);
  });
  return (
    <div className="page">
      <Post/>
      <div className="page-content">
        {post && 
          post.map((element:any)=>{
            return(<div key={element._id} className="posts">
            <PostItem Post={element} />
            </div>)
          })
        }
      </div>
    </div>
  );
}
