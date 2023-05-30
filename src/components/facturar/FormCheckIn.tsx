"use client";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";

export const FormCheckIn = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      <FormGroup style={{ display: "flex", gap: "10px" }}>
        <FormControl>
          <InputLabel htmlFor="descripcion">Descripcion</InputLabel>
          <TextField id="descripcion" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="monto">Monto </InputLabel>
          <TextField id="monto" />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Clientes</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Clientes"
            onChange={handleChange}
          >
            <MenuItem value={10}>Jose</MenuItem>
            <MenuItem value={20}>Juan</MenuItem>
            <MenuItem value={30}>Pedro</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" type="submit">
          Agregar
        </Button>
      </FormGroup>
    </div>
  );
};
