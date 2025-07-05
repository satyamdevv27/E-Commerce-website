import { useState } from "react";
import "../styles/header.css";
import { NavLink } from "react-router";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  const [isopen, setisopen] = useState(false);

  const handleclick = () => {
    setisopen(!isopen);
    console.log(isopen);
  };

  return (
    <>
      <div className="header">
        <div className="wrap-header">
          <div className="logo">
            <h1 onClick={()=>(navigate("/"))}>store</h1>
          </div>
          <nav className={isopen ? "menumobile" : ""}>
            <ul>
              <NavLink to="/">
                <li>home</li>
              </NavLink>
              <NavLink to="/product">
                <li>products</li>
              </NavLink>
              <NavLink to="/contact">
                <li>contacts us</li>
              </NavLink>
              <NavLink to="/cart">
                <li>cart</li>
              </NavLink>
            </ul>
          </nav>
          <div className="menu" onClick={handleclick}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
