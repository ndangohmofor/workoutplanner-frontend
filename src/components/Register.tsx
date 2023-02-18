import React from "react";
import Button from "react-bootstrap/Button";

import axios from "axios";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: any): void => {
    //e.preventDefault();
    console.log(`${process.env.REACT_APP_BACKEND_URL}`);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/${process.env.REACT_APP_REGISTER_ENDPOINT}`,
        data
      )
      .then((res) => res)
      .catch((err) => err);
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        <div className="formInput form-group">
          <input
            className="form-control"
            {...register("userName", {
              required:
                "Username should be 5 - 15 characters and should include one special character!",
              minLength: {
                value: 5,
                message: "Minimum length should be 5 characters",
              },
              maxLength: {
                value: 15,
                message: "Maximum length should be 15 characters",
              },
            })}
            placeholder="USer Name"
          />
          <p>{errors.userName?.message}</p>
        </div>
        <div className="formInput form-group">
          <input
            className="form-control"
            {...register("email", {
              required: "Provide a valid email address",
            })}
            type="email"
            placeholder="Email"
          />
          <p>{errors?.email?.message}</p>
        </div>
        <div className="formInput form-group">
          <input
            className="form-control"
            {...register("password", {
              required:
                "Password should be between 8 - 20 characters and include at least 1 letter, 1 number and 1 spcial character.",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters",
              },
              maxLength: {
                value: 20,
                message: "Password should not be more than 20 characters",
              },
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
                message:
                  "Include at least 1 letter, 1 number and 1 spcial character.",
              },
            })}
            type="password"
            placeholder="Password"
          />
          <p>{errors?.password?.message}</p>
        </div>
        <div className="formInput form-group">
          <input
            className="form-control"
            {...register("confirmPassword", {
              required: "Passwords must match",
              validate: (value: string) => {
                if (watch("password") !== value) {
                  return "Passwords do not match";
                }
              },
            })}
            type="password"
            placeholder="Confirm Password"
          />
          <p>{errors?.confirmPassword?.message}</p>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
export default Register;
