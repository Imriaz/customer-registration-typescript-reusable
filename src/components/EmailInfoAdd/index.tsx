import React from "react";
import { FormLabel, makeStyles, TextField } from "@material-ui/core";
import { formDataType, ErrorType } from "../Homepage";
import MyInputField from "../MyInputField";

type DemoFormProps = {
  data: formDataType;
  setData: React.Dispatch<React.SetStateAction<formDataType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles({
  form: {
    backgroundColor: "#D0FFBA",
    margin: "0px 10px",
    padding: "10px 10px",
  },
  formGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    padding: "5px 0px",
    alignItems: "center",
  },
  FormLeftLevel: {
    gridColumn: "1/2",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    marginTop: "-6px",
    width: "90px",
    textAlign: "right",
    paddingRight: "10px",
  },
  inputField: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/8",
    height: "25px",
    marginBottom: "6px",
    "& .MuiFormHelperText-root": {
      marginTop: "-6px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  inputFieldRemarks: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "10px",
    gridColumn: "2/8",
    height: "45px",
    marginBottom: "6px",
    "& .MuiFormHelperText-root": {
      marginTop: "16px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  errorMessage: {
    Color: "red",
    padding: "10px",
  },
});

const EmailInfoAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <React.Fragment>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <FormLabel className={classes.FormLeftLevel}>Email 1</FormLabel>
          <TextField
            name="email1"
            className={classes.inputField}
            required={true}
            InputProps={{
              disableUnderline: true,
              style: { fontSize: "12px", padding: "0px 10px" },
            }}
            helperText={props.errors.email1}
            error={Boolean(props.errors.email1)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.value.match(emailRegex)) {
                props.handleChange(event);
              }
            }}
          />
        </div>
        <div className={classes.formGroup}>
          <MyInputField
            labelText="Email 2"
            labelClass={classes.FormLeftLevel}
            name="email2"
            value={props.data.email2}
            required={true}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.email2}
            error={Boolean(props.errors.email2)}
          />
        </div>
        <div className={classes.formGroup}>
          <MyInputField
            labelText="Email 3"
            labelClass={classes.FormLeftLevel}
            name="email3"
            value={props.data.email3}
            required={true}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.email3}
            error={Boolean(props.errors.email3)}
          />
        </div>
        <div className={classes.formGroup}>
          <MyInputField
            labelText="Remarks"
            labelClass={classes.FormLeftLevel}
            name="remarks"
            value={props.data.remarks}
            required={true}
            textFieldClass={classes.inputFieldRemarks}
            handleChange={props.handleChange}
            helperText={props.errors.remarks}
            error={Boolean(props.errors.remarks)}
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default EmailInfoAdd;
