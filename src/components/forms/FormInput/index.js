import { Grid, Input, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputLabel: {
    fontSize: "14px",
    fontFamily: "Poppins Medium",
  },
  inputBox: {
    width: "100%",
    marginTop: "5px",
    fontFamily: "Poppins",
  },
  input: {
    width: "100%",
    outline: "none",
    background: "transparent",
    padding: "8px 10px",
    fontSize: "16px",
    fontFamily: "Poppins",
    boxShadow: "none !important",
    borderWidth: "2px",
    borderStyle: "solid",
    borderImage: `linear-gradient( to right, ${theme.palette.primary.color}, ${theme.palette.secondary.main}, ${theme.palette.primary.color}) 1 round`,
    "&:focus": {
      borderImage: `linear-gradient( to right, ${theme.palette.secondary.main}, ${theme.palette.primary.color}, ${theme.palette.secondary.main}) 1 round`,
    },
  },
  formInputContainer: {
    padding: "8px 20px",
  },
}));

const FormInput = (props) => {
  const classes = useStyles();
  return (
    <Grid item lg={6} xs={12} className={classes.formInputContainer}>
      <Typography variant="h5" className={classes.inputLabel}>
        {props.label}
      </Typography>
      <Input
        name={props.id}
        type={props.type}
        placeholder=""
        className={classes.inputBox}
        classes={{ input: classes.input }}
        disableUnderline
      />
    </Grid>
  );
};

export default FormInput;
