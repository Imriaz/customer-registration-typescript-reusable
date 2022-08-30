import { FormLabel, TextField } from "@material-ui/core";
import React from "react";

type MyInputFieldProps = {
  labelText: string;
  labelClass: string;
  name: string;
  value?: string;
  width?: string;
  helperText: string;
  error: boolean;
  required: boolean;
  textFieldClass: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const MyInputField: React.FC<MyInputFieldProps> = (props) => {
  const {
    labelText,
    labelClass,
    name,
    value,
    width,
    required,
    error,
    helperText,
    textFieldClass,
    handleChange,
  } = props;

  return (
    <React.Fragment>
      <FormLabel className={labelClass}>{labelText}</FormLabel>
      <TextField
        name={name}
        value={value}
        required={required}
        InputProps={{
          disableUnderline: true,
          style: { fontSize: "12px", padding: "0px 10px" },
        }}
        style={{ width: width }}
        className={textFieldClass}
        onChange={handleChange}
        helperText={helperText}
        error={error}
      />
    </React.Fragment>
  );
};

export default MyInputField;
