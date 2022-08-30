import React from "react";
import { FormLabel, makeStyles } from "@material-ui/core";
import { formDataType, ErrorType } from "../Homepage";
import MyInputField from "../MyInputField";
import { MoreHoriz } from "@mui/icons-material";

type DemoFormProps = {
  data: formDataType;
  setData: React.Dispatch<React.SetStateAction<formDataType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles({
  form: {
    border: "1px solid black",
    margin: "0px 10px",
  },
  formGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    padding: "5px 0px",
    alignItems: "center",
  },
  FormLeftLevel: {
    gridColumn: "1/3",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    width: "120px",
    textAlign: "right",
    marginLeft: "10px",
  },
  inputField: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "3/5",
    height: "25px",
  },
  borderButton: {
    border: "1px solid black",
    borderRadius: "50px",
    gridColumn: "8/9",
    marginRight: "50px",
    "&.css-i4bv87-MuiSvgIcon-root": {
      height: "18px",
      width: "18px",
    },
  },
  errorMessage: {
    Color: "red",
    padding: "10px",
  },
});

const BlackInformationAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <MyInputField
            labelText="black information"
            labelClass={classes.FormLeftLevel}
            name="blackInformation"
            width="110px"
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.blackInformation}
            error={Boolean(props.errors.blackInformation)}
          />
        </div>

        <div className={classes.formGroup}>
          <FormLabel className={classes.FormLeftLevel}>
            black information note
          </FormLabel>
          <MoreHoriz className={classes.borderButton} />
        </div>
      </form>
    </React.Fragment>
  );
};

export default BlackInformationAdd;
