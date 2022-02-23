import React from "react";
import Heading from "./heading/Heading";
import Cards from "./cards/Cards";
import Charts from "./charts/Charts";
import TableData from "./tableData/TableData";

function Dashboard() {
  return (
    <div>
      <Heading />
      <Cards />
      <Charts />
      <TableData />
    </div>
  );
}

export default Dashboard;
