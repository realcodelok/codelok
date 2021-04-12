import { Avatar, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
const useStyles = makeStyles((theme) => ({
  loginDiv: {
    width: "60%",
    height: "auto",
    margin: "0 auto",
    margin: "20px auto",
    padding: "60px",
    borderRadius: "40px",
    background: "transparent",
    boxShadow: `13px 13px 20px ${theme.palette.primary.color},-13px -13px 20px ${theme.palette.primary.color}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      flexDirection: "column",
      position: "relative",
      padding: "30px",
    },
  },
  prince: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "fit-content",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  princeDetails: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px",
    },
  },
  heartSection: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "30px 0 30px 0",
    },
  },
  afreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row-reverse",
    },
  },
  afreenDetails: {
    marginRight: "30px",
  },
  alignRight: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  logo: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    boxShadow: `0px 0px 2px #5f5f5f, 0px 0px 0px 5px #ecf0f3, 
              8px 8px 15px #a7aaaf,
            -8px -8px 15px #ffffff`,
    [theme.breakpoints.down("sm")]: {
      width: "80px",
      height: "80px",
    },
  },
  title: {
    textAlign: "center",
    fontSize: "18px",
    paddingTop: "18px",
    letterSpacing: "0.5px",
  },
  subTitle: {
    textAlign: "center",
    fontSize: "12px",
    paddingTop: "3px",
    letterSpacing: "3px",
    fontStyle: "italic",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  heartImage: {
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  afreenImage: {
    marginTop: "100px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
    "& img": {
      transform: ` translate(-8px, 40px) scale(2)`,
      objectFit: "contain",
    },
  },
  aniversaryImage: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundPosition: "center",
    objectFit: "cover",
    transform: `translate(180px, -200px) scale(0.2)`,
    height: "auto",

    [theme.breakpoints.down("sm")]: {
      transform: `translate(180px, -80px) scale(0.5)`,
    },

    [theme.breakpoints.down("xs")]: {
      transform: `translate(90px, -40px) scale(0.5)`,
    },
  },
}));
const Aniversary = () => {
  const classes = useStyles();
  return (
    <div className={classes.loginDiv}>
      <div className={classes.prince}>
        <Avatar
          src="/assets/temp/aniversary.png"
          className={clsx(classes.avatar, classes.aniversaryImage)}
        />
        <div className={clsx(classes.logo, classes.princeImage)}>
          <Avatar
            src="/assets/temp/prince-full.jpeg"
            className={classes.avatar}
          />
        </div>
        <div className={classes.princeDetails}>
          <div className={classes.title}>PRINCE</div>
          <div className={classes.subTitle}>India</div>
        </div>
      </div>
      <div className={classes.heartSection}>
        <div className={clsx(classes.logo, classes.heartImage)}>
          <Avatar src="/assets/temp/heart.gif" className={classes.avatar} />
        </div>
      </div>
      <div className={classes.alignRight}>
        <div className={classes.afreen}>
          <div className={clsx(classes.logo, classes.afreenImage)}>
            <Avatar
              src="/assets/temp/afreen-full.jpeg"
              className={classes.avatar}
            />
          </div>
          <div className={classes.afreenDetails}>
            <div className={classes.title}>AFREEN</div>
            <div className={classes.subTitle}>Pakistan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aniversary;
