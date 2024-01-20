"use client";
import React, { useState } from "react";
import "../css/Login.css";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import dotenv from 'dotenv';
dotenv.config()

const Login = () => {
  const router=useRouter();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState({
    show: false,
    content: "Show",
    type: "password",
  });
  const [credential, setCredential] = useState({
    username: "",
    password: "",
  });
  const showPassword = (e: any): void => {
    e.preventDefault();
    if (password.show === false) {
      setPassword({ show: true, content: "Hide", type: "text" });
    } else {
      setPassword({ show: false, content: "Show", type: "password" });
    }
  };
  const changeData = (e: any) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
};
  const handleData=async(e:any)=>{
    e.preventDefault();
    setLoading(true);
    const response=await fetch(`https://sweep-tweets-server.vercel.app/api/user/login`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      credentials:'include',
      body:JSON.stringify(credential),
    })
    setLoading(false);
    const responseData=await response.json();
    alert(responseData?.message);
    if(responseData.message==="Logged In successfull"){
      setLoading(true);
      router.push('/Home')
    }
  }
  return (
    loading?(<Loading/>):
    (
    <div className="login">
      <div className="login-image">
        <FaTwitter />
      </div>
      <div className="login-content">
        <p>
          <b>Log In</b>
        </p>
        <div className="login-data">
          <label>Username</label>
          <input onChange={(e)=>changeData(e)} name="username" type="text" required />
          <div className="login-password">
            <label>Password</label>
            <input onChange={(e)=>changeData(e)} name="password" type={password.type} required />
            <div
              onClick={(e) => {
                showPassword(e);
              }}
            >
              {password.content}
            </div>
          </div>
          <div className="login-buttons">
            <div className="login-button">
              <button onClick={handleData}>login</button>
            </div>
            <div className="login-button">
              <button>
                <Link href="/signup">Signup</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  );
};

export default Login;
