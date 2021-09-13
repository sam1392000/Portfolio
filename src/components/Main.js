import React from "react";
import "../App.css";
import background1 from "../Assets/background1.svg";
import { ReactComponent as Boy } from "../Assets/boy2.svg";
const Main = () => {
  return (
    <div className="background">
      <img src={background1} alt="blue" />
      <div className="content">
        <Boy className="emoji" />
        <h1 className="white lg ml-3">
          Hello , I am <span className="orange">Sam Raj</span>
        </h1>
        <h1 className="white lg">A Full Stack Web developer</h1>
        <a href="#smooth">
          <button className="b-4 bg-orange white ml-3 btn">know More</button>
        </a>
      </div>
    </div>
  );
};

export default Main;
