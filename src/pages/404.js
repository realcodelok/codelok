import { Container, Grid, makeStyles } from "@material-ui/core";
import { Image } from "react-bootstrap";
import Layout from "../components/Layout";
import { pageNotFoundTitle } from "../utils/constants";

const useStyles = makeStyles({
  
  searchImage404Container: {
    display: "flex",
    alignItems: "flex-end",
    backgroundColor: "pink",
    position: "relative",
  },
  searchImage404: {
    width: "40%",
    margin: "0 auto",
    marginTop: "-98%",
    marginRight: "26%",
    zIndex: "2",
    opacity: 0.4,
  },
  image404: {
    width: "100%",
    margin: "0 auto",
    opacity: 0.7,
    zIndex: -1,
    position: "absolute",
    top: "50px",
    right: 0,
    left: 0,
    bottom: 0,
    height: "100%",
    backgroundPosition: "center",
    objectFit: "cover",
  },
});

const page404 = () => {
  const classes = useStyles();

  return (
    <Layout pageTitle={pageNotFoundTitle} noTopbar>
      <Grid container className={classes.page404}>
        <Image src="/assets/svg/404.svg" className={classes.image404} />
        {/* <Image
          src="/assets/svg/404-search.svg"
          className={classes.searchImage404}
        /> */}
      </Grid>
    </Layout>
  );
};

export default page404;
