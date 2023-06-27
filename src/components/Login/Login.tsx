import { Link } from "react-router-dom";
import "./login.css";
import { useForm } from "react-hook-form";
import axios from "axios";

type LoginType = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginType): void => {
    console.log(data);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/${process.env.REACT_APP_LOGIN_ENDPOINT}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control"
              {...register("username", {
                required: "Username is required",
                setValueAs: (value) => value.trim(),
              })}
              name="username"
            />
            <p>{errors.username?.message}</p>
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              {...register("password", {
                required: "Password is required",
                setValueAs: (value) => value.trim(),
              })}
              name="password"
            />
            <p>{errors.password?.message}</p>
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">
              Sign In
            </button>
          </div>
          <p className="text-end mt-2">
            Forgot <a href="">Password?</a>
            <Link to="/register" className="ms-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
