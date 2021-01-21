import React from "react";
import { Fade } from "react-reveal";
import { data } from "../../data";
import eventGA from '../../utils/ga'
import "./About.css";

const About = () => {
  const onHireClick = () => {
    document
      .getElementsByClassName(data.ContactElement)[0]
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="About">
      <div className="container">
        <div className="row">
          <div className="about_content">
            <Fade bottom>
              <h2 className="t_color">About Me</h2>
              <h6>{data.about.title}</h6>
              <p>{data.about.content}</p>
            </Fade>
            <Fade mode="fill">
              <button className="theme_btn" onClick={() => onHireClick()}>
                Hire Me
              </button>
              <a
                rel="noreferrer"
                target="_blank"
                href={data.about.resume}
                className="theme_btn"
                onClick={() => eventGA('About Click','About','View Resume')}
              >
                View Resume
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
