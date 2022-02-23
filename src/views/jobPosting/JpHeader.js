import { Button, Typography } from "@material-ui/core";
import React from "react";
import "../../assets/css/dashboard.css";
import pie_chart from "../../assets/images/pie_chart.png";
import redo from "../../assets/images/redo.png";
import file_download from "../../assets/images/file_download.png";
import ic_thumb_up from "../../assets/images/ic_thumb_up.png";
import ic_mail from "../../assets/images/ic_email.png";
import Dialog from "@mui/material/Dialog";
import success from "../../assets/images/success.png";
import submissions from "../../assets/images/submissions.png";
import pipeline from "../../assets/images/pipeline.png";

import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

function JpHeader() {
  const [open, setOpen] = React.useState(false);
  const [uplaod, setUpload] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickUplaod = () => {
    setUpload(true);
  };

  const handleUploadClose = () => {
    setUpload(false);
  };
  return (
    <div>
      <div className="flex">
        <div>
          <Typography className="wel-back-title flex">
            Resumes &nbsp; <ArrowDropDownOutlinedIcon />
          </Typography>
        </div>
        <div className="btn-div flex">
          <input
            type="search"
            placeholder="search"
            style={{ height: "30px", borderRadius: "6px 0px 0px 6px" }}
          />
          <span>
            <select
              name="cars"
              id="cars"
              style={{
                height: "30px",
                borderRadius: "0px 6px 6px 0px",
                marginRight: "20px",
              }}
            >
              <option value="volvo">Any</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </span>
          <div className="flex">
            <img
              src={ic_thumb_up}
              style={{
                border: "1px solid #707070",
                padding: "5px 5px",
                width: "28px",
                height: "30px",
                backgroundColor: "#fff",
                borderRadius: "6px 0px 0px 6px",
              }}
            />
            <img
              src={pie_chart}
              style={{
                border: "1px solid #707070",
                padding: "5px 5px",
                width: "28px",
                height: "30px",
                backgroundColor: "#fff",
              }}
            />
            <img
              src={redo}
              style={{
                border: "1px solid #707070",
                padding: "5px 5px",
                width: "28px",
                height: "30px",
                backgroundColor: "#fff",
              }}
            />
            <img
              src={file_download}
              style={{
                border: "1px solid #707070",
                padding: "5px 5px",
                width: "28px",
                height: "30px",
                backgroundColor: "#fff",
              }}
            />
            <img
              src={ic_mail}
              style={{
                border: "1px solid #707070",
                padding: "5px 5px",
                width: "28px",
                height: "30px",
                backgroundColor: "#fff",
              }}
            />
            <select
              name="cars"
              id="cars"
              style={{ height: "30px", borderRadius: "0px 6px 6px 0px" }}
            >
              <option value="volvo">New</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex" style={{ margin: "20px 0px" }}>
        <input
          type="text"
          placeholder="Detail view"
          style={{ width: "100px" }}
        />
        <img src={submissions} style={{ marginLeft: "26px" }} />
        <img src={pipeline} style={{ marginLeft: "26px" }} />
      </div>
    </div>
  );
}

export default JpHeader;
