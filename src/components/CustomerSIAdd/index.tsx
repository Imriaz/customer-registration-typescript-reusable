import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { formDataType } from "../Homepage";
import { ErrorType } from "../Homepage";
import SearchIcon from "@mui/icons-material/Search";
import { MoreHoriz } from "@mui/icons-material";
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
    border: "1px solid black",
    padding: "5px",
    margin: "10px",
  },
  formGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(9, 1fr)",
    padding: "0px 25px 0px 5px",
    gap: "5px",
    alignItems: "center",
  },
  inputField: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/4",
    height: "25px",
    marginBottom: "5px",
    "& .MuiFormHelperText-root": {
      marginTop: "-9px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  inputFieldLeftLarge: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/5",
    height: "25px",
    marginBottom: "5px",
    "& .MuiFormHelperText-root": {
      marginTop: "-9px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  inputFieldRight: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "6/8",
    height: "25px",
    marginBottom: "5px",
    "& .MuiFormHelperText-root": {
      marginTop: "-9px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  inputFieldRightLarge: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "6/9",
    height: "25px",
    marginBottom: "5px",
    "& .MuiFormHelperText-root": {
      marginTop: "-9px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  FormLeftLevel: {
    gridColumn: "1/2",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    marginTop: "-6px",
    width: "110px",
    textAlign: "right",
  },
  FormTitleLevel: {
    gridColumn: "1/5",
    textAlign: "left",
    fontWeight: "bold",
    color: "black",
    marginTop: "-6px",
    fontSize: "12px",
  },
  FormRightLevel: {
    gridColumn: "5/6",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    marginTop: "-6px",
    width: "110px",
    textAlign: "right",
  },
  RejectionTitleLevel: {
    gridColumn: "1/5",
    textAlign: "left",
    fontWeight: "bold",
    color: "black",
    marginTop: "-6px",
    fontSize: "12px",
  },
  paper: {
    position: "absolute",
    width: 150,
    backgroundColor: "#D0D3D4",
    border: "2px solid #000",
    padding: "30px 80px",
  },
  noneLevel: {
    gridColumn: "2/3",
    color: "black",
    marginTop: "-6px",
    fontSize: "12px",
  },
  borderButton: {
    border: "1px solid black",
    borderRadius: "50px",
    marginTop: "-6px",
    "&.css-i4bv87-MuiSvgIcon-root": {
      height: "18px",
      width: "18px",
    },
  },
  moreButtonDiscount: {
    border: "1px solid black",
    borderRadius: "50px",
    marginTop: "-6px",
    gridColumn: "9/10",
    "&.css-i4bv87-MuiSvgIcon-root": {
      height: "18px",
      width: "18px",
    },
  },
  radioButtonGroup: {
    gridColumn: "6/8",
    fontSize: "12px",
    "& .MuiFormGroup-root": {
      flexWrap: "noWrap",
      flexDirection: "row",
    },
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  inputCheckbox1: {
    gridColumn: "1/2",
    width: "120px",
    "&.MuiFormControlLabel-root": {
      marginLeft: "-5px",
      marginRight: "0px",
    },
  },
  inputCheckbox2: {
    gridColumn: "2/6",
    "&.MuiFormControlLabel-root": {
      marginLeft: "-5px",
      marginRight: "0px",
    },
  },
  checkboxTitle: {
    fontSize: "12px",
    marginLeft: "-5px",
  },
  CallCenterLevel: {
    gridColumn: "2/4",
    color: "black",
    textAlign: "left",
    fontSize: "12px",
  },
  firstStoreLevel: {
    gridColumn: "1/2",
    color: "black",
    textAlign: "left",
    fontSize: "12px",
  },
  RegDateLevel: {
    gridColumn: "5/8",
    color: "black",
    textAlign: "left",
    fontSize: "12px",
  },
  errorMessage: {
    Color: "red",
    padding: "10px",
  },
});

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const CustomerSIAdd: React.FC<DemoFormProps> = (props) => {
  const discountRegex = "^([0-9]+.?[0-9]*|.[0-9]+)$";

  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [gender, setGender] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleGenderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setData((prev) => {
      return {
        ...prev,
        gender: gender,
      };
    });
    handleClose();
  };

  const formatYmd = (date: Date) => date.toISOString().slice(0, 10);

  return (
    <React.Fragment>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <FormLabel className={classes.FormTitleLevel}>
            Customer Supplementary Information
          </FormLabel>
          <MyInputField
            labelText="requester"
            labelClass={classes.FormRightLevel}
            name="requester"
            required={false}
            width="110px"
            textFieldClass={classes.inputFieldRightLarge}
            handleChange={props.handleChange}
            helperText={props.errors.requester}
            error={Boolean(props.errors.requester)}
          />
          <SearchIcon className={classes.borderButton} />
          <MyInputField
            labelText="region code"
            labelClass={classes.FormLeftLevel}
            name="regionCode"
            width="100px"
            required={false}
            textFieldClass={classes.inputFieldLeftLarge}
            handleChange={props.handleChange}
            helperText={props.errors.regionCode}
            error={Boolean(props.errors.regionCode)}
          />
          <FormLabel className={classes.FormRightLevel}>receipt</FormLabel>
          <div className={classes.radioButtonGroup}>
            <RadioGroup name="customerType" onChange={props.handleChange}>
              <FormControlLabel
                value="requirement"
                control={
                  <Radio
                    size="small"
                    color="primary"
                    style={{ marginTop: "-6px" }}
                  />
                }
                label={
                  <Typography style={{ fontSize: "12px", marginTop: "-6px" }}>
                    requirement
                  </Typography>
                }
              />
              <FormControlLabel
                value="notRequirement"
                control={
                  <Radio
                    size="small"
                    color="primary"
                    style={{ marginTop: "-6px" }}
                  />
                }
                label={
                  <Typography style={{ fontSize: "12px" }}>
                    don't want
                  </Typography>
                }
              />
            </RadioGroup>
          </div>
          <FormLabel className={classes.FormLeftLevel}>Gender</FormLabel>
          <button
            className={classes.inputField}
            style={{ width: "70px", height: "25px" }}
            type="button"
            onClick={handleOpen}
          >
            <MoreHoriz />
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div style={modalStyle} className={classes.paper}>
              <form onSubmit={handleGenderSubmit}>
                <button style={{ marginLeft: "180px" }} onClick={handleClose}>
                  X
                </button>
                <FormControl>
                  <FormLabel style={{ color: "black", fontWeight: "bold" }}>
                    Select an option:
                  </FormLabel>
                  <RadioGroup aria-label="gender" name="gender">
                    <FormControlLabel
                      value="Male"
                      control={
                        <Radio
                          size="small"
                          color="primary"
                          onChange={(e) => setGender(e.target.value)}
                        />
                      }
                      label={<Typography>Male</Typography>}
                    />
                    <FormControlLabel
                      value="Female"
                      control={
                        <Radio
                          size="small"
                          color="primary"
                          onChange={(e) => setGender(e.target.value)}
                        />
                      }
                      label={<Typography>Female</Typography>}
                    />
                    <FormControlLabel
                      value="Others"
                      control={
                        <Radio
                          size="small"
                          color="primary"
                          onChange={(e) => setGender(e.target.value)}
                        />
                      }
                      label={<Typography>Others</Typography>}
                    />
                  </RadioGroup>
                </FormControl>
                <button
                  style={{ width: "80px", margin: "10px 30px" }}
                  type="submit"
                >
                  Confirm
                </button>
              </form>
            </div>
          </Modal>
          <Typography style={{ textAlign: "left", fontSize: "12px" }}>
            {props.data.gender}
          </Typography>
          <MyInputField
            labelText="Receipt address"
            labelClass={classes.FormRightLevel}
            name="receiptAddress"
            width="110px"
            required={false}
            textFieldClass={classes.inputFieldRightLarge}
            handleChange={props.handleChange}
            helperText={props.errors.receiptAddress}
            error={Boolean(props.errors.receiptAddress)}
          />
          <MyInputField
            labelText="Age"
            labelClass={classes.FormLeftLevel}
            name="age"
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.age}
            error={Boolean(props.errors.age)}
          />
          <FormLabel className={classes.FormRightLevel}>
            Discount rate
          </FormLabel>
          <TextField
            name="discountRate"
            value={props.data.discountRate}
            required={false}
            style={{ width: "70px" }}
            InputProps={{
              disableUnderline: true,
              style: { fontSize: "12px", padding: "0px 10px" },
            }}
            className={classes.inputFieldRight}
            helperText={props.errors.discountRate}
            error={Boolean(props.errors.discountRate)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.value.match(discountRegex)) {
                props.handleChange(event);
              }
            }}
          />
          <Typography style={{ textAlign: "left", fontSize: "14px" }}>
            %
          </Typography>
          <MyInputField
            labelText="Customer factor"
            labelClass={classes.FormLeftLevel}
            name="customerFactor"
            width={"70px"}
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.customerFactor}
            error={Boolean(props.errors.customerFactor)}
          />
          <FormLabel className={classes.FormRightLevel}>
            Discount rate memo
          </FormLabel>
          <MoreHoriz className={classes.moreButtonDiscount} />
          <MyInputField
            labelText="Classification code"
            labelClass={classes.FormLeftLevel}
            name="classificationCode"
            width={"70px"}
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.classificationCode}
            error={Boolean(props.errors.classificationCode)}
          />
          <MyInputField
            labelText="Urge to distinguish"
            labelClass={classes.FormRightLevel}
            name="distinguish"
            width="70px"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.distinguish}
            error={Boolean(props.errors.distinguish)}
          />
          <MyInputField
            labelText="Order category"
            labelClass={classes.FormLeftLevel}
            name="orderCategory"
            width={"70px"}
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.orderCategory}
            error={Boolean(props.errors.orderCategory)}
          />
          <MyInputField
            labelText="Closing date classification"
            labelClass={classes.FormRightLevel}
            name="closingDate"
            width="70px"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.closingDate}
            error={Boolean(props.errors.closingDate)}
          />
          <MyInputField
            labelText="Collection method"
            labelClass={classes.FormLeftLevel}
            name="collectionMethod"
            width={"70px"}
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.collectionMethod}
            error={Boolean(props.errors.collectionMethod)}
          />
          <MyInputField
            labelText="Customer generic 1"
            labelClass={classes.FormRightLevel}
            name="customerGen1"
            width="70px"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.customerGen1}
            error={Boolean(props.errors.customerGen1)}
          />
          <MyInputField
            labelText="Last store CD"
            labelClass={classes.FormLeftLevel}
            name="lastStoreCD"
            width={"70px"}
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.lastStoreCD}
            error={Boolean(props.errors.lastStoreCD)}
          />
          <MyInputField
            labelText="Customer generic 2"
            labelClass={classes.FormRightLevel}
            name="customerGen2"
            width="70px"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.customerGen2}
            error={Boolean(props.errors.customerGen2)}
          />
          <MyInputField
            labelText="customer rank"
            labelClass={classes.FormLeftLevel}
            name="customerRank"
            width={"70px"}
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.customerRank}
            error={Boolean(props.errors.customerRank)}
          />
          <MyInputField
            labelText="Customer generic 3"
            labelClass={classes.FormRightLevel}
            name="customerGen3"
            width="70px"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.customerGen3}
            error={Boolean(props.errors.customerGen3)}
          />
          <FormLabel className={classes.FormLeftLevel}>
            credit registration
          </FormLabel>
          <FormLabel className={classes.noneLevel}>none</FormLabel>
          <MoreHoriz className={classes.borderButton} />
          <MyInputField
            labelText="Customer generic 4"
            labelClass={classes.FormRightLevel}
            name="customerGen4"
            width="70px"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.customerGen4}
            error={Boolean(props.errors.customerGen4)}
          />

          <FormLabel className={classes.RejectionTitleLevel}>
            Rejection management
          </FormLabel>
          <MyInputField
            labelText="Customer generic 5"
            labelClass={classes.FormRightLevel}
            name="customerGen5"
            width="70px"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.customerGen5}
            error={Boolean(props.errors.customerGen5)}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={props.handleChange}
                color="primary"
                value="do not send DM"
                name="doNotSDM"
                size="small"
              />
            }
            className={classes.inputCheckbox1}
            label={
              <Typography className={classes.checkboxTitle}>
                do not send DM
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={props.handleChange}
                color="primary"
                value="do not issue a purchase order"
                name="doNotIPO"
                size="small"
              />
            }
            className={classes.inputCheckbox2}
            label={
              <Typography className={classes.checkboxTitle}>
                do not issue a purchase order
              </Typography>
            }
          />
          <FormLabel className={classes.firstStoreLevel}>
            First store CD
          </FormLabel>
          <FormLabel className={classes.CallCenterLevel}>call center</FormLabel>
          <FormLabel className={classes.RegDateLevel}>
            registration date {formatYmd(new Date())}
          </FormLabel>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CustomerSIAdd;
