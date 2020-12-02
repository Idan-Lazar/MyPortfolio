import React from "react";
import "./Home.css";
import { Parallax } from "react-parallax";
import { Fade } from "react-reveal";
import background from "../../resources/home.jpg";
import Typing from "react-typing-animation";

const Home = () => {
  return (
    <div className="Home">
      <Parallax bgImage={background} className="banner_area">
        <div className="container">
          <div className="banner_content">
            <Fade bottom>
              <h5>Hello</h5>
              <h2>I am Idan Lazar</h2>
              <h4>Full Stack Web Developer</h4>
              <h3>
                Specialized in&nbsp;
                <Typing loop={true} hideCursor={true}>
                  <span>Front-End Development.</span>
                  <Typing.Backspace count={30} delay={500} />
                  <span>Back-End Development.</span>
                  <Typing.Backspace count={21} delay={500} />
                </Typing>
              </h3>
            </Fade>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
