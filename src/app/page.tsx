import Image from "next/image";
import styles from "./page.module.css";
import Post from "@/components/Post";
import PostItem from "@/components/PostItem";
import Login from "@/components/Login";

export default function Home() {
  return (
    <div className="page">
      <Login/>
    </div>
  );
}
