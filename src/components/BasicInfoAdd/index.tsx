import React from "react";
import { FormLabel, makeStyles, TextField } from "@material-ui/core";
import { formDataType, ErrorType } from "../Homepage";
import SearchIcon from "@mui/icons-material/Search";
import MyInputField from "../MyInputField";

type DemoFormProps = {
  data: formDataType;
  setData: React.Dispatch<React.SetStateAction<formDataType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles((theme) => ({
  form: {
    backgroundColor: "#CBFFF8",
    margin: "0px 10px",
    padding: "0px 10px",
  },
  formGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    padding: "5px 0px",
    alignItems: "center",
  },
  inputField: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/4",
    height: "25px",
    marginBottom: "6px",
    "& .MuiFormHelperText-root": {
      marginTop: "-6px",
      marginLeft: "5px",
      fontSize: "11px",
    },
  },
  inputFieldPrefectures: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/3",
    height: "25px",
    marginBottom: "6px",
    "& .MuiFormHelperText-root": {
      marginTop: "-6px",
      marginLeft: "5px",
      fontSize: "11px",
    },
  },
  inputFieldRight: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "7/9",
    height: "25px",
    marginBottom: "6px",
    "& .MuiFormHelperText-root": {
      marginTop: "-6px",
      marginLeft: "5px",
      fontSize: "11px",
    },
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
  FormTitleLevel: {
    gridColumn: "4/5",
    color: "black",
    marginTop: "-6px",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    textAlign: "right",
    paddingRight: "10px",
  },
  FormRightLevel: {
    gridColumn: "6/7",
    color: "black",
    marginTop: "-6px",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    width: "80px",
    textAlign: "right",
    paddingRight: "10px",
  },
  titleField: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "5/6",
    height: "25px",
    marginBottom: "6px",
    "& .MuiFormHelperText-root": {
      marginTop: "-4px",
      marginLeft: "5px",
      fontSize: "11px",
    },
  },
  borderButton: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    marginTop: "-6px",
    marginLeft: "10px",

    "&.css-i4bv87-MuiSvgIcon-root": {
      height: "18px",
      width: "18px",
    },
  },
  errorMessage: {
    Color: "red",
    padding: "10px",
  },
}));

const BasicInfoAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();
  const phoneNoRegex = "^[0-9-]+$|^$";

  return (
    <React.Fragment>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <FormLabel className={classes.FormLeftLevel}>Phone number</FormLabel>
          <TextField
            name="phoneNo"
            value={props.data.phoneNo}
            required={true}
            InputProps={{
              disableUnderline: true,
              style: { fontSize: "12px", padding: "0px 10px" },
            }}
            className={classes.inputField}
            helperText={props.errors.phoneNo}
            error={Boolean(props.errors.phoneNo)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.value.match(phoneNoRegex)) {
                props.errors.phoneNo = "";
                props.handleChange(event);
              } else {
                props.errors.phoneNo = "Please enter a valid phone number";
              }
            }}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputField
            labelText="Your name"
            labelClass={classes.FormLeftLevel}
            name="firstName"
            value={props.data.firstName}
            required={true}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.firstName}
            error={Boolean(props.errors.firstName)}
          />
          <MyInputField
            labelText="title"
            labelClass={classes.FormTitleLevel}
            name="lastName"
            value={props.data.lastName}
            required={true}
            textFieldClass={classes.titleField}
            handleChange={props.handleChange}
            helperText={props.errors.lastName}
            error={Boolean(props.errors.lastName)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputField
            labelText="Furigana"
            labelClass={classes.FormLeftLevel}
            name="furigana"
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.furigana}
            error={Boolean(props.errors.furigana)}
          />
        </div>
        <div className={classes.formGroup}>
          <FormLabel className={classes.FormLeftLevel}>T</FormLabel>
          <TextField
            name="postalCode"
            value={props.data.postalCode}
            required={false}
            InputProps={{
              disableUnderline: true,
              style: { fontSize: "12px", padding: "0px 10px" },
            }}
            className={classes.inputField}
            helperText={props.errors.postalCode}
            error={Boolean(props.errors.postalCode)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.value.match(phoneNoRegex)) {
                props.handleChange(event);
              }
            }}
          />
          <SearchIcon className={classes.borderButton} />
          <MyInputField
            labelText="sort code"
            labelClass={classes.FormRightLevel}
            name="sortCode"
            required={true}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.sortCode}
            error={Boolean(props.errors.sortCode)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputField
            labelText="Prefectures"
            labelClass={classes.FormLeftLevel}
            name="prefectures"
            required={false}
            textFieldClass={classes.inputFieldPrefectures}
            handleChange={props.handleChange}
            helperText={props.errors.prefectures}
            error={Boolean(props.errors.prefectures)}
          />
          <MyInputField
            labelText="service level"
            labelClass={classes.FormRightLevel}
            name="serviceLevel"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.serviceLevel}
            error={Boolean(props.errors.serviceLevel)}
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default BasicInfoAdd;
