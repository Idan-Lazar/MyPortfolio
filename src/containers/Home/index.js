import React from "react";
import "./Home.css";
import { Parallax } from "react-parallax";
import { Fade } from "react-reveal";
import background from "../../resources/home.jpg";
import Typing from "react-typing-animation";
import SocialButtons from "../../components/SocialButtons/SocialButtons";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="Home">
      <Parallax bgImage={background} className="banner_area">
        <div className="container">
          <div className="banner_content">
            <Fade bottom>
              <h5>{t("definitions.hello")}</h5>
              <h2>
                {t("definitions.iam")} {t("data.name")}
              </h2>
              <h4>{t("data.description")}</h4>
              {i18n.language === "en" ? (
                <h3>
                  {t("definitions.specialized")}&nbsp;
                  <Typing loop={true} hideCursor={true}>
                    {t("data.skills", { returnObjects: true }).map(
                      (skill, index) => {
                        return (
                          <div key={index}>
                            <span>{skill}.</span>
                            <Typing.Backspace count={40} delay={500} />
                          </div>
                        );
                      }
                    )}
                  </Typing>
                </h3>
              ) : (
                <div />
              )}
            </Fade>
          </div>
        </div>
        <div className="social">
          <SocialButtons />
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
