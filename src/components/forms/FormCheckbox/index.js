import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.color,
  },
  checkBoxWithLabel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
 
  checkboxInput: {
    transform: `scale(1.3)`,
    marginRight: "10px",
  },
  
}));

const FormCheckbox = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.checkBoxWithLabel}>
      <FormControlLabel
        control={
          <Checkbox
            id={props.areaLabel}
            value={props.value}
            inputProps={{ "area-label": props.areaLabel }}
            size={props.size}
            color={props.color}
            className={clsx(
              classes.checkboxInput,
              classes.root,
            )}
          />
        }
        label={props.label}
      />
    </Box>
  );
};
export default FormCheckbox;
