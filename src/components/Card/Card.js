import React from "react";
import { Fade } from "react-reveal";
import "./Card.css";
const Card = (props) => {
  const { icon, title, content } = props;
  return (
    <Fade bottom>
      <div className="col-lg-4 col-sm-6">
        <div className="card_item">
          <i className={icon} />
          <h2 className="t_color">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </Fade>
  );
};

export default Card;
