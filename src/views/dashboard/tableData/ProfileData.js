import React from "react";
import profile from "../../../assets/images/ic_person.png";
import "../../../assets/css/dashboard.css";
import { Typography } from "@material-ui/core";

function ProfileData() {
  return (
    <div style={{ padding: "28px 25px 28px 25px" }}>
      <img src={profile} className="profile" />
      <Typography className="profile-name">Katharine Dean</Typography>
      <Typography className="profile-role">UI/UX Designer</Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Typography className="profile-skills">Full Time</Typography>
        <Typography className="profile-skills">Sketch</Typography>
        <Typography className="profile-skills">IOS</Typography>
        <Typography className="profile-skills">UX Writing</Typography>
        <Typography className="profile-skills">UX</Typography>
        <Typography className="profile-skills">Junior</Typography>
      </div>
      <p className="view-more">View More</p>
    </div>
  );
}

export default ProfileData;
