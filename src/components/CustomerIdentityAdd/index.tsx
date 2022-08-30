import React from "react";
import { FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, Typography} from "@material-ui/core";
import { formDataType, ErrorType } from "../Homepage";

type DemoFormProps = {
  data: formDataType;
  setData: React.Dispatch<React.SetStateAction<formDataType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
};

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "0px 10px",
  },
  formGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    padding: "5px 0px",
  },
  FormLeftLevel: {
    gridColumn: "1/3",
    color: "black",
    paddingTop: "30px",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  FormMiddleLevel: {
    gridColumn: "4/6",
    paddingTop: "30px",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  FormRightLevel: {
    gridColumn: "7/9",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    "&.MuiTypography-body1": {
      fontSize: theme.spacing(1.2),
    },
  },

  errorMessage: {
    Color: "red",
    padding: "10px",
  },
}));

const CustomerIdentityAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();

  // ============================== Methods =========================

  /** 
       This Method for get all change on the Input Field
      */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    props.setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    props.setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <React.Fragment>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <FormLabel className={classes.FormLeftLevel}>
            Customer code:
          </FormLabel>

          <FormLabel className={classes.FormMiddleLevel}>
            Online Customer ID:
          </FormLabel>
          <RadioGroup
            name="customerType"
            onChange={handleChange}
            defaultValue="personal"
            className={classes.FormRightLevel}
          >
            <FormControlLabel
              value="personal"
              control={<Radio size="small" color="primary" />}
              label={
                <Typography style={{ fontSize: "12px" }}>personal</Typography>
              }
            />
            <FormControlLabel
              value="Corporation"
              control={<Radio size="small" color="primary" />}
              label={
                <Typography style={{ fontSize: "12px" }}>
                  Corporation
                </Typography>
              }
            />
          </RadioGroup>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CustomerIdentityAdd;
