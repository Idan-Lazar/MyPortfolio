import React from "react";
import Card from "../../components/Card/Card";
import { useTranslation } from "react-i18next";
import "./Services.css";

const Services = () => {
  const { t } = useTranslation();

  const renderCards = () => {
    return t("services.myServices", { returnObjects: true }).map(
      (card, index) => {
        return (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            content={card.content}
          />
        );
      }
    );
  };

  return (
    <div className="Services">
      <div className="container">
        <div className="section_title text-center">
          <h2 className="title_h2 t_color">{t("services.header")}</h2>
          <p className="title_p">{t("services.title")}</p>
          <span className="bottom_line" />
        </div>
        <div className="row">{renderCards()}</div>
      </div>
    </div>
  );
};

export default Services;
