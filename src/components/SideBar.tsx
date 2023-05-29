"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Home from "@mui/icons-material/Home";
import Menu from "@mui/icons-material/Menu";
import Groups from "@mui/icons-material/Groups";
import MonetizationOn from "@mui/icons-material/MonetizationOn";
import Link from "next/link";

const MENULIST = ["Inicio", "Clientes", "Facturar"];

const ARCHOR = "left";

const icons: any = {
  Inicio: <Home />,
  Clientes: <Groups />,
  Facturar: <MonetizationOn />,
};

export const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(true)}>
      <List>
        {MENULIST.map((text, index: number) => (
          <ListItem key={index} disablePadding>
            <Link href={text === "Inicio" ? "/" : `/${text.toLowerCase()}`}>
              <ListItemButton>
                <ListItemIcon>{icons[text]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <div>
      <React.Fragment>
        <Button onClick={() => setOpen(true)}>{<Menu color="action" />}</Button>
        <Drawer anchor={ARCHOR} open={open} onClose={() => setOpen(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
