import { React } from "react";
import "./Footer.css";
import Logo from "../../Imagenes/logo.svg";
import Facebook from "../../Imagenes/facebook.svg";
import Instagram from "../../Imagenes/instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="feedback">
        <p>Feedback</p>
        <p>Help</p>
        <p>FAQ</p>
      </div>

      <div className="logo2021">
        <img src={Logo} alt="Logo" />

        <h6>©2021 All rights reserved</h6>
      </div>

      <div className="follow">
        <p>FOLLOW ON</p>
        <img className="fb-logo" src={Facebook} alt="Logo Facebook" />
        <img className="ig-logo" src={Instagram} alt="Logo Instagram" />
      </div>
    </footer>
  );
};

export default Footer;
