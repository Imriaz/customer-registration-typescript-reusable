import React from "react";
import { makeStyles } from "@material-ui/core";
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
    backgroundColor: "#CBFFF8",
    margin: "0px 10px",
    padding: "5px 10px",
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
  FormRightLevel: {
    gridColumn: "6/7",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    marginTop: "-6px",
    width: "80px",
    textAlign: "right",
    marginLeft: "-20px",
    paddingRight: "10px",
  },
  inputField: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/5",
    height: "25px",
    marginBottom: "6px",
    "& .MuiFormHelperText-root": {
      marginTop: "-4px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  inputFieldLarge: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/6",
    height: "25px",
    marginBottom: "6px",
    "& .MuiFormHelperText-root": {
      marginTop: "-6px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  inputFieldRight: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "7/9",
    height: "25px",
    marginLeft: "8px",
    marginBottom: "6px",
    "& .MuiFormHelperText-root": {
      marginTop: "-6px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  errorMessage: {
    Color: "red",
    padding: "10px",
  },
});

const ContactInfoAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <MyInputField
            labelText="Address line 1"
            labelClass={classes.FormLeftLevel}
            name="address1"
            value={props.data.address1}
            required={true}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.address1}
            error={Boolean(props.errors.address1)}
          />
          <MyInputField
            labelText="group code"
            labelClass={classes.FormRightLevel}
            name="groupCode"
            required={true}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.groupCode}
            error={Boolean(props.errors.groupCode)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputField
            labelText="Address 2"
            labelClass={classes.FormLeftLevel}
            name="address2"
            value={props.data.address2}
            required={true}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.address2}
            error={Boolean(props.errors.address2)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputField
            labelText="Address 3"
            labelClass={classes.FormLeftLevel}
            name="address3"
            value={props.data.address3}
            required={true}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.address3}
            error={Boolean(props.errors.address3)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputField
            labelText="Address 4"
            labelClass={classes.FormLeftLevel}
            name="address4"
            value={props.data.address4}
            required={true}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.address4}
            error={Boolean(props.errors.address4)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputField
            labelText="Company Name"
            labelClass={classes.FormLeftLevel}
            name="company"
            value={props.data.company}
            required={true}
            textFieldClass={classes.inputFieldLarge}
            handleChange={props.handleChange}
            helperText={props.errors.company}
            error={Boolean(props.errors.company)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputField
            labelText="Department name"
            labelClass={classes.FormLeftLevel}
            name="departmentName"
            value={props.data.departmentName}
            required={true}
            textFieldClass={classes.inputFieldLarge}
            handleChange={props.handleChange}
            helperText={props.errors.departmentName}
            error={Boolean(props.errors.departmentName)}
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default ContactInfoAdd;
