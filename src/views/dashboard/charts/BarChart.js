import React from "react";
import c3 from "c3";

const BarChart = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: "#chart",
      data: {
        columns: [
          ["jobs", 50, 300, 200, 0, 150, 250],
          ["hired Candidaes", 50, 20, 10, 40, 15, 25],
        ],
        type: "bar",
      },
    });
  }, []);

  return (
    <div
      id="chart"
      style={{
        marginLeft: "10%",
        width: "60%",
        marginTop: "5%",
        height: "208px",
      }}
    />
  );
};
export default BarChart;
