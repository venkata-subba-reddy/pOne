import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import account_circle from "../../../assets/images/account_circle.png";
import DoNotDisturbOnOutlinedIcon from "@mui/icons-material/DoNotDisturbOnOutlined";
import "../../../assets/css/dashboard.css";

// QUESTION:
// Order of appearance in screen size 'lg' is 1 | 2 | 3 (from left to Right)
// When the screen size is 'xs' then the grid appers in the order 1->2->3 (from top to bottom) but
// I need in the order say 1->3->2(from top to bottom) or say 2->1->3.

export default function content() {
  return (
    <Box sx={{ "& h1": { m: 0 } }} className="profile-box">
      <Typography className="profile-title">
        Applicant Details
        <span style={{ float: "right" }}>
          <DoNotDisturbOnOutlinedIcon />
        </span>
      </Typography>
      <Grid container spacing={2} justify="flex-start">
        <Grid item xs={12} sm={8} md={8} order={{ xs: 3, sm: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>First Name</label>
              <br />
              <input type="text" className="profile-input-field" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>Last Name</label>
              <br />
              <input type="text" className="profile-input-field" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>City</label>
              <br />
              <input type="text" className="profile-input-field" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>State</label>
              <br />
              <input type="text" className="profile-input-field" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>Email Id</label>
              <br />
              <input type="email" className="profile-input-field" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>Mobile Number</label>
              <br />
              <input type="mobile" className="profile-input-field" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>Zip Code</label>
              <br />
              <input type="text" className="profile-input-field" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>Employee Designation</label>
              <br />
              <input type="text" className="profile-input-field" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <label>Employee Skills</label>
              <br />
              <input type="text" className="profile-input-field"></input>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>Upload Resume</label>
              <br />
              <input
                type="file"
                className="profile-input-field"
                style={{ padding: "8px 6px", backgroundColor: "#FFF" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={4} order={{ xs: 2, sm: 3 }}>
          <div>
            <img src={account_circle} className="profile-img" />
            <p className="profile-upload-text">Upload your Profile</p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
