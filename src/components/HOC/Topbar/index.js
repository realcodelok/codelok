import { makeStyles } from "@material-ui/core";
import { Container } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  topBarContainer: {
    color: theme.palette.primary.main,
    display: "flex",
    height: "300px",
    background: `url("/assets/svg/topbar-bg.svg")`,
    height: "300px",
    backgroundPosition: "center",
    ovjectFit: "contain",
  },
  topBarContents: {},
}));
const Topbar = () => {
  const classes = useStyles();
  return (
    <Container fluid="true" className={classes.topBarContainer}>
      <Container classes={classes.topBarContents}>I am topbar...</Container>
    </Container>
  );
};

export default Topbar;
