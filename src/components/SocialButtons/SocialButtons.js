import React from "react";
import { ReactComponent as Github } from "../../resources/github.svg";
import { ReactComponent as Whatsapp } from "../../resources/whatsapp.svg";
import "./SocialButtons.css";
const SocialButtons = () => {
  return (
    <>
      <div className="social_icon" onClick={() => window.open("https://github.com/lazarid")}>
        <Github className="i"/>
      </div>
      <div className="social_icon" onClick={() => window.open("https://wa.me/972548370965")}>
        <Whatsapp className="i"/>
      </div>
    </>
  );
};

export default SocialButtons;
