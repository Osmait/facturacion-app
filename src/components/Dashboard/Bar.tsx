"use client";
import React from "react";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { SideBar } from "../SideBar";

export const Bar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <SideBar />
        <Typography
          align="center"
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
