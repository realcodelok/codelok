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
import useStyles from "../../styles/contactUs";

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
