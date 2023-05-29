"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  email: string,
  phone: string,
  address: string,
  createAt: string
) {
  return { name, email, phone, address, createAt };
}

const rows = [
  createData(
    "Jose Burgos",
    "john.doe@example.com",
    "+1 555-123-4567",
    "123 Fake Street, City, State, ZIP",
    "2023-01-10"
  ),
  createData(
    "Rafael Perez",
    "jennifer.smith@example.com",
    "+44 20 1234 5678",
    "456 Mock Avenue, Town, Province, ZIP",
    "2023-03-22"
  ),
  createData(
    "Marcos ramos",
    "david.wilson@example.com",
    "+61 2 9876 5432",
    "789 Fictitious Road, Village, Region, ZIP",
    "2023-07-05"
  ),
  createData(
    "juan Pablo",
    "emily.johnson@example.com",
    "+49 30 1234 5678",
    "987 Imaginary Lane, Town, State, ZIP",
    "2023-09-18"
  ),
  createData(
    "Luis Hernandez",
    "michael.brown@example.com",
    "+81 3 1234 5678",
    "654 Unreal Boulevard, City, Province, ZIP",
    "2023-11-30"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Telefono</TableCell>
            <TableCell align="center">Direccion</TableCell>
            <TableCell align="center">Fecha de Registro</TableCell>
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
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.createAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
