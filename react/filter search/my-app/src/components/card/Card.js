import React, { useState } from "react";
import Data from "../data/Data";

const Card = () => {
  const [searchItem, setSearchItem] = useState("");

  // console.log(searchItem)

  return (
    <div>
      <div className="searchbar">
        <h1>Search Your Item Here</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter here Search..."
          onChange={(event) => setSearchItem(event.target.value)}
        />
      </div>

      <div className="cards">
        

        {/* {Data.map((item, index) => {
          const { image, title, category } = item;

          return (
            <div className="card">
              <img src={image} alt="" />
              <h2>{title}</h2>
            </div>
          );
        })
        
        
        
        } */}




        {
        
        Data.filter((val) => {
          if (searchItem === "") {
            return val;
          } else if(val.title.toLowerCase().includes(searchItem.toLowerCase())){

            return val;
          }
          

        })

        .map((item, index) => {
            const { image, title, category } = item;
  
            return (
              <div className="card">
                <img src={image} alt="" />
                <h2>{title}</h2>
              </div>
            );
          })
        
        
        
        }



      </div>
    </div>
  );
};

export default Card;
