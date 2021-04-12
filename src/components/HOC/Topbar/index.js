import { makeStyles } from "@material-ui/core";
import { Container } from "react-bootstrap";
import Aniversary from "../../Aniversary";

const useStyles = makeStyles((theme) => ({
  topBarContainer: {
    color: theme.palette.primary.main,
    display: "flex",
    //height: "300px",
    minHeight: "300px",

    background: `url("/assets/svg/topbar-bg.svg")`,
    // backgroundPosition: "center",
    ovjectFit: "cover",
    backgroundRepeat: "no-repeat",
  },
  topBarContents: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    fontSize: "25px",
  },

  aniversary: {
    width: "100%",
  },
}));
const Topbar = () => {
  const classes = useStyles();
  return (
    <Container fluid="true" className={classes.topBarContainer}>
      <Container className={classes.topBarContents}>
        <Container className={classes.aniversary}>
          <Aniversary />
        </Container>
      </Container>
    </Container>
  );
};

export default Topbar;
