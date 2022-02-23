import React from "react";
import { Chart } from "react-google-charts";

function PieChart() {
  return (
    <div>
      <Chart
        style={{ width: "100%" }}
        height={"250px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Task", "Hours per Day"],
          ["Career Portal", 11],
          ["Naukri", 2],
          ["0", 2],
        ]}
        options={{
          title: "Applicants by source",
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

export default PieChart;
