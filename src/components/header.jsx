import { useState } from "react"
import "../styles/header.css"
import {NavLink } from "react-router";

function Header () {
const [isopen , setisopen]= useState(false)

  const handleclick = ()=>{
   setisopen(!isopen)
   console.log(isopen);
   
  }

  

  return (

      <>
      <div className="header">
       <div className="wrap-header">
         <div className="logo"><h1>store</h1></div>
        <nav className={isopen ? "menumobile" : ""}>
          <ul>
            <NavLink to="#"><li>home</li></NavLink>
            <li>products</li>
            <li>contacts us</li>
            <li>complaint</li>
          </ul>
        </nav>
        <div className="menu" onClick={handleclick}>
          <i className="fa-solid fa-bars"></i>
        </div>
       </div>
      </div>
      </>

  )
}

export default Header;
