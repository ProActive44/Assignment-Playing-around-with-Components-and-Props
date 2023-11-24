import React from "react";
import './Body.css'

const Body = ({ imageData }) => {
  return (
    <div>
      {imageData.map((image) => {
        return (
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
