import React, { useState } from "react";
import Data from "../data/Data";
import { BrowserRouter , Routes , Route , NavLink } from "react-router-dom";

const Card = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredItems, setFilteredItems] = useState(Data);

  const filterItem = (catItem) => {
    if (catItem === "All") {
      setFilteredItems(Data);
    } else {
      const updateItem = Data.filter((currEle) => currEle.category === catItem);
      setFilteredItems(updateItem);
    }
  };

  return (
    <div>
      <div className="searchbar">
        <h1>Search Your Item Here</h1>
        <input
          type="text"
          placeholder="Enter here Search..."
          onChange={(event) => setSearchItem(event.target.value)}
        />
      </div>



      <div className="btns">


      <BrowserRouter>

     

        <NavLink to="All" className={(e)=>e.isActive ? "active" : ""}><button onClick={() => filterItem("All")}>All</button></NavLink>
        <button onClick={() => filterItem("nature")}>Nature</button>

        <button onClick={() => filterItem("phone")}>Phone</button>
        <button onClick={() => filterItem("animal")}>Animal</button>



        </BrowserRouter>
      </div>

      <div className="cards">
        {filteredItems
          .filter((val) => {
            if (searchItem === "") {
              return val;
            } else if (val.title.toLowerCase().includes(searchItem.toLowerCase())) {
              return val;
            }
            return null;
          })
          .map((item, index) => {
            const { image, title } = item;
            return (
              <div className="card" key={index}>
                <img src={image} alt={title} />
                <h2>{title}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
