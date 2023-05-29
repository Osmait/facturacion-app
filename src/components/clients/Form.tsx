"use client";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";

export const Form = () => {
  return (
    <div>
      <FormGroup style={{ display: "flex", gap: "10px" }}>
        <FormControl>
          <InputLabel htmlFor="name">Nombre</InputLabel>
          <Input id="name" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="lastName">Apellido </InputLabel>
          <Input id="lastName" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email">Email </InputLabel>
          <Input id="email" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="phone">Telefono</InputLabel>
          <Input id="phone" />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="addres">Direccion</InputLabel>
          <Input id="addres" />
        </FormControl>
        <Button variant="contained" type="submit">
          Agregar
        </Button>
      </FormGroup>
    </div>
  );
};
