import React from "react";
import "../assets/css/card.css";


const Card = ({title, description, alarm}) => {
  return (

    <div class="row">
      <div class="column">
        <div class="card">
  <h3>{title}</h3>
          <p className="nowrap-cms">
          {description}
          </p>
          <h4>Alarm: {alarm}</h4>
         {alarm > 0  &&
         
          <div className="sign"></div>
         } 
        </div>
      </div>
    </div>
  );
};

export default Card;
