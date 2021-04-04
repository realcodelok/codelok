import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";
import { Image } from "react-bootstrap";
import { IoIosMenu } from "react-icons/io";
import { Box, Container } from "@material-ui/core";
import Menus from "../Header/Menus";
const useStyles = makeStyles((theme) => ({
  
}));

export default function CustomFooter() {
  const classes = useStyles();

  return (
    <p>footer</p>
  );
}
