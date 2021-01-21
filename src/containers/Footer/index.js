import React from "react";
import SocialButtons from "../../components/SocialButtons/SocialButtons";
import "./Footer.css";
import logo from '../../resources/logoLight.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_content">
          <img
            src={logo}
            height={60}
            width={60}
            alt="logo"
            className="logo"
          />
          <div className="footer_social">
            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
