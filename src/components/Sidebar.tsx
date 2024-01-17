"use client";
import React from "react";
import "../css/Sidebar.css";
import { RiHome7Line } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import Item from "./Item";
import dotenv from 'dotenv';
dotenv.config()

const items = [
  {
    name: "Twitter",
    href: "/Home",
    icon: FaTwitter,
  },
  {
    name: "Home",
    href: "/Home",
    icon: RiHome7Line,
  },
  {
    name: "Explore",
    href: "/Home",
    icon: IoSearchSharp,
  },
  {
    name: "Profile",
    href: "/Home",
    icon: FaRegUser,
  },
  {
    name: "Logout",
    href: "/Home",
    icon: CgMoreO,
    onclick: null,
  },
];

const Sidebar = () => {

  const handleLogout = async () => {
    const response = await fetch(`${process.env.HOST}api/user/logout`, {
      method: "POST",
      credentials: "include",
    });
    const message = await response.json();
    console.log(message.message);
    if (message.message === "Successfully Logged out") {
      window.location.href='/';
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="home-icon">
          <Item handlelogout={() => {}} item={items[0]} />
        </div>
        <div className="items">
          {items.map((element) => {
            return (
              element.name !== "Twitter" &&
              (element.name === "Logout" ? (
                <Item
                  key={element.name}
                  handlelogout={handleLogout}
                  item={element}
                />
              ) : (
                <Item
                  key={element.name}
                  handlelogout={() => {}}
                  item={element}
                />
              ))
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
