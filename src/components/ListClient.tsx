"use client";
import React from "react";
import BasicTable from "./Table";

import Button from "@mui/material/Button";

import Link from "next/link";

export const ListClient = () => {
  return (
    <>
      <Link href={"/clientes/add"}>
        <Button variant="contained" style={{ margin: "10px" }}>
          Agregar cliente
        </Button>
      </Link>
      <BasicTable />;
    </>
  );
};
