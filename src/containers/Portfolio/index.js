import React from "react";
import Project from "../../components/Project";
import { useTranslation } from "react-i18next";
import "./Portfolio.css";

const Portfolio = () => {
  const { t } = useTranslation();

  const renderCards = () => {
    return t("portfolio.projects", { returnObjects: true }).map(
      (project, index) => {
        return (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        );
      }
    );
  };
  
  return (
    <div className="Portfolio">
      <div className="container">
        <div className="section_title text-center">
          <h2 className="title_h2 t_color">{t("portfolio.header")}</h2>
          <p className="title_p">{t("portfolio.title")}</p>
          <span className="bottom_line" />
        </div>
        <div className="row">{renderCards()}</div>
      </div>
    </div>
  );
};

export default Portfolio;
