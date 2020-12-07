import React from "react";
import { ReactComponent as Github } from "../../resources/github.svg";
import { ReactComponent as Whatsapp } from "../../resources/whatsapp.svg";
import { data } from "../../data";
import "./SocialButtons.css";
const SocialButtons = () => {
  return (
    <>
      <div className="social_icon" onClick={() => window.open(data.social.github)}>
        <Github className="i"/>
      </div>
      <div className="social_icon" onClick={() => window.open(data.social.whatsapp)}>
        <Whatsapp className="i"/>
      </div>
    </>
  );
};

export default SocialButtons;
