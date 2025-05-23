import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const rows = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
];

export default function ResponsiveTable() {
  const handleDelete = (id) => {
    alert(`Delete item with id: ${id}`);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 900,
        margin: "auto",
        mt: 4,
        overflowX: "auto", // scroll horizontally on small devices
      }}
    >
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>SL</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id} hover>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell style={{ wordBreak: "break-word" }}>{row.email}</TableCell>
              <TableCell align="center">
                <IconButton
                  color="error"
                  aria-label="delete"
                  onClick={() => handleDelete(row.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
