import { Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import arrow from "../../../assets/images/arrow.png";

function Cards() {
  return (
    <div style={{ marginTop: "25px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card className="card1">
            <Typography className="c-title">Scheduled Interviews</Typography>
            <Typography className="c-num">03</Typography>
            <Typography className="c-times">
              &nbsp;10:30AM | 12:30 PM | 3:30 PM
            </Typography>

            <Typography className="c-details flex">
              Get Details &nbsp;&nbsp;&nbsp;
              <img src={arrow} />
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card className="card2">
            <Typography className="c-title">Upload Resumes</Typography>
            <Typography className="c-num">120</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card className="card3">
            <Typography className="c-title">Daily Reports</Typography>
            <Typography className="c3-title">
              Client Demand:&nbsp; 08
            </Typography>
            <Typography className="c3-Fulfilled">Fulfilled: 06</Typography>
            <Typography className="c-details flex">
              Get Details &nbsp;&nbsp;&nbsp;
              <img src={arrow} />
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card className="card4">
            <Typography className="c-title">Onboarding of August</Typography>
            <Typography className="c-num">4/5</Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
