import { Grid, Typography } from "@material-ui/core";
import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import "../../../assets/css/dashboard.css";

function Charts() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={8} lg={8} className="chart-title">
          <Typography className="barchart-tilte">
            Job status graph - Last 3 Months
          </Typography>
          <BarChart />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} className="chart-title">
          <PieChart />
        </Grid>
      </Grid>
    </div>
  );
}

export default Charts;
