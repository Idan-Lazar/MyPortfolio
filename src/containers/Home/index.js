import React from "react";
import "./Home.css";
import { Parallax } from "react-parallax";
import { Fade } from "react-reveal";
import background from "../../resources/home.jpg";
import Typing from "react-typing-animation";
import SocialButtons from "../../components/SocialButtons/SocialButtons";
import { data } from '../../data'

const Home = () => {
  return (
    <div className="Home">
      <Parallax bgImage={background} className="banner_area">
        <div className="container">
          <div className="banner_content">
            <Fade bottom>
              <h5>Hello</h5>
              <h2>I am {data.name}</h2>
              <h4>{data.description}</h4>
              <h3>
                Specialized in&nbsp;
                <Typing loop={true} hideCursor={true}>
                  {data.skills.map((skill,index)=>{
                    return (<div key={index}>
                    <span>{skill}.</span>
                    <Typing.Backspace count={30} delay={500} />
                    </div>)
                  })}
                </Typing>
              </h3>
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
