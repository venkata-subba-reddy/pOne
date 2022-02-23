import { Button, Card, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import bglogin from "../assets/images/bg-login.png";
import pone_logo from "../assets/images/p-one-logo.png";
import Buttons from "../assets/images/Buttons.png";
import "../assets/css/login.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import login_btn from "../assets/images/button.png";
import SignUp from "../assets/images/new account.png";

function Login() {
  return (
    <div
      style={{
        backgroundImage: "url(" + bglogin + ")",
        backgroundSize: "cover",
        height: "100vh",
        width: "99%",
      }}
    >
      <div className="maindiv-padding">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <img src={pone_logo} />
            <Typography className="title">
              Great portal that makes job postings easier
            </Typography>
            <br /> <br />
            <Typography className="title-cont">
              Upload resumes and post your jobs to make your work much easier
              for recruitment.
            </Typography>
            <br />
            <br />
            {/* <Button className="appstore_btn">
              <img src={apple} />
              Download on
              <br />
              App Store
            </Button>
            <Button className="appstore_btn">
              <img src={apple} />
              Download on
              <br />
              Play Store
            </Button> */}
            <img src={Buttons} />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <div className="fields-frame">
              <Card className="fields-card">
                <div className="top-border">&nbsp;</div>
                <div className="inputs-align">
                  <Typography className="login-heading">
                    Login into your account
                  </Typography>
                  <div style={{ padding: "0px 32px" }}>
                    <TextField
                      id="standard-Username-input"
                      label="Username"
                      type="Username"
                      autoComplete="current-Username"
                      variant="standard"
                      style={{ marginTop: "32px", width: "100%" }}
                    />
                    <TextField
                      id="standard-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      style={{ marginTop: "32px", width: "100%" }}
                    />
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      margin: "16px 16px 0px 38px ",
                      fontSize: "14px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Remember me"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <p>
                      <u>Forgot password?</u>
                    </p>
                  </div>
                  <img src={login_btn} className="login-btn" />
                </div>
                <img src={SignUp} className="signup-img" />
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;
