import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Image, Row } from "react-bootstrap";
import { Box, Grid } from "@material-ui/core";
import Menus from "./Menus";
import MobileMenus from "./MobileMenus";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  header: {
    zIndex: 1500,
  },
  toobar: {
    padding: "0 5%",
  },
  appLogo: {
    width: "50px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuButton: {
    color: "red",
    width: "18px",
  },

  /** HEADER MENUS  for DESKTOP ONLY */
  headerMenus: {
    width: "100%",
    "& a": {
      marginRight: "3px",
      color: theme.palette.primary.color,
      padding: "3px 15px",
      fontSize: "14px",

      "&:hover": {
        color: theme.palette.primary.hoverColor,
      },
    },
  },
  /*-- MOBILE MENU CSS FOR MOBILE OR TABLET ONLY  (MUST KEEP HERE AND PASS THIS classes INSTANCE TO MOBILE MENUS COMPONENT) --*/
  mobileMenus: {
    width: "100%",
    "& a": {
      padding: "10px 20px",
      fontSize: "14px",
      "&:hover": {
        background: theme.palette.primary.hoverBg,
        color: theme.palette.primary.hoverColor,
      },
    },
    flexDirection: "column",
    boxShadow: `rgba(0,0,0,0.2) -20px -49px 20px, rgba(0,0,0,0.2) 2px 6px 5px`,
    
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);

  const handleMobileMenusRender = (boolVal) => {
    setMobileMenuOpened(boolVal);
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.grow}
    >
      <AppBar position="fixed" className={classes.header}>
        <Toolbar className={classes.toobar}>
          <Image
            className={classes.appLogo}
            src="/assets/svg/app-logo.svg"
            alt="codelok logo"
          />
          <Row className={classes.grow} />
          <Row className={clsx(classes.sectionDesktop)}>{Menus(classes)}</Row>
          <Box fluid="true" className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
              size="medium"
              onClick={() => handleMobileMenusRender(!isMobileMenuOpened)}
            >
              <Image
                className={classes.menuButton}
                src={`/assets/svg/${isMobileMenuOpened ? 'close-button.svg' : 'menu-button.svg'}`}
                alt="menu button"
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {isMobileMenuOpened && MobileMenus(classes)}
    </Grid>
  );
}
