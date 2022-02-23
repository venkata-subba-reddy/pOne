import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@material-ui/core";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Jpc- 290", "BA", "Virtusa", "Rajini"),
  createData("Jpc- 290", "BA", "Virtusa", "Rajini"),
  createData("Jpc- 290", "BA", "Virtusa", "Rajini"),
  createData("Jpc- 290", "BA", "Virtusa", "Rajini"),
  createData("Jpc- 290", "BA", "Virtusa", "Rajini"),
];

export default function TableList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#E5E6E9" }}>
            <TableCell>Job Code</TableCell>
            <TableCell align="left">Job Title </TableCell>
            <TableCell align="left">Client Name</TableCell>
            <TableCell align="left">Primary Recruiter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <hr />
      <div className="pagnation-div">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <Typography className="pagnation-next">Next</Typography>
      </div>
    </TableContainer>
  );
}
