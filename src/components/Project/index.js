import React from "react";
import "./Project.css";
import { ReactComponent as Code } from "../../resources/code.svg";

const Project = (props) => {
  const { name, description, link, code_link, image } = props;
  return (
    <div className="col-md-6 col-sm-6 col-xs-12 grid-item">
      <div className="portfolio hover-style">
        <img src={image} alt="img" />
        <div className="item-img-overlay">
          <div className="overlay-info">
            <h5 className="sm-title">{name}</h5>
            <p className="description">{description}</p>
            <div className="icons">
              <a className={!code_link && "disabled"} href={code_link}>
                <Code />
              </a>
              <a href={link} target="_blank" rel="noreferrer">
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
