
import "./Nav.css"
import React from 'react'
import { FiHeart} from "react-icons/fi"
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";



const Nav = () => {
  return (
   <nav>
    <div>
        <input type="text" className="Search-input" placeholder="Serach Your Shoes Here"/>
    </div>


    <div className="profile-container">
        <a href=""><FiHeart className="nav-icons"/></a>
        <a href=""><CiShoppingCart className="nav-icons"/></a>
        <a href=""><AiOutlineUserAdd className="nav-icons"/></a>
    </div>

   </nav>
  )
}

export default Nav
