import {
  Button,
  Checkbox,
  Container,
  Grid,
  Input,
  makeStyles,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import Layout from "../../components/Layout";
import { Col, Image, Row } from "react-bootstrap";
import FormInput from "../../components/forms/FormInput";
import FormCheckbox from "../../components/forms/FormCheckbox";
import { contactUsPageTitle } from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  contactUsContainer: {
    paddingBottom: "30px",
  },
  root: {
    flexGrow: 1,
    padding: 0,
  },
  upperTitleText: {
    padding: "10px 20px",
  },
  title1: {
    display: "flex",
    alignItems: "baseline",
    padding: "0",
    fontFamily: "Poppins Medium",
    fontSize: "3.75rem"
  },
  title11: {
    fontSize: "1.8rem",
    padding: 0,
    margin: 0,
    fontFamily: "Poppins",
  },
  title2: {
    marginLeft: "5px",
    marginTop: "0",
    fontFamily: "Poppins",
  },
  imageAndCompanyProfileSection: {
    padding: "20px",
  },
  leftImage: {
    width: "100%",
  },
  companyDetails: {
    color: theme.palette.primary.color,
    textAlign: "center",
  },
  companyDomain: {
    align: "center",
    textAlign: "center",
    margin: "0 auto",
    borderBottom: `2px solid ${theme.palette.primary.color}`,
    width: "fit-content",
    marginBottom: "5px",
    fontFamily: "Poppins Semi-Bold",
  },
  companyAddress: {
    fontFamily: "Poppins",
  },
  companyPincode: {
    fontFamily: "Poppins",
  },
  companyEmail: {
    fontFamily: "Poppins",
  },
  inputBox: {
    width: "100%",
    marginTop: "5px",
  },
  input: {
    width: "100%",
    outline: "none",
    background: "transparent",
    padding: "8px 20px",
    fontSize: "16px",
    boxShadow: "none !important",
    borderWidth: "2px",
    borderStyle: "solid",
    borderImage: `linear-gradient( to right, ${theme.palette.primary.color}, ${theme.palette.secondary.main}, ${theme.palette.primary.color}) 1 round`,
    "&:focus": {
      borderWidth: "3px",
      borderImage: `linear-gradient( to right, ${theme.palette.secondary.main}, ${theme.palette.primary.color}, ${theme.palette.secondary.main}) 1 round`,
    },
  },
  formInputContainer: {
    padding: "0 20px",
  },
  formContainer: {
    padding: "0 40px",
  },
  inputLabel: {
    fontSize: "16px",
    marginTop: "10px",
    fontFamily: "Poppins Medium",
  },
  checkboxListContainer: {
    marginTop: "10px",
  },
  messageTextArea: {
    marginTop: "5px",
    borderWidth: "2px",
    borderStyle: "solid",
    outline: "none",
    width: "100%",
    padding: "10px 10px",
    fontSize: "14px",
    fontFamily: "Poppins Medium",
    borderImage: `linear-gradient( to right, ${theme.palette.primary.color}, ${theme.palette.secondary.main}, ${theme.palette.primary.color}) 1 round`,
    "&:focus": {
      outline: "none",
      borderImage: `linear-gradient( to right, ${theme.palette.secondary.main}, ${theme.palette.primary.color}, ${theme.palette.secondary.main}) 1 round`,
    },
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  submitButton: {
    background: `linear-gradient( 25deg,${theme.palette.primary.color}, ${theme.palette.secondary.main})`,
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    letterSpacing: ".18rem",
    fontSize: "16px",
    padding: "5px 18px",
    textAlign: "center",
    fontFamily: "Poppins Semi-Bold",
  },
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <Layout pageTitle={contactUsPageTitle}>
      <Container
        fluid="true"
        className={classes.contactUsContainer}
        disablegutters="true"
        maxwidth="false"
      >
        <Container
          fluid="true"
          disablegutters="true"
          maxwidth="false"
          className={classes.upperTitleText}
        >
          <Typography variant="h1" className={classes.title1}>
            H
            <Typography variant="body1" className={classes.title11}>
              i There,
            </Typography>
          </Typography>
          <Typography variant="h4" className={classes.title2}>
            Glad to contact us
          </Typography>
        </Container>

        <Container
          fluid="true"
          disablegutters="true"
          maxwidth="false"
          className={classes.root}
        >
          <Grid container justify="center">
            <Grid
              item
              lg={4}
              md={6}
              sm={5}
              xs={12}
              className={classes.imageAndCompanyProfileSection}
            >
              <Image
                src="/assets/svg/customer-interview.svg"
                alt=""
                className={classes.leftImage}
              />
              <Container
                className={classes.companyDetails}
                fluid="true"
                disablegutters="true"
                maxwidth="false"
              >
                <Typography variant="h4" className={classes.companyDomain}>
                  codelok.co.in
                </Typography>
                <Typography variant="h6" className={classes.companyAddress}>
                  HighTec City Hyderabad
                </Typography>
                <Typography variant="h6" className={classes.companyPincode}>
                  Telangana-500081
                </Typography>
                <Typography variant="h6" className={classes.companyEmail}>
                  mailcode@gmail.com
                </Typography>
              </Container>
            </Grid>
            <Grid item lg={8} md={6} sm={7} xs={12}>
              <Grid
                container
                justify="center"
                className={classes.formContainer}
              >
                <FormInput type="text" label="First Name" id="firstName" />
                <FormInput type="text" label="Last Name" id="lastName" />
                <FormInput type="email" label="Email ID" id="emailId" />
                <FormInput
                  type="number"
                  label="Mobile Number"
                  id="mobileNumber"
                />
                <FormInput type="text" label="Company Name" id="companyName" />
                <FormInput type="text" label="Company Type" id="companyType" />
                <Grid item lg={6} md={6} sm={12} xs={12} style={{padding: "0 20px"}}>
                  <Typography variant="h5" className={classes.inputLabel}>
                    I am looking for
                  </Typography>
                  <Grid container className={classes.checkboxListContainer}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <FormCheckbox
                        label="Website Design"
                        ariaLabel="Website Design"
                        size="medium"
                        color="secondary"
                      />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <FormCheckbox
                        label="Digital Marketing"
                        ariaLabel="Website Design"
                        size="medium"
                        color="secondary"
                      />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <FormCheckbox
                        label="SEO"
                        ariaLabel="SEO"
                        size="medium"
                        color="secondary"
                      />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <FormCheckbox
                        label="Content Writting"
                        ariaLabel="Content Writting"
                        size="medium"
                        color="secondary"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} style={{padding: "0 20px"}}>
                  <Typography variant="h5" className={classes.inputLabel}>
                    Message
                  </Typography>
                  <TextareaAutosize
                    rows={3}
                    className={classes.messageTextArea}
                  />
                </Grid>
                <Container className={classes.buttonContainer}>
                  <Button variant="contained" className={classes.submitButton}>
                    Submit
                  </Button>
                </Container>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Layout>
  );
};

export default ContactUs;
