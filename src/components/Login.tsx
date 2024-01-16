"use client";
import React, { useState } from "react";
import "../css/Login.css";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router=useRouter();
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
    console.log(credential);
    const response=await fetch('http://localhost:4000/api/user/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      credentials:'include',
      body:JSON.stringify(credential),
    })
    const responseData=await response.json();
    console.log(responseData)
    alert(responseData?.message);
    if(responseData.message==="Logged In successfull"){
      router.push('/Home')
    }
  }
  return (
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
          <input onChange={(e)=>changeData(e)} name="username" type="text" />
          <div className="login-password">
            <label>Password</label>
            <input onChange={(e)=>changeData(e)} name="password" type={password.type} />
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
  );
};

export default Login;