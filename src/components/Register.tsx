import React, { SyntheticEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import {
  registration,
  registrationFormInputs,
} from "../interfaces/registration";
import FormInput from "./FormInput";
import axios from "axios";

const Register = () => {
  const [values, setValues] = useState<registration>({
    username: "",
    email: "",
    role: "user",
    password: "",
    confirmPassword: "",
  });

  const inputs: registrationFormInputs[] = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 5 - 15 characters and should include one special character!",
      label: "Username",
      pattern: "^[a-zA-z0-9]{5,15}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "This should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be between 8 - 20 characters and include at least 1 letter, 1 number and 1 spcial character.",
      label: "Password",
      pattern:
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords do not match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/${process.env.REACT_APP_REGISTER_ENDPOINT}`,
        values
      )
      .then((res) => res)
      .catch((err) => err);
  };

  const onChange = (e: { target: { name: any; value: any } }): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name as keyof registration]}
            onChange={onChange}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
export default Register;
