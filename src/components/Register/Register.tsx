import React from "react";
import Button from "react-bootstrap/Button";

import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../Login/login.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      username: "",
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  console.log(`${process.env.REACT_APP_BACKEND_URL}`);
  const onSubmit = (data: any): void => {
    //e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/${process.env.REACT_APP_REGISTER_ENDPOINT}`,
        data
      )
      .then((res) => res)
      .catch((err) => err);
  };

  return (
    <div className="register template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center">Register</h3>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              {...register("username", {
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
              placeholder="User Name"
            />
            <p>{errors.username?.message}</p>
          </div>
          <div className="mb-2">
            <label htmlFor="fname">First Name</label>
            <input
              className="form-control"
              {...register("fname", {
                required: "First name is required!",
              })}
              placeholder="First Name"
            />
            <p>{errors.username?.message}</p>
          </div>
          <div className="mb-2">
            <label htmlFor="lname">Last Name</label>
            <input
              className="form-control"
              {...register("lname", {
                required: "Last name is required!",
              })}
              placeholder="Last Name"
            />
            <p>{errors.username?.message}</p>
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
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
          <div className="mb-2">
            <label htmlFor="password">Password</label>
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
          <div className="mb-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
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
          <p className="text-end mt-2">
            Already Registered?{" "}
            <Link to="/login" className="ms-2">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
