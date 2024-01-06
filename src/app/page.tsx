import Image from "next/image";
import styles from "./page.module.css";
import Post from "@/components/Post";
import PostItem from "@/components/PostItem";

export default function Home() {
  return (
    <div className="page">
      <Post/>
      <div className="page-content">
        <div className="posts">
          {
            <PostItem/>
          }
        </div>
      </div>
    </div>
  );
}
