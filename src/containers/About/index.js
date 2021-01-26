import React from "react";
import { Fade } from "react-reveal";
import eventGA from "../../utils/ga";
import { useTranslation } from "react-i18next";
import "./About.css";

const About = () => {
  const { t } = useTranslation();
  const onHireClick = () => {
    document
      .getElementsByClassName("Contact")[0]
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="About">
      <div className="container">
        <div className="row">
          <div className="about_content">
            <Fade bottom>
              <h2 className="t_color">{t("data.about.header")}</h2>
              <h6>{t("data.about.title")}</h6>
              <p>{t("data.about.content")}</p>
            </Fade>
            <Fade mode="fill">
              <button className="theme_btn" onClick={() => onHireClick()}>
                {t("data.about.hireMe")}
              </button>
              <a
                rel="noreferrer"
                target="_blank"
                href={t("data.about.resume.link")}
                className="theme_btn"
                onClick={() => eventGA("About Click", "About", "View Resume")}
              >
                {t("data.about.resume.title")}
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
