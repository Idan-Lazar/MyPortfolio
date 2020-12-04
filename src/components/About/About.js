import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import "./About.css";

const About = () => {

  return (
    <div className="About">
      <div className="container">
        <div className="row">
          <div className="about_content">
            <Fade bottom>
              <h2 className="t_color">About Me</h2>
              <h6>Hey, I am Idan Lazar. Nice to meet you.</h6>
              <p>
                Since the beginning of my journey as a freelance Web Developer
                nearly 3 years ago, I've done remote work for agencies,
                consulted for startups, and collaborated with talented people to
                create digital products for both business and consumer use. I'm
                quietly confident, naturally curious, and perpetually working on
                improving my skills one step at a time.
              </p>
            </Fade>
            <Fade mode="fill">
              <div className="theme_btn">Hire Me</div>
              <div className="theme_btn">Download CV</div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;