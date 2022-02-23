import { Button, Typography } from "@material-ui/core";
import React from "react";
import "../../../assets/css/dashboard.css";

function Heading() {
  return (
    <div>
      <div className="flex">
        <div>
          <Typography className="wel-back-title">Hi, welcome back</Typography>
          <Typography className="title-subhead">Recruiter Name</Typography>
        </div>
        <div className="btn-div">
          <Button className="upload-btn">Upload CV's</Button>&nbsp;&nbsp;
          <Button className="job-post-btn">New Job Post</Button>
        </div>
      </div>
    </div>
  );
}

export default Heading;
