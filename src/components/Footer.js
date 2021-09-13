import React from "react";
import Linkedin from "../Assets/LinkedIn.png";
import Slack from "../Assets/Slack.svg";
import Git from "../Assets/github.png";
import Gmail from "../Assets/gmail.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="cpy_text">
        <h3>Copyright © 2021</h3>
      </div>
      <div className="icons">
        <img src={Linkedin} alt="Linkedin" width="50px" height="50px" />
        <img src={Slack} alt="Slack" width="50px" height="50px" />
        <img src={Git} alt="Git" width="50px" height="50px" />
        <img src={Gmail} alt="Gmail" width="50px" height="50px" />
      </div>
    </div>
  );
};

export default Footer;
