'use client'
import Image from "next/image";
import styles from "../page.module.css";
import Post from "@/components/Post";
import PostItem from "@/components/PostItem";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
import Loading from "@/components/Loading";
dotenv.config();

export default function Home() {
  const [post, setPost] = useState([]);
  const [loading,setLoading]=useState(true);
  const [reloadTrigger, setReloadTrigger] = useState(false);

  useEffect(() => {
    fetch(`https://sweep-tweets-server.vercel.app/api/post/all-posts`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      },
      credentials: 'include'
    })
      .then((response) => response.json())
      .then(res=>setPost(res.data.reverse()));
      setLoading(false);
      setReloadTrigger(false);
  },[reloadTrigger]);
  return (
    
    <div className="page">
       <Post trigger={setReloadTrigger}/>
      <div className="page-content">
      {loading ?<Loading/>:
        (post && 
          post.map((element:any)=>{
            return(<div key={element._id} className="posts">
            <PostItem Post={element} />
            </div>)
          })
        )}
      </div>
    </div>
  );
}
