import React from "react";
import freelacing from "../Assets/freelancing.jpg";
import medistore from "../Assets/medistore.jpg";
import recordmanagment from "../Assets/recordmanagement.jpg";
import charles from "../Assets/charles.jpg";
import extension from "../Assets/extensions.jpg";

import vr from "../Assets/vr.jpg";

const Projects = () => {
  return (
    <div className="projects_container">
      <h1 className="project_title">Projects</h1>
      <div className="cards_row">
        <div className="card">
          <img src={freelacing} alt="freelancing" />
          <h2 className="white ml-3">Assit To Freelancing</h2>
          <button className="learn_more">Learn More</button>
        </div>
        <div className="card">
          <img src={medistore} alt="medistore" className="img" />
          <h2 className="white ml-3">MediStore</h2>
          <button className="learn_more">Learn More</button>
        </div>
        <div className="card">
          <img src={recordmanagment} alt="recordmanagment" />
          <h3 className="white ml-3">Patient Record Managment</h3>
          <button className="learn_more">Learn More</button>
        </div>
        <div className="card">
          <img src={vr} alt="skcet 360 view" />
          <h2 className="white ml-3">Skcet VR</h2>
          <button className="learn_more">Learn More</button>
        </div>
        <div className="card">
          <img src={charles} alt="charles" />
          <h2 className="white ml-3">Charles Restaurant</h2>
          <button className="learn_more">Learn More</button>
        </div>
        <div className="card">
          <img src={extension} alt="extension" />
          <h3 className="white ml-3">File Check extension</h3>
          <button className="learn_more">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
