import React, { ChangeEvent, useState } from "react";
import "./formInput.css";

const FormInput = (props: {
  [x: string]: any;
  name?: any;
  label?: any;
  errorMessage?: any;
  onChange?: any;
  id?: any;
}) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
