
import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { IoBagHandle } from "react-icons/io5";

const Card = () => {
  return (
   

   
    <section className="card">
      <img
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        className="card-img"
        alt=""
      />

      <div className="card-details">
        <h3 className="card-title">Shoes</h3>
        <section className="card-reviews">
          <AiFillStar className="rating-star" />{" "}
          <AiFillStar className="rating-star" />{" "}
          <AiFillStar className="rating-star" />{" "}
          <AiFillStar className="rating-star" />
          <span className="total-reviews">4</span>
        </section>

        <section className="card-price">
          <div className="price">
            <del>$300</del>200
          </div>

          <div className="bag"></div>
          <IoBagHandle className="bag-icon" />
        </section>
      </div>
    </section>
    


      




  )
}

export default Card
