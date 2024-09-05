import React from "react";

import Facebook from "../../assets/icon/icon-facebook.svg";
import Instagram from "../../assets/icon/icon-instagram.svg";
import Twitter from "../../assets/icon/icon-twitter.svg";
import Pinterest from "../../assets/icon/icon-pinterest.svg";
import Logo from "../../assets/icon/logo-green.svg";

import "./Footer.css";


export const Footer = () => {
  return (
    <div className="footer__content">
      <img className="logo" src={Logo}></img>
      <div className="resources">
        <p className="about">About</p>
        <p className="services">Services</p>
        <p className="projects">Projects</p>
      </div>
      <div className="contacts">
        <img className="facebook" src={Facebook}></img>
        <img className="instagram" src={Instagram}></img>
        <img className="twitter" src={Twitter}></img>
        <img className="pinterest" src={Pinterest}></img>
      </div>
    </div>
  )
}