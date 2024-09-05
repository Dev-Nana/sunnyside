import React from "react";

import Milk from "../../assets/img/desktop/image-gallery-milkbottles.jpg";
import Orange from "../../assets/img/desktop/image-gallery-orange.jpg";
import Cone from "../../assets/img/desktop/image-gallery-cone.jpg";
import Sugar from "../../assets/img/desktop/image-gallery-sugarcubes.jpg";

import "./Photos.scss";

export const Photos = () => {
  return (
    <div className="photos__content">
      <div className="column1">
        <img className="milk" src={Milk}></img>
        <img className="orange" src={Orange}></img>
      </div>
      <div className="column2">
        <img className="cone" src={Cone}></img>
        <img className="sugar" src={Sugar}></img>
      </div>
    </div>
  )
}