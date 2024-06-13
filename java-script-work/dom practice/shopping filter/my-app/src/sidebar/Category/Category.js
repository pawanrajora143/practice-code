

import "./Category.css"

import React from 'react'

const Category = () => {
  return (
    <>
    <div>
    <h2 className="sidebar-title">Category</h2>

    <div>
        <lable className="sidebar-label-container">
            <input type="radio" name="test"/>
            <span className="checkmark"></span>All
        </lable>
        <lable className="sidebar-label-container">
            <input type="radio" name="test"/>
            <span className="checkmark"></span>Sneakers
        </lable>
        <lable className="sidebar-label-container">
            <input type="radio" name="test"/>
            <span className="checkmark"></span>Flats
        </lable>
        <lable className="sidebar-label-container">
            <input type="radio" name="test"/>
            <span className="checkmark"></span>Sandels
        </lable>
        <lable className="sidebar-label-container">
            <input type="radio" name="test"/>
            <span className="checkmark"></span>Heals
        </lable>
      
    </div>
    </div>
    </>
  )
}

export default Category
