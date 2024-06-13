
import "./Sidebar.css"
import React from 'react'
import { TfiShoppingCart } from "react-icons/tfi";
import Category from "./Category/Category";
import Price from "./price/Price"
import Colors from "./Category/colors/Colors"

const Sidebar = () => {
  return (
    
    <section className="sidebar">
        <div className="logo-container">
            <h1><TfiShoppingCart/></h1>
        </div>

        <Category/>
        <Price/>
        <Colors/>
    </section>
  )
}

export default Sidebar
