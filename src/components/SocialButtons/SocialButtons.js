import React from "react";
import { ReactComponent as Github } from "../../resources/github.svg";
import { ReactComponent as Whatsapp } from "../../resources/whatsapp.svg";
import { useTranslation } from "react-i18next";

import "./SocialButtons.css";
const SocialButtons = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="social_icon" onClick={() => window.open(t('data.social.github'))}>
        <Github className="i"/>
      </div>
      <div className="social_icon" onClick={() => window.open(t('data.social.whatsapp'))}>
        <Whatsapp className="i"/>
      </div>
    </>
  );
};

export default SocialButtons;
