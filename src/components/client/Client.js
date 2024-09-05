import React from "react"

import Emily from "../../assets/img/desktop/image-emily.jpg";
import Thomas from "../../assets/img/desktop/image-thomas.jpg";
import Jennie from "../../assets/img/desktop/image-jennie.jpg";

import "./Client.scss";

export const Client = () => {
  return (
    <div className="client__content">
      <p className="title">Client testimonials</p>
      <div className="client">
        <div className="emily">
          <img className="portrait" src={Emily}></img>
          <p className="text">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
          <p className="name">Emily R.</p>
          <p className="account">Marketing Director</p>
        </div>
        <div className="thomas">
          <img className="portrait" src={Thomas}></img>
          <p className="text">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
          <p className="name">Thomas S.</p>
          <p className="account">Chief Operating Officer</p>
        </div>
        <div className="jennie">
          <img className="portrait" src={Jennie}></img>
          <p className="text">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
          <p className="name">Jennie F.</p>
          <p className="account">Business Owner</p>
        </div>
      </div>
    </div>
  )
}