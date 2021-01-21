import React from "react";
import { services } from "../../data";
import Card from "../../components/Card/Card";
import "./Services.css";
const Services = () => {
  const renderCards = () => {
    return services.map((card, index) => {
      return (
        <Card key={index} icon={card.icon} title={card.title} content={card.content} />
      );
    });
  };
  return (
    <div className="Services">
      <div className="container">
        <div className="section_title text-center">
          <h2 className="title_h2 t_color">What I'm Doing</h2>
          <p className="title_p">My services:</p>
          <span className="bottom_line" />
        </div>
        <div className="row">
            {renderCards()}
        </div>
      </div>
    </div>
  );
};

export default Services;
