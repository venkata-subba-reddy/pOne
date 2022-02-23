import { Grid, Typography } from "@material-ui/core";
import React from "react";
import TableList from "./TableList";
import ProfileData from "./ProfileData";
import "../../../assets/css/dashboard.css";

function Charts() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={7} lg={8} className="Table-title">
          <Typography className="Table-heading">
            JNewly Assigned Jobs
          </Typography>
          <TableList />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} className="Table-title">
          <ProfileData />
        </Grid>
      </Grid>
    </div>
  );
}

export default Charts;
