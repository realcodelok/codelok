import { makeStyles } from "@material-ui/core";
import { Container } from "react-bootstrap";
import CustomPageTitle from "../CustomPageTitle";
import CustomFooter from "../HOC/CustomFooter";
import Header from "../HOC/Header";
import Topbar from "../HOC/Topbar";

const useStyles = makeStyles((theme) => ({
  codelokMainBodyContainer: {
    height: "95vh",
    overflowY: "auto",
    overflowX: "hidden",
    marginTop: "65px",
  },
}));
const Layout = (props) => {
  const classes = useStyles();
  return (
    <>
      <CustomPageTitle title={props.pageTitle} />
      <Header />
      <Container
        className={classes.codelokMainBodyContainer}
        disablegutters="true"
        maxwidth="false"
      >
        {props.noTopbar ? null : <Topbar />}

        <Container
          className={classes.childrenContainer}
          disablegutters="true"
          maxwidth="false"
        >
          {props.children}
        </Container>
      </Container>
      {/* <CustomFooter /> */}
    </>
  );
};

export default Layout;
