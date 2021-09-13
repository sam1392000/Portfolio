import React from "react";
import { ReactComponent as Tech } from "../Assets/tech.svg";
const Profile = () => {
  return (
    <div className="profile_container" id="smooth">
      <h1 className="text-title">Who am I ?</h1>
      <div className="main_content">
        <div className="left_content">
          <h1 className="text-style">
            I am Sam Raj , A full stack developer from India who loves to build
            Software that helps the people and company to grow
          </h1>
        </div>
        <div className="right_content">
          <Tech />
        </div>
      </div>
    </div>
  );
};

export default Profile;
