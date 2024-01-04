'use client'
import React from 'react'
import '../css/Sidebar.css'
import { RiHome7Line } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { LuMessageSquare } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import Item from './Item';
import Image from 'next/image';

const items=[
  {
    name:"Twitter",
    href:"/",
    icon:FaTwitter
  },
  {
    name:"Home",
    href:"/",
    icon:RiHome7Line
  },
  {
    name:"Explore",
    href:"/",
    icon:IoSearchSharp
  },
  {
    name:"Notification",
    href:"/",
    icon:GoBell
  },
  {
    name:"Messages",
    href:"/",
    icon:LuMessageSquare
  },
  {
    name:"Profile",
    href:"/",
    icon:FaRegUser
  },
  {
    name:"More",
    href:"/",
    icon:CgMoreO
  },
]

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
      <div className="home-icon">
        <Item item={items[0]}/>
      </div>
      <div className="items">
        {
          items.map((element)=>{
            return(element.name!=='Twitter'&&<Item key={element.name} item={element}/>)
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Sidebar

