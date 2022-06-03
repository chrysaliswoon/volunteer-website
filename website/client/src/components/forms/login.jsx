import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


export default function LoginForm() {
  const mesageNotFound = "User not found";
  const messageWrongPassword = "Invalid login credentials"
  const success = "Logged in successfully!"
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");
  const LoginAlert = withReactContent(Swal);

  const {
    register,
    formState: { errors },
  } = useForm();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const user = {
      email: email,
      password: password,
    }
    const URL = "http://localhost:3300/api/login";
    // console.log(data);

    fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then((res) => res.json())
    .then((data) => {
        // console.log("Success", data);
        if (data.msg == mesageNotFound) {
          LoginAlert.fire({
            title: mesageNotFound,
            footer: "Please register for an account",
          });
          setToken(data.accessToken);
          navigate("/register");
        } else if (data.msg == messageWrongPassword) {
          LoginAlert.fire({
            title: messageWrongPassword,
            footer: "Please check your login credentials",
          });
          navigate("/login");
        } else {
          LoginAlert.fire({
            title: success,
            footer: "Welcome back!",
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
      <div>
        <div className="text-center my-6">
          <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
          <p className="text-gray-500">Sign in to access your account</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="w-full max-w-xs py-5 m-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="input input-bordered max-w-xs w-full px-3 py-2"
              type="email"
              name="email"
              id="email"
              {...register("email", {
                required: true,
              })}
            />
            {errors?.email?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className="w-full max-w-xs py-5 m-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="input input-bordered max-w-xs w-full px-3 py-2"
              type="password"
              name="password"
              id="password"
              {...register("password", {
                required: true,
              })}
            />
            {errors?.password?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <button
            className="btn btn-outline btn-primary items-center w-full py-5 m-6"
            type="submit"
            name="submit"
            id="submit"
            description="Submit"
          >
            Submit
          </button>
          <p className="text-sm text-center text-gray-400 ">
            Don&#x27;t have an account yet?
            <Link
              to="/register"
              className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
            > Sign Up</Link>
          </p>
        </form>
      </div>
  );
}
